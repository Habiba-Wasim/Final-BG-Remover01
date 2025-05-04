// /lib/usageLimiter.ts
import { db } from "./firebase"
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore"

export async function checkUserLimit(uid: string, tool: string, limit = 10) {
  const ref = doc(db, "usages", uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    await setDoc(ref, { [tool]: 1 })
    return true
  }

  const current = snap.data()?.[tool] || 0
  if (current >= limit) return false

  await updateDoc(ref, { [tool]: increment(1) })
  return true
}
