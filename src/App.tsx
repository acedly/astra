import { Routes, Route } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { cn } from "@/lib/utils"
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: dark }}
    >
      <div className={cn(
        "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden"
      )}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    </ClerkProvider>
  )
}

export default App