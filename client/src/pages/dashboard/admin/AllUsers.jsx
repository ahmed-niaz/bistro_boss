
import UserTable from "../../../components/dashboard/table/UserTable";
import SectionTitle from "../../../components/shared/SectionTitle";

const AllUsers = () => {
  return (
    <main>
     <div className="mt-12">
      <SectionTitle subHeading={"...How Many..."} heading="Manage all users" />
      </div>
      <div className="w-10/12 mx-auto">
        <UserTable />
      </div>
    </main>
  );
};

export default AllUsers;
