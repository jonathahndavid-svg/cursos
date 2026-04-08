const courses = [
  {
    id: 1,
    title: "Mini-Donas Gourmet",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/minidonas.jpg",
    description: `
Aprende a preparar deliciosas Mini-Donas irresistibles con técnicas fáciles y profesionales para que puedas disfrutarlas en casa o convertirlas en un emprendimiento rentable.

En este curso descubrirás paso a paso cómo hacer mini-donas usando máquina eléctrica, fritas o horneadas, para que elijas el método que mejor se adapte a tu cocina y presupuesto.<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Aprende A Hacer Mini-Donas Con Recetas Irresistibles Para Maquina Eléctrica, Fritas O Horneadas. </li> 

<li>✅ Aprende A Crear Coberturas De Chocolate Y Glaseados. </li> 

<li>✅ Videos De Apoyo Y Recursos De Ayuda. </li> 

<li>🎁 Bono 1:  Cómo Vender Mini-Donas Desde Casa. </li> 
<li>🎁 Bono 2:  Los 7 Rellenos Irresistibles. </li> 
</ul>
`,
    testimonials: [
      "Laura Gómez: Recuperé la inversión en la primera semana vendiendo por encargos.",
      "Camila Rojas: Las mini donas se volvieron mi producto más vendido en cumpleaños.",
      "Diana Restrepo: Súper fácil de seguir y muy rentable."
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
    description: `
Aprende a crear domas estilo New York grandes, rellenas, gourmet y perfectas para emprender desde casa.<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Crea Impresionante Coberturas de Chocolate. </li> 

<li>✅ Glaseados Colombianos Inolvidables Premium </li> 

<li>✅ Rellenos Irresistibles. </li> 
<li>🎁 Bono: Mas de 200 Donas Rellenas Fritas.</li> 
</ul>
`,
    testimonials: [
      "Paola Mejía: Empecé vendiendo a mis vecinos y ahora tengo pedidos diarios.",
      "María Fernanda: Las recetas salen perfectas desde el primer intento.",
      "Juliana López: Mis clientes creen que son de pastelería profesional."
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
    description: `
Este no es solo un curso para aprender a hacer flores de masmelo 🌸🍡… es una oportunidad real para emprender y generar ingresos 💸✨

A diferencia de un curso presencial donde solo aprendes la técnica y todo termina ahí, aquí recibirás un modelo de negocio rentable e integral, pensado para que conviertas tu aprendizaje en ventas reales 😎<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Guías y videos paso a paso de la técnica y mucho más </li> 

<li>✅ Tabla de rentabilidad para que aprendas a administrar tus ganancias </li> 

<li>✅ Una poderosa Guía con el Secreto para vender tu producto en redes Sociales y no ser escondida por el algoritmo. ¡Y sin pagar publicidad! 😲 </li> 
</ul>
`,
    testimonials: [
      "Valentina Ruiz: Vendí mis primeras flores en menos de 3 días.",
      "Natalia Giraldo: Se ven hermosas y la gente paga muy bien por ellas.",
      "Sofía Castaño: Ideal para regalos personalizados."
    ],
    promoEligible: false
  },
  {
    id: 4,
    title: "Marshmellows Kawaii",
    price: 12000,
    originalPrice: 24000,
    discount: "50% OFF",
    urgent: true,
    type: "video",
    src: "videos/masmelos-kawaii.mp4",
    description: `
Aprende a crear hermosos Marshmallow Kawaii en 2D y 3D desde cero 🎀✨ 
Sin necesidad de experiencia previa, te enseñamos paso a paso cómo elaborar estas tiernas y adorables figuras que están enamorando a todos. 

Ideal para emprender, vender por pedidos, decorar mesas de dulces o crear regalos únicos y personalizados 💖🍬 <br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Técnicas Especiales Y Fáciles De Realizar. </li> 

<li>✅ Palillos y Rellenos. </li> 

<li>✅ Empaques Especiales. </li> 

<li>✅ Plantillas E Ideas Para Cualquier Tipo De Eventos. </li> 

<li>🎁 Bono 1: Tips Para Un Negocio Completo. </li> 

<li>🎁 Bono 2: Como Vender Marshmallow En Redes Sociales. </li> 
</ul>
`,
    testimonials: [
      "Daniela Ríos: En la primera semana ya tenía pedidos para cumpleaños.",
      "Andrea López: A los niños les encantan y se venden rapidísimo.",
      "Karen Gómez: Mi producto más viral en redes."
    ],
    promoEligible: true
  },
  {
    id: 5,
    title: "Chocolatería Artesanal Colombiana",
    price: 12000,
    originalPrice: 24000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/bombones.jpeg",
    description: `
Emprende con Chocolatería artesanal colombiana de manera fácil y práctica .<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Bombones De Chocolate Con Rellenos Y Técnicas Profesionales. </li> 

<li>✅ Brigadeiros Y Trufas</li> 

<li>✅ Chocolatinas Artesanales Y Personalizadas. </li> 

<li>✅ Videos De Apoyo E Ideas Creativas. </li> 

<li>✅ Fresas Cubiertas En Chocolate. </li> 

 
<li>🎁 Bono 1:  Postre De Chocolate En Vasito. </li> 

<li>🎁 Bono 2:  Secretos Para Vender Chocolates En Redes Sociales. </li> 

<li>🎁 Bono 3: Bebidas De Chocolate Gourmet. </li> 

<li>🎁 Bono 4:  Postre De Chocolate Saludable. </li> 
</ul>
`,
    testimonials: [
      "Marcela Pérez: Los chocolates se venden súper bien en fechas especiales.",
      "Luisa Fernández: Recuperé la inversión muy rápido.",
      "Carolina Ramírez: Mis clientes aman la presentación."
    ],
    promoEligible: true
  },
  {
    id: 6,
    title: "Brigadeiros Y Trufas",
    price: 8000,
    originalPrice: 16000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/brigadeiros.jpg",
    description: `
Aprende a preparar deliciosos brigadeiros y trufas con acabados premium, ideales para vender en cumpleaños, regalos, eventos y mesas dulces. Descubre recetas irresistibles, coberturas y presentaciones que enamoran a primera vista, perfectas para emprender desde casa y generar ingresos con un producto de alta rentabilidad .<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
  <li>🎁 Bono Especial: Secretos para vender chocolates en redes sociales y construir una marca inolvidable</li>

</ul>
`,
    testimonials: [
  "Valentina Ruiz: Vendí mi primera caja de brigadeiros en solo 2 días.",
  "Natalia Giraldo: Los acabados premium hacen que la gente pague más sin dudar.",
  "Laura Montoya: Empecé desde cero y ya tengo pedidos cada semana."
],
    promoEligible: true
  },

  {
    id: 7,
    title: "Platos típicos Colombianos - Colombia con sabor a negocio",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/platostipicos.jpeg",
    description: `
Aprende a preparar platos típicos colombianos para vender almuerzos, pedidos empresariales y eventos.<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Guía Principal Colombia Con Sabor A Negocio (+100 Recetas De Platos Típicos De Cada Región Del País).</li> 

<li>✅ Guía De Sopas Y Cremas Típicas</li> 

<li>✅ Guía De Ensaladas</li> 

<li>✅ Guía De Postres Y Dulces Típicos</li> 

<li>✅ Guía De Manipulación De Alimentos</li> 

<li>✅ Lista De Proveedores Mayoristas Por Ciudad</li> 

<li>🎁 Bono 1: Inicia Tu Negocio De Comida Colombiana Desde Casa Y Aprende Como Manejar Los Precios De Manera Correcta. </li> 

<li>🎁 Bono 2: Cómo Vender En Redes Sociales De Manera Orgánica. </li> 
</ul>
`,
    testimonials: [
      "Laura Martínez: Recuperé la inversión en menos de 15 días.",
      "Mónica Herrera: Ya tengo clientes fijos los fines de semana.",
      "Sandra Vélez: Excelente para empezar negocio desde casa."
    ],
    promoEligible: true
  },
  {
    id: 8,
    title: "Galletas Estilo New York",
    price: 7000,
    originalPrice: 14000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/GalletasNY.jpg",
    description: `
    Aprende a preparar las famosas Galletas Estilo New York, gruesas, suaves por dentro y crocantes por fuera, con ese acabado premium que está conquistando redes sociales y cafeterías.

En este curso descubrirás la receta paso a paso para lograr galletas grandes, irresistibles y con rellenos deliciosos como chocolate, Nutella, arequipe y frutos secos.

Ideal para quienes desean emprender desde casa, vender por encargo o sorprender con un producto de alta demanda y excelente margen de ganancia..<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
 <li>✅ Aprende Y Emprende Con Las Galletas Estilo New York Más Virales Y Deliciosas, Todo Desde 0 Y Sin Experiencia. </li>
  <li>🎁 Bono 1: Bono de 100 recetas de galletas para emprender</li>
 <li>🎁 Bono 2: Cómo vender en redes sociales de manera orgánica</li>
</ul>
`,
    testimonials: [
  "Daniela Gómez: Las vendí en mi oficina y me hicieron pedido para toda la semana.",
  "Mariana López: Quedan enormes, suaves por dentro y con un sabor espectacular.",
  "Paula Restrepo: Empecé desde cero y ya estoy recibiendo pedidos por Instagram."
],
    promoEligible: true
  },
{
    id: 9,
    title: "Bolsos en Trapillo",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/bolsostrapillo.jpg",
    description: `
Aprende a crear hermosos bolsos en trapillo desde cero y sin experiencia, con videos paso a paso, guías prácticas y patrones exclusivos. Descubre técnicas fáciles para lograr diseños modernos y profesionales, ideales para uso personal o para emprender y generar ingresos desde casa. Además, incluye tips de tejido y un bono especial de redes sociales para ayudarte a vender más y hacer crecer tu negocio.<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
<li>✅ Aprende A Crear Bolsos En Trapillo Desde Cero Y Sin Experiencia. </li> 

<li>✅ Videos De Apoyo Y Guías + Patrones.</li> 

<li>✅ Tips Para Tejer..</li> 
<li>🎁 Bono Especial: Redes Sociales Para Tu Negocio. </li> 
</ul>
`,
 testimonials: [
  "Juliana Herrera: Hice mi primer bolso en 2 días y ya me están haciendo pedidos.",
  "Karen Bedoya: Los patrones son súper fáciles de seguir, incluso sin experiencia.",
  "Melissa Ospina: Gracias al bono de redes sociales empecé a vender desde Instagram."
],
    promoEligible: true
  },
  {
    id: 10,
    title: "Mantequillas Corporales",
    price: 10000,
    originalPrice: 20000,
    discount: "50% OFF",
    urgent: true,
    type: "img",
    src: "img/mantequillas.jpg",
    description: `
Aprende a crear mantequillas corporales artesanales y convierte tu creatividad en un negocio rentable desde casa 🧴✨

Descubre paso a paso cómo elaborar mantequillas corporales hidratantes, suaves y con aromas irresistibles, ideales para el cuidado de la piel y perfectas para vender como un producto natural y de alta demanda.<br><br>

<strong>Incluye:</strong>
<ul class="mt-2 space-y-1">
  <li>✅ Emprende desde Casa con Mantequillas Corporales Artesanales. </li>
  <li>✅ Guía Práctica de creación de Exfoliantes Naturales y Artesanales. </li>
  <li>🎁 Bono 1: Mini Guía para Vender en Redes
Sociales</li>
<li>🎁 Bono 2: Plantilla de Cálculo de Costos y
Rentabilidad</li>
<li>🎁 Bono 3: Lista de Proveedores en
Colombia
</li>
<li>🎁 Bono 4: 50 Ideas de Nombres para tu Marca de Cosmética
Artesanal</li>
<li>🎁 Bono 5: Cómo Tomar Fotos
Profesionales con el Celular</li>
<li>🎁 Bono 6: 10 Estrategias para Conseguir
tus Primeros 50 Clientes</li>
</ul>
`,
    testimonials: [
  "Andrea Salazar: Mis primeras mantequillas se vendieron entre amigas en menos de una semana.",
  "Lorena Martínez: La textura quedó profesional y el aroma encantó a mis clientes.",
  "Paula Vélez: Empecé desde casa y ya estoy creando mi propia marca artesanal."
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

            <div class="mb-6">
  ${course.originalPrice ? `
    <p class="text-lg text-stone-400 line-through mb-1">
      COP $${course.originalPrice.toLocaleString("es-CO")}
    </p>
  ` : ""}

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
    message += `%0A🎉 Promo aplicada: 3 cursos por COP $25.000`;
  }

  message += `%0A%0ATotal: COP $${total.toLocaleString("es-CO")}`;

  const phone = "573122357008";

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
  ${course.promoEligible === false ? `
    <span class="inline-block mb-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
      ⭐ Premium
    </span>
  ` : ""}

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
        <p class="text-lg md:text-xl text-stone-600 italic leading-relaxed">
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

  const modal = document.getElementById("courseModal");
  modal.classList.remove("hidden");

  // SUBIR SCROLL AL INICIO
  const modalBox = modal.querySelector(".modal-content-box");
  if (modalBox) {
    modalBox.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function closeCourseModal() {
  document.getElementById("courseModal").classList.add("hidden");
}

function renderRelatedCourses(currentId) {
  const related = courses.filter(c => c.id !== currentId);

  document.getElementById("relatedCourses").innerHTML = `
    <div class="flex gap-4 overflow-x-auto pb-2">
      ${related.map(course => {
    const media = course.type === "video"
      ? `
            <video
              class="w-full h-32 object-cover rounded-t-2xl"
              autoplay
              muted
              loop
              playsinline
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
            >
              <source src="${course.src}" type="video/mp4">
            </video>
          `
      : `
            <img
              src="${course.src}"
              class="w-full h-32 object-cover rounded-t-2xl"
              alt="${course.title}"
            >
          `;

    return `
          <div
            onclick="openCourseModal(${course.id})"
            class="relative min-w-[220px] max-w-[220px] bg-white rounded-2xl shadow cursor-pointer overflow-hidden flex-shrink-0"
          >
            ${course.discount ? `
              <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow z-10">
                🔥 ${course.discount}
              </span>
            ` : ""}

            ${course.promoEligible === false ? `
              <span class="absolute top-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow z-10">
                ⭐ Premium
              </span>
            ` : ""}

            ${media}

            <div class="p-3">
              <p class="font-bold text-sm leading-tight">
                ${course.title}
              </p>

              <p class="text-pink-500 mt-2 font-semibold">
                COP $${course.price.toLocaleString("es-CO")}
              </p>
            </div>
          </div>
        `;
  }).join("")}
    </div>
  `;
}
