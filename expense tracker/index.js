const transactions = [
    {
        id: 1,
        name: 'Salary',
        amount: 5000000,
        date: new Date(),
        type: 'income',
    },
    {
        id: 2,
        name: 'Car Wash',
        amount: 100,
        date: new Date(),
        type: 'expense',
    },
    {
        id: 3,
        name: 'Food',
        amount: 150,
        date: new Date(),
        type: 'expense',
    }
];

// Formatter to display currency (USD)
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    signDisplay: 'always'
});

// Access the DOM elements to display data
const list = document.getElementById("transactionList");
const status = document.getElementById("status");
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");
const transactionForm = document.getElementById("transactionForm");

// Function to render the list of transactions
function renderList() {
    list.innerHTML = ''; // Clear the list before rendering
    if (transactions.length === 0) {
        status.textContent = 'No Transactions'; // Show message if there are no transactions
        return;
    }
    status.textContent = ''; // Remove the 'No Transactions' message if there are transactions

    // Loop through each transaction and display it
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="name">
                <h4>${transaction.name}</h4>
                <p>${new Date(transaction.date).toLocaleString()}</p>
            </div>
            <div class="amount ${transaction.type}">
                <span>${formatter.format(transaction.amount)}</span>
            </div>
            <div class="action">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-id="${transaction.id}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        `;

        // Add event listener to delete button (the trash icon)
        const deleteIcon = li.querySelector('.action svg');
        deleteIcon.addEventListener('click', () => deleteTransaction(transaction.id));

        list.appendChild(li);
    });

    updateSummary(); // Update the balance summary (Total, Income, and Expense)
}

// Function to delete a transaction
function deleteTransaction(id) {
    // Find the transaction by its id and remove it
    const index = transactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
        transactions.splice(index, 1); // Remove the transaction from the array
        renderList(); // Re-render the list after deletion
    }
}

// Function to add a new transaction
function addTransaction(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get values from the form fields
    const name = event.target.name.value.trim();
    const amount = parseFloat(event.target.amount.value);
    const date = new Date(event.target.date.value);
    const type = event.target.type.value; // Either 'income' or 'expense'

    // Validate input (make sure the fields are filled correctly)
    if (!name || isNaN(amount) || amount <= 0 || !date) {
        alert('Please provide valid transaction details.');
        return;
    }

    // Create a new transaction object
    const newTransaction = {
        id: Date.now(), // Generate a unique ID based on the current time
        name,
        amount,
        date,
        type,
    };

    // Add the new transaction to the array
    transactions.push(newTransaction);

    // Clear the form fields after submission
    event.target.reset();

    // Re-render the list to display the new transaction
    renderList();
}

// Function to update the summary (Total balance, Income, and Expense)
function updateSummary() {
    // Calculate total balance (Income - Expense)
    const totalBalance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);

    // Calculate total income
    const totalIncome = transactions.filter(transaction => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    // Calculate total expense
    const totalExpense = transactions.filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    // Update the display with the calculated values
    balanceElement.textContent = formatter.format(totalBalance);
    incomeElement.textContent = formatter.format(totalIncome);
    expenseElement.textContent = formatter.format(totalExpense);
}

// Event listener for form submission (adding a transaction)
transactionForm.addEventListener('submit', addTransaction);

// Initial render (when the page loads)
renderList();
