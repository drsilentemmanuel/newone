
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Role = 'tenant' | 'landlord' | 'professional';

interface UserState {
  avatar: string;
  userName: string;
  userEmail: string;
  role: Role;
}

interface UserContextType extends UserState {
  isLoaded: boolean;
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

const USER_STORAGE_KEY = 'zim_tpn_user_state';

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<UserState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on initial mount
  useEffect(() => {
    try {
      const storedState = localStorage.getItem(USER_STORAGE_KEY);
      if (storedState) {
        setState(JSON.parse(storedState));
      }
    } catch (error) {
      console.error("Failed to read user state from localStorage", error);
    } finally {
        setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save user state to localStorage", error);
    }
  }, [state, isLoaded]);


  const setAvatar = (newAvatar: string) => {
    setState(s => ({ ...s, avatar: newAvatar }));
  };

  const login = (user: Omit<UserState, 'avatar'>) => {
    setState({ avatar: "https://placehold.co/96x96.png", ...user });
  }

  const logout = () => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to remove user state from localStorage", error);
    }
    setState(defaultState); // Reset to default state on logout
  }

  return (
    <UserContext.Provider value={{ ...state, isLoaded, setAvatar, login, logout }}>
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
