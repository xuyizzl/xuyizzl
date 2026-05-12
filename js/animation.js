(function () {
    const heroPanel = document.querySelector('.hero-panel');
    if (!heroPanel) {
        return;
    }

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;

    window.addEventListener('mousemove', function (e) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        targetX = (e.clientX / w - 0.5) * 12;
        targetY = (e.clientY / h - 0.5) * 12;
    });

    function tick() {
        x += (targetX - x) * 0.08;
        y += (targetY - y) * 0.08;
        heroPanel.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
})();
