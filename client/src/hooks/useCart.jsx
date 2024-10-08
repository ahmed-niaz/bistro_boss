import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const { data: cart = [],refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart,refetch];
};

export default useCart;
