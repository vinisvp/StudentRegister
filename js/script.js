$("#inputTel").mask("(00) 00000-0000");

var students = [
    {id: 1, name: "Pedro Antonio", email: "pedro@abutua.com", phone: "(15) 9999-9999", course: 2, shift: 2}
];

var course = ["Java", "Angular", "HTML/CSS"];
var shift = ["Manhã", "Tarde", "Noite"];

function addStudentToTable(student){
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow();

    var Node = document.createTextNode(student.id);
    newRow.insertCell().appendChild(Node);

    Node = document.createTextNode(student.name);
    newRow.insertCell().appendChild(Node);

    Node = document.createTextNode(student.email);
    var cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(Node);

    Node = document.createTextNode(student.phone);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(Node);

    Node = document.createTextNode(course[student.course - 1]);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(Node);

    Node = document.createTextNode(shift[student.shift - 1]);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(Node);
}

function showStudents(){
    for(student of students){
        addStudentToTable(student);
    }
}

showStudents();
