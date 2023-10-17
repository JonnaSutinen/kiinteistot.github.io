function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Suljetaan dropdown, jos klikataan muualle sivulle
window.onclick = function(event) {
    if (!event.target.matches('.dropdown a')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}