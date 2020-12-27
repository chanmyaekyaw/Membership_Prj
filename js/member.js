var username = document.getElementById("username");
username.addEventListener("keyup", username_validation);

var memberName = document.getElementById("name");
memberName.addEventListener("keyup", name_validation);

var team = document.getElementById("team");
var tableHead = document.getElementById("tableHead");
var selectedRow = null;

tableHead.style.visibility = "hidden";

function username_validation() {
  var usernameValue = username.value.trim();

  var username_warning = document.getElementById("username_warning");

  username_warning.innerHTML = "";

  var expr = /^[a-zA-Z0-9_]{6,20}$/;
  if (usernameValue == null || usernameValue == "") {
    username_warning.innerHTML = "";
    username.classList.remove("is-invalid");
  } else if (!expr.test(usernameValue)) {
    username_warning.innerHTML =
      "Only Alphabets, Numbers and Underscore and between 6 to 20 characters!";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  } else if (expr.test(usernameValue)) {
    username.classList.remove("is-invalid");
  } else {
  }
}
function name_validation() {
  var nameValue = memberName.value.trim();

  var name_warning = document.getElementById("name_warning");

  name_warning.innerHTML = "";

  var expr = /^[a-zA-Z][a-zA-Z\s]*$/;
  if (nameValue == null || nameValue == "") {
    name_warning.innerHTML = "";
    memberName.classList.remove("is-invalid");
  } else if (!expr.test(nameValue)) {
    name_warning.innerHTML = "Only letters with space!";
    memberName.classList.add("is-invalid");
    memberName.classList.remove("is-valid");
  } else if (expr.test(nameValue)) {
    memberName.classList.remove("is-invalid");
  } else {
  }
}
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
    editBtn.className = "delete_btn";
    editBtn.setAttribute("onclick", "editRow(event)");
    editCell.appendChild(editBtn);

    deleteCell.className = "table-bordered";
    var deleteBtn = document.createElement("button");

    const delIcon = document.createElement("i");
    delIcon.className = "fa fa-trash-o";
    deleteBtn.appendChild(delIcon);

    const delText = document.createElement("span");
    delText.innerHTML = "&nbsp;Delete";
    deleteBtn.appendChild(delText);

    deleteBtn.className = "delete_btn";
    deleteBtn.setAttribute("onclick", "deleteRow(event)");
    deleteCell.appendChild(deleteBtn);
  }
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

    var addTextAgain = "+ Add";
    var add = document.getElementById("addButton");
    add.value = addTextAgain;
  }
};

var deleteRow = (event) => {
  selectedRow = getRow(event.target);
  selectedRow.remove();
};

const getRow = (el) => {
  if (el.nodeName === "TR" || el.nodeName === "tr") {
    return el;
  } else {
    return getRow(el.parentElement);
  }
};
