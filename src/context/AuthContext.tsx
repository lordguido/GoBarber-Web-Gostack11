import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('sing');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Rodrigo ', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
