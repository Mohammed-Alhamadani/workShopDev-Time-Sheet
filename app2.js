window.onload = pageReady;

function pageReady() {
    const addBtn = document.getElementById("add-btn");
    const tableBody = document.getElementById("tBody");

    addBtn.addEventListener("click", () => {
        const student = document.getElementById("student").value;
        const day = document.getElementById("day").value;
        const task = document.getElementById("task").value;
        const time = document.getElementById("time").value;
        const addInfo = document.getElementById("add-info").value;

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${student}</td>
        <td>${day}</td>
        <td>${task}</td>
        <td>${time}</td>
        <td>${addInfo}</td>
    `;
        tableBody.appendChild(row);

        // Clear input fields
        document.getElementById("student").value = "";
        document.getElementById("day").value = "";
        document.getElementById("task").value = "";
        document.getElementById("time").value = "";
        document.getElementById("add-info").value = "";
    });
}
