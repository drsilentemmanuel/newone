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
  fullName: z.string().min(2, "Full name is required."),
  occupation: z.string().min(2, "Occupation is required."),
  monthlyIncome: z.coerce.number().min(0, "Monthly income must be a positive number."),
  familySize: z.coerce.number().int().min(1, "Family size must be at least 1."),
  personalStatement: z.string().min(50, "Statement must be at least 50 characters.").max(1000),
  landlordPreferences: z.string().min(20, "Please describe your ideal landlord.").max(1000)
});

export type TenantProfileData = z.infer<typeof formSchema>;

interface TenantProfileFormProps {
  onProfileUpdate: (data: TenantProfileData) => void;
}

export function TenantProfileForm({ onProfileUpdate }: TenantProfileFormProps) {
  const { toast } = useToast()

  const form = useForm<TenantProfileData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      occupation: "",
      monthlyIncome: 0,
      familySize: 1,
      personalStatement: "",
      landlordPreferences: "",
    },
  })

  function onSubmit(values: TenantProfileData) {
    onProfileUpdate(values);
    // In a real app, you'd save this to a database.
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Information</CardTitle>
        <CardDescription>This information will be shared with potential landlords and agents.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthlyIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Income (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 2500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="familySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Family Size</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="personalStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Statement</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about yourself, your lifestyle, and what makes you a great tenant."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This helps landlords get to know you better.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="landlordPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ideal Landlord & Property</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the type of property and landlord you are looking for."
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
