import { FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdFastfood } from "react-icons/md";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function AdminHome() {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
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

  if (statsLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

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

  const { revinew, products, orders, users } = stats;
  return (
    <div className="flex flex-col px-3">
      <h1 className="text-2xl md;text-4xl font-black mb-8 ">
        Hi welcome back{" "}
        <span className="inline-block animate-pulse">{user.displayName}</span>
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat place-items-center">
          <FaWallet className="text-3xl" />
          <div className="stat-value text-primary">${revinew}</div>
          <div className="stat-title">Revinew</div>
        </div>

        <div className="stat place-items-center">
          <FaUsers className="text-4xl" />
          <div className="stat-value text-secondary">{users}</div>
          <div className="stat-title">Customers</div>
        </div>

        <div className="stat place-items-center">
          <MdFastfood className="text-4xl" />
          <div className="stat-value text-primary">{products}</div>
          <div className="stat-title">Menu Items</div>
        </div>
        <div className="stat place-items-center">
          <FaShoppingCart className="text-4xl" />
          <div className="stat-value text-secondary">{orders}</div>
          <div className="stat-title">Orders</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12">
        <div className="">
          <BarChart
            width={window.innerWidth < 768 ? 305 : 500}
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
              dataKey="revenue"
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

        <div className="w-full md:w-1/2">
          <PieChart width={window.innerWidth < 768 ? 300 : 500} height={400}>
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
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
