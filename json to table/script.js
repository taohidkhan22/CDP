document.addEventListener('DOMContentLoaded', function() {
    
    var myarray = [
        { 'name': 'Taohid', 'id': '25', 'subject': 'DSD', 'marks': '78' },
        { 'name': 'Arnob', 'id': '5', 'subject': 'SE', 'marks': '25' },
        { 'name': 'Taohid', 'id': '25', 'subject': 'SA', 'marks': '60' },
        { 'name': 'Taohid', 'id': '6', 'subject': 'ACC', 'marks': '40' },
        { 'name': 'Arnob', 'id': '1', 'subject': 'HUM', 'marks': '70' },
    ];

    buildtable(myarray);

    function buildtable(data) {
        var tableBody = document.getElementById('myTable');
        if (tableBody) {
            var rows = '';
            for (var i = 0; i < data.length; i++) {
                var row = `<tr> 
                    <td>${data[i].name}</td>
                    <td>${data[i].id}</td>
                    <td>${data[i].subject}</td>
                    <td>${data[i].marks}</td>
                </tr>`;
                rows += row; 
            }
            tableBody.innerHTML = rows;
        } else {
            console.error("Element with ID 'myTable' not found.");
        }
    }
});