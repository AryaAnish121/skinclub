"use client";

import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    },
};

export const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
        {
            label: "Active Users",
            data: [8, 12, 12, 19, 12, 8, 5],
            borderColor: "#E1D0C1",
            backgroundColor: "#E1D0C1",
            fill: true,
            lineTension: 0.4,
        },
    ],
};

const Chart = ({ styles }) => {
    return <Line className={styles.chart} data={data} options={options} />;
};

export default Chart;
