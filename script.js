document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const question = document.getElementById("question");
    const senderName = document.getElementById("sender-name");

    // Handle URL parameters
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");

    if (from) {
        senderName.textContent = `${from} is asking:`;
    }

    yesBtn.addEventListener("click", function () {
        question.textContent = "Yay! 💖 Call Visith, he is waiting for you!";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    noBtn.addEventListener("click", function () {
        let confirmNo = confirm("Are you sure?");
        if (confirmNo) {
            confirmNo = confirm("Really sure?");
            if (confirmNo) {
                confirmNo = confirm("Final answer?");
                if (confirmNo) {
                    const popup = confirm("No? That's heartbreaking! 💔\nClick OK to accept your decision.");
                    if (popup) {
                        question.textContent = "I accept your decision. 💔";
                    }
                }
            }
        }
    });
});
