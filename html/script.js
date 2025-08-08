document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu inferior
    const menuItems = document.querySelectorAll('.bottom-menu .menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');
            
            // NOTE: Não usamos e.preventDefault() aqui para permitir que o navegador
            // siga o link para a página 'investir.html'.
        });
    });

    // Código para o gráfico de linha (Chart.js)
    // Verifique se o elemento 'investmentChart' existe antes de tentar desenhar
    const ctx = document.getElementById('investmentChart');
    if (ctx) {
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
                    backgroundColor: 'rgba(56, 193, 114, 0.2)',
                    borderColor: 'rgba(56, 193, 114, 1)',
                    borderWidth: 2,
                    tension: 0.4,
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
                            maxTicksLimit: 7
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
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
    }
});