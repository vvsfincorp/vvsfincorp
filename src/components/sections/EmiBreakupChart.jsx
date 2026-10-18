import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

// Split out of EmiCalculatorSection so the charting library loads after the page is interactive.
function EmiBreakupChart({ data, colors, formatValue }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Decorative (the legend below lists the values), so keep the svg out of the tab order */}
      <PieChart accessibilityLayer={false}>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius="52%" outerRadius="94%" paddingAngle={2} stroke="none">
          {data.map((entry, index) => <Cell key={entry.name} fill={colors[index]} />)}
        </Pie>
        <Tooltip formatter={(value) => formatValue(value)} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EmiBreakupChart
