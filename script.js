const day = document.querySelectorAll('.day')

day.forEach(function (days) {
    days.addEventListener('mouseenter', function () {
        days.previousElementSibling.classList.add(('show-on'))
    })
})
day.forEach(function (days) {
    days.addEventListener('mouseleave', function () {
        days.previousElementSibling.classList.remove(('show-on'))
    })
})

