import { useAuth } from "../../../Hooks/useAuth";
import { GiWallet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { MdRestaurantMenu } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("user-access-token");
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axios("http://localhost:3000/admin-stats", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.data;
    },
  });
  const { users, products, orders, totalRevenu } = stats;

  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axios("http://localhost:3000/order-stats", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
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

  return (
    <section className="py-12 px-6">
      <div>
        <h2 className="text-3xl font-cinzel font-bold text-neutral mb-6">
          Hi, Welcome Back {user.displayName && `, ${user.displayName}`}!
        </h2>

        <div className="grid grid-cols-4 gap-6 text-white">
          <div className="py-9 px-14 flex items-center justify-center gap-6 bg-gradient-to-r from-revenu-1 to-revenu-2 rounded-lg">
            <GiWallet className="text-6xl" />
            <div className="font-inter font-bold space-y-1">
              <p className="text-[40px]">{totalRevenu?.toFixed(2)}</p>
              <p className="text-2xl">Revenue</p>
            </div>
          </div>

          <div className="py-9 px-14 flex items-center justify-center gap-6 bg-gradient-to-r from-customers-1 to-customers-2 rounded-lg">
            <HiUserGroup className="text-6xl" />
            <div className="font-inter font-bold space-y-1">
              <p className="text-[40px]">{users}</p>
              <p className="text-2xl">Customers</p>
            </div>
          </div>

          <div className="py-9 px-14 flex items-center justify-center gap-6 bg-gradient-to-r from-products-1 to-products-2 rounded-lg">
            <MdRestaurantMenu className="text-6xl" />
            <div className="font-inter font-bold space-y-1">
              <p className="text-[40px]">{products}</p>
              <p className="text-2xl">Products</p>
            </div>
          </div>

          <div className="py-9 px-14 flex items-center justify-center gap-6 bg-gradient-to-r from-orders-1 to-orders-2 rounded-lg">
            <TbTruckDelivery className="text-6xl" />
            <div className="font-inter font-bold space-y-1">
              <p className="text-[40px]">{orders}</p>
              <p className="text-2xl">Orders</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <BarChart
              width={500}
              height={300}
              data={orderStats}
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
                dataKey="total"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {orderStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={orderStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {orderStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
