import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useCart = (email) => {
  const token = localStorage.getItem("user-access-token");
  const { user, loading } = useAuth();
  const {
    refetch,
    data: cart = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });

  return [cart, refetch, isLoading];
};
