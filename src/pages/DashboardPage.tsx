import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useUserData } from '@/hooks/useSupabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components'
import { BookOpen, Target, Trophy, Calendar } from 'lucide-react'

const DashboardPage = () => {
  const { user, profile } = useAuth()
  
  const { data: materials, loading: materialsLoading } = useUserData(
    'materials', 
    user?.id,
    { limit: 5, orderBy: { column: 'created_at', ascending: false } }
  )

  const { data: tasks, loading: tasksLoading } = useUserData(
    'tasks',
    user?.id,
    { limit: 5, orderBy: { column: 'due_date', ascending: true } }
  )

  const { data: recentAttempts, loading: attemptsLoading } = useUserData(
    'cbt_attempts',
    user?.id,
    { limit: 3, orderBy: { column: 'completed_at', ascending: false } }
  )

  if (!user) {
    return <div>Please sign in to access your dashboard.</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user.email?.split('@')[0]}!</h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your studies today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile?.total_points || 0}</div>
              <p className="text-xs text-muted-foreground">
                Current streak: {profile?.current_streak || 0} days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Materials</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{materials?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                Study materials uploaded
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tasks?.filter(task => task.status === 'pending').length || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Tasks to complete
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Plan</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{profile?.plan || 'Free'}</div>
              <p className="text-xs text-muted-foreground">
                {profile?.pro_status ? 'Pro member' : 'Upgrade available'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Materials</CardTitle>
              <CardDescription>Your latest study materials</CardDescription>
            </CardHeader>
            <CardContent>
              {materialsLoading ? (
                <p>Loading materials...</p>
              ) : materials && materials.length > 0 ? (
                <div className="space-y-3">
                  {materials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{material.title}</p>
                        <p className="text-sm text-muted-foreground">{material.subject}</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No materials uploaded yet.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>Tasks due soon</CardDescription>
            </CardHeader>
            <CardContent>
              {tasksLoading ? (
                <p>Loading tasks...</p>
              ) : tasks && tasks.length > 0 ? (
                <div className="space-y-3">
                  {tasks.slice(0, 5).map((task) => (
                    <div key={task.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{task.task_text}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {new Date(task.due_date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        task.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        task.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.urgency}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No tasks scheduled.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage