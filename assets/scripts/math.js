(() => {
  const $counter = document.getElementById('js-counter');
  const $logo = document.getElementById('js-logo');
  
  let currentMag = 1;
  let currentAngle = 0;
  const updateTransform=()=> {
     $logo.style.transform = `scale(${currentMag}) rotate(${currentAngle}deg)`;
  }
  
  const increaseMag=()=> {
    if (currentMag <= 1.4) {
      currentMag = currentMag + 0.2;
      updateTransform();
    } else {
      alert('No more!');
    }
  }
  
  const decreaseMag=()=> {
    if (currentMag >= 0.6) {
      currentMag = currentMag - 0.2;
      updateTransform();
    } else {
      alert('Please stop!');
    }
  }

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

  for (let index = 0; index < document.getElementsByClassName('js-button').length; index++) {
    document.getElementsByClassName('js-button')[index].
      addEventListener('click', (e) => clickHandler(e));
  };
})();