const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll(".price");

  // Sum the numeric values
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2"); // Span across both columns
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
