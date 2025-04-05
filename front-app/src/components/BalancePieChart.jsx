import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function BalancePieChart({ data }) {
  const chartData = data.map((item) => ({
    name: item.name,
    value: item.balanceRub,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {chartData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default BalancePieChart;
