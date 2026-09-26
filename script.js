// ============================
// OPEN GIFT
// ============================

function openGift() {
    const intro = document.getElementById("intro");
    const birthday = document.getElementById("birthday");

    if (!intro || !birthday) {
        console.error("intro or birthday section not found.");
        return;
    }

    intro.style.display = "none";
    birthday.style.display = "flex";

    birthday.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();
}


// ============================
// SHOW SECRET MESSAGE
// ============================

function showMessage() {
    const secret = document.getElementById("secret");

    if (!secret) {
        console.error("Secret message section not found.");
        return;
    }

    secret.style.display = "flex";

    secret.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();
}


// ============================
// CONFETTI
// ============================

function createConfetti() {
    const symbols = ["🎉", "🎊", "✨", "❤️", "🎈", "⭐"];

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        const animation = confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        animation.onfinish = () => confetti.remove();
    }
}
