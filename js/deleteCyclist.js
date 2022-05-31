"use strict";

function createDeleteButton(buttonName, idName, id, row){
  const deleteButton = document.createElement('input');

  deleteButton.type = 'button';
  deleteButton.setAttribute('value', buttonName);
  deleteButton.setAttribute('id', idName);
  deleteButton.setAttribute('class', "button");
  deleteButton.addEventListener('click', () => deleteCyclist(id, row));

  return deleteButton;
}

async function deleteCyclist(id, row){
  const deleteUrl = "http://localhost:8080/deleteCyclist/" + id;

  if(confirm("Are you sure you want to delete this Cyclist?")) {
    try {
      await fetch(deleteUrl, {
        method: "DELETE"
      });
      row.remove();
    } catch (reason) {
      alert(reason);
    }
  }
}
