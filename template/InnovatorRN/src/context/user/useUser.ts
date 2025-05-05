import {useContext} from 'react';
import {UserContext, UserDispatchContext} from './User';

export function useUser() {
  return useContext(UserContext);
}

export function useSetUser() {
  const setter = useContext(UserDispatchContext);
  return setter || (() => {});
}
