const ACCESS_TOKEN = 'jwt';

export const storage = {
  setAccessTokenLocalStorage: (value: string) => localStorage.setItem(ACCESS_TOKEN, value),
  getAccessTokenLocalStorageItem: (): string | null => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) return null;
    return accessToken;
  },
  removeAccessToken: () => localStorage.removeItem(ACCESS_TOKEN),
};
