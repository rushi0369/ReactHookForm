import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormInput({ name, label, type = "text", rules, placeholder }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name]

  return (
    <div className="grid gap-2">
      {label ? (
        <Label htmlFor={name} className={error ? "text-red-600" : ""}>
          {label}
        </Label>
      ) : null}
      <Input id={name} type={type} placeholder={placeholder} {...register(name, rules)} />
      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error.message?.toString?.() ?? "Invalid value"}
        </p>
      ) : null}
    </div>
  )
}


