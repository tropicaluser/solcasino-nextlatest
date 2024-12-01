import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Line,
} from 'recharts';

export default function CrashChart({ data, crashPoint }) {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom' }} />
                    <YAxis label={{ value: 'Multiplier', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar
                        dataKey="multiplier"
                        fill="#82ca9d"
                        isAnimationActive={false}
                        label={{ position: 'top' }}
                    />
                    {crashPoint && (
                        <Line
                            type="monotone"
                            dataKey={() => crashPoint}
                            stroke="red"
                            fill="#82ca9d"
                            strokeWidth={2}
                            dot={false}
                        />
                    )}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
