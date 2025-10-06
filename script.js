document
        .querySelector(".menu-btn")
        .addEventListener("click", function () {
          document.querySelector(".nav-links").classList.toggle("active");
        });

      // Cerrar menú al hacer clic en un enlace (móvil)
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector(".nav-links").classList.remove("active");
        });
      });

      // Partículas de fondo
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#8a2be2" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8a2be2",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
      });

      // Animación al hacer scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observar elementos para animación
      document
        .querySelectorAll(
          ".card, .skill-category, .project-card, .cert-card, .timeline-content"
        )
        .forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          observer.observe(el);
        });


  document.querySelector(".contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      nombre: document.getElementById("name").value,
      email: document.getElementById("email").value,
      asunto: document.getElementById("subject").value,
      mensaje: document.getElementById("message").value
    };

    const res = await fetch("http://localhost:8080/api/contacto/recibir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const msg = await res.text();
    alert(msg);
  });

