"use strict";

function displayTable(list){

  const table = document.querySelector("#table");

  const tr = createTableRow();
  tr.appendChild(createTableHeader("Name"));
  tr.appendChild(createTableHeader("Age"));
  tr.appendChild(createTableHeader("Total Time In Hours"));
  tr.appendChild(createTableHeader("Sprint Points"));
  tr.appendChild(createTableHeader("Mountain Points"));
  tr.appendChild(createTableHeader("Team"));
  tr.appendChild(createTableHeader("Edit"));
  tr.appendChild(createTableHeader("Delete"));
  table.appendChild(tr);


  list.forEach((cyclist) => table.appendChild(createTableRowData(cyclist)));

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

function createTableRowData(cyclist) {
  const tableRow = createTableRow();

  console.log(cyclist);

  tableRow.appendChild(createTableData(cyclist.name));
  tableRow.appendChild(createTableData(cyclist.age));
  tableRow.appendChild(createTableData(cyclist.timeTotalHours));
  tableRow.appendChild(createTableData(cyclist.sprintPoints));
  tableRow.appendChild(createTableData(cyclist.mountainPoints));
  tableRow.appendChild(createTableData(cyclist.team.name));
  tableRow.appendChild(createEditButton("Edit", "editButton", cyclist.id));
  tableRow.appendChild(createDeleteButton("Delete", "deleteButton", cyclist.id, tableRow))

  return tableRow;
}


function createEditButton(valName, idName, cycId){

  const editButton = document.createElement('input');
  editButton.type = 'button';
  editButton.setAttribute('value', valName);
  editButton.setAttribute('id', idName);
  editButton.setAttribute('class', "button");

  editButton.addEventListener('click', () => location.href = 'updateCyclist.html' + '?id=' + cycId);

  return editButton;
}
