import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../Hooks/useMenu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const ManageItems = () => {
  const [menus, , refetch] = useMenu();

  const handleDelete = (item) => {
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
        const token = localStorage.getItem("user-access-token");
        axios
          .delete(`http://localhost:3000/menus/${item._id}`, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
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
        <title>Bistro Boss | Manage Items</title>
      </Helmet>

      <section>
        <div className="db__container">
          <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"} />
          <div className="bg-[#F3F3F3] p-12">
            <h2 className="text-3xl font-cinzel font-bold text-neutral mb-12">
              Total Users: {menus.length}
            </h2>
            <div className="overflow-x-auto w-full">
              <table className="table w-full font-inter">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th className="bg-gold text-white">#</th>
                    <th className="bg-gold text-white">Item Image</th>
                    <th className="bg-gold text-white">Itme Name</th>
                    <th className="bg-gold text-white">Price</th>
                    <th className="bg-gold text-white">Action</th>
                    <th className="bg-gold text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((menu, index) => (
                    <tr key={menu._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          className="h-20 w-20 object-cover object-center"
                          src={menu.image}
                          alt=""
                        />
                      </td>
                      <td>
                        <h2>{menu.name}</h2>
                      </td>
                      <td>
                        <h2>${menu.price}</h2>
                      </td>
                      <td>
                        <button className="btn bg-golden border-golden">
                          <FaRegEdit className="text-2xl text-white" />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn bg-error border-error"
                          onClick={() => handleDelete(menu)}
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

export default ManageItems;
