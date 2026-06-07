document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation Demo
    const wrongInput = document.getElementById('demo-wrong');
    const correctInput = document.getElementById('demo-correct');
    const outputGroup = document.getElementById('demo-output-group');

    const demoPairs = [
        { wrong: "اثممخ", correct: "Hello", label: "EN → AR fixed" },
        { wrong: "lvpfh", correct: "مرحبا", label: "AR → EN fixed" },
        { wrong: "ثدتشئ", correct: "Enjaz", label: "EN → AR fixed" },
        { wrong: "صاثقث ىخق فثثفهدل", correct: "where are you meeting", label: "EN → AR fixed" },
        { wrong: "lhgb lk hgsjhm", correct: "على ما الحساب", label: "AR → EN fixed" },
        { wrong: "لاثشسث وهءل ائاهد", correct: "please find again", label: "EN → AR fixed" }
    ];

    let currentPairIndex = 0;

    async function typeWriter(text, element, speed = 80) {
        element.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text.charAt(i);
            element.appendChild(charSpan);
            // Randomize typing speed slightly for realism
            await new Promise(resolve => setTimeout(resolve, speed + Math.random() * 40));
        }
    }

    async function runDemo() {
        const badgeEl = document.querySelector('.badge-small');

        while (true) {
            const pair = demoPairs[currentPairIndex];
            wrongInput.innerHTML = '';
            correctInput.innerHTML = '';
            
            // Hide output line initially
            outputGroup.style.opacity = '0';
            outputGroup.style.transform = 'translateY(5px)';
            outputGroup.style.transition = 'none';

            // Type the wrong text
            await typeWriter(pair.wrong, wrongInput, 100);

            // Brief pause before fixing
            await new Promise(resolve => setTimeout(resolve, 300));

            // Show the correction instantly like a terminal output
            correctInput.textContent = pair.correct;
            if (badgeEl && pair.label) badgeEl.textContent = pair.label;
            outputGroup.style.transition = 'all 0.15s ease-out';
            outputGroup.style.opacity = '1';
            outputGroup.style.transform = 'translateY(0)';

            // Wait before next pair to let user read it
            await new Promise(resolve => setTimeout(resolve, 3000));

            currentPairIndex = (currentPairIndex + 1) % demoPairs.length;
        }
    }

    runDemo();
});
