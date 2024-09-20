export function hover() {
    const pulse = document.querySelectorAll('.pulse');

    pulse.forEach(function (element) {
        element.addEventListener('mouseover', e => {
            let target = e.target.closest('a');
            if (!target) return;
            console.log(target);
            element.classList.add('active');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('active');
        });
    });
}
