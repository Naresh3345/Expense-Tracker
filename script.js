let expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("totalAmount");

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;

  if (!title || isNaN(amount) || !date) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const expense = {
    id: Date.now(),
    title,
    amount,
    date
  };

  expenses.push(expense);
  renderExpenses();
  clearInputs();
});

// Render all expenses
function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach(exp => {
    total += exp.amount;

    const item = document.createElement("div");
    item.className = "expense-item";

    item.innerHTML = `
      <div class="expense-details">
        <strong>${exp.title}</strong>
        <small>${exp.date}</small>
      </div>
      <div>
        ₹${exp.amount.toFixed(2)}
        <button class="delete-btn" onclick="deleteExpense(${exp.id})">Delete</button>
      </div>
    `;

    expenseList.appendChild(item);
  });

  totalAmount.textContent = total.toFixed(2);
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

function clearInputs() {
  titleInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
}
