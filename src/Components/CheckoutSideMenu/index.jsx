import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../Components/OrderCard";
import "./style.css";

const CheckoutSideMenu = () => {
  // se copia context de index card
  const context = useContext(ShoppingCartContext);
  //eliminar un producto del carrito
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
      checkout-side-menu flex-col  fixed right-0 border border-black rounded-lg bg-white `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl ">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className="h-6 w-6 text-black cursor-pointer"
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {
          //se copia el map de index card
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
