import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '@/components/form/FormInput'

function DemoForm() {
  const methods = useForm({
    defaultValues: { name: '', email: '', password: '' },
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <FormProvider {...methods}>
        <form className="grid gap-4" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <FormInput
            name="name"
            label="Name"
            placeholder="Your full name"
            rules={{
              required: 'This field is required',
              minLength: { value: 3, message: 'Min 3 chars' },
            }}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            }}
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            rules={{
              required: 'This field is required',
              minLength: { value: 6, message: 'Min 6 chars' },
            }}
          />
          <button type="submit" className="h-10 rounded-md bg-black text-white text-sm px-4">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default function App() {
  return <DemoForm />
}
