import AddToCart from "../Buttons/AddtoCart/AddToCart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function Card({ items }) {
  const { image, name, recipe, price, _id } = items;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const addToCartItem = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        price,
        email: user.email,
        itemImage: image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            text: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
            animation:true,
            backdrop:true
          });
          
        }
      });
    } else {
      Swal.fire({
        title: "Please login first to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // const addToCartItem = () => {
  //   if (user && user.email) {
  //     const cartItem = {
  //       menuId: _id,
  //       email: user.email,
  //       name,
  //       image,
  //       price,
  //     };
  //     axiosSecure
  //       .post("/carts", cartItem)
  //       .then((res) => {
  //         // console.log("card added");
  //         // console.log(res.data);
  //         if (res.data.insertedId) {
  //           Swal.fire({
  //             icon: "success",
  //             title: `${name} added to your cart`,
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //           // refetch cart to update the cart items count
  //           refetch();
  //         }
  //       });
  //   } else {
  //     Swal.fire({
  //       title: "You are not Logged In",
  //       text: "Please login to add to the cart?",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, login!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         //   send the user to the login page
  //         navigate("/login", { state: { from: location } });
  //       }
  //     });
  //   }
  // };
  return (
    <div className="gird md:grid-cols-2">
      <div className="card bg-base-100 md:w-80 h-96 shadow-xl">
        <figure>
          <h1 className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-[#222] text-white">
            ${price}
          </h1>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <AddToCart
            addToCartItem={addToCartItem}
            bgColor="#dadada"
            textColor="#BB8506"
            borderBottom="#BB8506"
            btntext="Add to Cart"
            borderBottomWidth="2px"
          ></AddToCart>
        </div>
      </div>
    </div>
  );
}

export default Card;
