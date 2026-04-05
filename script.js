const courses = [
  {
    id: 1,
    title: "Mini-Donas Gourmet",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/mini-donas.jpg",
    description:"",
    testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: true
  },
  {
    id: 2,
    title: "Donas Estilo New York",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/donas-overload.png",
    description:"",
    testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: true
  },
  {
    id: 3,
    title: "Flores de Marshmellow",
    price: 17000,
    originalPrice: 70000,
    discount: "",
    urgent: false,
    type: "video",
    src: "videos/Flores-malvavisco.mp4",
    description:"",
    testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: false
  },
  {
    id: 4,
    title: "Marshmellows Kawaii",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/masmelos-kawaii.mp4",
    description:"",
  testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: true
  },
  {
    id: 5,
    title: "Chocolatería Artesanal Colombiana",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/brigadeiros.jpg",
    description:"",
    testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: true
  },
  {
    id: 6,
    title: "Platos típicos Colombianos - Colombia con sabor a negocio",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/platos-típicos.png",
    description:"",
    testimonials: [
  "Hice el curso y en menos de 15 días recuperé la inversión.",
  "Las recetas son fáciles y mis clientes quedaron encantados.",
  "Ya tengo pedidos fijos los fines de semana."
],
    promoEligible: true
  }
];
let cart = [];

const container = document.getElementById("coursesContainer");
const summaryList = document.getElementById("summaryList");

function renderCourses() {
  const promoContainer = document.getElementById("coursesContainer");
  const premiumContainer = document.getElementById("premiumContainer");

  promoContainer.innerHTML = "";
  premiumContainer.innerHTML = "";

  courses.forEach(course => {
  const isPromoEligible = course.promoEligible === true;

  const target = isPromoEligible
    ? promoContainer
    : premiumContainer;

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

    target.innerHTML += `
    <div
  data-card-id="${course.id}"
  onclick="openCourseModal(${course.id})"
  class="
    relative rounded-2xl overflow-hidden transition-all duration-300
    cursor-pointer hover:shadow-xl hover:-translate-y-1
    ${isSelected
      ? "bg-green-50 border-2 border-green-500 shadow-lg shadow-green-100"
      : "bg-white border border-[#E8DED5] shadow-sm"}
  "
>

        ${course.discount ? `
          <span class="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow animate-pulse z-10">
            🔥 ${course.discount}
          </span>
        ` : ""}

        ${course.promoEligible === false ? `
          <span class="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow z-10">
            Premium
          </span>
        ` : ""}

        ${media}

        <div class="p-4">
          <h4 class="text-xl font-semibold text-stone-700">
            ${course.title}
          </h4>

          <p class="text-2xl font-bold text-pink-500 mt-2">
            COP $${course.price.toLocaleString("es-CO")}
          </p>

         <button
  data-course-id="${course.id}"
  onclick="event.stopPropagation(); toggleCourse(${course.id})"
  class="
    w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300
    ${isSelected
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-[#D9B99B] hover:bg-[#CDA886] text-white"}
  "
>
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

  if (cart.length === 0) {
    summaryList.innerHTML = `
      <p class="text-stone-500">
        Aún no has seleccionado cursos
      </p>
    `;

    document.getElementById("totalPrice").innerHTML =
      `<p class="text-3xl font-bold text-blue-600">COP $0</p>`;

    document.getElementById("floatingCart").classList.add("hidden");
    return;
  }

  // SOLO cursos que aplican a promo
  const promoEligibleCourses = cart
    .filter(course => course.promoEligible === true)
    .sort((a, b) => a.price - b.price);

  // Cursos premium / no promo
  const nonPromoCourses = cart.filter(
    course => course.promoEligible === false
  );

  // Solo una promo de 3
  const promoCourses = promoEligibleCourses.slice(0, 3);

  // Cursos adicionales promo que NO entraron en la promo
  const extraPromoCourses = promoEligibleCourses.slice(3);

  const promoApplied = promoCourses.length === 3;

  const promoTotal = promoApplied ? 25000 : 0;

  const extraPromoTotal = extraPromoCourses.reduce(
    (sum, c) => sum + c.price,
    0
  );

  const nonPromoTotal = nonPromoCourses.reduce(
    (sum, c) => sum + c.price,
    0
  );

  const normalTotal = cart.reduce(
    (sum, c) => sum + c.price,
    0
  );

  const total = promoApplied
    ? promoTotal + extraPromoTotal + nonPromoTotal
    : normalTotal;

  const savings = normalTotal - total;

  // Render resumen
  cart.forEach(course => {
    const isPromo = promoCourses.some(
      promo => promo.id === course.id
    );

    summaryList.innerHTML += `
      <div class="flex justify-between border-b py-3 items-center">
        <span>${course.title}</span>
        <div class="text-right">
          <p class="font-semibold ${isPromo ? "text-green-600" : ""}">
            COP $${course.price.toLocaleString("es-CO")}
            ${isPromo ? " - ✔ Incluido en promo" : ""}
          </p>
          ${course.promoEligible === false
            ? `<p class="text-xs text-purple-500">
                No aplica promo
              </p>`
            : ""}
        </div>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerHTML = `
    ${promoApplied
      ? `<p class="text-lg text-stone-400 line-through">
          COP $${normalTotal.toLocaleString("es-CO")}
        </p>`
      : ""}
    <p class="text-3xl font-bold text-blue-600">
      COP $${total.toLocaleString("es-CO")}
    </p>
    ${promoApplied
      ? `<p class="text-sm text-green-600 font-semibold">
          🎉 Promo 3 cursos por $20.000 aplicada
        </p>
        <p class="text-sm text-pink-500 font-semibold">
          Ahorras COP $${savings.toLocaleString("es-CO")}
        </p>`
      : ""}
  `;

  document.getElementById("floatingTotal").innerText =
    `COP $${total.toLocaleString("es-CO")}`;

  document.getElementById("floatingItems").innerText =
    `${cart.length} curso${cart.length !== 1 ? "s" : ""}`;

  document.getElementById("floatingCart").classList.remove("hidden");
}

function goToWhatsApp() {
  if (cart.length === 0) {
    alert("Selecciona al menos un curso");
    return;
  }

  const promoEligibleCourses = cart
    .filter(course => course.promoEligible === true)
    .sort((a, b) => a.price - b.price);

  const nonPromoCourses = cart.filter(
    course => course.promoEligible === false
  );

  const promoCourses = promoEligibleCourses.slice(0, 3);
  const extraPromoCourses = promoEligibleCourses.slice(3);

  const promoApplied = promoCourses.length === 3;

  const promoTotal = promoApplied ? 25000 : 0;

  const extraPromoTotal = extraPromoCourses.reduce(
    (sum, c) => sum + c.price,
    0
  );

  const nonPromoTotal = nonPromoCourses.reduce(
    (sum, c) => sum + c.price,
    0
  );

  const total = promoApplied
    ? promoTotal + extraPromoTotal + nonPromoTotal
    : cart.reduce((sum, c) => sum + c.price, 0);

  let message = "Hola, quiero comprar estos cursos:%0A%0A";

  cart.forEach(course => {
    const isPromo = promoCourses.some(
      promo => promo.id === course.id
    );

    message += `• ${course.title} - COP $${course.price.toLocaleString("es-CO")}`;

    if (isPromo) {
      message += " (Incluido en promo)";
    }

    if (course.promoEligible === false) {
      message += " (Premium / no aplica promo)";
    }

    message += "%0A";
  });

  if (promoApplied) {
    message += `%0A🎉 Promo aplicada: 3 cursos por COP $20.000`;
  }

  message += `%0A%0ATotal: COP $${total.toLocaleString("es-CO")}`;

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


function openCourseModal(courseId) {
  const course = courses.find(c => c.id === courseId);

  const media = course.type === "video"
    ? `
      <video
  class="w-full rounded-2xl"
  controls
  controlsList="nodownload noplaybackrate"
  disablePictureInPicture
  autoplay
  muted
  loop
  playsinline
>
  <source src="${course.src}" type="video/mp4">
</video>
    `
    : `
      <img src="${course.src}" class="w-full rounded-2xl">
    `;

  document.getElementById("modalContent").innerHTML = `
    <div>
      ${media}
    </div>

    <div>
      <h2 class="text-3xl font-bold mb-4">${course.title}</h2>

      <p class="text-stone-600 mb-6">
        ${course.description || "Curso diseñado para emprender desde casa y generar ingresos rápidamente."}
      </p>

${course.testimonials?.length ? `
  <div class="mt-5 mb-6 space-y-3">
    ${course.testimonials.slice(0, 3).map(testimonial => `
      <div class="bg-pink-50 border border-pink-100 rounded-2xl p-4">
        <div class="text-yellow-400 text-lg mb-1">
          ★★★★★
        </div>
        <p class="text-sm text-stone-600 italic">
          “${testimonial}”
        </p>
      </div>
    `).join("")}
  </div>
` : ""}

      <div class="mb-6">
  ${course.originalPrice ? `
    <p class="text-lg text-stone-400 line-through mb-1">
      COP $${course.originalPrice.toLocaleString("es-CO")}
    </p>
  ` : ""}

  <p class="text-3xl font-bold text-pink-500">
    COP $${course.price.toLocaleString("es-CO")}
  </p>

  ${course.discount ? `
    <span class="inline-block mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
      🔥 ${course.discount}
    </span>
  ` : ""}

  <p class="mt-3 ${course.promoEligible ? "text-green-600" : "text-purple-500"} font-semibold">
    ${course.promoEligible
      ? "🎉 Aplica para la promo 3 cursos por COP $25.000"
      : "⭐ Curso Premium - No aplica para promo"}
  </p>
</div>

<button
  onclick="toggleCourse(${course.id}); updateSummary(); closeCourseModal();"
  class="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg">
  ✨ ¡Lo Quiero!
</button>
  `;

  renderRelatedCourses(courseId);

  document.getElementById("courseModal").classList.remove("hidden");
}

function closeCourseModal() {
  document.getElementById("courseModal").classList.add("hidden");
}

function renderRelatedCourses(currentId) {
  const related = courses.filter(c => c.id !== currentId);

  // duplicamos para efecto infinito
  const loopCourses = [...related, ...related];

  document.getElementById("relatedCourses").innerHTML = `
    <div class="related-track flex gap-4">
      ${loopCourses.map(course => `
        <div
          onclick="openCourseModal(${course.id})"
          class="relative min-w-[240px] bg-stone-50 rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg transition-all"
        >
          ${course.discount ? `
            <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow z-10">
              🔥 ${course.discount}
            </span>
          ` : ""}

          <p class="font-bold pr-16">${course.title}</p>

          <p class="text-pink-500 mt-2 font-semibold">
            COP $${course.price.toLocaleString("es-CO")}
          </p>
        </div>
      `).join("")}
    </div>
  `;
}
