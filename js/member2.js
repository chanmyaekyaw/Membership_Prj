var data = [
  {
    username: "Genevieve",
    fullname: "Chan Myae Kyaw",
    team: "FE",
  },
  {
    username: "John",
    fullname: "John Doe",
    team: "All",
  },
];
var tbody = document.getElementById("tbody");

var userInput = document.getElementById("username");
userInput.addEventListener("keyup", username_validation);

var nameInput = document.getElementById("name");
nameInput.addEventListener("keyup", name_validation);

var teamInput = document.getElementById("team");
var addOrUpdateButton = document.getElementById("addButton");

var team = document.getElementById("team");

function username_validation() {
  const usernameValue = userInput.value.trim();

  const username_warning = document.getElementById("username_warning");

  username_warning.innerHTML = "";

  const expr = /^[a-zA-Z0-9_]{6,20}$/;
  if (usernameValue == null || usernameValue == "") {
    username_warning.innerHTML = "";
    userInput.classList.remove("is-invalid");
  } else if (!expr.test(usernameValue)) {
    username_warning.innerHTML =
      "Only Alphabets, Numbers and Underscore and between 6 to 20 characters!";
    userInput.classList.add("is-invalid");
    userInput.classList.remove("is-valid");
    userInput.style.boxShadow = "none";
  } else if (expr.test(usernameValue)) {
    userInput.classList.remove("is-invalid");
  } else {
  }
}
function name_validation() {
  const nameValue = nameInput.value.trim();

  const name_warning = document.getElementById("name_warning");

  name_warning.innerHTML = "";

  const expr = /^[a-zA-Z][a-zA-Z\s]*$/;
  if (nameValue == null || nameValue == "") {
    name_warning.innerHTML = "";
    nameInput.classList.remove("is-invalid");
  } else if (!expr.test(nameValue)) {
    name_warning.innerHTML = "Only letters with space!";
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    nameInput.style.boxShadow = "none";
  } else if (expr.test(nameValue)) {
    nameInput.classList.remove("is-invalid");
  } else {
  }
}

var onAddOrUpdateButtonClicked = (event) => {
  const usernameValue = userInput.value.trim();
  const nameValue = nameInput.value.trim();
  const teamValue = teamInput.value.trim();
  if (usernameValue && nameValue && teamValue) {
    if (event.target.value === "+  Add") {
      addMember();
    } else {
      updateMember();
    }
  } else {
    alert("Please Fill All!");
  }
};

const addMember = () => {
  const usernameValue = userInput.value.trim();
  const nameValue = nameInput.value.trim();
  const teamValue = teamInput.value.trim();
  const oldMember = data.find((mem) => mem.username === usernameValue);
  if (oldMember) {
    alert("Member with username '" + usernameValue + "' already exits!");
  } else {
    data.push({
      username: usernameValue,
      fullname: nameValue,
      team: teamValue,
    });
  }
  displayData();
  userInput.value = "";
  nameInput.value = "";
  teamInput.value = "";
};

const extractSelectedUsername = (event) => {
  var btnClicked = null;
  if (event.target.nodeName === "i" || event.target.nodeName === "I") {
    btnClicked = event.target.parentElement;
  } else {
    btnClicked = event.target;
  }
  return btnClicked.getAttribute("mem-username");
};

const editRow = (event) => {
  const selectedUsername = extractSelectedUsername(event);
  const selectedMember = data.find((mem) => mem.username === selectedUsername);
  userInput.value = selectedMember.username;
  nameInput.value = selectedMember.fullname;
  teamInput.value = selectedMember.team;
  addOrUpdateButton.value = "Update";
};

const updateMember = () => {
  const usernameValue = userInput.value.trim();
  const nameValue = nameInput.value.trim();
  const teamValue = teamInput.value.trim();
  const oldMemberIndex = data.findIndex(
    (mem) => mem.username === usernameValue
  );
  if (oldMemberIndex !== -1) {
    data.splice(oldMemberIndex, 1, {
      username: usernameValue,
      fullname: nameValue,
      team: teamValue,
    });
    displayData();
    userInput.value = "";
    nameInput.value = "";
    teamInput.value = "";
    addOrUpdateButton.value = "+ Add";
  }
};

const deleteRow = (event) => {
  const selectedUsername = extractSelectedUsername(event);
  if (confirm("Are you sure to delete the member: " + selectedUsername + "?")) {
    data = data.filter((mem) => mem.username !== selectedUsername);
    displayData();
  }
};
const getRowHTML = (mem) => {
  return `
      <tr>
        <td>${mem.username}</td>
        <td>${mem.fullname}</td>
        <td>${mem.team}</td>
        <td class="edit_col">
          <button id="edit_btn" onclick="editRow(event)" mem-username="${mem.username}">
          <i class="fa fa-edit"></i>
          </button>
        </td>
        <td class="delete_col">
          <button class="delete_btn" onclick="deleteRow(event)" mem-username="${mem.username}">
          <i class="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
  `;
};
const displayData = () => {
  tbody.innerHTML = "";
  const dataHTMl = data.map((mem) => getRowHTML(mem)).join("");
  tbody.innerHTML = dataHTMl;
};
window.onload = () => {
  displayData();
};
