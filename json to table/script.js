
var myarray = [
    { 'name': 'Taohid', 'id': '25', 'subject': 'DSD', 'marks': '25' },
    { 'name': 'Taohid', 'id': '25', 'subject': 'DSD', 'marks': '25' },
    { 'name': 'Taohid', 'id': '25', 'subject': 'DSD', 'marks': '25' },
];

buildtable(myarray);

function buildtable(data) {
    var tableBody = document.getElementById('myTable');
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
}