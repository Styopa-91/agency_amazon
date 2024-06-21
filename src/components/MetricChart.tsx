import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {useEffect, useState} from "react";
import {getMetrics, Metric} from "../services/metrics.ts";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const MetricChart = () => {
    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // State to hold sorting order

    useEffect(() => {
        getMetrics()
            .then(response => {
                const sortedMetrics = [...response].sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a.name.localeCompare(b.name);
                    } else {
                        return b.name.localeCompare(a.name);
                    }
                });
                setMetrics(sortedMetrics);
            })
            .catch(error => console.error('Error fetching ad metrics:', error));
    }, [sortOrder]);

    const handleChangeSortOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value as 'asc' | 'desc');
    };

    const data = {
        labels: metrics.map(metric => metric.name),
        datasets: [
            {
                label: 'Impressions',
                data: metrics.map(metric => metric.impressions),
                borderColor: 'rgba(238, 130, 238, 1)',
                backgroundColor: 'rgba(238, 130, 238, 0.2)',
            },
            {
                label: 'Clicks',
                data: metrics.map(metric => metric.clicks),
                borderColor: 'rgba(60, 179, 113, 1)',
                backgroundColor: 'rgba(60, 179, 113, 0.2)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Ad Performance Metrics',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <div className="flex gap-2 justify-start items-center">
                <label className="h-auto opacity-60 text-xs md:text-customInput" htmlFor="sortOrder">Select Sorting Order:</label>
                <select id="sortOrder"
                        value={sortOrder}
                        onChange={handleChangeSortOrder}
                        className="w-56 font-inter font-normal text-xs md:text-customInput leading-customInput
                         ps-2 py-2 bg-white border border-[#C9C9C9] min-h-8 space-y-8 rounded-xl focus:outline-none">
                    <option value="asc">Name Ascending</option>
                    <option value="desc">Name Descending</option>
                </select>
            </div>
            <Line options={options} data={data}/>
        </div>

    )
        ;
}