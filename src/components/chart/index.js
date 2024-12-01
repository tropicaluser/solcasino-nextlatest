"use client";

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './Home.module.css';

// Dynamic import for the chart
const CrashChart = dynamic(() => import('./CrashChart'), { ssr: false });

export default function Home() {
    const [multiplier, setMultiplier] = useState(0.0); // Starts at 0.0x
    const [isCrashed, setIsCrashed] = useState(false);
    const [crashPoint, setCrashPoint] = useState(null); // Random crash multiplier
    const [chartData, setChartData] = useState([]); // Data for the chart
    const intervalRef = useRef(null);

    // Function to generate a random crash multiplier
    const generateCrashPoint = () => {
        return parseFloat((Math.random() * (2.0 - 0.5) + 0.5).toFixed(1)); // Random between 0.5x and 2.0x
    };

    useEffect(() => {
        if (!isCrashed) {
            // Generate a new crash point if not already set
            if (!crashPoint) setCrashPoint(generateCrashPoint());

            intervalRef.current = setInterval(() => {
                setMultiplier((prev) => {
                    const newMultiplier = prev + 0.1;
                    const timestamp = new Date().toLocaleTimeString();

                    // Add new data point to the chart
                    setChartData((data) => [
                        ...data,
                        { time: timestamp, multiplier: parseFloat(newMultiplier.toFixed(1)) },
                    ]);

                    // Check if crash happens
                    if (newMultiplier >= crashPoint) {
                        setIsCrashed(true);
                        clearInterval(intervalRef.current);
                    }
                    return newMultiplier;
                });
            }, 500);
        }

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [isCrashed, crashPoint]);

    const resetGame = () => {
        setMultiplier(0.0); // Reset multiplier
        setCrashPoint(null); // Reset crash point
        setChartData([]); // Clear chart data
        setIsCrashed(false); // Restart game
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crash Game</h1>
            <CrashChart data={chartData} crashPoint={crashPoint} isCrashed={isCrashed} />
            <div className={styles.controls}>
                {isCrashed ? (
                    <button onClick={resetGame} className={styles.resetButton}>
                        Play Again
                    </button>
                ) : (
                    <p className={styles.text}>Multiplier: {multiplier.toFixed(1)}x</p>
                )}
            </div>
        </div>
    );
}
