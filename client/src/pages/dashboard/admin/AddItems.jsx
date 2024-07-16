import AddForm from "../../../components/dashboard/add_items/AddForm";
import SectionTitle from "../../../components/shared/SectionTitle";

const AddItems = () => {
  return (
    <main>
      <div className="mt-12">
        <SectionTitle
          subHeading={"...What`s new..."}
          heading="Add an Item"
        />
      </div>
      <div className="w-10/12 mx-auto">
        <AddForm />
      </div>
    </main>
  );
};

export default AddItems;
