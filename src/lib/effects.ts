var effects = <any>{};

effects.fadeIn = (element: any, speed: number = 0) => {
  // console.trace();
  speed = speed + 0.1;

  element.style.opacity = speed;
  element.style.display = 'block';

  if (speed < 1) {
    setTimeout(() => {
      effects.fadeIn(element, speed);
    }, 10);
  }
};

effects.fadeOut = (element: any, speed: number = 1) => {
  // console.trace();
  const timer = setInterval(function () {
      if (speed <= 0.0) {
        clearInterval(timer);
      }
      element.style.opacity = speed;
      element.style.display = 'none';
      element.style.filter = 'alpha(opacity=' + speed * 100 + ")";
      speed -= 0.1;
  }, 25);
};

export default effects;
