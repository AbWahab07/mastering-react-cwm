import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/browser";

axios.interceptors.response.use(null, error => {
  // console.log("Intercepter called");

  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Sentry.captureException(error);
    console.log("Logging the error", error);
    toast.error("An unexpected error occured.");
    // toast.success();
    // toast.info();
  }

  return Promise.reject(error);
});

// exporting an object with four methods
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
