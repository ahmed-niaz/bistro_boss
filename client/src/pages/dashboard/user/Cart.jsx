import CartTable from "../../../components/dashboard/CartTable";
import SectionTitle from "../../../components/shared/SectionTitle";

const Cart = () => {
  return (
    <main >
      <div className="mt-12">
      <SectionTitle subHeading={"...My Cart..."} heading="Wanna Add More" />
      </div>
      <div className="w-10/12 mx-auto">
        <CartTable />
      </div>
    </main>
  );
};

export default Cart;
