document.addEventListener('DOMContentLoaded', function ()
{

    // ==============================
    // 1) Rendimiento Relativo (Bar)
    // ==============================
    const ctx1 = document.getElementById('barChart');
    if (ctx1)
    {
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['MEDIA(BAJO)', 'MUY BAJA', 'MEDIA(LOMA)', 'BAJO', 'BAJA', 'ALTA', 'BAJA (LOMA)'],
                datasets: [{
                    label: 'Rendimiento Relativo (%)',
                    data: [98.5, 81.5, 111.1, 73.2, 97.6, 110.8, 86.8],
                    backgroundColor: [
                        'rgba(0, 128, 0, 0.6)',
                        'rgba(34, 139, 34, 0.6)',
                        'rgba(60, 179, 113, 0.6)',
                        'rgba(144, 238, 144, 0.6)',
                        'rgba(107, 142, 35, 0.6)',
                        'rgba(46, 139, 87, 0.6)',
                        'rgba(0, 100, 0, 0.6)'
                    ],
                    borderColor: [
                        'rgba(0, 128, 0, 1)',
                        'rgba(34, 139, 34, 1)',
                        'rgba(60, 179, 113, 1)',
                        'rgba(144, 238, 144, 1)',
                        'rgba(107, 142, 35, 1)',
                        'rgba(46, 139, 87, 1)',
                        'rgba(0, 100, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Rendimiento Relativo por Ambiente',
                        font: { size: 14 }
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
                            font: { size: 10 }
                        },
                        title: {
                            display: true,
                            text: 'Rendimiento Relativo (%)',
                            font: { size: 12 }
                        }
                    },
                    x: {
                        ticks: {
                            font: { size: 10 }
                        },
                        title: {
                            display: true,
                            text: 'Ambiente',
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }

    // ==============================
    // 2) NDVI (Line)
    // ==============================
    const ctx2 = document.getElementById('ndviCard');
    if (ctx2)
    {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ["16-sep-23", "1-oct-23", "16-oct-23", "1-nov-23", "16-nov-23", "1-dic-23", "16-dic-23", "1-ene-24", "16-ene-24", "1-feb-24", "16-feb-24", "1-mar-24", "16-mar-24", "1-abr-24"],
                datasets: [
                    { label: "MEDIA", data: [0.2484, 0.2147, 0.2404, 0.1515, 0.3939, 0.5595, 0.6717, 0.6936, 0.7659, 0.5246, 0.5283, 0.5315, 0.5941, 0.5779], borderColor: "rgba(255,206,86,1)", backgroundColor: "rgba(255,206,86,.3)", tension: .2, pointRadius: 3 },
                    { label: "BAJA", data: [0.2817, 0.2556, 0.3105, 0.1823, 0.4952, 0.6491, 0.6486, 0.6337, 0.6528, 0.4741, 0.4847, 0.5059, 0.5539, 0.5800], borderColor: "rgba(54,162,235,1)", backgroundColor: "rgba(54,162,235,.3)", tension: .2, pointRadius: 3 },
                    { label: "ALTA", data: [0.2589, 0.2085, 0.2191, 0.1345, 0.3515, 0.5088, 0.6316, 0.7478, 0.8181, 0.5836, 0.5666, 0.5468, 0.5685, 0.5146], borderColor: "rgba(255,99,132,1)", backgroundColor: "rgba(255,99,132,.3)", tension: .2, pointRadius: 3 },
                    { label: "MUY BAJA", data: [0.2806, 0.2766, 0.2351, 0.1741, 0.4463, 0.5488, 0.5613, 0.5241, 0.5460, 0.5006, 0.5159, 0.5216, 0.5135, 0.5597], borderColor: "rgba(153,102,255,1)", backgroundColor: "rgba(153,102,255,.3)", tension: .2, pointRadius: 3 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#fff' } } },
                scales: {
                    x: { ticks: { color: '#ccc' } },
                    y: { ticks: { color: '#ccc' }, min: 0, max: 1 }
                }
            }
        });
    }

    // ==============================
    // 3) RFA (Line)
    // ==============================
    const ctx3 = document.getElementById('rfaCard');
    if (ctx3)
    {
        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ["16-sep-23", "1-oct-23", "16-oct-23", "1-nov-23", "16-nov-23", "1-dic-23", "16-dic-23", "1-ene-24", "16-ene-24", "1-feb-24", "16-feb-24", "1-mar-24", "16-mar-24", "1-abr-24"],
                datasets: [
                    { label: "MEDIA", data: [4.72, 102.56, 15.70, 196.77, 32.67, 59.91, 10.84, 162.85, 247.65, 267.70, 289.05, 306.77, 32.94, 32.94], borderColor: "rgba(255,206,86,1)", backgroundColor: "rgba(255,206,86,.3)", tension: .2, pointRadius: 3 },
                    { label: "BAJA", data: [54.78, 121.26, 19.57, 241.32, 44.18, 84.87, 136.84, 177.97, 22.90, 24.50, 26.32, 27.98, 299.47, 299.47], borderColor: "rgba(54,162,235,1)", backgroundColor: "rgba(54,162,235,.3)", tension: .2, pointRadius: 3 },
                    { label: "ALTA", data: [49.45, 103.29, 152.77, 139.11, 29.64, 51.34, 91.91, 161.24, 268.37, 294.50, 32.03, 339.28, 35.95, 35.95], borderColor: "rgba(255,99,132,1)", backgroundColor: "rgba(255,99,132,.3)", tension: .2, pointRadius: 3 },
                    { label: "MUY BAJA", data: [54.51, 127.55, 19.57, 2.47, 40.89, 66.29, 95.89, 121.35, 153.01, 171.03, 191.63, 20.85, 230.07, 230.07], borderColor: "rgba(153,102,255,1)", backgroundColor: "rgba(153,102,255,.3)", tension: .2, pointRadius: 3 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#fff' } } },
                scales: {
                    x: { ticks: { color: '#ccc' } },
                    y: { ticks: { color: '#ccc' } }
                }
            }
        });
    }

    const tags = document.querySelectorAll('.tag');
    const cards = document.querySelectorAll('.card');
    tags.forEach(t => t.addEventListener('click', () =>
    {
        tags.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const f = t.dataset.filter;
        cards.forEach(c =>
        {
            if (f === 'all') { c.classList.remove('hidden'); return; }
            const match = (c.dataset.tags || '').split(' ').includes(f);
            c.classList.toggle('hidden', !match);
        });
    }));

    // --- Drag & drop simple para organizar ---
    const stage = document.getElementById('stage');
    let dragEl = null; let offsetX = 0, offsetY = 0;

    stage.addEventListener('mousedown', (e) =>
    {
        const el = e.target.closest('.draggable');
        if (!el) return;
        dragEl = el; dragEl.classList.add('dragging');
        const rect = dragEl.getBoundingClientRect();
        offsetX = e.clientX - rect.left; offsetY = e.clientY - rect.top;
    });

    stage.addEventListener('mousemove', (e) =>
    {
        if (!dragEl) return;
        const stageRect = stage.getBoundingClientRect();
        let x = e.clientX - stageRect.left - offsetX;
        let y = e.clientY - stageRect.top - offsetY;
        // Limitar dentro del escenario
        x = Math.max(0, Math.min(stageRect.width - dragEl.offsetWidth, x));
        y = Math.max(0, Math.min(stageRect.height - dragEl.offsetHeight, y));
        dragEl.style.left = x + 'px';
        dragEl.style.top = y + 'px';
        dragEl.style.right = 'auto';
        dragEl.style.bottom = 'auto';
    });

    window.addEventListener('mouseup', () => { if (dragEl) { dragEl.classList.remove('dragging'); dragEl = null; } });

});
