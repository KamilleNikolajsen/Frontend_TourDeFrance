"use strict";

const formAddCyclist = document.querySelector("#addCyclist");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const totalTime = document.querySelector("#time");
const mountainPoints = document.querySelector("#mPoints");
const sprintPoints = document.querySelector("#sPoints");
const teamDropDown = document.querySelector("#teamDropDown");
const rangedButton = document.querySelector("#rangedButton");
const showTeamButton = document.querySelector("#teamButton");

const url = "http://localhost:8080/addCyclist";

formAddCyclist.addEventListener("submit", addCyclist);
rangedButton.addEventListener('click', showRangedPage);

async function addCyclist(event){
  event.preventDefault();
  //console.log(teamDropDown.options[teamDropDown.selectedIndex].innerText);

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name.value,
      age: age.value,
      timeTotalHours: totalTime.value,
      sprintPoints: sprintPoints.value,
      mountainPoints: mountainPoints.value,
      team: createTeamObject()
    })
  }).then(response => response.json().catch(reason => alert(reason)))
  showCyclists();

  name.value = "";
  age.value = "";
  totalTime.value = "";
  sprintPoints.value = "";
  mountainPoints.value = "";
  teamDropDown.selectedIndex = teamDropDown.selectedIndex[0];
}

function createTeamObject(){
  //console.log("create Team Object");
  let team = {};

  const teamKey = teamDropDown.options[teamDropDown.selectedIndex].innerText;

  let team1 = teamMap.get(teamKey);
  team.id = team1.id;
  team.name = team1.name;
  team.letter = team1.letter;
  team.votes = team1.votes;

  //console.log(team.name);
  //console.log(team.letter);
  //console.log(team.id);

  return team;
}

function showRangedPage() {
    location.href = 'teamsRanged.html';
}

function showTeam() {

  if (confirm("Are you sure you want to show Cyclist by Team?")) {
    const team = createTeamObject();
    //console.log(team.id);
    location.href = 'showTeam.html' + '?id=' + team.id;
  }
}
showTeamButton.addEventListener('click', showTeam);



