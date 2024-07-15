import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
export const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logout} = useAuth()
  // request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_token");
      console.log(`Request sent by interceptors`, token);
      config.headers.authorization = `bearer ${localStorage.getItem(
        "access_token"
      )}`;
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // response
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async(error)=>{
    const status = error.response.status;
    console.log('Status error in the interceptor',status);

    if(status === 401 || status === 403){
      await logout()
      navigate('/login')
    }
  })
  return axiosSecure;
};

export default useAxiosSecure;
