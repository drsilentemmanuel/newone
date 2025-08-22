
'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import { ZimbabweRentBookLogo } from '@/components/zimbabwe-rent-book-logo';

export function DashboardHeader({ showSidebarTrigger = true }: { showSidebarTrigger?: boolean }) {
    const { avatar, userName, userEmail } = useUser();

    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
             <div className="flex items-center gap-4">
                {showSidebarTrigger ? (
                    <SidebarTrigger className="md:hidden" />
                ) : (
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <ZimbabweRentBookLogo className="h-8 w-8 text-primary" />
                        <span className="hidden text-lg font-semibold sm:inline-block">Zimbabwe Landlord and tenants network</span>
                    </Link>
                )}
            </div>
            <div className="flex flex-1 items-center justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={avatar} alt="User" data-ai-hint="person avatar" />
                                <AvatarFallback>{userName?.split(' ').map(n => n[0]).join('') ?? 'U'}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{userName}</p>
                                <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/profile">
                                <User className="mr-2 h-4 w-4" />
                                <span>My Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
