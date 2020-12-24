var username = document.getElementById("username");
var memberName = document.getElementById("name");
var team = document.getElementById("team");
var tableHead = document.getElementById("tableHead");
var selectedRow = null;

tableHead.style.visibility = "hidden";

var onAddOrUpdateButtonClicked = (event) => {
  if (event.target.value === "+  Add") {
    addMember();
  } else {
    updateMember();
  }
};
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
    tableHead.style.visibility = "visible";

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
    editBtn.id = "edit_btn";
    editBtn.setAttribute("onclick", "editRow(event)");
    editCell.appendChild(editBtn);

    deleteCell.className = "table-bordered";
    var deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.className = "delete_btn";
    deleteBtn.value = "Delete";
    editBtn.className = "delete_btn";
    deleteBtn.setAttribute("onclick", "deleteRow(event)");
    deleteCell.appendChild(deleteBtn);
  }
  // }
};

var editRow = (event) => {
  var rowUsername =
    event.target.parentElement.parentElement.firstChild.innerHTML;
  var rowName =
    event.target.parentElement.parentElement.firstChild.nextSibling.innerHTML;
  var rowTeam =
    event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling
      .innerHTML;

  username.value = rowUsername;
  memberName.value = rowName;
  team.value = rowTeam;

  var updateText = "Update";
  var add = document.getElementById("addButton");
  add.value = updateText;
  selectedRow = event.target.parentElement.parentElement;
};
var updateMember = () => {
  var usernameValue = username.value;
  var nameValue = memberName.value;
  var teamValue = team.value;

  if (usernameValue == "" || nameValue == "" || teamValue == "") {
    alert("Please Fill All");
  } else {
    tableHead.style.visibility = "visible";

    username.value = "";
    memberName.value = "";
    team.value = "";

    selectedRow.firstChild.innerHTML = usernameValue;
    selectedRow.firstChild.nextSibling.innerHTML = nameValue;
    selectedRow.firstChild.nextSibling.nextSibling.innerHTML = teamValue;
  }
};

var deleteRow = (event) => {
  selectedRow = event.target.parentElement.parentElement;
  selectedRow.remove();
};
