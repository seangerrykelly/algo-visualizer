type BarChartProps = {
    values: number[]
}

export const BarChart = ({values}: BarChartProps) => {
    const maxValue = Math.max(...values)
    return (
        <div>
            {values.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: '20px',
                        width: `${(value / maxValue) * 100}%`,
                        backgroundColor: 'blue',
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