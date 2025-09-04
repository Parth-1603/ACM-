const toggleBtn = document.getElementById('toggleModeBtn');
        const body = document.body;
        let isDark = true;

        toggleBtn.addEventListener('click', () => {
            isDark = !isDark;
            body.classList.toggle('light-mode');
            toggleBtn.innerHTML = isDark
                ? '<i class="fas fa-moon"></i>'
                : '<i class="fas fa-sun"></i>';
        });
