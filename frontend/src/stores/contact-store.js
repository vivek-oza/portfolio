import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useContactStore = create(
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

export default useContactStore;
