const sortSelect = document.querySelector('select')

sortSelect.addEventListener("change", function() {
    if (sortSelect.value === "a2z") console.log('a2z')
    if (sortSelect.value === "z2a") console.log('z2a')
    if (sortSelect.value === "category") console.log('category')
    if (sortSelect.value === "location") console.log('location')
})