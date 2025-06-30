
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
    Activity,
    BarChart3,
    Briefcase,
    Building2,
    ChevronDown,
    FileClock,
    FileText,
    Fingerprint,
    Handshake,
    HelpCircle,
    Home,
    Landmark,
    LayoutDashboard,
    Settings,
    Users,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DashboardHeader } from '@/components/dashboard-header';
import { useUser } from '@/context/user-context';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { role, isLoaded } = useUser();
    
    if (role === 'landlord') {
         return (
             <div className="flex min-h-screen w-full bg-secondary/50">
                <div className="flex flex-1 flex-col">
                    <DashboardHeader showSidebarTrigger={false} />
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
                </div>
            </div>
        )
    }

    // Tenant specific navigation
    const tenantNav = (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/tenant'} tooltip="Dashboard">
                    <Link href="/dashboard/tenant"><Home /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenant-profile')} tooltip="My TPN Profile">
                    <Link href="/dashboard/tenant-profile"><FileText /><span>My TPN Profile</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenant/history')} tooltip="My Rental History">
                    <Link href="/dashboard/tenant/history"><FileClock /><span>My Rental History</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenant/enquiries-log')} tooltip="TPN Enquiries">
                    <Link href="/dashboard/tenant/enquiries-log"><Fingerprint /><span>TPN Enquiries</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenant/dispute')} tooltip="Dispute Data">
                    <Link href="/dashboard/tenant/dispute"><BarChart3 /><span>Dispute Data</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenant/consent')} tooltip="Consent Management">
                    <Link href="/dashboard/tenant/consent"><Handshake /><span>Consent Management</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );

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
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
        </>
    );

    const getNavForRole = () => {
        if (!isLoaded) return loadingNav;
        switch (role) {
            case 'tenant':
                return tenantNav;
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
