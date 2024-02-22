document.addEventListener('DOMContentLoaded', function() {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(response => response.json())
        .then(data => displayData(data))

    function displayData(data) {
        var table = document.getElementById('tbody');

        data.data.forEach(entry => {
            var row = document.createElement('tr');
            var year = document.createElement('td');
            var population = document.createElement('td');

            year.textContent = entry.Year;
            population.textContent = entry.Population.toLocaleString();

            row.appendChild(year);
            row.appendChild(population);
            table.appendChild(row);
        });
    }
});