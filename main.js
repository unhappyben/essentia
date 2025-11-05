// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Set active class based on current page
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPage || (currentPage === '' && linkPath === 'index.html')) {
      link.classList.add('active');
      // Also highlight parent dropdown if it's a dropdown item
      const dropdownItem = link.closest('.dropdown');
      if (dropdownItem) {
        dropdownItem.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  });

  // Handle dropdown on mobile/touch devices
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    let touchTimer;
    
    dropdownToggle.addEventListener('touchstart', (e) => {
      // On touch devices, show dropdown on touch
      if (window.innerWidth <= 768) {
        const dropdown = e.target.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Show dropdown immediately on touch
        dropdown.classList.add('active');
        menu.style.display = 'block';
        
        // Set a timer to allow navigation after a delay if no dropdown item is tapped
        touchTimer = setTimeout(() => {
          // If user doesn't tap a dropdown item within 300ms, allow navigation
        }, 300);
      }
    });
    
    dropdownToggle.addEventListener('click', (e) => {
      // Clear the touch timer if it exists
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
      
      // On mobile, if dropdown is open and user clicks again, navigate
      if (window.innerWidth <= 768) {
        const dropdown = e.target.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // If dropdown is already visible, allow navigation
        if (menu.style.display === 'block' && !e.target.closest('.dropdown-menu')) {
          // Allow navigation - don't prevent default
          return;
        }
      }
      // On desktop, always allow navigation (hover CSS handles dropdown)
    });
  }

  // Close dropdown when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 768) {
          dropdown.classList.remove('active');
          const menu = dropdown.querySelector('.dropdown-menu');
          if (menu) {
            menu.style.display = 'none';
          }
        }
      });
    }
  });
});

