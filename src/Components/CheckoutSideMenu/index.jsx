import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./style.css";

const CheckoutSideMenu = () => {
  // se copia context de index card
  const context = useContext(ShoppingCartContext);

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
    </aside>
  );
};

export default CheckoutSideMenu;
