const input = document.querySelector("#searchText");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#tbody");

function drawTable() {
  const size = Number.parseInt(input.value);
  if (!size || size < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  tableBody.innerHTML = "";

  for (let i = 0; i < 2 * size - 1; i++) {
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    for (let j = 0; j < 2 * size - 1; j++) {
      const td = document.createElement("td");

      // Lógica para formar um diamante
      if (Math.abs(size - 1 - i) + Math.abs(size - 1 - j) < size) {
        td.textContent = "*";
      }
      tr.appendChild(td);
    }
  }
  table.style.display = "table";
}

function hideTable() {
  table.style.display = "none";
}
