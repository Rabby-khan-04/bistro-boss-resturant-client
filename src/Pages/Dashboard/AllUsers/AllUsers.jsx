import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { HiUserGroup } from "react-icons/hi2";
import { RiAdminFill, RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const token = localStorage.getItem("user-access-token");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return res.json(0);
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Item Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make this user as admin??",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Please!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Item Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>

      <section>
        <div className="db__container">
          <SectionTitle
            subHeading={"How Many??"}
            heading={"MANAGE ALL USERS"}
          />
          <div className="bg-white p-12">
            <h2 className="text-3xl font-cinzel font-bold text-neutral mb-12">
              Total Users: {users.length}
            </h2>

            <div className="overflow-x-auto w-full">
              <table className="table w-full font-inter">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th className="bg-gold text-white"></th>
                    <th className="bg-gold text-white">Name</th>
                    <th className="bg-gold text-white">Email</th>
                    <th className="bg-gold text-white">Role</th>
                    <th className="bg-gold text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>
                        <h2>{user.name}</h2>
                      </td>
                      <td>
                        <h2>{user.email}</h2>
                      </td>
                      <td>
                        <button
                          className="btn bg-gold border-gold"
                          onClick={() => handleMakeAdmin(user._id)}
                        >
                          {user.role === "admin" ? (
                            <RiAdminFill
                              title="Admin"
                              className="text-2xl text-white"
                            />
                          ) : (
                            <HiUserGroup
                              title="User"
                              className="text-2xl text-white"
                            />
                          )}
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn bg-error border-error"
                          onClick={() => handleDelete(user._id)}
                        >
                          <RiDeleteBin5Line className="text-2xl text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
