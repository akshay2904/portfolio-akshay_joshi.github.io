document.getElementById('yr').textContent = new Date().getFullYear();

// Typed.js hero
new Typed('#typed-hero', {
    strings: ['Data Pipelines.', 'ML Systems.', 'Cloud Infrastructure.', 'Real-Time Streams.'],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 2000,
    startDelay: 400,
    loop: true,
    showCursor: true,
    cursorChar: '_',
});

// Scroll reveal
const rev = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
rev.forEach(el => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item[href^="#"]');
const navIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navItems.forEach(n => n.classList.remove('active'));
            const link = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
            if (link) link.classList.add('active');
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => navIo.observe(s));

// Close sidebar on mobile nav click
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth <= 900) sidebar.classList.remove('open');
    });
});

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
    const sidebar = document.getElementById('sidebar');
    const mbar = document.getElementById('mobile-bar');
    if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !mbar.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// Skill tag stagger animation
const skillIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.tag').forEach((tag, i) => {
                setTimeout(() => tag.classList.add('visible'), i * 45);
            });
            skillIO.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-group').forEach(g => skillIO.observe(g));

// Bento stat counter animation
// Animate only the numeric bento stat (Years Exp)
const yearsEl = document.querySelector('.bento-stat:not(.domain) .val');

function countUp(el, target, suffix) {
    const dur = 1200;
    const start = performance.now();
    const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * ease) + suffix;
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

const bentoIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            if (yearsEl) countUp(yearsEl, 4, '+');
            bentoIO.disconnect();
        }
    });
}, { threshold: 0.5 });

const bento = document.querySelector('.hero-bento');
if (bento) bentoIO.observe(bento);
