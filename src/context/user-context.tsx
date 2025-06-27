
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Role = 'tenant' | 'landlord' | 'professional';

interface UserState {
  avatar: string;
  userName: string;
  userEmail: string;
  role: Role;
}

interface UserContextType extends UserState {
  setAvatar: (newAvatar: string) => void;
  login: (user: Omit<UserState, 'avatar'>) => void;
  logout: () => void;
}

const defaultState: UserState = {
    avatar: "https://placehold.co/96x96.png",
    userName: "Jane Tenant",
    userEmail: "tenant@example.com",
    role: 'tenant',
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<UserState>(defaultState);

  const setAvatar = (newAvatar: string) => {
    setState(s => ({ ...s, avatar: newAvatar }));
  };

  const login = (user: Omit<UserState, 'avatar'>) => {
    setState(s => ({ ...s, ...user }));
  }

  const logout = () => {
    setState(defaultState); // Reset to default state on logout
  }

  return (
    <UserContext.Provider value={{ ...state, setAvatar, login, logout }}>
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
