function animateValue(id, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        document.getElementById(id).textContent = current.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const statsSection = document.querySelector('.stats');
    if (isElementInViewport(statsSection) && !statsSection.classList.contains('animated')) {
        statsSection.classList.add('animated');
        animateValue("users-count", 0, 1000000, 2000);
        animateValue("doctors-count", 0, 50000, 2000);
        animateValue("countries-count", 0, 75, 2000);
        animateValue("consultations-count", 0, 5000000, 2000);
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();