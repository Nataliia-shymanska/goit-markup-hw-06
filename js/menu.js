console.log('Tets');
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.mobile-nav-menu-link');
  const modalContainer = document.querySelector('.close-modal');
  const closeModalButton = document.querySelector('.modal-close-btn');
  const openModalButton = document.querySelector('.order-service-btn');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeModal = () => {
    modalContainer.classList.remove('is-open');
  };

  const openModal = () => {
    modalContainer.classList.add('is-open');
  };
  closeMenuLink.forEach(item =>
    item.addEventListener('click', event => {
      event.preventDefault();
      toggleMenu();
    })
  );
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeModalButton.addEventListener('click', closeModal);
  openModalButton.addEventListener('click', openModal);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
