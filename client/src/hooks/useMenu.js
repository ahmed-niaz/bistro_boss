// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const res = await fetch(`${import.meta.env.VITE_API_URL}/menu`);
  //       const data = await res.json();
  //       setMenu(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };
  //   fetchMenu();
  // }, []);

  // using tanStack

  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch,isPending: loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic("/menu");
      return res.data;
    },
  });
  return [menu, refetch,loading];
};

export default useMenu;
