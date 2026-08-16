document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("contactModal");
    const openButton = document.getElementById("openContactModal");
    const closeButton = document.getElementById("closeContactModal");

    if (openButton && modal) {

        openButton.addEventListener("click", function (e) {

            e.preventDefault();

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }


    if (closeButton && modal) {

        closeButton.addEventListener("click", function () {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    if (modal) {

        modal.addEventListener("click", function (e) {

            if (e.target === modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    }


    document.addEventListener("keydown", function (e) {

        if (
            e.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});