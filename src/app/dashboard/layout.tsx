
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    LayoutGrid,
    Landmark,
    MessageSquare,
    Building,
    Wrench,
    FileText,
    FileSignature,
    UserSearch,
    Users,
    CreditCard,
    ShoppingCart,
    Calculator,
    BarChart3,
    Briefcase,
    HelpCircle,
    Gift,
    LogOut,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarMenuSkeleton,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarFooter,
    SidebarSeparator,
} from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { useUser } from '@/context/user-context';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const { role, isLoaded, logout } = useUser();
    
    if (role === 'tenant') {
         return (
             <div className="flex min-h-screen w-full bg-secondary/50">
                <div className="flex flex-1 flex-col">
                    <DashboardHeader showSidebarTrigger={false} />
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
                </div>
            </div>
        )
    }
    
    const handleLogout = () => {
        logout();
        router.push('/');
    }

    const professionalNav = (
        <>
            <SidebarMenuItem>
                <Button variant="secondary" className="w-full justify-start h-auto p-3 mb-2">
                    <div className="flex flex-col items-start">
                        <span>Upgrade</span>
                        <span className="text-xs font-normal text-emerald-500">Save $50</span>
                    </div>
                </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/professional' || pathname === '/dashboard/landlord'} tooltip="Dashboard">
                    <Link href="/dashboard"><LayoutGrid /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/messages')} tooltip="Messages">
                    <Link href="#"><MessageSquare /><span>Messages</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/properties')} tooltip="Properties">
                    <Link href="#"><Building /><span>Properties</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/maintenance')} tooltip="Maintenance">
                    <Link href="#"><Wrench /><span>Maintenance</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/leases')} tooltip="Leases">
                    <Link href="#"><FileText /><span>Leases</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/docs')} tooltip="Docs & E-Sign">
                    <Link href="#"><FileSignature /><span>Docs & E-Sign</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">RENTERS</SidebarGroupLabel>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/leads')} tooltip="Leads">
                        <Link href="#"><UserSearch /><span>Leads</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/applicants')} tooltip="Applicants">
                        <Link href="#"><Users /><span>Applicants</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/tenants')} tooltip="Tenants">
                        <Link href="#"><Users /><span>Tenants</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">FINANCIAL</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/payments')} tooltip="Payments">
                        <Link href="#"><CreditCard /><span>Payments</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/expenses')} tooltip="Expenses">
                        <Link href="#"><ShoppingCart /><span>Expenses</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/accounting')} tooltip="Accounting">
                        <Link href="#"><Calculator /><span>Accounting</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/reports')} tooltip="Reports">
                        <Link href="#"><BarChart3 /><span>Reports</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
            
            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">RESOURCES</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/toolbox')} tooltip="Toolbox">
                        <Link href="#"><Briefcase /><span>Toolbox</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/community')} tooltip="Community">
                        <Link href="#"><Users /><span>Community</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/help')} tooltip="Need Help?">
                        <Link href="#"><HelpCircle /><span>Need Help?</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
        </>
    );

    const landlordNav = professionalNav;

    const loadingNav = (
        <>
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
        </>
    );

    const getNavForRole = () => {
        if (!isLoaded) return loadingNav;
        switch (role) {
            case 'professional':
                return professionalNav;
            case 'landlord':
                return landlordNav;
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
                        <SidebarFooter className="mt-auto">
                            <SidebarSeparator />
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/give')} tooltip="Referral">
                                    <Link href="#"><Gift /><span>Give $25, Get $25</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={handleLogout} tooltip="Log Out">
                                    <LogOut /><span>Log Out</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarFooter>
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
