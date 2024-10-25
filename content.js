function addClearButton() {
  const submitButton = document.querySelector('input[type="submit"]');
  if (!submitButton) {
    console.error("Submit button not found");
    return;
  }

  const clearButton = document.createElement("input");
  clearButton.type = "button";
  clearButton.value = "クリア";
  clearButton.style.marginLeft = "10px";

  clearButton.addEventListener("click", () => {
    const textareas = document.querySelectorAll(
      'textarea[name="sequenceA"], textarea[name="sequenceB"]'
    );
    textareas.forEach((textarea) => {
      textarea.value = "";
    });
  });

  submitButton.parentNode.insertBefore(clearButton, submitButton.nextSibling);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addClearButton);
} else {
  addClearButton();
}
