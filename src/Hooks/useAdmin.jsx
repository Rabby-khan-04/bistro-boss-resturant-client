import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useAdmin = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("user-access-token");
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
  return [isAdmin, isAdminLoading];
};
