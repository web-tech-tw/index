import {jwtDecode} from "jwt-decode";

export const useProfile = () => {
  if (!import.meta.client) {
    return null;
  }

  const config = useRuntimeConfig();
  const saraTokenName = config.public.saraTokenName || 'unified_token';

  const saraToken = localStorage.getItem(saraTokenName);
  if (!saraToken) {
    return null;
  }

  try {
    const data = jwtDecode(saraToken);
    if (Date.now() >= data.exp * 1000) {
      throw new Error("sara token expired");
    }
    return data?.user;
  } catch (e) {
    console.warn(e);
    localStorage.removeItem(saraTokenName);
    location.reload();
    return null;
  }
};
