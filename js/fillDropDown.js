"use strict";

const fillTeamDropDown = document.querySelector("#teamDropDown");

const teamMap = new Map();

const teamUrl ="http://localhost:8080/showAllTeams";


function fetchTeams(){
  return fetch(teamUrl).then(response => response.json()).catch(reason => alert(reason));
}

async function fillDropDown(){
  const teamList = await fetchTeams();

  const option = document.createElement('option');
  option.value = 'nullChosen';
  option.textContent = 'Show all';

  fillTeamDropDown.appendChild(option);


  console.log(teamList);
  teamList.forEach((team, index) => {
    console.log(team.name + "ix=" + index);
    teamMap.set(team.name, team);
  })

  for (const teamKey of teamMap.keys()) {
    const element = document.createElement("option");
    element.textContent = teamKey;
    element.value = teamMap.get(teamKey); //important value follows the key.
    fillTeamDropDown.appendChild(element);
  }

}

fillDropDown();
