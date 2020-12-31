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
var nameInput = document.getElementById("name");
var teamInput = document.getElementById("team");
var addOrUpdateButton = document.getElementById("addButton");

var team = document.getElementById("team");

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
    alert("Member with username " + userText + " already exits!");
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

const updateMember = () => {};

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
