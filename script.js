function toggleProject(element) {
    const allHeaders = document.querySelectorAll('.project-header');

    const isActive = element.classList.contains('active');

    allHeaders.forEach(header => {
        header.classList.remove('active');
    });

    if (!isActive) {
        element.classList.add('active');
    }
}
