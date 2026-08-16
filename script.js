document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("contactModal");
    const openButton = document.getElementById("openContactModal");
    const closeButton = document.getElementById("closeContactModal");
    const heroButton = document.getElementById("heroGetStarted");
    const marketplaceButtons = document.querySelectorAll(".open-contact");


    function openModal(e) {

        if (e) {
            e.preventDefault();
        }

        if (modal) {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

    }


    function closeModal() {

        if (modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }

    }


    if (openButton) {
        openButton.addEventListener("click", openModal);
    }


    if (heroButton) {
        heroButton.addEventListener("click", openModal);
    }


    marketplaceButtons.forEach(function (button) {

        button.addEventListener("click", openModal);

    });


    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }


    if (modal) {

        modal.addEventListener("click", function (e) {

            if (e.target === modal) {
                closeModal();
            }

        });

    }


    document.addEventListener("keydown", function (e) {

        if (
            e.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });

});