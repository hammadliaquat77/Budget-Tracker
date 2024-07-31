
// let totalBudget = 0;
// let totalExpenses = 0;

// function setBudget() {
//     const budgetInput = document.getElementById('budgetInput').value;
//     totalBudget = parseFloat(budgetInput);
//     document.getElementById('totalBudget').textContent = totalBudget.toFixed(2);
//     updateBalance();
// }

// function addExpense() {
//     const expenseTitle = document.getElementById('expenseTitle').value;
//     const expenseCost = document.getElementById('expenseCost').value;
//     const cost = parseFloat(expenseCost);

    

//     if (expenseTitle && !isNaN(cost)) {
//         totalExpenses += cost;
//         document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
        
//         const expenseList = document.getElementById('expenseList');
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `${expenseTitle} : ${expenseCost} <button id="btn" onclick="del(this, ${cost})">Remove</button>`;
//         expenseList.appendChild(listItem);

//         updateBalance();
//     }
// }

// function updateBalance() {
//     const balance = totalBudget - totalExpenses;
//     document.getElementById('balance').textContent = balance.toFixed(2);

// }

// function del(button, cost) {
//     // Subtract the cost of the removed expense from the total expenses
//     totalExpenses -= cost;
//     document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);

//     // Remove the corresponding list item
//     button.parentElement.remove();

//     // Update the balance
//     updateBalance();
// }














let totalBudget = 0;
let totalExpenses = 0;

function setBudget() {
    const budgetInput = document.getElementById('budgetInput').value;
    if (budgetInput == '') {
        Swal.fire({
            title: "Please set your Budget",
            imageUrl: "data:image/jpeg;base64,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",
            imageWidth: 400,
            imageHeight: 200,
          });
          

    }else{
    totalBudget = parseFloat(budgetInput);
    document.getElementById('totalBudget').textContent = totalBudget.toFixed(2);
    updateBalance();}
}

function addExpense() {
    const expenseTitle = document.getElementById('expenseTitle').value;
    const expenseCost = document.getElementById('expenseCost').value;
    const cost = parseFloat(expenseCost);

    if (expenseTitle == '' && expenseCost == '') {
        Swal.fire({
            title: "Please fill the boxes",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }

    if (expenseTitle && !isNaN(cost)) {
        totalExpenses += cost;
        document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
        
        const expenseList = document.getElementById('expenseList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expenseTitle} : ${expenseCost} <button id="btn" onclick="del(this, ${cost})">Remove</button>`;
        expenseList.appendChild(listItem);

        updateBalance();
    }
}

function updateBalance() {
    const balance = totalBudget - totalExpenses;
    document.getElementById('balance').textContent = balance.toFixed(2);
    
    // Clear the expense input fields
    document.getElementById('expenseTitle').value = '';
    document.getElementById('expenseCost').value = '';
}

function del(button, cost) {
    // Subtract the cost of the removed expense from the total expenses
    totalExpenses -= cost;
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);

    // Remove the corresponding list item
    button.parentElement.remove();

    // Update the balance
    updateBalance();
}
