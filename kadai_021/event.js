function changeText() {
  setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = "ボタンをクリックしました";
  }, 2000);
}
