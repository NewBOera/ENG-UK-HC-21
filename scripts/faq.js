document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".carousel").forEach((carousel) => {
      const prevBtn = carousel.querySelector(".prev-btn");
      const nextBtn = carousel.querySelector(".next-btn");
      const cards = carousel.querySelector(".cards");
      const cardElements = carousel.querySelectorAll(".card");
      const spanCurrent = carousel.querySelector(".counter .current");
      const cardCount = cardElements.length;
      const spanTotal = (carousel.querySelector(".counter .total").innerHTML =
         cardCount);

      let counter = 0;

      nextBtn.addEventListener("click", () => {
         counter++;
         if (counter > cardCount - 1) {
            counter = 0;
         }
         updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
         counter--;
         if (counter < 0) {
            counter = cardCount - 1;
         }
         updateCarousel();
      });

      function updateCarousel() {
         spanCurrent.textContent = counter + 1;
         const cardWidth = cardElements[counter].clientWidth;
         const gap = parseInt(window.getComputedStyle(cards).gap) || 0;
         const offset = (carousel.clientWidth - cardWidth) / 2;
         cards.style.transform = `translateX(${
            offset - counter * (cardWidth + gap)
         }px)`;
      }

      window.addEventListener("resize", updateCarousel);
      updateCarousel();
   });
});
