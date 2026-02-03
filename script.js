let scale = 1;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const countdown = document.getElementById("countdown");

/* כפתור "לא" רק מגדיל את "כן" */
noBtn.addEventListener("click", () => {
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;
    question.innerText = "נו באמת… זה ברור שכן 😒";
});

/* לחיצה על כן */
yesBtn.addEventListener("click", () => {
    launchConfetti();
    document.querySelector(".card").innerHTML = `
        <h1>❤️ ידעתי שתגידי כן ❤️</h1>
        <p>מחכה כבר ל־14.2 איתך 🥰</p>
        <a href="https://wa.me/972XXXXXXXXX" target="_blank">
            <button style="background:#25D366;color:white;">
                שלחי לי הודעה 💬
            </button>
        </a>
    `;
});

/* קונפטי רגיל */
function launchConfetti() {
    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"];
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

/* לבבות ברקע */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 800);

/* קאונטדאון לוולנטיין */
function getNextValentine() {
    const now = new Date();
    let year = now.getFullYear();
    let val = new Date(year, 1, 14);
    if (now > val) val = new Date(year + 1, 1, 14);
    return val;
}
const valentine = getNextValentine();
setInterval(() => {
    const now = new Date();
    const diff = valentine - now;
    if (diff <= 0) {
        countdown.innerText = "💘 זה היום! 💘";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerText = `עוד ${days} ימים לוולנטיין 💕`;
}, 1000);
