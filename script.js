document.getElementById('dropdownButton').addEventListener('click', function (event) {
    var dropdownMenu = document.getElementById('dropdownMenu')
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block'
    } else {
        dropdownMenu.style.display = 'none'
    }
    event.stopPropagation()
})

document.addEventListener('click', function (event) {
    var dropdownMenu = document.getElementById('dropdownMenu')
    if (!dropdownMenu.contains(event.target) && dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none'
    }
})

var links = document.querySelectorAll('.dropdown-menu a')
links.forEach(function (link) {
    link.addEventListener('click', function () {
        var dropdownMenu = document.getElementById('dropdownMenu')
        dropdownMenu.style.display = 'none'
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     const items = document.querySelectorAll('.carousel-item');
//     let currentIndex = 0;

//     function showNextItem() {
//         items[currentIndex].classList.remove('active');
//         items[currentIndex].classList.add('previous');

//         currentIndex = (currentIndex + 1) % items.length;

//         items[currentIndex].classList.remove('previous');
//         items[currentIndex].classList.add('active');
//     }

//     // Initialize the first item as active
//     items[currentIndex].classList.add('active');

//     // Change item every 10 seconds
//     setInterval(showNextItem, 10000);
// });
