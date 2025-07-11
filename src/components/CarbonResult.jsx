import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#34d399", "#60a5fa", "#facc15", "#f87171"];

const CarbonResult = ({ result }) => {
  const { total, breakdown } = result;

  return (
    <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
      <h3 className="text-lg font-semibold mb-2">Your Annual CO₂ Emissions:</h3>
      <p className="text-3xl font-bold text-green-800">{total} tons</p>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={breakdown}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {breakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CarbonResult;