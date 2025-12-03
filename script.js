// Function to animate the number counter
function animateNumber(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const currentNumber = Math.floor(progress * (end - start) + start);
    element.textContent = currentNumber + "+";

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Get the element with id 'number'
const numberElement = document.getElementById("number");

// Use IntersectionObserver to start animation when element appears on screen
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(numberElement, 0, 100, 3000); // Animate from 0 to 50 over 3 seconds
        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  },
  { threshold: 0.1 }
); // Trigger when 10% of the element is visible

// Start observing the number element
observer.observe(numberElement);
