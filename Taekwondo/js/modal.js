// JavaScript to handle the modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("classTimingsModal");
  const closeButton = document.querySelector(".close-button");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  closeButton.addEventListener("click", closeModal);

  // Event listener to close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Example function to open modal (you can call this function when needed)
  openModal();
});
