import { toast } from 'react-hot-toast';

export function useToast() {
  return {
    toast,
    dismiss: toast.dismiss,
  };
}
