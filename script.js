const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Remove existing #ans if present
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.remove();
  }

  // Create a new row and cell with id="ans"
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.setAttribute("id", "ans");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;
  
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
