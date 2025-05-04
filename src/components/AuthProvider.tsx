// /components/AuthProvider.tsx
"use client"
import { useEffect, useState, createContext, useContext } from "react"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, User } from "firebase/auth"

export const AuthContext = createContext<any>(null)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
    })
    return () => unsub()
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
