let chartInstance = null;

function calcular() {
    const valor_inicial = document.getElementById('valor_inicial').value;
    const tasa_interes = document.getElementById('tasa_interes').value;
    const periodos = document.getElementById('periodos').value * document.getElementById('tipo_periodo').value;
    const tipo_interes = document.getElementById('tipo_interes').value;

    fetch('/calcular', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            valor_inicial: parseFloat(valor_inicial),
            tasa_interes: parseFloat(tasa_interes),
            periodos: parseInt(periodos),
            tipo_interes: tipo_interes
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultTableBody = document.getElementById('resultTableBody');
        resultTableBody.innerHTML = '';
        data.valores.forEach((valor, index) => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            cell1.textContent = `Periodo ${index}`;
            cell2.textContent = `$${valor.toFixed(2)}`;
            row.appendChild(cell1);
            row.appendChild(cell2);
            resultTableBody.appendChild(row);
        });

        // Solicitar los datos del gráfico
        fetch('/grafico', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                valor_inicial: parseFloat(valor_inicial),
                tasa_interes: parseFloat(tasa_interes),
                periodos: parseInt(periodos),
                tipo_interes: tipo_interes
            })
        })
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('resultChart').getContext('2d');
            
            // Borrar el gráfico anterior si existe
            if (chartInstance) {
                chartInstance.destroy();
            }

            // Crear un nuevo gráfico
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Valor de la Inversión',
                        data: data.valores,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    });
}
