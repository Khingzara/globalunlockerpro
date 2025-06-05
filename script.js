
document.getElementById("unlockForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const imei = document.getElementById("imei").value;
  const device = document.getElementById("device").value;
  const statuses = ["Clean", "Blacklisted", "Lost"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const resultText = `Device: ${device} | IMEI: ${imei} => Status: ${status}`;
  document.getElementById("result").textContent = resultText;

  const historyList = JSON.parse(localStorage.getItem("unlockHistory") || "[]");
  historyList.unshift(resultText);
  localStorage.setItem("unlockHistory", JSON.stringify(historyList));
  renderHistory();
});

function renderHistory() {
  const historyList = JSON.parse(localStorage.getItem("unlockHistory") || "[]");
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  historyList.slice(0, 5).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

renderHistory();
