// زر القائمة للجوال

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#111";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.width = "220px";
    }

});

// رسالة تأكيد الحجز
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const service = document.querySelector('select').value;
    const date = document.querySelector('input[type="date"]').value;

    const message =
`حجز جديد في BarberLux

الاسم: ${name}
الهاتف: ${phone}
الخدمة: ${service}
التاريخ: ${date}`;

const whatsappNumber = "212711328238";

window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
);

});

const hiddenElements = document.querySelectorAll(
    ".card, .barber-card, .review, .price-item"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

hiddenElements.forEach((el)=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s";

    observer.observe(el);

});

// تغيير لون شريط التنقل أثناء التمرير

window.addEventListener("scroll", ()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#000";
        navbar.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.5)";

    }else{

        navbar.style.background = "#111";
        navbar.style.boxShadow = "none";

    }

});

// تأثير الضغط على البطاقات

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.05)";

        setTimeout(() => {

            card.style.transform = "";

        }, 200);

    });

});
console.log("BarberLux جاهز للعمل ✂️");

window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
});