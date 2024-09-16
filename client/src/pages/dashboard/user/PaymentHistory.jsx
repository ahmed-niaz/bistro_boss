import PayTable from "../../../components/dashboard/table/PayTable";
import SectionTitle from "../../../components/shared/SectionTitle";
const PaymentHistory = () => {
  
  return (
    <main>
      <div className="mt-12">
        <SectionTitle
          subHeading={"...At a Glance!..."}
          heading="Payment History"
        />
      </div>
      <div className="w-10/12 mx-auto">
        <PayTable />
      </div>
    </main>
  );
};

export default PaymentHistory;
