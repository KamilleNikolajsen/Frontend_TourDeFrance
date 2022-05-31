"use strict";

function displayTableTeam(list, funcName, tableName){
  const table = document.querySelector(tableName);

  const tr = createTableRow();
  tr.appendChild(createTableHeader("Team Name"));
  tr.appendChild(createTableHeader("Score"));
  tr.appendChild(createTableHeader("Ranging"));
  table.appendChild(tr);

  list.forEach((team) => table.appendChild(funcName(team, list)));
}

function createTableRow() {
  return document.createElement('tr');
}

function createTableHeader(name) {
  const th = document.createElement('th');
  th.innerText = name;
  return th;
}

function createTableData(data) {
  const tableData = document.createElement('td');
  tableData.innerText = data;
  return tableData;
}

function createTableRowDataTime(team, list) {
  const tableRow = createTableRow();

  tableRow.appendChild(createTableData(team.name));
  tableRow.appendChild(createTableData(team.timeTotal + " Hours"));
  tableRow.appendChild(createTableData(list.indexOf(team) + 1 + " Place"));

  return tableRow;
}

function createTableRowDataSprint(team, list) {
  const tableRow = createTableRow();

  //console.log(team);
  tableRow.appendChild(createTableData(team.name));
  tableRow.appendChild(createTableData(team.sprintPointTotal + " Points"));
  tableRow.appendChild(createTableData(list.indexOf(team) + 1 + " Place"));

  return tableRow;
}

function createTableRowDataMountain(team, list) {
  const tableRow = createTableRow();

  tableRow.appendChild(createTableData(team.name));
  tableRow.appendChild(createTableData(team.mountainPointTotal + " Points"));
  tableRow.appendChild(createTableData(list.indexOf(team) + 1 + " Place"));

  return tableRow;
}

