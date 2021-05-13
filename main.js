var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_img_width =  30;
block_img_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() 
{
    fabric.Image.fromURL("player.png", function (Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
        {
            top: player_y,
            left: player_x,
        });

canvas.add(player_object);

    });

}

function new_image(get_image) 
{
    fabric.Image.fromURL(get_image, function (Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set(
        {
            top: player_y,
            left: player_x,
        });

canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)  
{
    keyPressed = e.keyCode; 
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift key pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    } 

    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift key pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
  
  if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '70')
    {
        new_image('ironman_face.png');
        console.log("f");
    }

    if(keyPressed == '66')
    {
        new_image('spiderman_body.png');
        console.log("b");
    }

    if(keyPressed == '76')
    {
        new_image('hulk_legs.png');
        console.log("l");
    }

    if(keyPressed == '82')
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }

    if(keyPressed == '72')
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
}