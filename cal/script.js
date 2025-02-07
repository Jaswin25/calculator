// Select the display element
const display = document.getElementById('display');

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Handle clear button
        if (value === 'C') {
            display.value = '';
        }
        // Handle delete button
        else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        }
        // Handle equals button
        else if (value === '=') {
            try {
                // Evaluate the expression and display the result
                display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
            } catch (error) {
                // Handle errors (e.g., invalid expressions)
                display.value = 'Error';
            }
        }
        // Handle other buttons (numbers, operators, etc.)
        else {
            display.value += value;
        }
    });
});