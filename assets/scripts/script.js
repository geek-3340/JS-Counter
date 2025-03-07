(() => {
  // DOM
  const $counter = document.getElementById('js-counter');
  const $logo = document.getElementById('js-logo');
  
  // logoの拡大率、角度　初期化
  let currentMag = 1;
  let currentAngle = 0;
  function updateTransform() {
     $logo.style.transform = `scale(${currentMag}) rotate(${currentAngle}deg)`;
  }

  // logoを拡大する関数
  function increaseMag() {
    if (currentMag <= 1.4) {
      currentMag = currentMag + 0.2;
      updateTransform();
    } else {
      alert('No more!');
    }
  }

  // logoを縮小する関数
  function decreaseMag() {
    if (currentMag >= 0.6) {
      currentMag = currentMag - 0.2;
      updateTransform();
    } else {
      alert('Please stop!');
    }
  }

function resetMagAngle {
  currentMag = 1;
  currentAngle = 0;
  updateTransform();
}

  // click時の実行関数
  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === 'Plus') {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === 'Subtract') {
      $counter.textContent = currentCount - 1;
    } else if ($targetButton.textContent === 'Magnification') {
      increaseMag();
    } else if ($targetButton.textContent === 'Reduction') {
      decreaseMag();
    } else {
      currentAngle += 360;
      updateTransform();
    }
  }

  // clickに実行
  for (let index = 0; index < document.getElementsByClassName('js-button').length; index++) {
    document.getElementsByClassName('js-button')[index].
      addEventListener('click', (e) => clickHandler(e));
  };
  
})();