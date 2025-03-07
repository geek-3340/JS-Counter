(() => {
  // DOM
  const $counter = document.getElementById('js-counter');
  const $logo = document.getElementById('js-logo');

  function updateTransform() {
    $logo.style.transform = `scale(${currentMag}) rotate(${currentAngle}deg)`;
  }

  // click時の実行関数
  const clickHandler = () => {
    $counter.textContent = 0;
    let currentMag = 1;
    let currentAngle = 0;
    updateTransform();
  }

  // click時に実行
  document.getElementById('js-reset-button').
    addEventListener('click', clickHandler);
})();