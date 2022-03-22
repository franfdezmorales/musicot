import styles from './RadarChart.module.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';

function customTick({ payload, x, y, textAnchor, stroke, radius }) {


    return (
        <g
            className="recharts-layer recharts-polar-angle-axis-tick"
        >
            <text
                radius={radius}
                stroke={stroke}
                x={x}
                y={y}
                className="recharts-text recharts-polar-angle-axis-tick-value"
                textAnchor={textAnchor}
            >
                <tspan x={x} dy="0em" fill='white'>
                    {payload.value}
                </tspan>
            </text>
        </g>
    );
}


export function RadarC({ data }) {


    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={customTick} />
                <PolarRadiusAxis />
                <Radar name="Spotify" dataKey="A" stroke="#1DB954" fill="#1DB954" fillOpacity={0.75} />
            </RadarChart>
        </ResponsiveContainer>
    );
}