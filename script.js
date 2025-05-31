document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("input[type='text']");
    const buttons = document.querySelectorAll(".keypad button");
    const correctPin = "072223";
    buttons.forEach(button => {
        const value = button.textContent;
        // Handle digit and symbol input
        if (value !== "*") {
            button.addEventListener("click", () => {
                // Ignore # button completely since we won't use it
                if (value !== "#") {
                    inputField.value += value;
                }
                // Check the input length — auto-submit when fully typed
                if (inputField.value.trim() === correctPin) {
                    toastr.success("Yown! Kala ko di mo na ko love eh 😭💗");
                    setTimeout(() => {
                        window.location.href = "one.html";
                    }, 1500);
                } else if (inputField.value.length >= correctPin.length) {
                    // If length matches but not correct, show error
                    toastr.error("Awts, di pa pala ito 💔 Try again!");
                    inputField.value = "";
                }
            });
        }
        // Clear button (*)
        if (value === "*") {
            button.addEventListener("click", () => {
                inputField.value = "";
            });
        }
    });
    const startDate = new Date("2023-07-22T00:00:00");
        function updateTimer() {
            const now = new Date();
            const diff = now - startDate;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById("timer").textContent =
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        setInterval(updateTimer, 1000);
        updateTimer();
});

