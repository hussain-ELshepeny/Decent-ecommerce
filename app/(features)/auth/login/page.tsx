import Link from "next/link"
import LoginForm from "../_components/LoginForm"

export default function page() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-heading">Login</h2>
        <LoginForm />
        <p className="mt-4 text-sm text-gray-600 text-center">
          Do not have an account?{" "}
          <Link
            href={"/auth/register"}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
