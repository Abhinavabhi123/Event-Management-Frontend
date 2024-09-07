import { toast } from "sonner";

export const successToast = (message) => {
  toast.success(message);
};

export const warningToast = (message)=>{
    toast.warning(message)
}