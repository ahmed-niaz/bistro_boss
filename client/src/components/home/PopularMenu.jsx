import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const res = await fetch("menu.json");
  //       const data = await res.json();
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };
  //   fetchMenu();
  // }, []);
  // console.log(menu);
  const [menu] = useMenu()
  const popularItems = menu.filter(item => item.category === 'popular')
  return (
    <main className="my-12">
      <SectionTitle subHeading={"...Check it out"} heading={"Our Menu"} />
      <div className="grid grid-cols-2 gap-4 container mx-auto my-12">
        {popularItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">View More..</button>
      </div>
    </main>
  );
};

export default PopularMenu;
