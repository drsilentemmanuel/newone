"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/user-context';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const { role } = useUser();
  const router = useRouter();

  useEffect(() => {
    // The user context is currently hardcoded to 'tenant'.
    // This component acts as a router to redirect users from the generic
    // /dashboard path to their role-specific dashboard.
    if (role === 'tenant') {
      router.replace('/dashboard/tenant');
    } else if (role === 'landlord') {
        router.replace('/dashboard/landlord');
    } else if (role === 'professional') {
        router.replace('/dashboard/professional');
    }
    // If no role is found, it will show a loading skeleton.
  }, [role, router]);

  // Display a loading skeleton while the redirection is happening.
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
          <Skeleton className="h-[150px] w-full" />
          <Skeleton className="h-[150px] w-full" />
      </div>
      <Card className="mt-8">
        <CardHeader>
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
            <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardContent } from '@/components/ui/card';
