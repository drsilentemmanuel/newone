
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  avatar: string;
  setAvatar: (newAvatar: string) => void;
  userName: string;
  userEmail: string;
  role: 'tenant' | 'landlord' | 'professional';
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatar] = useState("https://placehold.co/96x96.png");
  // Default to a tenant user for demonstration purposes
  const [userName] = useState("Jane Tenant");
  const [userEmail] = useState("tenant@example.com");
  const [role] = useState<'tenant' | 'landlord' | 'professional'>('tenant');

  return (
    <UserContext.Provider value={{ avatar, setAvatar, userName, userEmail, role }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
