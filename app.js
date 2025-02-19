let isinner_ContactOpen = false;
let darktoggle = false;
const Scalefactor = 1 / 20;

function movingBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * Scalefactor;
    const y = event.clientY * Scalefactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)` 
    }
}


function Darkmode_toggle() {
    darktoggle = !darktoggle;
    if (darktoggle) {
        document.body.classList += " dark_theme"
    }
    else {
        document.body.classList.remove("dark_theme")
    }

}
function Contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".inner_Contact_overlay--Loading");
    const success = document.querySelector(".inner_Contact_overlay--success");
    loading.classList += " inner_Contact_overlay_visible";
    emailjs
        .sendForm (
           "service_ngh28wz",
            "template_oqg8cyf",
            event.target,
            "crFWlVbYA5WGha-Qm"
        )
        .then (() => {
            loading.classList.remove("inner_Contact_overlay_visible");
            success.classList += " inner_Contact_overlay_visible";
        })
        .catch (() => {
            loading.classList.remove("inner_Contact_overlay_visible");
            alert (
                "Sorry the email service is currently down. Please contact me directly on williamalvarezrodas@gmail.com"
            );
        });
}

function toggleinner_Contact() {
    if (isinner_ContactOpen) {
        isinner_ContactOpen = false;
        return document.body.classList.remove("inner_Contact--open")
    }
    isinner_ContactOpen = true;
    document.body.classList += "inner_Contact--open";
}