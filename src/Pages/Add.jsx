import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
const Add = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="size-96 mx-auto">
        <Lottie animationData={loadingAnim} loop={true} />
      </div>
    );
  }
  const handleAddData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("http://localhost:3000/added", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(resData=>console.log(resData))
  };
  return (
    <div className="p-3 hero bg-svg-background">
      <form className="card-body w-full" onSubmit={handleAddData}>
        {/* Row */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-3">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Image</span>
            </label>
            <input
              type="text"
              placeholder="Item Image"
              name="image"
              className="input input-bordered font-kristi"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              name="itemName"
              className="input input-bordered font-kristi"
              required
            />
          </div>
        </div>
        {/* Row */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-3">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Category</span>
            </label>
            <input
              type="text"
              placeholder="Sub-category Name"
              name="category"
              className="input input-bordered font-kristi"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Price</span>
            </label>
            <input
              type="text"
              placeholder="Item Price"
              name="price"
              className="input input-bordered font-kristi"
              required
            />
          </div>
        </div>
        <div className="form-control lg:w-full">
          <label className="label">
            <span className="label-text font-kristi">Description</span>
          </label>
          <input
            type="text"
            placeholder="Short Description"
            name="description"
            className="input input-bordered font-kristi"
            required
          />
        </div>
        {/* Row */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-3">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Item Rating"
              name="rating"
              className="input input-bordered font-kristi"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Customization</span>
            </label>
            <input
              type="text"
              placeholder="Yes Or No?"
              name="customization"
              className="input input-bordered font-kristi"
              required
            />
          </div>
        </div>
        {/* Row */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-3">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Time</span>
            </label>
            <input
              type="text"
              placeholder="Processing Time"
              name="time"
              className="input input-bordered font-kristi"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Stock Status</span>
            </label>
            <input
              type="text"
              placeholder="In stock Or Made to Order?"
              name="status"
              className="input input-bordered font-kristi"
              required
            />
          </div>
        </div>
        {/* Row */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-3">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              name="email"
              className="input input-bordered font-kristi"
              required
              disabled={user?.email ? true : false}
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text font-kristi">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              name="itemName"
              className="input input-bordered font-kristi"
              disabled
              required
              defaultValue={user?.displayName}
            />
          </div>
        </div>

        <div className="form-control"></div>
        <div className="mt-1 font-serif"></div>
        <div className="form-control mt-1">
          <button
            type="submit"
            className="btn btn-accent font-kristi w-1/2 lg:w-1/4 mx-auto"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
