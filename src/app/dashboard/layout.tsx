
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
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
    Settings,
    Users,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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
    const [isVendorsOpen, setIsVendorsOpen] = useState(pathname.startsWith('/dashboard/landlord/vendors'));


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

    // Landlord specific navigation
    const landlordNav = (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/landlord'} tooltip="Dashboard">
                    <Link href="/dashboard/landlord"><Home /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/account')} tooltip="My Account">
                    <Link href="/dashboard/landlord/account"><Landmark /><span>My Account</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/properties')} tooltip="Properties">
                    <Link href="/dashboard/landlord/properties"><Building2 /><span>Properties</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/leases')} tooltip="Leases">
                    <Link href="/dashboard/landlord/leases"><FileText /><span>Leases</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <Collapsible asChild open={isVendorsOpen} onOpenChange={setIsVendorsOpen}>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                            className="w-full justify-start pr-2"
                            isActive={pathname.startsWith('/dashboard/landlord/vendors')}
                            tooltip="Vendors"
                        >
                            <Briefcase />
                            <span>Vendors</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent asChild>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={pathname === '/dashboard/landlord/vendors'}>
                                    <Link href="/dashboard/landlord/vendors">Vendors</Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={pathname === '/dashboard/landlord/vendors/bills'}>
                                <Link href="/dashboard/landlord/vendors/bills">Bills</Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
             <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/tenants')} tooltip="Tenants">
                    <Link href="/dashboard/landlord/tenants"><Users /><span>Tenants</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/reports')} tooltip="Reports">
                    <Link href="/dashboard/landlord/reports"><BarChart3 /><span>Reports</span></Link>
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
            case 'landlord':
                return landlordNav;
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
                    <SidebarFooter className="bg-background border-t">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/profile')} tooltip="Settings">
                                    <Link href="/dashboard/profile"><Settings /><span>Settings</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/support')} tooltip="Help">
                                    <Link href="/dashboard/support"><HelpCircle /><span>Help</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <div className="flex flex-1 flex-col">
                    <DashboardHeader />
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}
