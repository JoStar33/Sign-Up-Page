import { SignUpForm, SignUpOneStepForm, SignUpThreeStepForm, SignUpTwoStepForm } from '@/types/auth';
import { crypto } from '@/utils/crypto';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthStore {
  signUpFormData: string;
  setStepOneData: (data: SignUpOneStepForm) => void;
  setStepTwoData: (data: SignUpTwoStepForm) => void;
  setStepThreeData: (data: SignUpThreeStepForm) => void;
  resetSignUpFormData: () => void;
}

const initSignUpFormData: SignUpForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phoneNumber: '',
  address: '',
  addressDetail: '',
  agreement: 'N',
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      signUpFormData: crypto.encryptionAES(initSignUpFormData),
      setStepOneData: (data) =>
        set((prev) => ({
          ...prev,
          signUpFormData: crypto.encryptionAES({ ...crypto.decryptionDES(prev.signUpFormData), ...data }),
        })),
      setStepTwoData: (data) =>
        set((prev) => ({
          ...prev,
          signUpFormData: crypto.encryptionAES({ ...crypto.decryptionDES(prev.signUpFormData), ...data }),
        })),
      setStepThreeData: (data) => {
        if (Object.values(data).every((value) => value === 'Y'))
          set((prev) => ({
            ...prev,
            signUpFormData: crypto.encryptionAES({ ...crypto.decryptionDES(prev.signUpFormData), agreement: 'Y' }),
          }));
      },
      resetSignUpFormData: () => set((prev) => ({ ...prev, signUpFormData: crypto.encryptionAES(initSignUpFormData) })),
    }),
    {
      name: 'authStorage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const getSignUpDecryptionData = () => crypto.decryptionDES(useAuthStore.getState().signUpFormData);
