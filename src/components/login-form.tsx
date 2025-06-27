
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useUser } from "@/context/user-context"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean().default(false).optional(),
})

const mockUsers = {
  "tenant@example.com": { password: "password123", role: 'tenant', userName: 'Jane Tenant', redirect: "/dashboard/tenant" },
  "landlord@example.com": { password: "password123", role: 'landlord', userName: 'John Landlord', redirect: "/dashboard/landlord" },
  "prof@example.com": { password: "password123", role: 'professional', userName: 'Peter Professional', redirect: "/dashboard/professional" },
};


export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const { login } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // This is a mock login action.
    const user = mockUsers[values.email as keyof typeof mockUsers];
    
    setTimeout(() => {
      if (user && user.password === values.password) {
        login({
          role: user.role as 'tenant' | 'landlord' | 'professional',
          userName: user.userName,
          userEmail: values.email
        });
        toast({
            title: "Login Successful",
            description: "Redirecting to your dashboard...",
        })
        router.push(user.redirect)
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
        })
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline text-primary"
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} {...field} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-1 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                />
                </FormControl>
                <div className="space-y-1 leading-none">
                <FormLabel className="font-normal">
                    Remember me
                </FormLabel>
                </div>
            </FormItem>
            )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </form>
    </Form>
  )
}
