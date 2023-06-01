import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdOutlineRestaurant } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        const imgURL = imageResponse.data.display_url;
        const { name, category, price, recipe } = data;
        const menuItem = {
          name,
          category,
          price: parseFloat(price),
          recipe,
          image: imgURL,
        };
        const token = localStorage.getItem("user-access-token");
        axios
          .post("http://localhost:3000/menus", menuItem, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Menu Item Added Successfully ",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Add Items</title>
      </Helmet>

      <section>
        <div className="db__container">
          <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"} />
          <div className="bg-[#F3F3F3] p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="form-control w-full max-w-full">
                <label className="label">
                  <span className="text-xl text-[#444444] font-inter">
                    Recipe Name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Recipe Name"
                  {...register("name", {
                    required: true,
                    maxLength: 119,
                  })}
                  className="input input-bordered w-full max-w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="form-control w-full max-w-full">
                  <label className="label">
                    <span className="text-xl text-[#444444] font-inter">
                      Category*
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-full"
                    placeholder="Category"
                    {...register("category", { required: true })}
                  >
                    <option value="salad">Salad</option>
                    <option value="pizza"> Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>
                <div className="form-control w-full max-w-full">
                  <label className="label">
                    <span className="text-xl text-[#444444] font-inter">
                      Price*
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("price", {
                      required: true,
                    })}
                    className="input input-bordered w-full max-w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#444444] font-inter">
                    Recipe Details
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Recipe Details"
                  {...register("recipe", { required: true })}
                />
              </div>

              <div className="form-control">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full max-w-xs"
                />
              </div>

              <button
                type="submit"
                className="btn bg-golden border-golden text-xl text-white rounded-none"
              >
                Add Item <MdOutlineRestaurant className="text-3xl" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddItems;
