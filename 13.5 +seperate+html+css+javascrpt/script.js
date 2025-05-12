// Select all h3 elements inside .section
const headers = document.querySelectorAll('.section h3');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
