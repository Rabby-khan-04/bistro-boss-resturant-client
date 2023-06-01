import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // fetch("/menu.json")
  //   fetch("http://localhost:3000/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menus = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/menus");
      return res.json();
    },
  });

  return [menus, loading, refetch];
};
