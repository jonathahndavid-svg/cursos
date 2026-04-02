const courses = [
  {
    id: 1,
    title: "Mini-Donas Gourmet",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/mini-donas.mp4"
  },
  {
    id: 2,
    title: "Donas Estilo New York",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/CakeDonas.mp4"
  },
  {
    id: 3,
    title: "Flores de Marshmellow",
    price: 17000,
    originalPrice: 70000,
    discount: "25% OFF",
    urgent: false,
    type: "video",
    src: "videos/Flores-malvavisco.mp4"
  },
  {
    id: 4,
    title: "Marshmellows Kawaii",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/masmelos-kawaii.mp4"
  },
  {
    id: 5,
    title: "Chocolatería Artesanal Colombiana",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/brigadeiros.mp4"
  },
  {
    id: 6,
    title: "Platos típicos Colombianos - Colombia con sabor a negocio",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/Platos-Tipicos.mp4"
  }
];
let cart = [];

const container = document.getElementById("coursesContainer");
const summaryList = document.getElementById("summaryList");

function renderCourses() {
  container.innerHTML = "";

  courses.forEach(course => {
    const isSelected = cart.some(c => c.id === course.id);

  const media =
  course.type === "video"
    ? `
      <video
        class="w-full rounded-t-2xl block"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="${course.src}" type="video/mp4">
      </video>
    `
    : `
      <img
        src="${course.src}"
        class="w-full rounded-t-2xl block"
        alt="${course.title}"
      >
    `;
    const priceBlock = course.originalPrice
      ? `
        <div class="mt-2">
          <p class="text-sm text-stone-400 line-through">
            COP $${course.originalPrice.toLocaleString("es-CO")}
          </p>
          <p class="text-2xl font-bold text-pink-500">
            COP $${course.price.toLocaleString("es-CO")}
          </p>
        </div>
      `
      : `
        <p class="text-2xl font-bold text-pink-500 mt-2">
          COP $${course.price.toLocaleString("es-CO")}
        </p>
      `;

    container.innerHTML += `
      <div class="
        relative rounded-2xl overflow-hidden transition-all duration-300
        ${isSelected
          ? "bg-green-50 border-2 border-green-500 shadow-lg shadow-green-100"
          : "bg-white border border-[#E8DED5] shadow-sm"}
      ">

        ${course.discount ? `
          <span class="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow animate-pulse z-10">
            🔥 ${course.discount}
          </span>
        ` : ""}

        ${media}

        <div class="p-4">
          <h4 class="text-xl font-semibold text-stone-700">
            ${course.title}
          </h4>

          ${priceBlock}

       <button
  data-course-id="${course.id}"
  onclick="toggleCourse(${course.id})"
  class="
    w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300
    ${isSelected
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-[#D9B99B] hover:bg-[#CDA886] text-white"}
  ">
  ${isSelected ? "Agregado" : "¡Lo Quiero!"}
</button>

          ${course.urgent ? `
            <p class="text-xs text-red-500 mt-2 font-semibold text-center animate-pulse">
              ⏳ Últimos cupos - ¡Solo hoy!
            </p>
          ` : ""}
        </div>
      </div>
    `;
  });
}

function toggleCourse(id) {
  const exists = cart.find(c => c.id === id);

  if (exists) {
    cart = cart.filter(c => c.id !== id);
  } else {
    const course = courses.find(c => c.id === id);
    cart.push(course);
  }

  updateCourseButton(id);
  updateSummary();
}

function updateCourseButton(id) {
  const button = document.querySelector(`[data-course-id="${id}"]`);

  if (!button) return;

  const isSelected = cart.some(c => c.id === id);

  button.innerText = isSelected ? "Agregado" : "¡Lo Quiero!";

  button.className = `
    w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300
    ${isSelected
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-[#D9B99B] hover:bg-[#CDA886] text-white"}
  `;
}

function updateSummary() {
  summaryList.innerHTML = "";

  let total = 0;
  let originalTotal = 0;

  if (cart.length === 0) {
    summaryList.innerHTML = `
      <p class="text-stone-500">
        Aún no has seleccionado cursos
      </p>
    `;
  }

  cart.forEach(course => {
    total += course.price;
    originalTotal += course.originalPrice || course.price;

    const priceHtml = course.originalPrice
      ? `
        <div class="text-right">
          <p class="text-sm text-stone-400 line-through">
            COP $${course.originalPrice.toLocaleString("es-CO")}
          </p>
          <p class="font-semibold text-pink-500">
            COP $${course.price.toLocaleString("es-CO")}
          </p>
        </div>
      `
      : `
        <span class="font-semibold">
          COP $${course.price.toLocaleString("es-CO")}
        </span>
      `;

    summaryList.innerHTML += `
      <div class="flex justify-between border-b py-3 items-center">
        <span>${course.title}</span>
        ${priceHtml}
      </div>
    `;
  });

  const savings = originalTotal - total;

  document.getElementById("totalPrice").innerHTML = `
    ${originalTotal > total
      ? `<p class="text-lg text-stone-400 line-through">
          COP $${originalTotal.toLocaleString("es-CO")}
        </p>`
      : ""}
    <p class="text-3xl font-bold text-blue-600">
      COP $${total.toLocaleString("es-CO")}
    </p>
    ${savings > 0
      ? `<p class="text-sm text-green-600 font-semibold">
          Ahorras COP $${savings.toLocaleString("es-CO")}
        </p>`
      : ""}
  `;

  document.getElementById("floatingTotal").innerText =
    `COP $${total.toLocaleString("es-CO")}`;

  document.getElementById("floatingItems").innerText =
    `${cart.length} curso${cart.length !== 1 ? "s" : ""}`;

  if (cart.length > 0) {
    document.getElementById("floatingCart").classList.remove("hidden");
  } else {
    document.getElementById("floatingCart").classList.add("hidden");
  }
}

function goToWhatsApp() {
  if (cart.length === 0) {
    alert("Selecciona al menos un curso");
    return;
  }

  let total = 0;

  let message = "Hola, quiero comprar estos cursos:%0A%0A";

  cart.forEach(course => {
    total += course.price;
    message += `• ${course.title} - USD ${course.price}%0A`;
  });

  message += `%0ATotal: USD ${total}`;

  const phone = "573045818262";

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}

function scrollToSummary() {
  document
    .getElementById("summarySection")
    .scrollIntoView({
      behavior: "smooth"
    });
}

renderCourses();
updateSummary();


window.addEventListener("load", function () {
  if (!sessionStorage.getItem("autoScrolled")) {
    setTimeout(() => {
      document.getElementById("countdown")
        .scrollIntoView({ behavior: "smooth" });

      sessionStorage.setItem("autoScrolled", "true");
    }, 3000);
  }
});

let timeLeft = 2 * 60 * 60; // 2 horas

function updateCountdown() {
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const timeText = `${hours}:${minutes}:${seconds}`;

  const hero = document.getElementById("heroCountdown");
  const offer = document.getElementById("offerCountdown");

  if (hero) hero.textContent = timeText;
  if (offer) offer.textContent = timeText;

  if (timeLeft > 0) {
    timeLeft--;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

function scrollToOffers() {
  document.getElementById("ofertas").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

window.addEventListener("load", () => {
  if (!sessionStorage.getItem("autoScrolled")) {
    setTimeout(() => {
      const offersSection = document.getElementById("ofertas");

      if (offersSection) {
        offersSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        sessionStorage.setItem("autoScrolled", "true");
      }
    }, 3000);
  }
});
