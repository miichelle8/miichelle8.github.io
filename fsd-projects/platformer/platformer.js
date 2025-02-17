$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 450, 500, 20, "pink");
    createPlatform(300, 650, 500, 20, "pink");
    createPlatform(800, 550, 600, 20, "pink");
    createPlatform(700, 650, 300, 20, "pink");
    createPlatform(800, 350, 400, 20, "pink");
    createPlatform(200, 250, 500, 20, "pink");

    // TODO 3 - Create Collectables
    createCollectable("steve", 200, 170, 0, 0.7);
    createCollectable("steve", 500, 600, 0, 0.7);
    createCollectable("steve", 1200, 100, 0, 0.7);
    createCollectable("steve", 1100, 300, 0, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 300, 2000)
    createCannon("left", 210, 1000)
    createCannon("right", 450, 2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
