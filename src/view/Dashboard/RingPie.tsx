import React from 'react';
import ReactECharts from 'echarts-for-react';
// eslint-disable-next-line
const GaugeChart = () => {
    const option = {
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                radius: '100%',
                center: ['50%', '50%'],
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: 16,
                    itemStyle: {
                        color: '#3382fb'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 13,
                        color: [
                            [0, '#3382fb'], // Example completed part
                            [1, '#f2f2f4'] // Uncompleted part
                        ]
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: [{value: 100 * 0.4}] // Proportional value
            },
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                radius: '80%',
                center: ['50%', '50%'],
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: 16,

                    itemStyle: {
                        color: '#5bda92'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 13,
                        color: [
                            [0, '#5bda92'], // Example completed part
                            [1, '#f2f2f4'] // Uncompleted part
                        ]
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: [{value: 100 * 0.5}] // Example value
            },
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                radius: '60%',
                center: ['50%', '50%'],
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: 16,
                    itemStyle: {
                        color: '#ff4b8b'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 13,
                        color: [
                            [0, '#ff4b8b'], // Example completed part
                            [1, '#f2f2f4'] // Uncompleted part
                        ]
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    offsetCenter: [0, '20%'],
                    formatter: '1220\n每1915 kcal',
                    fontSize: 20,
                    color: 'yellow',
                    show: false // 显示详细信息
                },
                data: [{value: 100 * 0.7}] // Example value
            }
        ]
    };

    return <ReactECharts option={option} style={{height: '245px', width: '245px'}} />;
};

export default GaugeChart;
