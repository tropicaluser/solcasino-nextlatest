"use client";

import { useGame } from '@/context/game-context';
import dynamic from 'next/dynamic';
import styles from './Home.module.css';

const CrashChart = dynamic(() => import('./CrashChart'), { ssr: false });

export default function Home() {
    const { multiplier, isCrashed, crashPoint, chartData, resetGame } = useGame();

    return (
        <div className={styles.container}>
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
