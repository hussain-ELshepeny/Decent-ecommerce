import Link from "next/link"
import LoginForm from "../_components/LoginForm"

export default function page() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-heading">Login</h2>
        <LoginForm />
        <p className="mt-1 text-sm text-gray-600 text-center">
          Continue as a{" "}
          <Link
            href={"/"}
            className="text-brandDark hover:text-brandGold font-medium"
          >
            Guest
          </Link>
        </p>
      </div>
    </div>
  )
}
