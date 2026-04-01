const courses = [
  {
    id: 1,
    title: "Tortas y Pasteles",
    price: 50,
    discount: "50% OFF",
    urgent: true,
    type: "image",
    src: "img/torta-pasteles.jpg"
  },
  {
    id: 2,
    title: "Decoración con Fondant",
    price: 60,
    type: "video",
    src: "videos/fondant.mp4"
  },
  {
    id: 3,
    title: "Repostería para Negocios",
    price: 45,
    discount: "30% OFF",
    urgent: true,
    type: "image",
    src: "img/reposteria-negocios.jpg"
  },
  {
    id: 4,
    title: "Marketing para Emprendedores",
    price: 55,
    type: "image",
    src: "img/marketing.jpg"
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
            class="w-full h-48 object-cover rounded-t-2xl"
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
            class="w-full h-48 object-cover rounded-t-2xl"
            alt="${course.title}"
          >
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

          <p class="text-2xl font-bold text-pink-500 mt-1">
            COP $${course.price}.000
          </p>

          <button
            onclick="toggleCourse(${course.id})"
            class="
              w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300
              ${isSelected
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-[#D9B99B] hover:bg-[#CDA886] text-white"}
            ">
            ${isSelected ? "Quitar" : "¡Lo Quiero!"}
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

  renderCourses();
  updateSummary();
}

function updateSummary() {
  summaryList.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    summaryList.innerHTML = `
      <p class="text-stone-500">
        Aún no has seleccionado cursos
      </p>
    `;
  }

  cart.forEach(course => {
    total += course.price;

    summaryList.innerHTML += `
      <div class="flex justify-between border-b py-3">
        <span>${course.title}</span>
        <span class="font-semibold">USD ${course.price}</span>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerText = `USD ${total}`;
  document.getElementById("floatingTotal").innerText = `USD ${total}`;
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