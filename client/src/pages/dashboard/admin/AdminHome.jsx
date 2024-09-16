import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { axiosSecure } from "./../../../hooks/useAxiosSecure";
import wallet from "../../../assets/stats/wallet.svg";
import customers from "../../../assets/stats/customer.svg";
import order from "../../../assets/stats/order.svg";
import chef from "../../../assets/stats/chef.svg";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#264653",
  "#003049",
];

const AdminHome = () => {
  const { user } = useAuth();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom function for pie

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <main className="mt-24 ml-4">
      <h1 className="font-extrabold text-4xl font-cinzel">
        <span>Hi,Welcome</span>
        <span className="text-[#835D23] ml-4 cursor-pointer ">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 cursor-pointer">
        <div className="flex items-center bg-[#835D23] justify-around  w-64 shadow-sm h-32 rounded-md">
          <div>
            <img src={wallet} alt={wallet} />
          </div>
          <div>
            <h1 className="font-extrabold text-4xl">
              ${stats?.revenue?.toFixed(2)}
            </h1>
            <p className="font-cinzel font-extrabold text-xl">Revenue</p>
          </div>
        </div>
        <div className="flex items-center bg-[#835D23] justify-around  w-64 shadow-sm h-32 rounded-md">
          <div>
            <img src={customers} alt={customers} />
          </div>
          <div>
            <h1 className="font-extrabold text-4xl">{stats?.users}</h1>
            <p className="font-cinzel font-extrabold text-xl">Customers</p>
          </div>
        </div>
        <div className="flex items-center bg-[#835D23] justify-around  w-64 shadow-sm h-32 rounded-md">
          <div>
            <img src={order} alt={order} />
          </div>
          <div>
            <h1 className="font-extrabold text-4xl">{stats?.orders}</h1>
            <p className="font-cinzel font-extrabold text-xl">Orders</p>
          </div>
        </div>
        <div className="flex items-center bg-[#835D23] justify-around  w-64 shadow-sm h-32 rounded-md">
          <div>
            <img src={chef} alt={chef} />
          </div>
          <div>
            <h1 className="font-extrabold text-4xl">{stats?.menuItems}</h1>
            <p className="font-cinzel font-extrabold text-xl">Menu</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
