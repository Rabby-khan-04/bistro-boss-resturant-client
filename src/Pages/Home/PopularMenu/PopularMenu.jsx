import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../Hooks/useMenu";

const PopularMenu = () => {
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenus = data.filter((menu) => menu.category === "popular");
  //       setMenus(popularMenus);
  //     });
  // }, []);

  const [menus] = useMenu();
  const popularMenus = menus.filter((menu) => menu.category === "popular");

  return (
    <section className="py-32">
      <div className="container">
        <div>
          <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {popularMenus.map((menu) => (
            <MenuItem menu={menu} key={menu._id} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="black__btn">View Full Menu</button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
