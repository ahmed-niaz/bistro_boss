import ItemsTable from "../../../components/dashboard/table/ItemsTable";
import SectionTitle from "../../../components/shared/SectionTitle";

const ManageItems = () => {
  return (
    <main>
     <div className="mt-12">
      <SectionTitle subHeading={"...Hurry Up..."} heading="Manage all Items" />
      </div>
      <div className="w-10/12 mx-auto">
        <ItemsTable/>
      </div>
    </main>
  );
};

export default ManageItems;
