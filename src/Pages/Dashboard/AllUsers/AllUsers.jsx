import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: users = [],
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users`);
        return res.data;
      } catch {
        throw new Error("Failed to fetch users.");
      }
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${user.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",  
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been deleted.`,
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
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        refetch();
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `${user.name} is now an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to update user role.",
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full p-4 md:p-8">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <SectionTitle subheading="How many??" heading="MANAGE ALL USERS" />
      <h1 className="text-xl md:text-3xl mb-4 font-cinzel">
        Total users : {users.length}
      </h1>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-slate-300">
            <tr>
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 break-all max-w-xs">{user.name}</td>
                <td className="p-2 break-all max-w-xs">{user.email}</td>
                <td className="p-2">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-info btn-circle"
                      aria-label={`Make ${user.name} an admin`}
                    >
                      <FaUsers className="inline-block" />
                    </button>
                  )}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-error btn-circle"
                    aria-label={`Delete ${user.name}`}
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

export default AllUsers;
