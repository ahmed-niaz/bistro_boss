import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/shared/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

// img_bb
const image_hosting_key = import.meta.env.VITE_API_IMGBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const item = useLoaderData();
  console.log(item);
  const onSubmit = async (data) => {
    console.log(data);
    // img upload to img_bb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the items data
      const itemCategory = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      console.log(itemCategory);

      const itemRes = await axiosSecure.patch(`/menu/${item._id}`, itemCategory);
      console.log(itemRes);
      if (itemRes.data.modifiedCount > 0) {
        reset();
        toast.success(`Menu item is update `);
      }
    }
    console.log("Image url", res.data);
  };
  return (
    <main>
      <div>
        <SectionTitle heading="Update Items"></SectionTitle>
      </div>
      <div className="w-10/12 mx-auto bg-[#F3F3F3] p-6 mb-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-9/12 mx-auto flex items-center justify-center flex-col font-cinzel font-bold"
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe name</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={item.name}
              placeholder="Recipe Name"
              className="input input-bordered w-full rounded-none"
            />
          </label>
          <div className="flex gap-4 w-full">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="text"
                defaultValue={item.price}
                placeholder="Price"
                className="input input-bordered w-full rounded-none"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Pick the category</span>
              </div>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="select select-bordered rounded-none"
              >
              
                <option value="dessert">Dessert</option>
                <option value="rolls">Rolls</option>
                <option value="cake">Cake</option>
                <option value="noddles">Noddles</option>
                <option value="pasta">Pasta</option>
                <option value="pure_veg">Vegetables</option>
                <option value="sandwich">Sandwich</option>
                <option value="salad">Salad</option>
              </select>
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24 rounded-none"
              placeholder="Recipe"
              defaultValue={item.recipe}
            ></textarea>
          </label>
          <input
            {...register("image")}
            type="file"
            className="file-input bg-white file-input-ghost w-full mt-2 rounded-none"
          />
          <div className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21] mt-4 flex">
            <button>Update Recipe Details </button>
            <span>
              <ImSpoonKnife size={16} />
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UpdateItems;
