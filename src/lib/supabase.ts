import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Helper functions for common database operations
export const profileService = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    return { data, error }
  },

  async createProfile(profile: Database['public']['Tables']['profiles']['Insert']) {
    const { data, error } = await supabase
      .from('profiles')
      .insert(profile)
      .select()
      .single()
    
    return { data, error }
  },

  async updateProfile(userId: string, updates: Database['public']['Tables']['profiles']['Update']) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single()
    
    return { data, error }
  }
}

export const materialsService = {
  async getMaterials(userId?: string) {
    let query = supabase
      .from('materials')
      .select('*')
      .order('created_at', { ascending: false })

    if (userId) {
      query = query.eq('user_id', userId)
    }

    const { data, error } = await query
    return { data, error }
  },

  async createMaterial(material: Database['public']['Tables']['materials']['Insert']) {
    const { data, error } = await supabase
      .from('materials')
      .insert(material)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteMaterial(id: string) {
    const { error } = await supabase
      .from('materials')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

export const tasksService = {
  async getTasks(userId: string) {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId)
      .order('due_date', { ascending: true })
    
    return { data, error }
  },

  async createTask(task: Database['public']['Tables']['tasks']['Insert']) {
    const { data, error } = await supabase
      .from('tasks')
      .insert(task)
      .select()
      .single()
    
    return { data, error }
  },

  async updateTask(id: string, updates: Database['public']['Tables']['tasks']['Update']) {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteTask(id: string) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

export const cbtService = {
  async getCBTPacks(userId?: string) {
    let query = supabase
      .from('cbt_packs')
      .select('*')
      .order('created_at', { ascending: false })

    if (userId) {
      query = query.or(`is_public.eq.true,created_by.eq.${userId}`)
    } else {
      query = query.eq('is_public', true)
    }

    const { data, error } = await query
    return { data, error }
  },

  async getCBTQuestions(packId: string) {
    const { data, error } = await supabase
      .from('cbt_questions')
      .select('*')
      .eq('pack_id', packId)
      .order('created_at', { ascending: true })
    
    return { data, error }
  },

  async createCBTAttempt(attempt: Database['public']['Tables']['cbt_attempts']['Insert']) {
    const { data, error } = await supabase
      .from('cbt_attempts')
      .insert(attempt)
      .select()
      .single()
    
    return { data, error }
  }
}