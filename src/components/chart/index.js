"use client";

import { useGame } from '@/context/game-context';
import dynamic from 'next/dynamic';
import styles from './Home.module.css';

const CrashChart = dynamic(() => import('./CrashChart'), { ssr: false });

export default function Home() {
    const { isCrashed, crashPoint, chartData } = useGame();

    return (
        <div className={styles.container}>
            <CrashChart data={chartData} crashPoint={crashPoint} isCrashed={isCrashed} />
        </div>
    );
}
