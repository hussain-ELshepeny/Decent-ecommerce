"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerSchema, RegisterFormType } from "../_validation/authSchemas"
import { startTransition, useActionState, useState } from "react"
import { credentialsRegister } from "../_actions/auth-actions"
import { useFormState } from "react-dom"

export default function RegisterForm() {
  const [state, formAction] = useActionState(credentialsRegister, {
    errors: {},
    message: "",
  })
  // const [error, setError] = useState<string | null>(null)

  // const { register, handleSubmit } = useForm<RegisterFormType>({
  //   resolver: zodResolver(registerSchema),
  // })

  // const onSubmit = (data: RegisterFormType) => {
  //   startTransition(async () => {
  //     const result = await credentialsRegister(data)
  //     console.log(result)
  //     if (result?.message && result?.errors) {
  //       // فشل Validation
  //       setError(result.message)
  //     } else if (result?.message) {
  //       // Email موجود بالفعل
  //       setError(result.message)
  //     }
  //     // إذا لم يكن هناك error، الـRedirect يحدث من Server Action
  //   })
  // }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="signup-name" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="signup-name"
          required
          placeholder="Full Name"
          name="name"
          className="form-input"
        />
        {state?.errors?.name && (
          <p className="form-error">{state?.errors?.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="signup-email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="signup-email"
          required
          placeholder="Email"
          name="email"
          className="form-input"
        />
        {state?.errors?.email && (
          <p className="form-error">{state?.errors?.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="signup-password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="signup-password"
          required
          placeholder="Password"
          name="password"
          className="form-input"
        />
      </div>

      <fieldset className="mt-2">
        <legend className="form-legend">Account Type</legend>
        <div className="flex gap-4">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              value="customer"
              name="accountType"
              defaultChecked
              className="radio-input"
            />
            <span className="text-gray-700">Customer</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              value="vendor"
              name="accountType"
              className="radio-input"
            />
            <span className="text-gray-700">Vendor</span>
          </label>
        </div>
      </fieldset>

      <div>
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </div>
    </form>
  )
}
