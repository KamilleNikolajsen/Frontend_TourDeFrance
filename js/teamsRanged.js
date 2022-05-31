"use strict";

const timeUrl = "http://localhost:8080/bestCountryByTime";
const sPointUrl = "http://localhost:8080/bestCountryBySPoints";
const mPointUrl = "http://localhost:8080/bestCountryByMPoints";

function fetchRangedList(url){
  return fetch(url).then(response => response.json()).catch(reason => alert(reason));
}

async function showRangedByTime(){
  const timeList = await fetchRangedList(timeUrl);
  //console.log(timeList);
  await displayTableTeam(timeList, createTableRowDataTime, "#timeTable");
}

async function showRangedBySPoints(){
  const sprintList = await fetchRangedList(sPointUrl);
  await displayTableTeam(sprintList, createTableRowDataSprint, "#sprintTable");
}

async function showRangedByMPoints(){
  const mountainList = await fetchRangedList(mPointUrl);
  await displayTableTeam(mountainList, createTableRowDataMountain, "#mountainTable");
}

showRangedByTime();
showRangedBySPoints();
showRangedByMPoints();
