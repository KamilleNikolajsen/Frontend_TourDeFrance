"use strict";

const cyclistUrl = "http://localhost:8080/showAllCyclists";

function fetchCyclists(){
  return fetch(cyclistUrl).then(response => response.json()).catch(reason => alert(reason));
}

function emptyTable() {
  document.querySelector('#table').innerHTML = '';
}


async function showCyclists(){

  emptyTable();

  const list = await fetchCyclists();
  console.log(list);

  await displayTable(list);
}

showCyclists();


