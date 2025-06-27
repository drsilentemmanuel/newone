'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BarChart3,
    FilePlus2,
    Home,
    Landmark,
    LifeBuoy,
    User,
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

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const dashboardPaths = [
        '/dashboard',
        '/dashboard/tenant',
        '/dashboard/landlord',
        '/dashboard/professional',
    ];

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background">
                <Sidebar>
                    <div className="flex h-16 shrink-0 items-center border-b px-4">
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <Landmark className="h-8 w-8 text-primary" />
                            <span className="text-lg font-semibold">Zim TPN</span>
                        </Link>
                    </div>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={dashboardPaths.includes(pathname)}
                                    tooltip="Dashboard"
                                >
                                    <Link href="/dashboard">
                                        <Home />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname.startsWith('/dashboard/new-enquiry')}
                                    tooltip="New Enquiry"
                                >
                                    <Link href="/dashboard/new-enquiry">
                                        <FilePlus2 />
                                        <span>New Enquiry</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname.startsWith('/dashboard/reports')}
                                    tooltip="Reports"
                                >
                                    <Link href="/dashboard/reports">
                                        <BarChart3 />
                                        <span>Reports</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={
                                        pathname.startsWith('/dashboard/profile') ||
                                        pathname.startsWith('/dashboard/tenant-profile') ||
                                        pathname.startsWith('/dashboard/landlord-profile')
                                    }
                                    tooltip="My Profile"
                                >
                                    <Link href="/dashboard/profile">
                                        <User />
                                        <span>My Profile</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname.startsWith('/dashboard/support')}
                                    tooltip="Support"
                                >
                                    <Link href="/dashboard/support">
                                        <LifeBuoy />
                                        <span>Support</span>
                                    </Link>
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
