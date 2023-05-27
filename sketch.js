var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


function preload() {
    //setting animations and images.
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}
function setup() {
    createCanvas(600, 200);

    //create a trex sprite.
    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite.
    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200, 195, 400, 20);
    invisibleGround.visible = false;
}
function draw() {
    background(220);
    //jump when the space button is pressed.
    if (keyDown("space") && trex.y >= 125) {
        trex.velocityY = -10;
    }


    //Making the dino fall down onto the ground.
    trex.velocityY = trex.velocityY + 0.8

    //Infinite background constantly moving.
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    //Making sure the dino will not fall through the ground.
    trex.collide(invisibleGround);
    drawSprites();

    console.log(trex.y);
}
