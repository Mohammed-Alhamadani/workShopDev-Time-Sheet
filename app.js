window.onload = pageReady;

function pageReady() {
    const form = document.getElementById("timesheet-form");
    const timeSheetList = document.getElementById("timesheet-list");
    let dateNew = document.querySelector("#dateNow");

    let newDate = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();
    // console.log(newDate);
    // console.log(month);
    // console.log(year);
    dateNew.textContent = `${month} ${year}`;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch("submit.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const timeSheetItem = document.createElement("div");
                timeSheetItem.classList.add("timesheet-item");
                timeSheetItem.innerHTML = `
            <p>Date: ${data.date}</p>
            <p>Hours Worked: ${data.hoursWorked}</p>
            <p>Project: ${data.project}</p>
            <p>Task: ${data.task}</p>
            <p>Description: ${data.description}</p>
        `;
                timeSheetList.appendChild(timeSheetItem);
            })
            .catch((error) => console.error(error));
    });
}
