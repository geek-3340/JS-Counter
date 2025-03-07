(() => {
  // DOM
  const $counter = document.getElementById('js-counter');

  // click時の実行関数
  const clickHandler = () => {
    $counter.textContent = 0;
  }

  // click時に実行
  document.getElementById('js-reset-button').
    addEventListener('click', clickHandler);
})();