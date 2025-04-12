const tableBody = document.querySelector("#dataTable tbody");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(row => {
      const tr = document.createElement("tr");

      const columns = ["date", "gali", "disawar", "faridabad", "ghaziabad"];

      columns.forEach(col => {
        const td = document.createElement("td");
        td.textContent = row[col] !== undefined ? row[col] : "xx";
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });
  })
  .catch((err) => {
    console.error("Error loading data:", err);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 5;
    td.textContent = "Error loading data.";
    tr.appendChild(td);
    tableBody.appendChild(tr);
  });
