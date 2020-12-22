var username = document.getElementById("username");
var memberName = document.getElementById("name");
var team = document.getElementById("team");
var tableHead = document.getElementById("tableHead");
tableHead.style.visibility = "hidden";
var addMember = () => {
  var usernameValue = username.value;
  var nameValue = memberName.value;
  var teamValue = team.value;

  var letters = "/^[a-zA-Z]+$/";
  var name_warning = document.getElementById("name_warning");
  name_warning = "";

  if (usernameValue == "" || nameValue == "" || teamValue == "") {
    alert("Please Fill All");
  } else {
    // if (!letters.test(nameValue)) {
    //   name_warning = "Must be letters!";
    // } else {
    tableHead.style.visibility = "visible";

    name_warning = "";
    username.value = "";
    memberName.value = "";
    team.value = "";

    var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow(table.rows.length);

    var usernameCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var teamCell = row.insertCell(2);
    var editCell = row.insertCell(3);
    var deleteCell = row.insertCell(4);

    usernameCell.className = "table-bordered";
    usernameCell.innerHTML = usernameValue;

    nameCell.className = "table-bordered";
    nameCell.innerHTML = nameValue;

    teamCell.className = "table-bordered";
    teamCell.innerHTML = teamValue;

    editCell.className = "table-bordered";
    var editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.value = "Edit";
    editBtn.className = "edit_btn";
    editBtn.style.borderRadius = "50px";
    editBtn.style.border = "1px transparent";
    editBtn.style.width = "80px";
    editBtn.style.height = "30px";
    editBtn.style.textAlign = "center";
    editBtn.style.color = "#000";
    editBtn.style.backgroundColor = "#d0e2f2";
    editBtn.setAttribute("onclick", "editRow(this)");
    editCell.appendChild(editBtn);

    deleteCell.className = "table-bordered";
    var deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.className = "delete_btn";
    deleteBtn.style.borderRadius = "50px";
    deleteBtn.style.border = "1px transparent";
    deleteBtn.style.width = "80px";
    deleteBtn.style.height = "30px";
    deleteBtn.style.textAlign = "center";
    deleteBtn.style.color = "#000";
    deleteBtn.style.backgroundColor = "#e7b8af";
    deleteBtn.setAttribute("onclick", "deleteRow(this)");
    deleteCell.appendChild(deleteBtn);
  }
  // }
};
