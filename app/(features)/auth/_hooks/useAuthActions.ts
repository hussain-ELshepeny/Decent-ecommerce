import { signIn, signOut } from "next-auth/react"
import { LoginFormType } from "@/app/(features)/auth/_validation/authSchemas"
import { redirect } from "next/navigation"
export function useAuthActions() {
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

    // return { success: true }
    return redirect("/")
  }

  async function logout() {
    await signOut()
  }

  async function googleSignIn() {
    await signIn("google")
    redirect("/")
  }

  return { logout, googleSignIn, credentialsLogin }
}
