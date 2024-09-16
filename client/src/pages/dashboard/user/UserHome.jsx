import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <main className="mt-24 ml-4">
      <h1 className="font-extrabold text-4xl font-cinzel">
        <span>Hi,Welcome</span>
        <span className="text-[#835D23] ml-4 cursor-pointer ">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h1>
    </main>
  );
};

export default UserHome;
