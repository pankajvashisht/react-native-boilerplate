import React, {createContext, useState} from 'react';

export type IUser = {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const UserContext = createContext<IUser | undefined>(undefined);
export const UserDispatchContext = createContext<((user: IUser) => void) | undefined>(undefined);

export function UserProvider({children}: React.PropsWithChildren) {
  const [user, setUser] = useState({
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleUpdateUser = (userDatum: IUser) => {
    setUser(userData => ({...userData, ...userDatum}));
  };

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={handleUpdateUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
