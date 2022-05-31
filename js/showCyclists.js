"use strict";

const sortButton = document.querySelector("#sortButton");
const randomButton = document.querySelector("#randomButton");
const timeButton = document.querySelector("#timeButton");
const cyclistsSortedUrl = "http://localhost:8080/ShowCyclistsSortedByTeam"
const cyclistUrl = "http://localhost:8080/showAllCyclists";
const timeSortUrl = "http://localhost:8080/showCyclistsSortedByTime";

sortButton.addEventListener('click', showSortedCyclists);
randomButton.addEventListener('click', showCyclists);
timeButton.addEventListener('click', showSortedByTime);

function fetchCyclists(url){
  return fetch(url).then(response => response.json()).catch(reason => alert(reason));
}

function emptyTable() {
  document.querySelector('#table').innerHTML = '';
}

async function showCyclists(){
  emptyTable();

  const list1 = await fetchCyclists(cyclistUrl);
  console.log(list1);

  await displayTable(list1);
}

async function showSortedCyclists(){
  emptyTable();

  console.log("in sorted");

  const list2 = await fetchCyclists(cyclistsSortedUrl)
  console.log(list2);
  await displayTable(list2)
}

async function showSortedByTime(){
  emptyTable();

  console.log("in timesort");

  const list3 = await fetchCyclists(timeSortUrl);
  console.log(list3);
  await displayTable(list3);
}

showCyclists();

