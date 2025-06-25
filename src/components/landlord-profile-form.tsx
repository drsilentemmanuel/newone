"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name or company name is required."),
  propertyDescription: z.string().min(50, "Please provide a detailed description of your properties.").max(2000),
  idealTenantDescription: z.string().min(20, "Please describe your ideal tenant.").max(1000),
});

export type LandlordProfileData = z.infer<typeof formSchema>;

interface LandlordProfileFormProps {
  onProfileUpdate: (data: LandlordProfileData) => void;
}

export function LandlordProfileForm({ onProfileUpdate }: LandlordProfileFormProps) {
  const { toast } = useToast()

  const form = useForm<LandlordProfileData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      propertyDescription: "",
      idealTenantDescription: "",
    },
  })

  function onSubmit(values: LandlordProfileData) {
    onProfileUpdate(values);
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Information</CardTitle>
        <CardDescription>This information will help prospective tenants get to know you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name or Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Doe Properties" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Your Properties</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the properties you manage, including type, location, amenities, and typical rent."
                      className="resize-none"
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide as much detail as possible to attract the right tenants.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="idealTenantDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ideal Tenant</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the qualities you look for in a tenant (e.g., professional, family, non-smoker)."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    This will be used by our AI to find you the best matches.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save Profile & View Insights</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
