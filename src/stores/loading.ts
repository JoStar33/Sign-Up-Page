import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (fn: ((prev: boolean) => boolean) | boolean) => void;
}

/**
 * 로딩 노출을 관리하는 스토어
 */
export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (fn: ((prev: boolean) => boolean) | boolean) => {
    set((state) => ({ isLoading: typeof fn === 'boolean' ? fn : fn(state.isLoading) }));
  },
}));
