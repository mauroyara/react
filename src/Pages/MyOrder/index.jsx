import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-5">
          <Link to="/MyOrders" className="obsolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>

          <h1>My Order</h1>
        </div>
        <div className="flex flex-col w-80">
          {
            //se copia el map de index card
            context.order?.[index]?.products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
