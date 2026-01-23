import { signIn, signOut } from "next-auth/react"
import { LoginFormType } from "@/app/(features)/auth/_validation/authSchemas"
import { useRouter } from "next/navigation"

export function useAuthActions() {
  const router = useRouter()
  async function credentialsLogin(formData: LoginFormType) {
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result?.error)
      return { error: result.error }
    }
    router.push("/")
    router.refresh()
    return { success: true }
  }

  async function logout() {
    await signOut()
  }

  async function googleSignIn() {
    await signIn("google", { callbackUrl: "/" })
  }

  return { logout, googleSignIn, credentialsLogin }
}
