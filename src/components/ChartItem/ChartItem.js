import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Legend,
    Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LineController, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function ChartItem({ data, className }) {
    const labels = data?.chart?.times.map((item) => `${item.hour}:00`);

    const getEnCodeId = (num) => {
        let item = data.items[`${num}`].encodeId;
        return item;
    };

    const dataLineChart0 = data?.chart?.items[`${getEnCodeId(0)}`];
    const dataLineChart1 = data?.chart?.items[`${getEnCodeId(1)}`];
    const dataLineChart2 = data?.chart?.items[`${getEnCodeId(2)}`];

    const options = {
        animations: {
            radius: {
                duration: 500,
                easing: 'linear',
                loop: (context) => context.active,
            },
        },
        datasetStrokeWidth: 10,
        pointDotStrokeWidth: 10,
        tooltipFillColor: 'rgb(0,0,0)',
        interaction: {
            mode: 'index',
            intersect: false,
        },

        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        tooltips: {
            enabled: true,
            mode: 'x-axis',
            intersect: false,
            padding: 2,
            caretPadding: 4,
            usePointStyle: true,
        },
        hover: {
            mode: 'dataset',
            intersect: false,
            includeInvisible: true,
        },
        scales: {
            y: {
                min: 0,
                max: data?.chart?.maxScore,
                borderWidth: 1,
                display: false,
                textStrokeColor: '#fff',
            },
            x: {
                ticks: {
                    callback: function (val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    },
                    padding: 2,
                    textStrokeColor: '#fff',
                    color: '#96979B',
                },
                alignToPixels: true,
            },
        },
    };
    const data2 = {
        labels,
        datasets: [
            {
                label: data?.items[0]?.title,
                data: dataLineChart0?.map((e) => e.counter),
                borderColor: '#4A90E2',
                backgroundColor: '#fff',
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: '#4A90E2',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3,
                pointHoverRadius: 4,
                oder: 1,
                hoverRadius: 12,
                hoverBorderWidth: 3,
            },
            {
                label: data?.items[1]?.title,
                data: dataLineChart1?.map((e) => e.counter),
                borderColor: '#27BD9C',
                backgroundColor: '#fff',
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: '#27BD9C',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3,
                pointHoverRadius: 4,
                oder: 2,
                hoverRadius: 12,
                hoverBorderWidth: 3,
            },
            {
                label: data?.items[2]?.title,
                data: dataLineChart2?.map((e) => e.counter),
                borderColor: '#A64250',
                backgroundColor: '#fff',
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: '#A64250',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3,
                pointHoverRadius: 4,
                oder: 3,
                hoverRadius: 12,
                hoverBorderWidth: 3,
            },
        ],
    };
    return <Chart className={className} updateMode="resize" type="line" options={options} data={data2} />;
}

export default ChartItem;
