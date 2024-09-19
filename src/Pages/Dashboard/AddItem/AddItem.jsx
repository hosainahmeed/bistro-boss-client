import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Imgage_Upload_Token;
function AddItem() {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponce) => {
        if (imageResponce.success) {
          const imgURL = imageResponce.data.display_url;
          const { name, price, category, recipe } = data;
          let newItem = {
            name,
            recipe,
            image: imgURL,
            category,
            price: parseFloat(price),
          };
          console.log(data);

          axiosSecure.post("/menu", newItem).then((res) => {
            // reset()
            console.log(res);

            if (res.data.insertedId) {
                newItem  = {_id:res.data.insertedId}
              Swal.fire({
                icon: "success",
                title: `${newItem.name} is added`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Add an Item</title>
      </Helmet>
      <SectionTitle
        subheading="What`s new ??"
        heading="Add an Item"
      ></SectionTitle>
      <form className="px-12" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />
        </label>
        <div className="flex justify-between gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Category"
              {...register("Category", { required: true })}
              className="select select-bordered"
            >
              {errors.Category?.type === "required" && (
                <span>this field required</span>
              )}
              <option disabled>Category</option>
              <option>Salad</option>
              <option>Pasta</option>
              <option>Pizza</option>
              <option>Burger</option>
            </select>
          </label>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Recipe price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 md:h-56"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </label>
        <input
          type="file"
          placeholder="You can't touch this"
          className="file-input file-input-bordered w-full max-w-xs mt-4"
          {...register("image", { required: true })}
        />
        <br />
        <input className="btn btn-xl mt-4" type="submit" value="Add item" />
      </form>
    </div>
  );
}

export default AddItem;
