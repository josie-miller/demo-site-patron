const rating = document.getElementById('rating');
rating.addEventListener('input', () => {
 const value = Number(rating.value);
 document.getElementById('score').textContent = value.toFixed(1);
 document.getElementById('ratingRing').style.background = `conic-gradient(var(--wine) ${value * 10}%, var(--dust) 0)`;
});
document.getElementById('recommend').addEventListener('click', event => {
 const button=event.currentTarget;
 const selected=button.getAttribute('aria-pressed')==='true';
 button.setAttribute('aria-pressed',String(!selected));
 button.textContent=selected?'Recommend this visit':'✓ Recommend this visit';
});
