export const background = () => {
  const holographicElement = document.getElementById("gradient");

  function updateHolographicBackground(value) {
    const percentage = value * 100;
    holographicElement.style.backgroundPosition = percentage + "%";
  }

  function moveBackgroundAutomatically() {
    let speed = 0.0005; // Задайте швидкість руху фону
    let value = 0;

    function animate() {
      value += speed;

      if (value > 1 || value < 0) {
        speed = -speed;
      }

      updateHolographicBackground(value);
      requestAnimationFrame(animate);
    }

    animate();
  }
  moveBackgroundAutomatically();
};
