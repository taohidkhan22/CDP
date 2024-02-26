//manual array to html table:
// document.addEventListener('DOMContentLoaded', function() {
    
//     var myarray = [
//         { 'name': 'Taohid', 'id': '25', 'subject': 'DSD', 'marks': '78' },
//         { 'name': 'Arnob', 'id': '5', 'subject': 'SE', 'marks': '25' },
//         { 'name': 'Taohid', 'id': '25', 'subject': 'SA', 'marks': '60' },
//         { 'name': 'Taohid', 'id': '6', 'subject': 'ACC', 'marks': '40' },
//         { 'name': 'Arnob', 'id': '1', 'subject': 'HUM', 'marks': '70' },
//     ];

//     buildtable(myarray);

//     function buildtable(data) {
//         var tableBody = document.getElementById('myTable');
//         if (tableBody) {
//             var rows = '';
//             for (var i = 0; i < data.length; i++) {
//                 var row = `<tr> 
//                     <td>${data[i].name}</td>
//                     <td>${data[i].id}</td>
//                     <td>${data[i].subject}</td>
//                     <td>${data[i].marks}</td>
//                 </tr>`;
//                 rows += row; 
//             }
//             tableBody.innerHTML = rows;
//         } else {
//             console.error("Element with ID 'myTable' not found.");
//         }
//     }
// });


//APi to html table:
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => buildTable(data))
        .catch(error => console.error('Error fetching data:', error));

    function buildTable(data) {
        var tableBody = document.getElementById('myTable');
        if (tableBody) {
            var rows = '';
            data.forEach(user => {
                var row = `<tr> 
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>`;
                rows += row;
            });
            tableBody.innerHTML = rows;
        } else {
            console.error("Element with ID 'myTable' not found.");
        }
    }
});


// fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res =>{
//     return res.json();
// })
// .then(data =>
//     {
//         console.log(data);
//     })



// async function loadIntoTable(url, table) {

//     const tableHead = table.querySelector("thead");
    
//     const tableBody = table.querySelector("tbody"); 
//     const response = await fetch(url); 
//     const data = await response.json();
    
//     console.log(data);
    
//     }
    
//     loadIntoTable("https://gist.githubusercontent.com/sanjeevkumar91/056498117cb9a14828276a816090064f/raw/47aa48c4bf6b086468f8d9f5f4af8b7b8f478151/student-data.json", document.querySelector("table"));