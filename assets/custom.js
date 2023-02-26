  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  var canvas, ctx, height, width, flakes, flake_count, flake_size;

  function draw_frame() {
    for (var i = 0; i < flakes.length; i++) {
      var flake = flakes[i];
      flake.y += flake.speed;
      if (flake.y > height) {
        flake.y = -flake_size
      }
      flake.style.top = flake.y.toString() + 'px'
    }
  }

  function animate() {
    requestAnimFrame(animate);
    draw_frame();
  }

  var width, height, types, body, flakes;

  function init() {
    height = document.body.offsetHeight,
    width = document.body.offsetWidth,
    flakes = [],
    flake_count = 100,
    flake_size = 20;
    var types = ['a', 'a', 'a', 'a', 'b', 'c', 'd'],
        body = document.body;

    for (var i = 0; i < flake_count; i++) {
      var x = width * Math.random();
      var y = height * Math.random();
      var type = Math.floor(Math.random() * types.length);
      var flake = document.createElement('span');
      flake.className = 'snow ' + types[type];
      flake.style.left = x.toString() + 'px';
      flake.style.top = y.toString() + 'px';
      flake.style['-webkit-animation-duration'] = ((Math.random() * 15) + 5).toString() + 's';
      flake.x = x;
      flake.y = y;
      flake.speed = (Math.random() + 0.15);
      body.appendChild(flake);
      flakes.push(flake);
    }

    animate();
  }

  window.onload = function() {
    init();
  };