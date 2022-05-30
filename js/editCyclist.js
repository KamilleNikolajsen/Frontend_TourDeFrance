"use strict";

const formEditCyclist = document.querySelector("#editCyclist");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const totalTime = document.querySelector("#time");
const mountainPoints = document.querySelector("#mPoints");
const sprintPoints = document.querySelector("#sPoints");
const teamDD = document.querySelector("#teamDD");

showCyclist();

async function showCyclist(){

  let url = new URL(location.href);
  const cyclistId = url.searchParams.get("id");
  const cyclist = await fetchCyclist(cyclistId);

  name.value = cyclist.name;
  age.value = cyclist.age;
  totalTime.value = cyclist.timeTotalHours;
  sprintPoints.value = cyclist.sprintPoints;
  mountainPoints.value = cyclist.mountainPoints;

  await fetchTeams().then(fetchTeams => fetchTeams.forEach(team => {
    const option = document.createElement('option');
    option.type = team.id;
    option.textContent = team.name;
    teamDD.appendChild(option);
  }))

  teamDD.value = cyclist.team.name;

}

async function fetchCyclist(cyclistId){
  return await fetch("http://localhost:8080/getCyclist/" + cyclistId).then(response => response.json()).catch(reason => alert(reason));
}

function fetchTeams(){
  return fetch("http://localhost:8080/showAllTeams").then(response => response.json()).catch(reason => alert(reason));
}
