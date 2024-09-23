import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

function ManageItem() {
  const axiosSecure = useAxiosSecure();
  const [menu, ,refetch] = useMenu()

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${item.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the user.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="w-full px-8">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subheading="Hurry up"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <h1 className="text-xl md:text-3xl mb-4 font-cinzel">
        Total Items : {menu.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-slate-300">
            <tr>
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">ITEM IMAGE</th>
              <th className="p-2 text-left">ITEM NAME</th>
              <th className="p-2 text-left">PRICE</th>
              <th className="p-2 text-left">ACTION</th>
              <th className="p-2 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 break-all max-w-xs">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-2 break-all max-w-xs">{item.name}</td>
                <td className="p-2 break-all max-w-xs">${item.price}</td>
                <td className="p-2">
                  {item.role === "admin" ? (
                    "admin"
                  ) : (
                    // TODO:
                    <button
                      onClick={() => handleUpdate(item)}
                      className="btn bg-[#D1A054] text-white btn-circle"
                      aria-label={`Make ${item.name} an admin`}
                    >
                      <FaRegEdit className="text-xl"></FaRegEdit>
                    </button>
                  )}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error btn-circle"
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
  );
}

export default ManageItem;
