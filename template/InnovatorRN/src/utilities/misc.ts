import {IServerError} from './types';

export function setTestIdentifier(id: string | number) {
  return {testID: id.toString(), accessibilityLabel: id.toString()};
}

export const getErrorMessage = (error: IServerError, defaultMessage: string | undefined) => {
  if (error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  }
  if (error?.data?.error?.message) {
    return error.data.error.message;
  }
  if (error?.data?.message) {
    return error.data?.message;
  }
  if (error?.message) {
    return error.message;
  }
  return defaultMessage;
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
