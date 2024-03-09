
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    axios
      .post("http://localhost:3000/appointments", { name, phone, email })
      .then((response) => {
        const { name, phone, email } = response.data;
        const output = document.getElementById("output");
        output.innerHTML = `
                <p>Name: ${name}</p>
                <p>Phone No: ${phone}</p>
                <p>Email: ${email}</p>
            `;
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });

// Fetch all appointments from the server
axios
  .get("http://localhost:3000/appointments")
  .then((response) => {
    const appointments = response.data;
    const table = document.createElement("table");
    const tableHeader = `<tr><th>Name</th><th>Phone No</th><th>Email</th></tr>`;
    let tableBody = "";

    // Loop through each appointment and create table rows
    appointments.forEach((appointment) => {
      tableBody += `
                <tr>
                    <td>${appointment.name}</td>
                    <td>${appointment.phone}</td>
                    <td>${appointment.email}</td>
                </tr>
            `;
    });

    // Add table header and body to the table
    table.innerHTML = tableHeader + tableBody;

    // Display the table on the page
    const output = document.getElementById("output");
    output.appendChild(table);
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("An error occurred while fetching appointments.");
  });
