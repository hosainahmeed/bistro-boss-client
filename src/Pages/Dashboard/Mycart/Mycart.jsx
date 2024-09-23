import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function Mycart() {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const axiosSecure = useAxiosSecure();

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
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "The item has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="w-full px-4">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="text-base mb-4 flex-col items-end md:flex-row md:text-3xl uppercase flex md:items-center md:justify-between">
        <h1>Total orders: {cart.length}</h1>
        <h1>Total price: ${total}</h1>
        <Link to="/dashboard/payment">
          <button className="btn btn-sm md:btn-md lg:btn-lg uppercase bg-[#D1A054]">
            Pay
          </button>
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="mt-24">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-error">
              Oh no! <br />
              No foods 😨
              <br />
              Its never happened before.
            </div>
          </div>
          <div className="chat chat-end animate-bounce">
            <div className="chat-bubble chat-bubble-info">
              <ul>
                <li>
                  <Link to="/order/salad">
                    Calm down <br />
                    Order Food..
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm lg:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">No.</th>
                  <th className="p-2 text-left">Item Image</th>
                  <th className="p-2 text-left">Item Name</th>
                  <th className="p-2 text-left">Item Price</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.itemImage} alt={item.name} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="font-bold">{item.name}</div>
                    </td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-active btn-error btn-circle btn-outline"
                        aria-label={`Delete ${item.name}`}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mycart;
