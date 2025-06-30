
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    Home,
    Landmark,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarMenuSkeleton,
} from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { useUser } from '@/context/user-context';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { role, isLoaded } = useUser();
    
    if (role === 'landlord' || role === 'tenant') {
         return (
             <div className="flex min-h-screen w-full bg-secondary/50">
                <div className="flex flex-1 flex-col">
                    <DashboardHeader showSidebarTrigger={false} />
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
                </div>
            </div>
        )
    }

    // Navigation for Professionals
    const professionalNav = (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/professional'} tooltip="Dashboard">
                    <Link href="/dashboard/professional"><Home /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );

    const loadingNav = (
        <>
            <SidebarMenuSkeleton showIcon />
        </>
    );

    const getNavForRole = () => {
        if (!isLoaded) return loadingNav;
        switch (role) {
            case 'professional':
                return professionalNav;
            default:
                return loadingNav;
        }
    }


    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-secondary/50">
                <Sidebar>
                    <div className="flex h-16 shrink-0 items-center border-b px-4 bg-background">
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <Landmark className="h-8 w-8 text-primary" />
                            <span className="text-lg font-semibold">Zim TPN</span>
                        </Link>
                    </div>
                    <SidebarContent className="bg-background">
                        <SidebarMenu>
                           {getNavForRole()}
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>
                <div className="flex flex-1 flex-col">
                    <DashboardHeader />
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}
