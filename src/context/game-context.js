"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Create a Context
const GameContext = createContext();

// Context Provider
export const GameProvider = ({ children }) => {
    const [multiplier, setMultiplier] = useState(0.0);
    const [isCrashed, setIsCrashed] = useState(false);
    const [crashPoint, setCrashPoint] = useState(null);
    const [chartData, setChartData] = useState([]);
    const intervalRef = useRef(null);

    const generateCrashPoint = () => parseFloat((Math.random() * (2.0 - 0.5) + 0.5).toFixed(1));

    useEffect(() => {
        if (!isCrashed) {
            if (!crashPoint) setCrashPoint(generateCrashPoint());

            intervalRef.current = setInterval(() => {
                setMultiplier((prev) => {
                    const newMultiplier = prev + 0.1;
                    const timestamp = new Date().toLocaleTimeString();

                    setChartData((data) => [
                        ...data,
                        { time: timestamp, multiplier: parseFloat(newMultiplier.toFixed(1)) },
                    ]);

                    if (newMultiplier >= crashPoint) {
                        setIsCrashed(true);
                        clearInterval(intervalRef.current);
                    }
                    return newMultiplier;
                });
            }, 500);
        }

        return () => clearInterval(intervalRef.current); // Cleanup
    }, [isCrashed, crashPoint]);

    const resetGame = () => {
        setMultiplier(0.0);
        setCrashPoint(null);
        setChartData([]);
        setIsCrashed(false);
    };

    return (
        <GameContext.Provider
            value={{
                multiplier,
                isCrashed,
                crashPoint,
                chartData,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

// Custom hook for consuming context
export const useGame = () => useContext(GameContext);
