let count = 0;
const countNode = document.querySelector('#cart-count');
document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', () => {
    count += 1;
    countNode.textContent = count;
    const original = button.textContent;
    button.textContent = 'Added ✓';
    button.setAttribute('aria-label', `${button.dataset.product} added to bag`);
    window.setTimeout(() => { button.textContent = original; }, 900);
  });
});
