ddocument.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('shareholderReturnChart').getContext('2d');
    const shareholderReturnChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Return on Lines - Gross', 'Return on Lines - Net', 'Return on Equity'],
            datasets: [{
                label: 'Percentage',
                data: [22.07, 18.29, 24],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const orgCtx = document.getElementById('organizationalChart').getContext('2d');
    const organizationalChart = new Chart(orgCtx, {
        type: 'bar',
        data: {
            labels: ['CEO', 'CCO', 'CTO', 'COO', 'CRO', 'Controller'],
            datasets: [{
                label: 'Number of Roles',
                data: [1, 1, 1, 1, 1, 1],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const legalCtx = document.getElementById('legalStructureChart').getContext('2d');
    const legalStructureChart = new Chart(legalCtx, {
        type: 'bar',
        data: {
            labels: ['Soma XT Holding', 'Soma XT USA', 'SXT Markets', 'Soma XT Brazil'],
            datasets: [{
                label: 'Number of Entities',
                data: [1, 1, 1, 1],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
