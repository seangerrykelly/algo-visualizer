import { Bar, BarChartContainer } from './BarChartStyles'

type BarChartProps = {
    values: number[]
}

export const BarChart = ({values}: BarChartProps) => {
    const maxValue = Math.max(...values)
    return (
        <BarChartContainer className="barChartContainer">
            {values.map((value, index) => (
                <Bar key={index} maxValue={maxValue} value={value} barCount={values.length} />
            ))}
        </BarChartContainer>
    )
}