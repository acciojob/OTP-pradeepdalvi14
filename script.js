const inputs = document.querySelectorAll('.code');

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {

    // Allow only digits
    if (e.key >= '0' && e.key <= '9') {
      input.value = '';

      if (index < inputs.length - 1) {
        setTimeout(() => inputs[index + 1].focus(), 10);
      }
    }

    // Backspace behavior
    if (e.key === 'Backspace') {
      input.value = '';

      if (index > 0) {
        setTimeout(() => inputs[index - 1].focus(), 10);
      }
    }
  });
});

//your JS code here. If required.
