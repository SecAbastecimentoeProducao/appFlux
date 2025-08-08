document.addEventListener('DOMContentLoaded', () => {
    // Código para o menu inferior
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const pageName = item.getAttribute('data-name');
            console.log(`Navegando para a página: ${pageName}`);
        });
    });

    // Código para o gráfico de linha
    const ctx = document.getElementById('investmentChart').getContext('2d');

    // Dados de exemplo para o gráfico
    // Em uma aplicação real, estes dados viriam do seu backend
    const labels = [];
    const dataPoints = [];
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }));
        // Dados aleatórios para simular o retorno diário
        dataPoints.push(Math.random() * 5000 + 50000); 
    }

    const investmentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Retorno (R$)',
                data: dataPoints,
                backgroundColor: 'rgba(56, 193, 114, 0.2)', // Cor verde do seu design
                borderColor: 'rgba(56, 193, 114, 1)',
                borderWidth: 2,
                tension: 0.4, // Curva suave na linha
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Valor (R$)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Últimos 30 dias'
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 7 // Limita o número de labels no eixo X para não poluir
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Oculta a legenda do gráfico
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'R$ ' + context.parsed.y.toFixed(2).replace('.', ',');
                        }
                    }
                }
            }
        }
    });
});