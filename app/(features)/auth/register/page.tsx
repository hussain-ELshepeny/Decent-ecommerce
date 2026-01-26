import Link from "next/link"
import RegisterForm from "../_components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-heading">Create your account</h2>
        <RegisterForm />
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            href={"/auth/login"}
            className="text-brandDark hover:text-brandGold font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
