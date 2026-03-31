const time = new Date();
const hours = time.getHours();
console.log(time.toDateString());

document.querySelectorAll(".social-badge").forEach(link => {
    link.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-outline").classList.add("cursor-active");
    });
    link.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-outline").classList.remove("cursor-active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const greeting_text = document.getElementById("greeting");

    if ((hours < 12) && (hours >= 4)) {
        greeting_text.textContent = "Good Morning";
    } else if (hours < 18 && hours >= 12) {
        greeting_text.textContent = "Good Afternoon";
    } else {
        greeting_text.textContent = "Good Evening";
    }

const headings = document.querySelectorAll("main h3");

headings.forEach(function(h3) {
    h3.style.cursor = "pointer";
    if (!h3.textContent.includes("▼")) {
        h3.textContent = "▼ " + h3.textContent;
    }

    h3.addEventListener("click", function() {
        let next = this.nextElementSibling;
        let isNowHidden = false;

        while (next && next.tagName !== "H3") {
            if (!next.classList.contains('collapsible-content')) {
                next.classList.add('collapsible-content');
            }
            
            next.classList.toggle("minimized");
            isNowHidden = next.classList.contains("minimized");
            next = next.nextElementSibling;
        }

        this.textContent = isNowHidden ? 
            this.textContent.replace("▼", "▶") : 
            this.textContent.replace("▶", "▼");
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, section, aside').forEach(el => {
    observer.observe(el);
});

});

const darkBtn = document.getElementById("darkModeToggle");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.querySelectorAll(".shape").forEach(shape => {
        const speed = shape.getAttribute('data-speed');
        const moveX = (window.innerWidth - x * speed) / 150;
        const moveY = (window.innerHeight - y * speed) / 150;

        shape.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
});

const links = document.querySelectorAll("a, button, .flip-card, #darkModeToggle, h3");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-outline").classList.add("cursor-active");
    });
    link.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-outline").classList.remove("cursor-active");
    });
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const greseli = [];
   
    const name = document.getElementById('name').value;
    if (!(name.includes(' '))) greseli.push("Name must contain first and last name.");
    
    const email = document.getElementById('email').value;
    if (!email.includes('@')) greseli.push("Enter a valid email.");
    
    const message = document.getElementById('message').value;
    if (message.length < 10) greseli.push("Message too short.");

    const feedback_text = document.getElementById("form-feedback");
    const submitBtn = form.querySelector('button[type="submit"]');

    if (greseli.length === 0) {
        submitBtn.innerHTML = "<span>✓</span> Sent!";
        feedback_text.textContent = "Message sent successfully!";
        feedback_text.style.color = "#2ecc71";
        setTimeout(() => {
            submitBtn.innerHTML = "Submit";
            form.reset();
            feedback_text.textContent = "";
        }, 3000);
    } else {
        feedback_text.innerText = greseli.join("\n");
        feedback_text.style.color = "#ff4757";
    }
});

const flipCard = document.querySelector(".flip-card");
if (flipCard) {
    const cardImages = flipCard.querySelectorAll("img");
    flipCard.addEventListener("mousemove", (e) => {
        const rect = flipCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cardImages.forEach(img => {
            img.style.transform = `scale(1.1) translate(${x * -20}px, ${y * -20}px)`;
        });
    });

    flipCard.addEventListener("mouseleave", () => {
        cardImages.forEach(img => {
            img.style.transform = `scale(1) translate(0, 0)`;
        });
    });

    const skillBars = document.querySelectorAll('.skill-per');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute('data-percent') + '%';
        }
    });
});
skillBars.forEach(bar => observer.observe(bar));
const observerOptions = {
    threshold: 0.5 
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = bar.getAttribute('data-percent');
            bar.style.width = percentage + '%';
            skillObserver.unobserve(bar); 
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-per').forEach(bar => {
    skillObserver.observe(bar);
});
window.onscroll = function() { updateScrollIndicator() };

function updateScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const bar = document.getElementById("myBar");
    if (bar) {
        bar.style.width = scrolled + "%";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const graph = document.getElementById("activityGraph");
    if (graph) {
        for (let i = 1; i <= 140; i++) {
            const cell = document.createElement("div");
            cell.classList.add("activity-cell");
            
            let level = 0;

            if (i === 48 || i===49) { 
                level = 3; 
            } 
            if(i === 43){
                level = 2;
            }
            else {
                //const rand = Math.random();
                //if (rand > 0.8) level = 1;     
                //else if (rand > 0.95) level = 2; 
            }

            if (level > 0) {
                cell.classList.add(`lv${level}`);
            }
            
            graph.appendChild(cell);
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const metaDate = document.querySelector(".cv-metadata .meta-item:last-child");
    if (metaDate) {
        const now = new Date();
        const options = { month: 'long', year: 'numeric' };
        metaDate.innerHTML = `📅 Last updated: ${now.toLocaleDateString('en-US', options)}`;
    }
});

document.addEventListener("mousemove", (e) => {

    const shapes = document.querySelectorAll(".shape");
    const x = e.clientX;
    const y = e.clientY;

    shapes.forEach(shape => {
        const speed = shape.getAttribute('data-speed');
        
        const moveX = (window.innerWidth - x * speed) / 100;
        const moveY = (window.innerHeight - y * speed) / 100;

        shape.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
});

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const loaderBar = document.getElementById("loaderProgress");
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 30; 
        if (progress > 100) progress = 100;
        
        loaderBar.style.width = progress + "%";

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add("preloader-hidden");
                document.body.style.overflow = "auto";
            }, 500);
        }
    }, 150);
});

document.body.style.overflow = "hidden";

}
