import './BarChart.css'

type BarChartProps = {
    values: number[]
}

export const BarChart = ({values}: BarChartProps) => {
    const maxValue = Math.max(...values)
    return (
        <div className="barChartContainer">
            {values.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: '20px',
                        width: `${(value / maxValue) * 100}%`,
                        backgroundColor: '#3E5879',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    {value}
                </div>
            ))}
        </div>
    )
}