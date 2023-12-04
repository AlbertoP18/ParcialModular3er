    // // URL del archivo JSON en la nube
    // const jsonUrl = 'https://albertop18.github.io/api-Notas/notas.json';

    // // Obtener datos JSON mediante fetch
    // fetch('jsonUrl')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     // Obtener la tabla y el cuerpo de la tabla
    //     const table = document.getElementById('miTabla');
    //     const tbody = table.querySelector('tbody');

    //     // Limpiar el cuerpo de la tabla
    //     tbody.innerHTML = '';

    //     // Iterar sobre los datos del JSON y agregar filas a la tabla
    //     data.forEach(rowData => {
    //       const row = document.createElement('tr');

    //       Object.values(rowData).forEach(value => {
    //         const cell = document.createElement('td');
    //         cell.textContent = value;
    //         row.appendChild(cell);
    //       });

    //       tbody.appendChild(row);
    //     });
    //   })
    //   .catch(error => console.error('Error al obtener datos JSON:', error));