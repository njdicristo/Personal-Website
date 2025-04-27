const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
    console.log(entries);
}, {
    threshold: 0,
});
sections.forEach(section => {
    observer.observe(section);
})
observer.observe(sections[0]);