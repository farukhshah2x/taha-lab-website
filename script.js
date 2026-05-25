/* ==============================================
   MOBILE MENU TOGGLE
   ============================================== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
}

/* ==============================================
   SMOOTH SCROLL (same-page anchor links only)
   ============================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ==============================================
   HERO SLIDER (index.html only)
   ============================================== */
const slides = document.querySelectorAll(".slide");
const dots   = document.querySelectorAll(".dot");

if (slides.length > 0) {
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });
}
/* =========================================
   CERTIFICATE POPUP
========================================= */

const certificateBtn = document.getElementById("certificateBtn");
const certificatePopup = document.getElementById("certificatePopup");
const closePopup = document.getElementById("closePopup");

if(certificateBtn){

  certificateBtn.addEventListener("click", () => {

    certificatePopup.classList.add("active");

  });

}

if(closePopup){

  closePopup.addEventListener("click", () => {

    certificatePopup.classList.remove("active");

  });

}

window.addEventListener("click", (e) => {

  if(e.target === certificatePopup){

    certificatePopup.classList.remove("active");

  }

});

/* =========================================
   APPOINTMENT FORM WHATSAPP
========================================= */

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

  appointmentForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // GET VALUES

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const packageSelect = document.getElementById("packageSelect").value;
    const specificTest = document.getElementById("specificTest").value;
    const message = document.getElementById("message").value;

    // WHATSAPP MESSAGE

    const whatsappMessage =
`🧪 Taha Lab Appointment Request

👤 Name: ${firstName} ${lastName}

📞 Phone: ${phone}

📧 Email: ${email}

📦 Selected Package/Test:
${packageSelect}

🧬 Specific Test:
${specificTest}

📝 Message:
${message}`;

    // YOUR WHATSAPP NUMBER

    const whatsappURL =
`https://wa.me/923120044746?text=${encodeURIComponent(whatsappMessage)}`;

    // OPEN WHATSAPP

    window.open(whatsappURL, "_blank");

    // SHOW POPUP

    const successPopup = document.getElementById("successPopup");

    if(successPopup){
      successPopup.classList.add("active");
    }

    // RESET FORM

    appointmentForm.reset();

  });

}

/* =========================================
   CLOSE SUCCESS POPUP
========================================= */

const closeSuccess = document.getElementById("closeSuccess");

if(closeSuccess){

  closeSuccess.addEventListener("click", () => {

    document.getElementById("successPopup").classList.remove("active");

  });

}
/* =========================================
   ONLINE REPORTS POPUP
========================================= */

const reportForm = document.getElementById("reportForm");

const comingPopup = document.getElementById("comingPopup");

const closeComingPopup = document.getElementById("closeComingPopup");

if(reportForm){

  reportForm.addEventListener("submit", (e) => {

    e.preventDefault();

    comingPopup.classList.add("active");

    reportForm.reset();

  });

}

if(closeComingPopup){

  closeComingPopup.addEventListener("click", () => {

    comingPopup.classList.remove("active");

  });

}