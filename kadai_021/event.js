const btn2 = document.getElementById('btn');

btn2.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').innerText = 'ボタンをクリックしました';
  }, 2000);    
});