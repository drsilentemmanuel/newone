
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  avatar: string;
  setAvatar: (newAvatar: string) => void;
  userName: string;
  userEmail: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatar] = useState("https://placehold.co/96x96.png");
  const [userName] = useState("John Doe"); // Mock data
  const [userEmail] = useState("john.doe@example.com"); // Mock data

  return (
    <UserContext.Provider value={{ avatar, setAvatar, userName, userEmail }}>
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
