var backgroundImage
var whiteDiamondImage, whiteDiamond1, whiteDiamond2, whiteDiamond3, whiteDiamond4, whiteDiamond5, whiteDiamond6
var blackDiamondImage, blackDiamond1, blackDiamond2, blackDiamond3, blackDiamond4, blackDiamond5, blackDiamond6
var moonBlockImage, moonBlock
var redButton, yellowButton, greenButton
var ashKing, ashKingImage
var snowWhite, snowWhiteImage

function preload() {
  backgroundImage = loadImage("assets/background.png")
  whiteDiamondImage = loadImage("assets/White Diamond.png")
  blackDiamondImage = loadImage("assets/Black Diamond.png")
  moonBlockImage = loadImage("assets/Moon Block.png")
  ashKingImage = loadImage("assets/AshKing.png")
  snowWhiteImage = loadImage("assets/SnowWhite.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  redButton = createSprite()

  ashKing = createSprite(width-50, 110)
  ashKing.addImage("ash", ashKingImage)
  ashKing.scale = 0.35

  snowWhite = createSprite(50, 110)
  snowWhite.addImage("snow", snowWhiteImage)
  snowWhite.scale = 0.35


  spawnDiamond()
  firstLayer()
  secondLayer()
  thirdLayer()
}
  


function draw() {
  background("blue")

  if(keyDown(RIGHT_ARROW)){
    snowWhite.x -= 5

  }

drawSprites()
}

function firstLayer(){

  moonBlock1 = createSprite(25, 175)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 

  moonBlock2 = createSprite(75, 175)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(125, 175)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(175, 175)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(225, 175)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(275, 175)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(325, 175)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(375, 175)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(425, 175)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(475, 175)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  //

  moonBlock1 = createSprite(width - 25, 175)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 

  moonBlock2 = createSprite(width - 75, 175)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(width - 125, 175)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(width - 175, 175)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(width - 225, 175)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(width - 275, 175)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(width - 325, 175)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(width - 375, 175)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(width - 425, 175)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(width - 475, 175)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

}



function secondLayer(){

  moonBlock1 = createSprite(225, 350)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(275, 350)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(325, 350)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(365, 359)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08

  moonBlock5 = createSprite(395, 359)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08

  moonBlock6 = createSprite(425, 359)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08

  moonBlock7 = createSprite(455, 359)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08

  moonBlock8 = createSprite(485, 359)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08

  moonBlock9 = createSprite(515, 350)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  
  moonBlock10 = createSprite(565, 350)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(615, 350)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13

  moonBlock12 = createSprite(665, 350)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13

  moonBlock13 = createSprite(715, 350)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13

  moonBlock14 = createSprite(765, 350)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13

  moonBlock15 = createSprite(815, 350)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13

  moonBlock16 = createSprite(845, 350)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13

//


  moonBlock1 = createSprite(width - 225, 350)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(width - 275, 350)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(width - 325, 350)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(width - 365, 359)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08

  moonBlock5 = createSprite(width - 395, 359)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08

  moonBlock6 = createSprite(width - 425, 359)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08

  moonBlock7 = createSprite(width - 455, 359)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08

  moonBlock8 = createSprite(width - 485, 359)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08

  moonBlock9 = createSprite(width - 515, 350)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  
  moonBlock10 = createSprite(width - 565, 350)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(width - 615, 350)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13

  moonBlock12 = createSprite(width - 665, 350)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13

  moonBlock13 = createSprite(width - 715, 350)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13

  moonBlock14 = createSprite(width - 765, 350)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13

  moonBlock15 = createSprite(width - 815, 350)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13

  moonBlock16 = createSprite(width - 845, 350)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13

}



function thirdLayer(){

  moonBlock1 = createSprite(25, 525)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(75, 525)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(125, 525)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(175, 525)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(225, 525)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(275, 525)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(325, 525)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(375, 525)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(425, 525)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(475, 525)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(525, 525)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13

  moonBlock12 = createSprite(575, 525)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13

  moonBlock13 = createSprite(625, 525)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13

  moonBlock14 = createSprite(675, 525)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13

  moonBlock15 = createSprite(725, 525)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13

  moonBlock16 = createSprite(775, 525)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13

  moonBlock17 = createSprite(825, 525)
  moonBlock17.addImage("moon", moonBlockImage)
  moonBlock17.scale = 0.13

  moonBlock18 = createSprite(875, 525)
  moonBlock18.addImage("moon", moonBlockImage)
  moonBlock18.scale = 0.13

//

  moonBlock1 = createSprite(width - 25, 525)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(width - 75, 525)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(width - 125, 525)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(width - 175, 525)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(width - 225, 525)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(width - 275, 525)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(width - 325, 525)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(width - 375, 525)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(width - 425, 525)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(width - 475, 525)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(width - 525, 525)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13

  moonBlock12 = createSprite(width - 575, 525)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13

  moonBlock13 = createSprite(width - 625, 525)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13

  moonBlock14 = createSprite(width - 675, 525)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13

  moonBlock15 = createSprite(width - 725, 525)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13

  moonBlock16 = createSprite(width - 775, 525)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13

  moonBlock17 = createSprite(width - 825, 525)
  moonBlock17.addImage("moon", moonBlockImage)
  moonBlock17.scale = 0.13

  moonBlock18 = createSprite(width - 875, 525)
  moonBlock18.addImage("moon", moonBlockImage)
  moonBlock18.scale = 0.13

}


function fourthLayer(){

  moonBlock1 = createSprite(25, 525)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

}


function spawnDiamond(){
  whiteDiamond1 = createSprite(420, 90)
  whiteDiamond1.addImage("white", whiteDiamondImage)
  whiteDiamond1.scale = 0.05

  whiteDiamond2 = createSprite(width - 750, 265)
  whiteDiamond2.addImage("white", whiteDiamondImage)
  whiteDiamond2.scale = 0.05

  whiteDiamond3 = createSprite(width- 100, 315)
  whiteDiamond3.addImage("white", whiteDiamondImage)
  whiteDiamond3.scale = 0.05

  whiteDiamond4 = createSprite(600, 450)
  whiteDiamond4.addImage("white", whiteDiamondImage)
  whiteDiamond4.scale = 0.05

  whiteDiamond5 = createSprite(width - 50, 665)
  whiteDiamond5.addImage("white", whiteDiamondImage)
  whiteDiamond5.scale = 0.05

  whiteDiamond6 = createSprite(100, height - 90)
  whiteDiamond6.addImage("white", whiteDiamondImage)
  whiteDiamond6.scale = 0.05


  blackDiamond1 = createSprite(width - 420, 90)
  blackDiamond1.addImage("black", blackDiamondImage)
  blackDiamond1.scale = 0.05

  blackDiamond2 = createSprite(750, 265)
  blackDiamond2.addImage("black", blackDiamondImage)
  blackDiamond2.scale = 0.05

  blackDiamond3 = createSprite(100, 315)
  blackDiamond3.addImage("black", blackDiamondImage)
  blackDiamond3.scale = 0.05

  blackDiamond4 = createSprite(width - 600, 450)
  blackDiamond4.addImage("black", blackDiamondImage)
  blackDiamond4.scale = 0.05

  blackDiamond5 = createSprite(50, 585)
  blackDiamond5.addImage("black", blackDiamondImage)
  blackDiamond5.scale = 0.05

  blackDiamond6 = createSprite(width - 510, 765)
  blackDiamond6.addImage("black", blackDiamondImage)
  blackDiamond6.scale = 0.05
}