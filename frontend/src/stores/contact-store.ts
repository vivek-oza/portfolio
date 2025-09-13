import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ContactFormState = {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  setFormData: (data: { name: string; email: string; message: string }) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
};

export const useContactStore = create<ContactFormState>()(
  persist(
    (set) => ({
      name: '',
      email: '',
      message: '',
      isSubmitting: false,
      setFormData: (data) => set(data),
      setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
    }),
    {
      name: 'contact-form-storage',
    }
  )
);
