"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormType, loginSchema } from "../_validation/authSchemas"
import { useAuthActions } from "../_hooks/useAuthActions"
import { useTransition } from "react"

import GoogleButton from "./GoogleButton"

export default function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const { credentialsLogin } = useAuthActions()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormType) => {
    startTransition(async () => {
      await credentialsLogin(data)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="login-email" className="sr-only">
            Email
          </label>
          <input
            {...register("email")}
            id="login-email"
            type="email"
            placeholder="Email"
            className="form-input"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="login-password" className="sr-only">
            Password
          </label>
          <input
            {...register("password")}
            id="login-password"
            type="password"
            placeholder="Password"
            className="form-input"
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>

        <button disabled={isPending} type="submit" className="form-button">
          Login
        </button>
      </form>
      <div className="mt-4">
        <GoogleButton />
      </div>
    </>
  )
}
