import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const FoodOrder = () => {
  const { category } = useParams();
  const categories = [
    "salad",
    "dessert",
    "cake",
    "noddles",
    "pasta",
    "pure_veg",
    "rolls",
    "sandwich",
  ];
  const [menu] = useMenu();
  const index = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(index);
  console.log(category);
  const cake = menu.filter((item) => item.category === "cake");
  const dessert = menu.filter((item) => item.category === "dessert");
  const noddles = menu.filter((item) => item.category === "noddles");
  const pasta = menu.filter((item) => item.category === "pasta");
  const pure_veg = menu.filter((item) => item.category === "pure_veg");
  const rolls = menu.filter((item) => item.category === "rolls");
  const salad = menu.filter((item) => item.category === "salad");
  const sandwich = menu.filter((item) => item.category === "sandwich");
  return (
    <main className="flex items-center justify-center my-16">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex items-center justify-center gap-8 mb-8">
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black ">
            Salad
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Dessert
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Cake
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Noddles
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Pasta
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Vegetables
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Rolls
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Sandwich
          </Tab>
        </TabList>

        <TabPanel className="text-center">
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={cake} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={noddles} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={pasta} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={pure_veg} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={rolls} />
        </TabPanel>
        <TabPanel className="text-center">
          <OrderTab items={sandwich} />
        </TabPanel>
      </Tabs>
    </main>
  );
};

export default FoodOrder;
