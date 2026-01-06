const tbody = document.getElementById("keys");

function randomKey() {
  return Math.random().toString(36).substring(2, 18);
}

function generate() {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${randomKey()}</td>
    <td>Active</td>
    <td><button onclick="revoke(this)">Revoke</button></td>
  `;
  tbody.appendChild(row);
}

function revoke(btn) {
  btn.parentElement.previousElementSibling.innerText = "Revoked";
}
