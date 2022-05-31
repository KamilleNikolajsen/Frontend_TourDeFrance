"use strict";

//const goBackButton = document.querySelector("#goBackButton");
const headline = document.querySelector("#h3");
const Team = document.querySelector("#h4");

function fetchTeam(id){
  const showCyclistsByTeamUrl = "http://localhost:8080/showCyclistsByTeam/" + id;
  return fetch(showCyclistsByTeamUrl).then(response => response.json()).catch(reason => alert(reason));
}

function emptyTable() {
  document.querySelector('#table').innerHTML = '';
}

async function showTeam(){
  let url = new URL(location.href);
  const teamId = url.searchParams.get("id");

  //console.log(teamId);
  emptyTable();

  const list = await fetchTeam(teamId);
  list.forEach(cyclist => {
    headline.textContent = "Cyclists From " + cyclist.team.name;
  })
  //console.log(headline);
  //console.log(list);

  await displayTable(list);
}
showTeam();
