const ctx = document.getElementById('barChart').getContext('2d');

const data = {
    labels: ['MEDIA(BAJO)', 'MUY BAJA', 'MEDIA(LOMA)', 'BAJO', 'BAJA', 'ALTA', 'BAJA (LOMA)'],
    datasets: [{
        label: 'Rendimiento Relativo (%)',
        data: [98.5, 81.5, 111.1, 73.2, 97.6, 110.8, 86.8],
        backgroundColor: [
            'rgba(0, 128, 0, 0.6)',     // Verde oscuro
            'rgba(34, 139, 34, 0.6)',   // Verde bosque
            'rgba(60, 179, 113, 0.6)',  // Verde medio
            'rgba(144, 238, 144, 0.6)', // Verde claro
        ],
        borderColor: [
            'rgba(0, 128, 0, 1)',
            'rgba(34, 139, 34, 1)',
            'rgba(60, 179, 113, 1)',
            'rgba(144, 238, 144, 1)'
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false, // importante para controlar altura
        layout: {
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Rendimiento Relativo por Ambiente',
                font: {
                    size: 14 // más chico
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 10 // más chico
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: context => `${context.parsed.y}%`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 120,
                ticks: {
                    stepSize: 20,
                    callback: value => `${value}%`,
                    font: {
                        size: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Rendimiento Relativo (%)',
                    font: {
                        size: 12
                    }
                }
            },
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        size: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Ambiente',
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
};


new Chart(ctx, config);