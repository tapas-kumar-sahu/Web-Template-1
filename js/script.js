// Header Scroll
let nav = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if (window.innerWidth > 991) {
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("header-scrolled");
        }else{
            nav.classList.remove("header-scrolled");
        }
    }else{
        nav.classList.remove("header-scrolled");
    }    
})

// Hide Nav
let navbarCollapse = document.querySelector(".navbar-collapse")
let navLink = document.querySelectorAll(".nav-link")
navLink.forEach((item)=>{
    item.addEventListener("click",()=>{
        navbarCollapse.classList.remove("show");
    })
})

// Color Box enable or disable
let colorIcons = document.querySelector(".color-icon");
let icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click",()=>{
    colorIcons.classList.toggle("open");
})
// Switch colors

let buttons = document.querySelectorAll(".color-switchers .btn");

buttons.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        // console.log(e.target);
        let open = document.querySelector(".open");
        if(open){
            open.classList.remove("open")
        }
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        // js code to switch colors
        let root = document.querySelector(":root");
        let dataColor = e.target.getAttribute("data-color"); //getting data-color values of clicked button
        root.style.setProperty("--text-orange", dataColor);
        root.style.setProperty("--bg-orange", dataColor);
        console.log(dataColor);

    })
})