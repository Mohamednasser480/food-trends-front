import { toast } from "react-toastify";

const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 5000));

const successToast = (message) => {
  toast.success(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const errorToast = (message) => {
  toast.error(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const promise = () => {
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default {
  successToast,
  errorToast,
  promise,
};
