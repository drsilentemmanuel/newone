
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    LayoutGrid,
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
    BookOpen,
    Search,
    Settings,
    Store,
    Wallet,
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
import { ZimbabweRentBookLogo } from '@/components/zimbabwe-rent-book-logo';

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

    const landlordNav = (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/landlord'} tooltip="Dashboard">
                    <Link href="/dashboard/landlord"><LayoutGrid /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/rentbook')} tooltip="Rentbook">
                    <Link href="/dashboard/landlord/rentbook"><BookOpen /><span>Rentbook</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/account')} tooltip="My Account">
                    <Link href="/dashboard/landlord/account"><Wallet /><span>My Account</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">Trust Stamp</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/new-enquiry')} tooltip="New Enquiry">
                        <Link href="/dashboard/landlord/new-enquiry"><Search /><span>New Enquiry</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/reports')} tooltip="Reports">
                        <Link href="/dashboard/landlord/reports"><BarChart3 /><span>Reports</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/shop')} tooltip="Shop">
                        <Link href="/dashboard/landlord/shop"><Store /><span>Shop</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

             <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">Management</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/properties')} tooltip="Properties">
                        <Link href="/dashboard/landlord/properties"><Building /><span>Properties</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/tenants')} tooltip="Tenants">
                        <Link href="/dashboard/landlord/tenants"><Users /><span>Tenants</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/vendors')} tooltip="Vendors">
                        <Link href="/dashboard/landlord/vendors"><Briefcase /><span>Vendors</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">Profiles</SidebarGroupLabel>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/landlord/profile')} tooltip="My Landlord Profile">
                        <Link href="/dashboard/landlord/profile"><UserSearch /><span>My Profile</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
        </>
    );

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
                <SidebarMenuButton asChild isActive={pathname === '/dashboard/professional'} tooltip="Dashboard">
                    <Link href="/dashboard/professional"><LayoutGrid /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/messages')} tooltip="Messages">
                    <Link href="/dashboard/professional/messages"><MessageSquare /><span>Messages</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/properties')} tooltip="Properties">
                    <Link href="/dashboard/professional/properties"><Building /><span>Properties</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/maintenance')} tooltip="Maintenance">
                    <Link href="/dashboard/professional/maintenance"><Wrench /><span>Maintenance</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/leases')} tooltip="Leases">
                    <Link href="/dashboard/professional/leases"><FileText /><span>Leases</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/docs')} tooltip="Docs & E-Sign">
                    <Link href="/dashboard/professional/docs"><FileSignature /><span>Docs & E-Sign</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">RENTERS</SidebarGroupLabel>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/leads')} tooltip="Leads">
                        <Link href="/dashboard/professional/leads"><UserSearch /><span>Leads</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/applicants')} tooltip="Applicants">
                        <Link href="/dashboard/professional/applicants"><Users /><span>Applicants</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/tenants')} tooltip="Tenants">
                        <Link href="/dashboard/professional/tenants"><Users /><span>Tenants</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">FINANCIAL</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/payments')} tooltip="Payments">
                        <Link href="/dashboard/professional/payments"><CreditCard /><span>Payments</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/expenses')} tooltip="Expenses">
                        <Link href="/dashboard/professional/expenses"><ShoppingCart /><span>Expenses</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/accounting')} tooltip="Accounting">
                        <Link href="/dashboard/professional/accounting"><Calculator /><span>Accounting</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/reports')} tooltip="Reports">
                        <Link href="/dashboard/professional/reports"><BarChart3 /><span>Reports</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
            
            <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-2">RESOURCES</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/toolbox')} tooltip="Toolbox">
                        <Link href="/dashboard/professional/toolbox"><Briefcase /><span>Toolbox</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/community')} tooltip="Community">
                        <Link href="/dashboard/professional/community"><Users /><span>Community</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/professional/help')} tooltip="Need Help?">
                        <Link href="/dashboard/professional/help"><HelpCircle /><span>Need Help?</span></Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
        </>
    );

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


    const getGiveLink = () => {
        if (!isLoaded) return "#";
        switch (role) {
            case 'professional':
                return '/dashboard/professional/give';
            case 'landlord':
                return '/dashboard/landlord/give';
            default:
                return '#';
        }
    }

    const getSettingsLink = () => {
        if (!isLoaded) return "#";
        switch (role) {
            case 'professional':
                return '/dashboard/professional/settings';
            case 'landlord':
                return '/dashboard/landlord/settings';
            default:
                return '#';
        }
    }


    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-secondary/50">
                <Sidebar>
                    <div className="flex h-16 shrink-0 items-center border-b px-4 bg-background">
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <ZimbabweRentBookLogo className="h-8 w-8 text-primary" />
                            <span className="text-lg font-semibold">Zimbabwe Landlord and Tenants Network</span>
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
                                    <Link href={getGiveLink()}><Gift /><span>Give $5, Get $5</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                             <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/settings')} tooltip="Settings">
                                    <Link href={getSettingsLink()}><Settings /><span>Settings</span></Link>
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
