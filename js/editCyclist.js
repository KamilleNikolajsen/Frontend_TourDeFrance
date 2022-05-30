"use strict";

const formEditCyclist = document.querySelector("#editCyclist");
const nameNew = document.querySelector("#name");
const ageNew = document.querySelector("#age");
const totalTimeNew = document.querySelector("#time");
const mountainPointsNew = document.querySelector("#mPoints");
const sprintPointsNew = document.querySelector("#sPoints");
const teamDD = document.querySelector("#teamDD");
const updateButton = document.querySelector("#updateButton");

showCyclist();

async function showCyclist(){

  let url = new URL(location.href);
  const cyclistId = url.searchParams.get("id");
  const cyclist = await fetchCyclist(cyclistId);

  nameNew.value = cyclist.name;
  ageNew.value = cyclist.age;
  totalTimeNew.value = cyclist.timeTotalHours;
  sprintPointsNew.value = cyclist.sprintPoints;
  mountainPointsNew.value = cyclist.mountainPoints;

  await fetchTeams().then(fetchTeams => fetchTeams.forEach(team => {
    const optionNew = document.createElement('option');
    optionNew.value = team.id;
    console.log(optionNew.value);
    optionNew.textContent = team.name;
    console.log(optionNew.textContent);
    teamDD.appendChild(optionNew);
  }))

  teamDD.value = cyclist.team.id;

  formEditCyclist.addEventListener("submit", editCyclist);

  //updateButton.addEventListener("click", editCyclist);

}

async function editCyclist(event){
  event.preventDefault();

  let newUrl = new URL(location.href);
  const cyclistId = newUrl.searchParams.get("id");
  console.log(cyclistId);
  const cyclist = await fetchCyclist(cyclistId);

  await saveCyclist(cyclist);
}

async function saveCyclist(cyclist){

  console.log(cyclist);

  const editUrl = "http://localhost:8080/editCyclist"

  console.log(cyclist.team.name);

  await fetch(editUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      id: cyclist.id,
      name: nameNew.value,
      age: ageNew.value,
      timeTotalHours: totalTimeNew.value,
      sprintPoints: sprintPointsNew.value,
      mountainPoints: mountainPointsNew.value,
      team: {
        id: teamDD.value,
        name: teamDD.textContent,
      }
    })
  }).then(response => response.json().catch(reason => alert(reason)))

  location.href = 'cyclists.html';
}


async function fetchCyclist(cyclistId){
  return await fetch("http://localhost:8080/getCyclist/" + cyclistId).then(response => response.json()).catch(reason => alert(reason));
}

function fetchTeams(){
  return fetch("http://localhost:8080/showAllTeams").then(response => response.json()).catch(reason => alert(reason));
}
