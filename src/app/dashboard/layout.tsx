
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BarChart3,
    FileClock,
    FileText,
    Fingerprint,
    Handshake,
    Home,
    Landmark,
    LifeBuoy,
    User,
    FilePlus2,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
} from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { useUser } from '@/context/user-context';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { role } = useUser();

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

    // Navigation for other roles (Landlord, Professional)
    const otherRolesNav = (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.endsWith('/dashboard') || pathname.endsWith('/landlord') || pathname.endsWith('/professional')} tooltip="Dashboard">
                    <Link href="/dashboard"><Home /><span>Dashboard</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/new-enquiry')} tooltip="New Enquiry">
                    <Link href="/dashboard/new-enquiry"><FilePlus2 /><span>New Enquiry</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/reports')} tooltip="Reports">
                    <Link href="/dashboard/reports"><BarChart3 /><span>Reports</span></Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );

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
                           {role === 'tenant' ? tenantNav : otherRolesNav}
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter className="bg-background border-t">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/profile')} tooltip="My Profile">
                                    <Link href="/dashboard/profile"><User /><span>My Profile</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard/support')} tooltip="Support">
                                    <Link href="/dashboard/support"><LifeBuoy /><span>Support</span></Link>
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
