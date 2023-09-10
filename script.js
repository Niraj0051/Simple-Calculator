let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button  => {
    button.addEventListener("click", (e) => {
        if (!e.target.classList.contains("toggle-mode-button")) {
            if(e.target.innerHTML == "=") {
                string = eval(string);
                input.value = string;
            }

            else if(e.target.innerHTML == "C"){
                string = "";
                input.value = string;
            }

            else if(e.target.innerHTML == "DEL"){
                string = string.substring(0, string.length-1);
                input.value = string;
            }

            else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    })
});

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    updateDarkModeIcon(); 
}

function updateDarkModeIcon() {
    var darkModeIcon = document.getElementById("darkModeIcon");
    var darkModeButton = document.getElementById("darkModeButton");

    // Check if dark mode is currently enabled
    var isDarkMode = document.body.classList.contains("dark-mode");

    // Change the icon based on the current mode
    if (isDarkMode) {
        darkModeIcon.textContent = "🌞"; 
        darkModeButton.setAttribute("aria-label", "Toggle light mode");
    } else {
        darkModeIcon.textContent = "🌛"; 
        darkModeButton.setAttribute("aria-label", "Toggle dark mode");
    }
}

// Call the updateDarkModeIcon function on page load to set the initial icon
updateDarkModeIcon();