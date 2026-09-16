const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

// CARGAR TEMA GUARDADO

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");

}

// CAMBIAR TEMA

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");


    if (isLight) {

        // MODO CLARO

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

        localStorage.setItem("theme", "light");

    } else {

        // MODO OSCURO

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

        localStorage.setItem("theme", "dark");

    }

});

const showCertifications = document.getElementById("show-certifications");
const hiddenCertifications = document.querySelectorAll(".hidden-certification");

showCertifications.addEventListener("click", () => {

    const isHidden = hiddenCertifications[0].style.display !== "block";

    hiddenCertifications.forEach(certification => {
        certification.style.display = isHidden ? "block" : "none";
    });

    if (isHidden) {

        showCertifications.querySelector("span").textContent = "Ver menos";

        showCertifications.querySelector("i").classList.remove("bi-chevron-down");
        showCertifications.querySelector("i").classList.add("bi-chevron-up");

    } else {

        showCertifications.querySelector("span").textContent = "Mostrar más";

        showCertifications.querySelector("i").classList.remove("bi-chevron-up");
        showCertifications.querySelector("i").classList.add("bi-chevron-down");

    }
});

// MODAL CERTIFICACIONES

const certificationCards = document.querySelectorAll(".certification-card");
const certificationModal = document.getElementById("certification-modal");
const modalCertificationImage = document.getElementById("modal-certification-image");
const closeCertification = document.getElementById("close-certification");


// ABRIR CERTIFICACIÓN

certificationCards.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");

        modalCertificationImage.src = image.src;
        modalCertificationImage.alt = image.alt;

        certificationModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

// CERRAR CON LA X

closeCertification.addEventListener("click", () => {

    certificationModal.style.display = "none";

    document.body.style.overflow = "";

});

// CERRAR HACIENDO CLICK FUERA DE LA IMAGEN

certificationModal.addEventListener("click", (event) => {

    if (event.target === certificationModal) {

        certificationModal.style.display = "none";

        document.body.style.overflow = "";

    }

});

// BOTON MENU NAVBAR MOBILE

const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

