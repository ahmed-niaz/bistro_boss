import { BsTable } from "react-icons/bs";
import { FaTruckMonster } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Features = () => {
  return (
    <main className="grid grid-cols-3 container mx-auto gap-6 mt-8 mb-12">
      <div className="flex items-center bg-white justify-between shadow-2xl p-12 gap-12">
        <BsTable size={80} />

        <div className="font-cinzel">
          <h2 className=" font-bold text-black text-2xl">Easy To Order</h2>
          <p className="font-medium">
            You Need only a few steps to place order for food
          </p>
        </div>
      </div>
      <div className="flex items-center bg-white justify-between shadow-2xl p-12 gap-12">
        <MdOutlinePayment size={80} />
        <div className="font-cinzel">
          <h2 className=" font-bold text-black text-2xl">Secure Payment</h2>
          <p className="font-medium">
            You Need only a few steps to make online payment
          </p>
        </div>
      </div>
      <div className="flex items-center bg-white justify-between shadow-2xl p-12 gap-12">
        <FaTruckMonster size={80} />
        <div className="font-cinzel">
          <h2 className=" font-bold text-black text-2xl">Easy To Order</h2>
          <p className="font-medium">
            {" "}
            Our Delivery is always on time even faster
          </p>
        </div>
      </div>
    </main>
  );
};

export default Features;
