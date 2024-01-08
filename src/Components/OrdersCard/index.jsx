import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  //necesitamos traer los datos de la card
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black ">
      <p>
        <span>08.01.2024</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
