import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/menu`);
        const data = await res.json();
        setMenu(data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchMenu();
  }, []);
  return [menu, loading];
};

export default useMenu;
