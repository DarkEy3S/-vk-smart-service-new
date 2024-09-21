export function popup() {
    const close = document.querySelectorAll('.popup__close');
    const popupBlock = document.querySelector('.popup__block');
    const popupOverflow = document.querySelector('body');
    const formPopup = document.querySelector('.form.popup');
    let popup;
    if (!popupBlock && !popupOverflow && !formPopup) return;

    // formPopup.addEventListener('submit', closed);

    document.documentElement.addEventListener('click', opening);

    function opening(e) {
        let target = e.target;
        if (
            !target.hasAttribute('href') ||
            target.getAttribute('href').slice(0, 6) != '#popup'
        )
            return;
        popup = document.getElementById(target.getAttribute('href').slice(1));

        popup.classList.add('active');
        popupBlock.classList.add('active');
        popupOverflow.classList.add('popup__overflow');

        popupBlock.addEventListener('click', closed);
        document.documentElement.addEventListener('keydown', onKeyDown);
        close.forEach(element => {
            if (!element) return;
            element.addEventListener('submit', e => e.preventDefault());
            element.addEventListener('click', closed);
        });
    }

    function onKeyDown(e) {
        if (e.code === 'Escape') closed();
    }

    function closed() {
        {
            popup.classList.remove('active');
            popupBlock.classList.remove('active');
            popupOverflow.classList.remove('popup__overflow');
        }
    }
}
