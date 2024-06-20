if (typeof document !== "undefined") {

  let input = document.getElementById('inputBox'); // Use correct ID selector
  let buttons = document.querySelectorAll('button'); // More specific selector

  let expression = ""; // Use a more descriptive variable name

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      let buttonValue = event.target.innerHTML;

      switch (buttonValue) {
        case '=':
          try {
            expression = eval(expression); // Use eval with caution (see note)
            console.log(expression);
            input.value = expression;
          } catch (error) {
            // Handle invalid expressions gracefully (e.g., display error message)
            console.error("Error evaluating expression:", error.message);
            input.value = "Error"; // Or a more informative message
          }
          break;

        case 'AC':
          expression = "";
          input.value = expression;
          break;

        case 'DEL':
          expression = expression.slice(0, -1); // Use slice for consistency
          input.value = expression;
          break;

        default:
          // Handle other button values (e.g., append to expression)
          // Add cases for numbers, operators, decimal point, etc.
          expression += buttonValue;
          input.value = expression;
      }
    });
  });
}










