/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/WmVFpvzW
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


function preload() {

  this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
  game.stage.backgroundColor = '#fffff';
	game.world.setBounds(0,0,62000,768*3); //grandezza del gioco

    game.load.crossOrigin = 'anonymous';
	  game.load.spritesheet('player', 'sprites/heliodorus16.png', 128,143.7);
    game.load.image('platform', 'http://examples.phaser.io/assets/sprites/rgblaser.png');
    game.load.image('stone', 'sprites/pietrina.png');


  game.load.image('bg' ,'sprites/background/livellocolore.png');
    game.load.image('bg1' ,'sprites/background/livellocolore2.png');
    game.load.image('bg2' ,'sprites/background/livellocolore3.png');
	game.load.image('porta', 'sprites/porta.png');


    game.load.spritesheet('bullet', 'sprites/magiaHelio.png',64.4,56);
    game.load.spritesheet('bullet1', 'sprites/enemybullets.png', 62.5,21);
    game.load.spritesheet('nuvola','sprites/nuvoletta.png',118,71);
    game.load.spritesheet('enemy1', 'sprites/fiamma2.png', 195,235 );
    game.load.spritesheet('enemy', 'sprites/fiamma1.png', 195,235 );
    game.load.image('icon', 'http://examples.phaser.io/assets/sprites/aqua_ball.png');
    game.load.image('ladder', 'sprites/ladder.png');
    game.load.image('lantern', 'sprites/lantern.png');
    game.load.spritesheet('lights', 'sprites/sprites.png',64.4,66);
    game.load.spritesheet('lucicheck', 'sprites/lucicheck.png',64.14,65);
    game.load.image('twomp', 'sprites/twomp.png');
  	game.load.image('sign' , 'sprites/cartello.png');
	  game.load.spritesheet('melma' , 'sprites/melma.png',501,100);
	  game.load.image('boat', 'sprites/tronco.png');
	  game.load.image('plat', 'sprites/rotante.png');
    game.load.image('platgrotta', 'sprites/platgrotta.png');


  game.load.image('wand' , 'sprites/wand.png');
  game.load.image('nowand' , 'sprites/nowand1.png');
  game.load.image('luce1wand' , 'sprites/luce1wand.png');
  game.load.image('luce2wand' , 'sprites/luce2wand.png');
  game.load.image('sgretola' , 'sprites/sgretola.png');
  game.load.spritesheet('fungo' , 'sprites/Fungo.png', 242,154);
game.load.image('stalat1' , 'sprites/stala1.png');
  game.load.image('stalat2' , 'sprites/stala2.png');
  game.load.image('stalat3' , 'sprites/stala3.png');
  game.load.image('stalat4' , 'sprites/stala4.png');
  game.load.image('stalat5' , 'sprites/stala5.png');
  game.load.image('stalat6' , 'sprites/stala6.png');
  game.load.spritesheet('poterimagici' , 'sprites/poterimagici.png', 273,273);


  game.load.spritesheet('play', 'sprites/play.png',288.4,155.7);
  game.load.spritesheet('credits', 'sprites/credits.png',562,155.7);
  game.load.spritesheet('back', 'sprites/back.png',165.2,155.7);
  game.load.spritesheet('story', 'sprites/story.png',330.4,155.7);
  game.load.image('scrittaMove' , 'sprites/scrittaMove.png');
  game.load.image('scrittaSpace' , 'sprites/scrittaSpace.png');
  game.load.image('scrittaJ' , 'sprites/scrittaJ.png');
  game.load.image('scrittaF' , 'sprites/scrittaF.png');
  game.load.image('scrittaFaith' , 'sprites/scrittaFaith.png');
  game.load.image('scrittaClimb' , 'sprites/scrittaClimb.png');
  game.load.image('scrittaWizard' , 'sprites/scrittaWizard.png');
  game.load.image('scrittaWizardback' , 'sprites/scrittaWizardback.png');
  game.load.spritesheet('scrittaContinue' , 'sprites/scrittaContinue.png',246,77.2);
  game.load.spritesheet('scrittaMenu' , 'sprites/scrittaMenu.png',246,77.2);
  game.load.spritesheet('scrittaStart' , 'sprites/scrittaStart.png', 216.19,77.2);

    game.load.image('cuore', 'sprites/cuore.png');
    game.load.image('followed', 'sprites/cuore1.png');
  	game.load.image('cuore1', 'sprites/cuore1.png');
  	game.load.image('pietra', 'sprites/pietra.png');
  	game.load.image('pietra1', 'sprites/pietra1.png');
  	game.load.image('bacchetta', 'sprites/bacchetta.png');
  	game.load.image('bacchetta1', 'sprites/bacchetta1.png');
  	game.load.image('mantello', 'sprites/mantello.png');
  	game.load.image('mantello1', 'sprites/mantello1.png');
  	game.load.image('barra' , 'sprites/bar.png');
  	game.load.image('morte1' , 'sprites/falce1.png');
  	game.load.image('caricaJ', 'sprites/caricaJ.png');
  	game.load.image('caricaJ1', 'sprites/caricaJ1.png');
  	game.load.image('caricaF', 'sprites/caricaF.png');
  	game.load.image('caricaF1', 'sprites/caricaF1.png');

  game.load.image('mainmenu', 'sprites/covernewer.jpg');
  game.load.image('schermatacrediti', 'sprites/credits.jpg');
  game.load.image('scena1' , 'sprites/scena1.jpg');
  game.load.image('scena2' , 'sprites/scena2.jpg');
  game.load.image('scena3' , 'sprites/scena3.jpg');
  game.load.image('scena4' , 'sprites/scena4.jpg');
  game.load.image('scena5' , 'sprites/scena5.jpg');
  game.load.image('scena6' , 'sprites/scena6.jpg');
  game.load.image('vittoria' , 'sprites/vittoria.jpg');
  game.load.image('mortevite' , 'sprites/mortevite.jpg');
  game.load.image('mortetempo' , 'sprites/mortetempo.jpg');
  game.load.image('invisibilità' , 'sprites/mantellino.png');
  game.load.image('tenyears' , 'sprites/tenyears.png');
  game.load.image('collect' , 'sprites/collect.png');
  game.load.image('almostthere' , 'sprites/almostthere.png');
  game.load.image('loading' , 'sprites/loading.png');



  game.load.image('wall' , 'sprites/murosx.png');
  game.load.spritesheet('fireball', 'sprites/fireball.png', 129,55);
  game.load.spritesheet('boss', 'sprites/bosss.png', 100,151);
  game.load.spritesheet('bulletboss' , 'sprites/bulletboss.png', 64.4,56);
  game.load.spritesheet('healthbar' , 'sprites/healthbar.png', 45.2, 330);
	//tilemap Area
	game.load.tilemapTiledJSON('map', 'sprites/tilemap/prova8.json')
	game.load.image('tiles', 'sprites/tilemap/firstroundplatform.png');
  game.load.image('tiles1', 'sprites/tilemap/roundplatform.png');
  game.load.image('tiles2', 'sprites/tilemap/roundplatform1.png');


	//game.load.image('secondo', 'sprites/tilemap/secondo.png');
}

var player;
var platforms;
var cursors;
var jumpButton;
var sfondo;
var map;
var magianemico=true;
var magianemico1=true;
var layer;
var lantern_x = 0; // checkpoint x coordinate
var lantern_y = 0; // checkpoint y coordinate
var startTime;
var startboat=false;
var sign4;

function create() {


//SFONDO & BACKGROUND & PARALLAX

  bg = game.add.sprite(0,0,'bg');
  bg1 = game.add.sprite(16383,0,'bg1');
  bg2 = game.add.sprite(16383*2,0,'bg2');


    //BACCHETTA
    luce2wand = game.add.sprite (11175, 500, 'luce2wand');
    nowand= game.add.sprite (11285, 1120, 'nowand');
    wand = game.add.sprite (11285, 1120, 'wand');
    luce1wand = game.add.sprite (11175, 500, 'luce1wand');

    wand.scale.setTo(0.2);
    nowand.scale.setTo(0.2);
    luce1wand.scale.setTo(0.3,1.2);
    luce2wand.scale.setTo(0.3,1.2);

    boat = game.add.sprite(28170, 2246, 'boat');
		//TEMPORARY
		piatte = game.add.physicsGroup();


  p1 = piatte.create(9020, 1230,'sgretola');
	p2 = piatte.create(9270, 1230,'sgretola');
	p3 = piatte.create(9520, 1230,'sgretola');
	p4 = piatte.create(9770, 1230,'sgretola');

  p5 = game.add.sprite(12700, 1380,'sgretola');
  p6 = game.add.sprite(12950, 1580,'sgretola');
  p7 = game.add.sprite(13200, 1780,'sgretola');


  platgrotta = game.add.physicsGroup();
p8 = platgrotta.create(30300, 2140,'platgrotta');
p9 = platgrotta.create(30600, 2140,'platgrotta');
p10 = platgrotta.create(31200, 2140,'platgrotta');
p11 = platgrotta.create(31700, 2140,'platgrotta');
p12 = platgrotta.create(32000, 2140,'platgrotta');


stalattiti1 = game.add.sprite(29680, 1730, 'stalat1');
 stalattiti2 = game.add.sprite(29880, 1730, 'stalat2');
 stalattiti3 = game.add.sprite(31251, 1730, 'stalat3');
 stalattiti5 = game.add.sprite(31936, 1740, 'stalat5');
 stalattiti6 = game.add.sprite(32468, 1750, 'stalat6');

 stalattiti1.scale.setTo(0.3);
 stalattiti2.scale.setTo(0.3);
 stalattiti3.scale.setTo(0.3);
 stalattiti5.scale.setTo(0.3);
 stalattiti6.scale.setTo(0.3);



    //MELMA
    melma = game.add.physicsGroup();
    m=melma.create(900,800, 'melma')
    m1 = melma.create(2160, 2230, 'melma');
    m2 = melma.create(2661, 2230, 'melma');
    m3 = melma.create(3162, 2230, 'melma');
    m4 = melma.create(3663, 2230, 'melma');
    m5 = melma.create(4164, 2230, 'melma');
    m6 = melma.create(4665, 2230, 'melma');
    m7 = melma.create(5166, 2230, 'melma');
    m8 = melma.create(7833, 2230, 'melma');
    m9 = melma.create(8334, 2230, 'melma');

    m10 = melma.create(8830, 1650, 'melma');
    m10 = melma.create(9331, 1650, 'melma');
    m11 = melma.create(9832, 1650, 'melma');

    m12 = melma.create(12600, 2230, 'melma');
    m13 = melma.create(13101, 2230, 'melma');
    m14 = melma.create(13602, 2230, 'melma');
    m15 = melma.create(14103, 2230, 'melma');
    m16 = melma.create(14604, 2230, 'melma');
    m17 = melma.create(15105, 2230, 'melma');
    m18 = melma.create(15606, 2230, 'melma');
    m19 = melma.create(16107, 2230, 'melma');

    m20 = melma.create(17400, 2230, 'melma');
    m21 = melma.create(17901, 2230, 'melma');
    m22 = melma.create(18402, 2230, 'melma');
    m23 = melma.create(18903, 2230, 'melma');
    m24 = melma.create(19404, 2230, 'melma');
    m25 = melma.create(19905, 2230, 'melma');
    m26 = melma.create(20406, 2230, 'melma');

    m27 = melma.create(22400, 2230, 'melma');
    m28 = melma.create(22901, 2230, 'melma');
    m29 = melma.create(23402, 2230, 'melma');
    m30 = melma.create(23903, 2230, 'melma');


    m31 = melma.create(24700, 2230, 'melma');
    m32 = melma.create(25201, 2230, 'melma');
    m33 = melma.create(25702, 2230, 'melma');
    m34 = melma.create(26203, 2230, 'melma');

   //barca

   m35 = melma.create(28000, 2230, 'melma');
   m36 = melma.create(28501, 2230, 'melma');
   m37 = melma.create(29003, 2230, 'melma');
   m38 = melma.create(29504, 2230, 'melma');
   m39 = melma.create(30005, 2230, 'melma');
   m40 = melma.create(30506, 2230, 'melma');
   m41 = melma.create(31007, 2230, 'melma');
   m42 = melma.create(31508, 2230, 'melma');
   m43 = melma.create(32009, 2230, 'melma');
   m44 = melma.create(32510, 2230, 'melma');
   m45 = melma.create(33011, 2230, 'melma');
   m46 = melma.create(33512, 2230, 'melma');
   m47 = melma.create(34013, 2230, 'melma');


   m48 = melma.create(37100, 2230, 'melma');
   m49 = melma.create(37601, 2230, 'melma');
   m50 = melma.create(38102, 2230, 'melma');




    melma.callAll ('animations.add', 'animations', 'melmare1',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 4, true);
    melma.callAll ('play', null, 'melmare1');
    ladder = game.add.sprite (7850, 1000, 'ladder');


    //CHECKPOINT

    lights = game.add.sprite (3569, 1820, 'lights');
      shine = game.add.sprite (3516, 1760, 'lucicheck');
      shine.frame = 13
      lantern = game.add.sprite (3576, 1830, 'lantern');

      lights1 = game.add.sprite (10993, 1109, 'lights');
      shine1 = game.add.sprite (10957, 1046, 'lucicheck');
      shine1.frame = 13
      lantern1 = game.add.sprite (11000, 1121, 'lantern');

        lights2 = game.add.sprite (20591, 1181, 'lights');
      shine2 = game.add.sprite (20538, 1118, 'lucicheck');
      shine2.frame = 13
      lantern2 = game.add.sprite (20598, 1193, 'lantern');

        lights3 = game.add.sprite (26959, 2005, 'lights');
      shine3 = game.add.sprite (26906, 1975, 'lucicheck');
      shine3.frame = 13
      lantern3 = game.add.sprite (26966, 2020, 'lantern');


      lights4 = game.add.sprite (38993, 1942, 'lights');
    shine4 = game.add.sprite (38940, 1912, 'lucicheck');
    shine4.frame = 13
    lantern4 = game.add.sprite (39000, 1957, 'lantern');




	//tilemap
	map=game.add.tilemap('map');
	layer = map.createLayer('Tile Layer 1');
	//layer1 = map.createLayer('secondo');
	//map.setCollision( [2,3,4,5,6,54,55,56,49,106,85,36,10,48,80,81,82,83,84,86,89,111,112,113,114,115,116,32,33,34],[layer]);
	map.setCollisionByExclusion([0]);
    map.addTilesetImage('tiles', 'tiles');
    map.addTilesetImage('tiles1', 'tiles1');
    map.addTilesetImage('tiles2', 'tiles2');


	//map.addTilesetImage('secondo', 'secondo');
	// map.setCollisionByExclusion(0 [true], ['layer'], [true])

	//SIGN & CARTELLI
	sign = game.add.sprite( 200, 626, 'sign');
	sign1= game.add.sprite( 700, 626, 'sign');
	sign2= game.add.sprite( 11429, 1145, 'sign');
  sign3= game.add.sprite( 7790, 1971, 'sign');
sign4= game.add.sprite( 22327, 1332, 'sign');
  sign.anchor.set(0.5,0.5);
  sign1.anchor.set(0.5,0.5);
  sign2.anchor.set(0.5,0.5);
  sign3.anchor.set(0.5,0.5);
  sign4.anchor.set(0.5,0.5);

  //PIATTAFORME & MULINO

    mulino1=game.add.sprite(17800, 2100, 'plat');
  game.physics.arcade.enable(mulino1);
  mulino1.body.immovable=true;
    mulino2=game.add.sprite(18300, 1900, 'plat');
  game.physics.arcade.enable(mulino2);
  mulino2.body.immovable=true;
    mulino3=game.add.sprite(18600, 1850, 'plat');
  game.physics.arcade.enable(mulino3);
  mulino3.body.immovable=true;

   scrittaFaith = game.add.sprite(2824, 500, 'scrittaFaith');
   scrittaFaith.scale.setTo('0.7');


	//PLAYER SPAWN
    player = game.add.sprite(100,400, 'player');
    player.scale.setTo(3)

    followed=game.add.sprite(100, 00, 'followed');
    followed.alpha=0;

    followed2=game.add.sprite(100, 00, 'followed');
    followed2.alpha=0;

	//ENEMIES & ENEMY & NEMICO

    enemy1 = game.add.sprite(12476, 600, 'enemy1');

    enemy2 = game.add.sprite(13862, 2080, 'enemy');
    enemy3 = game.add.sprite(14669, 2080, 'enemy1');
    enemy4 = game.add.sprite(15096, 2080, 'enemy');
    enemy5 = game.add.sprite(15492, 2080, 'enemy');

    enemy6 = game.add.sprite(15896, 2020, 'enemy1');

    enemy7 = game.add.sprite(16500, 1957, 'enemy');
    enemy8 = game.add.sprite(16843, 1957, 'enemy');

    enemy9 = game.add.sprite(17400, 1890, 'enemy1');

    enemy10 = game.add.sprite(19263, 1635, 'enemy');

    enemy11= game.add.sprite(19800, 1506, 'enemy');

    enemy14= game.add.sprite(24803, 547, 'enemy');





//boss BOSS

	boss= game.add.sprite(41000, 1500, 'boss');
  game.physics.arcade.enable(boss);
   boss.body.setSize(10, 125, 50, 25);

	boss.scale.setTo(1);
	boss.body.gravity.y=500;
	boss.body.collideWorldBounds = true;
	boss.animations.add('passoasx', [0,1,2,3,4,5,6,7,8], 8, false);
	boss.animations.add('passoadx', [8,7,6,5,4,3,2,1,0], 8, false);

	weaponBoss = game.add.weapon(20, 'bulletboss') //arma e numero munizioni
    weaponBoss.bullets.setAll('scale.x', 1.5);
    weaponBoss.trackSprite (boss, 0, 0, false);
    weaponBoss.addBulletAnimation('charlixcx' , [0,1,2,3,4], 12, true);
	weaponBoss.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    weaponBoss.bulletKillDistance = 1000;


	//MISCELLANEUS
  luce2stone = game.add.sprite (21942, 700, 'luce2wand');
  luce1stone = game.add.sprite (21942, 700, 'luce1wand');
  luce1stone.scale.setTo(0.3,1.2);
  luce2stone.scale.setTo(0.3,1.2);

	stone = game.add.sprite(22056, 1295, 'stone');
  stone.scale.setTo(0.2)
  fungo = game.add.sprite(3000,2150, 'fungo');
  fungo1 = game.add.sprite(25800,2150, 'fungo');

  poterimagici=game.add.sprite(50000,50000, 'poterimagici');
   poterimagici.scale.setTo(0.5);
   poterimagici.anchor.setTo(0.5,0.5)
   poterimagici.visible=false;
   poterimagici.animations.add('poterini', [0,1,2,3,5,3,2,1],5, true);

  luce2mantello = game.add.sprite (55760, 1400, 'luce2wand');
  luce1mantello = game.add.sprite (55760, 1400, 'luce1wand');
  luce1mantello.scale.setTo(0.5,1.2);
  luce2mantello.scale.setTo(0.5,1.2);

  victory=game.add.sprite( 41000, 200, 'invisibilità');
  victory.anchor.set(0.5)
  victory.scale.setTo(0.2)

  capra = game.add.sprite(10000, 0, 'cuore1');
  capra1 = game.add.sprite(10000, 0, 'cuore1');
  capra2 = game.add.sprite(10000, 0, 'cuore1');
  capra3 = game.add.sprite(10000, 0, 'cuore1');
  capra4 = game.add.sprite(39230, 2005, 'cuore1');



	//TWOMPS

	twomp = game.add.sprite(6222,900, 'twomp');
	twomp.scale.setTo(0.7);

	twomp1 = game.add.sprite(6532,1400, 'twomp');
	twomp1.scale.setTo(0.7);

	twomp2 = game.add.sprite(6848,900, 'twomp');
	twomp2.scale.setTo(0.7);

	twomp3 = game.add.sprite(7175,1400, 'twomp');
	twomp3.scale.setTo(0.7);

	twomp4 = game.add.sprite(7488,900, 'twomp');
	twomp4.scale.setTo(0.7);

  twomp5 = game.add.sprite(20750,700, 'twomp');
	twomp5.scale.setTo(0.7);

  twomp6 = game.add.sprite(21060,100, 'twomp');
	twomp6.scale.setTo(0.7);

	//UI DESIGN INTERFACCIA
    pietro = game.add.sprite(880, 50, 'pietra');
  	bacchetta = game.add.sprite(821.5, 46, 'bacchetta');
  	mantello = game.add.sprite(953, 46, 'mantello');
  	barra= game.add.sprite(293,55, 'barra');
  	barra.scale.setTo(1,0.9);
  	pietro1 = game.add.sprite(843.5, 15, 'pietra1');
  	bacchetta1 = game.add.sprite(784.5, 10, 'bacchetta1');
  	mantello1 = game.add.sprite(916.4, 10, 'mantello1');
  	morte=game.add.sprite(650, -5, 'morte1');
  	caricaJ = game.add.sprite (744,625, 'caricaJ1');
  	caricaF = game.add.sprite (864,625, 'caricaF1');
  	healthbar= game.add.sprite(950, 200, 'healthbar');
  	healthbar.fixedToCamera=true;
  	healthbar.alpha=0;

  	barra.alpha=0.5;
  	pietro.alpha=0.4;
  	mantello.alpha=0.4;
  	bacchetta.alpha=0.4;

  	pietro1.alpha=0;
  	mantello1.alpha=0;
  	bacchetta1.alpha=0;


  	mantello.fixedToCamera = true;
  	morte.fixedToCamera = true;
  	barra.fixedToCamera = true;
  	pietro.fixedToCamera = true;
  	bacchetta.fixedToCamera = true;
  	caricaJ.fixedToCamera = true;
  	caricaF.fixedToCamera = true;
  	caricaF.alpha=0;
  	mantello1.fixedToCamera = true;
  	pietro1.fixedToCamera = true;
  	bacchetta1.fixedToCamera = true;

  sign.scale.setTo(0.5);
  sign1.scale.setTo(0.5);
  sign2.scale.setTo(0.5);
  sign3.scale.setTo(0.5);
  sign4.scale.setTo(0.5);



	//SCALE
  boat.scale.setTo(0.3)
  lantern.scale.setTo(0.3);
  	lights.scale.setTo(0.8);
  	shine.scale.setTo(2);
  	lantern1.scale.setTo(0.3);
  	lights1.scale.setTo(0.8);
  	shine1.scale.setTo(2);
  	lantern2.scale.setTo(0.3);
  	lights2.scale.setTo(0.8);
  	shine2.scale.setTo(2);
  	lantern3.scale.setTo(0.3);
  	lights3.scale.setTo(0.8);
  	shine3.scale.setTo(2);
    lantern4.scale.setTo(0.3);
    lights4.scale.setTo(0.8);
    shine4.scale.setTo(2);

    capra.scale.setTo(0.7)
    capra1.scale.setTo(0.7)
    capra2.scale.setTo(0.7)
    capra3.scale.setTo(0.7)
    capra4.scale.setTo(0.7)




  enemy1.scale.setTo(0.4)
  enemy2.scale.setTo(0.4)
  enemy3.scale.setTo(0.4)
  enemy4.scale.setTo(0.4)
  enemy5.scale.setTo(0.4)
  enemy6.scale.setTo(0.4)
  enemy7.scale.setTo(0.4)
  enemy8.scale.setTo(0.4)
  enemy9.scale.setTo(0.4)
  enemy10.scale.setTo(0.4)
  enemy11.scale.setTo(0.4)
  enemy14.scale.setTo(0.4)



	player.scale.setTo(0.5);

	//PHYSICS

    game.physics.arcade.enable(player);

    game.physics.arcade.enable(enemy1);
    game.physics.arcade.enable(enemy2);
    game.physics.arcade.enable(enemy3);
    game.physics.arcade.enable(enemy4);
    game.physics.arcade.enable(enemy5);
    game.physics.arcade.enable(enemy6);
    game.physics.arcade.enable(enemy7);
    game.physics.arcade.enable(enemy8);
    game.physics.arcade.enable(enemy9);
    game.physics.arcade.enable(enemy10);
    game.physics.arcade.enable(enemy11);
    game.physics.arcade.enable(enemy14);

    enemy1.body.setSize(60, 225);
    enemy2.body.setSize(60, 225);
    enemy3.body.setSize(60, 225);
    enemy4.body.setSize(60, 225);
    enemy5.body.setSize(60, 225);
    enemy6.body.setSize(60, 225);
    enemy7.body.setSize(60, 225);
    enemy8.body.setSize(60, 225);
    enemy9.body.setSize(60, 225);
    enemy10.body.setSize(60, 225);
    enemy11.body.setSize(60, 225);
    enemy14.body.setSize(60, 225);




    game.physics.arcade.enable(stone);
	game.physics.arcade.enable(sign);
  game.physics.arcade.enable(morte);

	game.physics.arcade.enable(sign1);
	game.physics.arcade.enable(sign2);
  game.physics.arcade.enable(sign3);
  game.physics.arcade.enable(sign4);


  game.physics.arcade.enable(lights);
	game.physics.arcade.enable(shine);
	game.physics.arcade.enable(lantern);
	game.physics.arcade.enable(lights1);
	game.physics.arcade.enable(shine1);
	game.physics.arcade.enable(lantern1);
	game.physics.arcade.enable(lights2);
	game.physics.arcade.enable(shine2);
	game.physics.arcade.enable(lantern2);
	game.physics.arcade.enable(lights3);
	game.physics.arcade.enable(shine3);
	game.physics.arcade.enable(lantern3);
  game.physics.arcade.enable(lights4);
	game.physics.arcade.enable(shine4);
	game.physics.arcade.enable(lantern4);

  game.physics.arcade.enable(victory);
  game.physics.arcade.enable(capra);
  game.physics.arcade.enable(capra1);
  game.physics.arcade.enable(capra2);
  game.physics.arcade.enable(capra3);
  game.physics.arcade.enable(capra4);



	game.physics.arcade.enable(piatte);
  game.physics.arcade.enable(p5);
  game.physics.arcade.enable(p6);
  game.physics.arcade.enable(p7);

  game.physics.arcade.enable(platgrotta);
  game.physics.arcade.enable(stalattiti1);
  game.physics.arcade.enable(stalattiti2);
  game.physics.arcade.enable(stalattiti3);
  game.physics.arcade.enable(stalattiti5);
  game.physics.arcade.enable(stalattiti6);



	game.physics.arcade.enable(boat);
	game.physics.arcade.enable(ladder);

	game.physics.arcade.enable(fungo);
  game.physics.arcade.enable(fungo1);

	game.physics.arcade.enable(twomp);
	game.physics.arcade.enable(twomp1);
	game.physics.arcade.enable(twomp2);
  game.physics.arcade.enable(twomp3);
  game.physics.arcade.enable(twomp4);
	game.physics.arcade.enable(twomp5);
  game.physics.arcade.enable(twomp6);


  game.physics.arcade.enable(melma);
  game.physics.arcade.enable(wand);






	//ANIMATIONS

	player.animations.add('walkright', [0,1,2,3,4,5,6], 14, false);
	player.animations.add('walkleft', [7,8,9,10,11,12,13], 14, false);
  player.animations.add('jumpdx', [28,29,30,31,32,33,34,35,36], 9, false);
  player.animations.add('jumpsx', [42,43,44,45,46,47,48,49,50], 9, false);

  player.animations.add('BBB', [14,15,16,17,18,19,20], 12, false);
  player.animations.add('CCC',  [21,22,23,24,25,26,27], 12, false);
  player.animations.add('Bjumpdx', [56,57,58,59,60,61,62,63,64], 9, false);
  player.animations.add('Bjumpsx', [70,71,72,73,74,75,76,77,78], 9, false);
  player.animations.add('climb', [52,53], 5, false);



  player.animations.add('firedx', [84,85,86], 9, false);
  player.animations.add('firesx', [91,92,93], 9, false);

  fungo.animations.add('fungare', [6,5,4,3,2,1,0], 14, false);
  fungo1.animations.add('fungare', [6,5,4,3,2,1,0], 14, false);


  enemy1.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy1.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy2.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy2.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy3.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy3.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy4.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy4.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy5.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy5.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy6.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy6.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy7.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy7.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy8.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy8.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy9.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy9.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy10.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy10.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy11.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy11.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);
  enemy14.animations.add('walkingdx', [0,1,2,3,4,5,6,7], 10, true);
  enemy14.animations.add('walkingsx', [8,9,10,11,12,13,14], 10, true);



  lights.animations.add('lights', [0,1,2,3,4,5,6,7,8,9,10],8, true);
	shine.animations.add('shine', [0,1,2,3,4,5,6,7,8,9,10,11,12],8, false);
	lights1.animations.add('lights', [0,1,2,3,4,5,6,7,8,9,10],8, true);
	shine1.animations.add('shine', [0,1,2,3,4,5,6,7,8,9,10,11,12],8, false);
	lights2.animations.add('lights', [0,1,2,3,4,5,6,7,8,9,10],8, true);
	shine2.animations.add('shine', [0,1,2,3,4,5,6,7,8,9,10,11,12],8, false);
	lights3.animations.add('lights', [0,1,2,3,4,5,6,7,8,9,10],8, true);
	shine3.animations.add('shine', [0,1,2,3,4,5,6,7,8,9,10,11,12],8, false);
  lights4.animations.add('lights', [0,1,2,3,4,5,6,7,8,9,10],8, true);
	shine4.animations.add('shine', [0,1,2,3,4,5,6,7,8,9,10,11,12],8, false);



	//PLAYER

	player.body.setSize(10, 117, 50, 25);
	player.body.collideWorldBounds = true;
	player.body.gravity.y = 500;


	//MISCELLANEUS

	fungo.body.immovable = true;
  fungo1.body.immovable = true;


	boat.body.collideWorldBounds = true;
	boat.body.immovable = true;

  lights.body.velocity.y=0;
  lights1.body.velocity.y=0;
  lights2.body.velocity.y=0;
  lights3.body.velocity.y=0;

  twomp5.body.immovable=true;
  twomp6.body.immovable=true;


  division= game.add.sprite(-2000, 0, 'melma')
  		game.physics.arcade.enable(division);
  		division.body.immovable=true
          game.physics.arcade.collide(player, division);


    nuvola = game.add.physicsGroup();
    game.physics.arcade.enable(nuvola);

    melma.setAll('body.immovable', true);

division= game.add.sprite(40600, 1800, 'porta');
division.visible=false;
    game.physics.arcade.enable(division);
division.body.immovable=true;

    //WEAPON PL.
	bullets=game.add.group();
	bullets.enableBody = true;
	bullets.physicsBodyType = Phaser.Physics.ARCADE;
  weapon = game.add.weapon(20, 'bullet') //arma e numero munizioni
  weapon.bullets.setAll('scale.x', 1.5);
	weapon.bulletSpeed=400;
  weapon.addBulletAnimation('uku' , [0,1,2,3,4], 12, true);
  weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon.bulletKillDistance = 500;
  weapon.fireRate = 1000;

  //WEAPON ENEMY
  weapon1 = game.add.weapon(1, 'bullet1') //arma e numero munizioni
  weapon1.bullets.setAll('scale.setTo', 1);
  weapon1.addBulletAnimation('shot' , [0,1,2,3,4,5], 9, true);
  weapon1.bulletSpeed=400;
  weapon1.trackSprite(enemy1, 0, 60, false);
  weapon1.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon1.bulletKillDistance = 500;
  weapon1.fireRate = 1000;

  weapon2 = game.add.weapon(1, 'bullet1') //arma e numero munizioni
  weapon2.bullets.setAll('scale.setTo', 1);
  weapon2.addBulletAnimation('shot' , [0,1,2,3,4,5,6], 9, true);
  weapon2.bulletSpeed=400;
  weapon2.trackSprite(enemy1, 0, 60, false);
  weapon2.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon2.bulletKillDistance = 500;
  weapon2.fireRate = 1000;

  weapon3 = game.add.weapon(1, 'bullet1') //arma e numero munizioni
  weapon3.bullets.setAll('scale.setTo', 1);
  weapon3.addBulletAnimation('shot' , [0,1,2,3,4,5,6], 9, true);
  weapon3.bulletSpeed=400;
  weapon3.trackSprite(enemy1, 0, 60, false);
  weapon3.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon3.bulletKillDistance = 500;
  weapon3.fireRate = 1000;

  weapon4 = game.add.weapon(1, 'bullet1') //arma e numero munizioni
  weapon4.bullets.setAll('scale.setTo', 1);
  weapon4.addBulletAnimation('shot' , [0,1,2,3,4,5,6], 9, true);
  weapon4.bulletSpeed=400;
  weapon4.trackSprite(enemy1, 0, 60, false);
  weapon4.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon4.bulletKillDistance = 500;
  weapon4.fireRate = 1000;


	//VITE LIVES LIVE HEARTS CUORI
  heart1 = game.add.sprite(20, 10, 'cuore1');
	heart1.fixedToCamera=true;
	heart2 = game.add.sprite(75, 10, 'cuore1');
	heart2.fixedToCamera=true;
	heart3 = game.add.sprite(133, 10, 'cuore1');
	heart3.fixedToCamera=true;

    piatte.setAll('body.immovable', true);
    platgrotta.setAll('body.immovable', true);

   p5.body.immovable=true;
   p6.body.immovable=true;
   p7.body.immovable=true;






	//CAMERA

 //	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000);
  // game.camera.follow(player, Phaser.Camera.FOLLOW_STYLE, 0.5, 0.5, 0, -333);
   game.camera.follow(followed, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000);


	//COMMANDS & COMANDI

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    nuvolaButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    flashButton = game.input.keyboard.addKey(Phaser.Keyboard.J);
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    collect = game.add.sprite(0,0,'collect');
    collect.fixedToCamera=true
    collect.inputEnabled = true;
	collect.visible=false;



    schermatacrediti = game.add.sprite(0,0,'schermatacrediti');
    buttonback = game.add.button(900, 30, 'back', backfromcreditss, this, 0,1);
    mainmenu = game.add.sprite(0,0, 'mainmenu');

    buttonback.inuputEnabled=false;

    button = game.add.button(762, 604, 'play', play, this, 0, 1);
    credits = game.add.button(45, 604, 'credits', credits, this, 0,1);
    story = game.add.button(450, 610, 'story', story, this, 0,1);

    console.log(backfromcreditss);

    schermatacrediti.fixedToCamera=true
    schermatacrediti.visible=false;


    buttonback.scale.setTo(0.55);
    buttonback.fixedToCamera=true;

    button.scale.setTo(0.5)
    credits.scale.setTo(0.52)
    story.scale.setTo(0.42)


    mainmenu.fixedToCamera=true
    button.fixedToCamera=true
    credits.fixedToCamera=true
    story.fixedToCamera=true

    schermatamorte1 = game.add.sprite(0,0, 'mortetempo');
    schermatamorte1.visible=false;
    schermatamorte1.fixedToCamera=true;
    schermatamorte = game.add.sprite(0,0, 'mortevite')
    schermatamorte.fixedToCamera=true;
   schermatamorte.visible=false;

backtocheckpoint1 = game.add.button(400, 650, 'scrittaContinue', backtocheckpointt, 0,1,0,1);
backtocheckpoint1.visible=false;
backtocheckpoint1.fixedToCamera=true;

backtocheckpoint2 = game.add.button(400, 650, 'scrittaContinue', backtocheckpointtempo, 0,1,0,1);
backtocheckpoint2.visible=false;
backtocheckpoint2.fixedToCamera=true;

backtomainmenu1 = game.add.button(730, 650, 'scrittaMenu', backtomainmeno, 0,1,0,1);
backtomainmenu1.visible=false;
backtomainmenu1.fixedToCamera=true;





backtobeginning1 = game.add.button(100, 650, 'scrittaStart', backtobeginningg, 0,1,0,1);
backtobeginning1.visible=false;
backtobeginning1.fixedToCamera=true;

backtobeginning2 = game.add.button(100, 650, 'scrittaStart', backtobeginningtempo, 0,1,0,1);
backtobeginning2.visible=false;
backtobeginning2.fixedToCamera=true;


	//TIME TEMPO

    //time_label = game.add.text(10, 50, "Time: ", {fill: "white"} )
    startTime = game.time.time //setta l'inizio del counter
}
var badboy_direction = 1;
var invincible = false;

var enemy1_direction = 1;
var enemy2_direction = 1;
var enemy3_direction = 1;
var enemy4_direction = 1;
var enemy5_direction = 1;
var enemy6_direction = 1;
var enemy7_direction = 1;
var enemy8_direction = 1;
var enemy9_direction = 1;
var enemy10_direction = 1;
var enemy11_direction = 1;
var enemy14_direction = 1;
var varmulino2=false;
var miniBoss=3;
var minibossdps=true;
var catchstone=false;
var crea_nuvola = true;
var tempo_nuvola = 0;
var sound =false;

var b = false;
var big =true;
var dissolvenza =true;
var boat_direction = 1;
var immune=false;
var mainmenu;
var schermatacrediti;
var standing = -1
var getwand =false;

var boss_direction = 1;
var fireballactive1=true;
var prova = false;
var wallup= true;
var bossalive=false;
var fireball;
var wall;
var division;
var divisiontrue=true;
var cont=5;
var bossImmune=true;
var cagnotto = false;
var live =3;
var _platform;
var _player;
var _object;
var _angle = 0;
var _cursor;
var timing=true;
var camerashift=true;
var rejoice
var followed2;
var media=0;
var jonny=false
var camerainiziale = false;

var mortepertempo=false;
var mortepervite=false;



function update () {


    followed.x=player.x;

  	if(player.x>2680 && camerashift){
  		  //game.camera.flash(0xff0015, 100);
  		game.time.events.add(30, function(){	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000);});
  		camerashift=false;

  	}

	if(player.x<2500){
		camerashift=true;
		game.camera.follow(followed, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000);
	}







  console.log(player.x)
	console.log(player.y)

if(giangiorgio){
   morte.cameraOffset.x -=0.01;
   	game.physics.arcade.overlap(player, sign, info1);
}


  if(morte.cameraOffset.x<256){
      rejoice=player.x;
      player.x=0;
      player.y=0;
      mortepertempo=true;
      mortepervite=false;
      schermatamorte1.visible=true;
      backtocheckpoint2.visible=true;
      backtomainmenu1.visible=true;
      backtobeginning2.visible=true;
	  giangiorgio=false;
      game.paused=true;


  	}

  //camera.Position.set(game.camera.x * -0.7, game.camera.y * -10)

    game.physics.arcade.collide(player, piatte, fallplatform);
    game.physics.arcade.collide(player, p5, fallplatform1);
    game.physics.arcade.collide(player, p6, fallplatform2);
    game.physics.arcade.collide(player, p7, fallplatform3);



    game.physics.arcade.collide(player, nuvola);
	 game.physics.arcade.collide(player, division);
	  game.physics.arcade.collide(twomp, layer, shake);
    game.physics.arcade.collide(twomp1, layer, shake);
    game.physics.arcade.collide(twomp2, layer);
    game.physics.arcade.collide(twomp3, layer);
    game.physics.arcade.collide(twomp4, layer);
    game.physics.arcade.collide(twomp5, layer, shake1);
    game.physics.arcade.collide(twomp6, layer, shake1);
    game.physics.arcade.overlap(player, sign4, info4);
    game.physics.arcade.overlap(player, capra, lifeup);
    game.physics.arcade.overlap(player, capra1, lifeup);
    game.physics.arcade.overlap(player, capra2, lifeup);
    game.physics.arcade.overlap(player, capra3, lifeup);
    game.physics.arcade.overlap(player, capra4, lifeup);

    game.physics.arcade.collide(player, melma, die);

    game.physics.arcade.collide(enemy1, layer);
    game.physics.arcade.collide(enemy2, layer);
    game.physics.arcade.collide(enemy3, layer);
    game.physics.arcade.collide(enemy4, layer);
    game.physics.arcade.collide(enemy5, layer);
    game.physics.arcade.collide(enemy6, layer);
    game.physics.arcade.collide(enemy7, layer);
    game.physics.arcade.collide(enemy8, layer);
    game.physics.arcade.collide(enemy9, layer);
    game.physics.arcade.collide(enemy10, layer);
    game.physics.arcade.collide(enemy11, layer);
    game.physics.arcade.collide(enemy14, layer);
    game.physics.arcade.collide( layer, weapon.bullets, bulletsdestroy)
    game.physics.arcade.collide( layer, weapon1.bullets, bulletsdestroy)
    game.physics.arcade.collide( layer, weapon2.bullets, bulletsdestroy)
    game.physics.arcade.collide( layer, weapon3.bullets, bulletsdestroy)
    game.physics.arcade.collide( layer, weapon4.bullets, bulletsdestroy)


    game.physics.arcade.collide( twomp5, weapon.bullets, bulletsdestroy1);
    game.physics.arcade.collide( twomp6, weapon.bullets, bulletsdestroy1);




    game.physics.arcade.collide(boat, layer, function(){boat_direction=boat_direction*-1});
    game.physics.arcade.collide(player, boat, sailing);
    game.physics.arcade.collide(player, fungo, bouncing);
    game.physics.arcade.collide(player, fungo1, bouncing);
    game.physics.arcade.collide(player, layer);



    game.physics.arcade.collide (player, weapon1.bullets, enemyHitsPlayer1);
    game.physics.arcade.collide (player, weapon2.bullets, enemyHitsPlayer1);
    game.physics.arcade.collide (player, weapon3.bullets, enemyHitsPlayer1);
    game.physics.arcade.collide (player, weapon4.bullets, enemyHitsPlayer1);
    game.physics.arcade.collide (player, weaponBoss.bullets, enemyHitsPlayer1);

    game.physics.arcade.overlap (weapon.bullets, boss, killboss);
    game.physics.arcade.overlap (weapon.bullets, weaponBoss.bullets, contatto);
    game.physics.arcade.collide(player, fireball, enemyHitsPlayer2);
    game.physics.arcade.collide (weapon.bullets, wall, walldestroy);
    game.physics.arcade.collide(player, boss, enemyHitsPlayer);
    game.physics.arcade.collide(player, wall);
    game.physics.arcade.collide(boss, wall);
    game.physics.arcade.collide(victory, layer);


    game.physics.arcade.collide(boss, layer);
    game.physics.arcade.collide(player, platgrotta);

    game.physics.arcade.overlap(stalattiti1, melma, restorestalattiti1);
    game.physics.arcade.overlap(player, stalattiti1, enemyHitsPlayer);

    game.physics.arcade.overlap(stalattiti2, melma, restorestalattiti2);
    game.physics.arcade.overlap(player, stalattiti2,enemyHitsPlayer);

    game.physics.arcade.overlap(stalattiti3, melma, restorestalattiti3);
    game.physics.arcade.overlap(player, stalattiti3,enemyHitsPlayer);


    game.physics.arcade.overlap(stalattiti5, melma, restorestalattiti5);
    game.physics.arcade.overlap(player, stalattiti5,enemyHitsPlayer);

    game.physics.arcade.overlap(stalattiti6, melma, restorestalattiti6);
    game.physics.arcade.overlap(player, stalattiti6,enemyHitsPlayer);


  game.physics.arcade.overlap(player, sign1, info2);
  game.physics.arcade.overlap(player, sign2, info3);
  game.physics.arcade.overlap(player, sign3, info5);


	game.physics.arcade.overlap(player, twomp, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp1, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp2, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp3, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp4, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp5, enemyHitsPlayer);
	game.physics.arcade.overlap(player, twomp6, enemyHitsPlayer);

	game.physics.arcade.overlap(player, enemy1, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy2, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy3, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy4, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy5, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy6, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy7, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy8, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy9, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy10, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy11, enemyHitsPlayer);
  game.physics.arcade.overlap(player, enemy14, enemyHitsPlayer);
  game.physics.arcade.overlap(player, victory, getvictory)

game.physics.arcade.overlap(enemy1, weapon.bullets, hitEnemy1);
game.physics.arcade.overlap(enemy2, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy3, weapon.bullets, hitEnemy2);
game.physics.arcade.overlap(enemy4, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy5, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy6, weapon.bullets, hitEnemy3);
game.physics.arcade.overlap(enemy7, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy8, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy9, weapon.bullets, hitEnemy4);
game.physics.arcade.overlap(enemy10, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy11, weapon.bullets, hitEnemy);
game.physics.arcade.overlap(enemy14, weapon.bullets, hitEnemy);



	game.physics.arcade.overlap(player, stone, pietrapresa );

    game.physics.arcade.overlap(player, ladder, climb);


    game.physics.arcade.overlap(player, lantern, checkpoint);
    	game.physics.arcade.overlap(player, lantern1, checkpoint1);
    	game.physics.arcade.overlap(player, lantern2, checkpoint2);
    	game.physics.arcade.overlap(player, lantern3, checkpoint3);
      game.physics.arcade.overlap(player, lantern4, checkpoint4);


    game.physics.arcade.overlap(player, wand, bacchettapresa);



	//stone.anchor.setTo (0.5,0.5);
	//stone.angle = stone.angle + 1;
  stalattiti1.body.immovable=true;
  stalattiti2.body.immovable=true;
  stalattiti3.body.immovable=true;
  stalattiti5.body.immovable=true;
  stalattiti6.body.immovable=true;


    player.body.velocity.x = 0;

    if(player.x>29600 && player.x<29700){
      stalattiti1.body.velocity.y=550;
    }

    if(player.x>29800 && player.x<29900){
      stalattiti2.body.velocity.y=550;
    }

    if(player.x>31161 && player.x<31261){
      stalattiti3.body.velocity.y=550;
    }



    if(player.x>31600 && player.x<31700){
      stalattiti5.body.velocity.y=550;
    }

    if(player.x>32236 && player.x<32336){
      stalattiti6.body.velocity.y=550;
    }


     if(startboat){
     boat.body.velocity.x = 120 * boat_direction;
            }

    rotate1(mulino1, 200, 200, 150, _angle++);


    rotate(mulino2, 200, 200, 150, _angle++)


   	rotate1(mulino3, 200, 200, 150, _angle++)

   	game.physics.arcade.collide(mulino1, player, CH_player, null, this);
   	game.physics.arcade.collide(mulino2, player, CH_player, null, this);
    game.physics.arcade.collide(mulino3, player, CH_player, null, this);
    //BOSS



    if(live===3){
      heart1.alpha=1;
      heart2.alpha=1;
      heart3.alpha=1;
    }
    if(live===2){
      heart1.alpha=1;
      heart2.alpha=1;
      heart3.alpha=0.3;
    }
    if(live===1){
      heart1.alpha=1;
      heart2.alpha=0.3;
      heart3.alpha=0.3;
    }


    boss.body.velocity.x = 50 * boss_direction;
    	if (boss.x > 41250) {
        boss_direction = -1;
      }
        if (boss.x < 41000){
          boss_direction = 1;
        }
      if(boss_direction===1)
        	boss.animations.play('passoadx');
     	else
        	boss.animations.play('passoasx');
  	healthbar.alpha=0

  	  if(bossalive){
		if(live==0 && wallup==false){
		wall.kill();
		}
  		healthbar.alpha=1;
      	if(cont===5){
      	healthbar.frame=0;}
      	if(cont===4){
      	healthbar.frame=1;}
      	if(cont===3){
      	healthbar.frame=2;}
      	if(cont===2){
      	healthbar.frame=3;}
      	if(cont===1){
      	healthbar.frame=4;}
      	if(cont===0){
      	healthbar.alpha=0;}


  		if(Math.random()<0.0055){
  		value = (Math.floor(Math.random() * ((3-1)+1) + 1));
  		switch(value){
            case 1:
                if(fireballactive1){
    			fireballactive1=false
                if(boss.x> player.x){
                fireball=game.add.sprite( boss.x-100, boss.y-10, 'fireball');
                game.physics.arcade.enable(fireball);
                fireball.animations.add('boomclap', [0,1,2,3,4,5,6], 15, true);
                fireball.animations.play('boomclap');
                }
                else{
                fireball=game.add.sprite( boss.x+100, boss.y-10, 'fireball');
                game.physics.arcade.enable(fireball);
                }
                fireball.body.velocity.x = player.x - fireball.x
                fireball.body.velocity.y= player.y - fireball.y
                game.time.events.add(2000, function(){fireball.kill();});
  			  game.time.events.add(6000, function(){ fireballactive1=true;});
    			  }

            break;
            case 2:
                if (boss.body.onFloor() || boss.body.touching.down ) //nemico salta
    			{	weaponBoss.trackSprite(boss, 0, 50, false);
    			     game.time.events.add(300, function(){weaponBoss.fireAngle = 180 ; weaponBoss.fire ();  weaponBoss.bulletSpeed = 400; weaponBoss.bulletAngleVariance = 25;})}
            break;
            case 3:
  		  console.log(wallup);
                if(wallup){

  			  media=(player.x+boss.x)/2;
                wall=game.add.sprite( media+20, boss.y-10, 'wall');
  			  wall.anchor.x=0.5;
  			  wall.anchor.y=0.5;
  			  wall.scale.setTo(0.4,0.7)
                game.physics.arcade.enable(wall);
                wall.body.immovable=true;
                wallup = false;
  			  console.log(wallup)
                game.time.events.add(8000, function(){wall.kill();})
    			  game.time.events.add(15000, function(){wallup=true});

    			}
    			break;
    			}
  		}
  	  }




        if(player.x>40700 && divisiontrue){
  		division.visible=true;

  		divisiontrue=false;
  		jonny=true;
  		bossalive=true;
  		healthbar.alpha=1;
  	}
  	if(jonny && bossalive){
  		followed2.x=41000;
  		followed2.y= 2000;
      camerainiziale=true;
  		game.camera.follow(followed2, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000)
  	}

  	if(player.x<40000 && camerainiziale){
  		jonny=false;
  		division.visible=false;
  		divisiontrue=true;
  		bossalive=false;
  		healthbar.alpha=0;
  	  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1, 0, 2000)
  	}



if(player.x>27900 && magianemico && player.x<28100){
    game.camera.flash(0x9ACD32, 200);
    game.camera.shake(0.05, 500);
    caricaJ.alpha=0.5;
    caricaF.alpha=0.5;
    getwand =false;
    scrittaminacciosa=game.add.sprite(28000,1820, 'scrittaWizard');
    scrittaminacciosa.scale.setTo(0.7);

    poterimagici.visible=true;
    poterimagici.animations.play('poterini');

    magianemico=false;
    game.time.events.add(6000, function(){scrittaminacciosa.kill()});


}
poterimagici.x=player.x+30;
poterimagici.y=player.y+20;


if(player.x>33120 && magianemico1 && player.x<33297){
  game.camera.flash(0x9ACD32, 200);
  game.camera.shake(0.05, 500);
  caricaJ.alpha=1;
  caricaF.alpha=1;
  getwand =true;
  scrittawizard=game.add.sprite(33247,1877, 'scrittaWizardback');
  scrittawizard.scale.setTo(0.7);
  poterimagici.visible=false;
  magianemico1=false;
  game.time.events.add(6000, function(){scrittawizard.kill()});


}





	//TWOMPS

	if (twomp.y>1800){

		twomp.body.velocity.y=0;
		game.time.events.add(1200, function(){twomp.body.velocity.y=-700});

	}

	if (twomp.y<1700){

		twomp.body.velocity.y=0;
		game.time.events.add(1200, function(){twomp.body.velocity.y=900});
    }

    if (twomp1.y>1800){

        twomp1.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp1.body.velocity.y=-700});

    }

    if (twomp1.y<1700){

        twomp1.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp1.body.velocity.y=900});
    }

    if (twomp2.y>1800){

		twomp2.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp2.body.velocity.y=-700})

    }

    if (twomp2.y<1700){

        twomp2.body.velocity.y=0;
		game.time.events.add(1200, function(){twomp2.body.velocity.y=900})
    }




    if (twomp3.y>1800){

        twomp3.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp3.body.velocity.y=-700})

    }

    if (twomp3.y<1700){

        twomp3.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp3.body.velocity.y=900})
    }

    if (twomp4.y>1800){

		twomp4.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp4.body.velocity.y=-700})

    }

    if (twomp4.y<1700){

        twomp4.body.velocity.y=0;
		game.time.events.add(1200, function(){twomp4.body.velocity.y=900})
    }

    if (twomp5.y>1000){

        twomp5.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp5.body.velocity.y=-700})

    }

    if (twomp5.y<800){

        twomp5.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp5.body.velocity.y=700})
    }

    if (twomp6.y>1000){

        twomp6.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp6.body.velocity.y=-700})

    }

    if (twomp6.y<800){

        twomp6.body.velocity.y=0;
        game.time.events.add(1200, function(){twomp6.body.velocity.y=700})
    }


	//ENEMY NEMICONE



    enemy1.body.collideWorldBounds = true;
    enemy1.body.gravity.y=500;
	  enemy1.body.velocity.x=50 * enemy1_direction;

    enemy2.body.collideWorldBounds = true;
    enemy2.body.gravity.y=500;
	  enemy2.body.velocity.x=50 * enemy2_direction;

    enemy3.body.collideWorldBounds = true;
    enemy3.body.gravity.y=500;
	  enemy3.body.velocity.x=50 * enemy3_direction;

    enemy4.body.collideWorldBounds = true;
    enemy4.body.gravity.y=500;
	  enemy4.body.velocity.x=50 * enemy4_direction;

    enemy5.body.collideWorldBounds = true;
    enemy5.body.gravity.y=500;
	  enemy5.body.velocity.x=50 * enemy5_direction;

    enemy6.body.collideWorldBounds = true;
    enemy6.body.gravity.y=500;
	  enemy6.body.velocity.x=50 * enemy6_direction;

    enemy7.body.collideWorldBounds = true;
    enemy7.body.gravity.y=500;
	  enemy7.body.velocity.x=50 * enemy7_direction;

    enemy8.body.collideWorldBounds = true;
    enemy8.body.gravity.y=500;
	  enemy8.body.velocity.x=50 * enemy8_direction;

    enemy9.body.collideWorldBounds = true;
    enemy9.body.gravity.y=500;
	  enemy9.body.velocity.x=50 * enemy9_direction;

    enemy10.body.collideWorldBounds = true;
    enemy10.body.gravity.y=500;
	  enemy10.body.velocity.x=50 * enemy10_direction;

    enemy11.body.collideWorldBounds = true;
    enemy11.body.gravity.y=500;
	  enemy11.body.velocity.x=50 * enemy11_direction;

    enemy14.body.collideWorldBounds = true;
    enemy14.body.gravity.y=500;
	  enemy14.body.velocity.x=50 * enemy14_direction;




    if (enemy1.x > 12500){
      enemy1_direction = -1;
  }

    if (enemy1.x < 12000){
      enemy1_direction = 1}


    if (enemy1.x < 12500){
      var shoot = Math.random();
      if(enemy1_direction===-1 && shoot>0.95){
        weapon1.fireAngle = 180 ;
        weapon1.fire();
        weapon1.trackSprite(enemy1, 0, 60, false);

       }
       if(enemy1_direction===1 && shoot>0.95){
         weapon1.fireAngle = 0 ;
         weapon1.fire();
         weapon1.trackSprite(enemy1, 120, 60, false);

       }
    }

    if (enemy2.x > 13762)
      {enemy2_direction = -1}

    if (enemy2.x < 13590){
        enemy2_direction = 1}

    if (enemy3.x > 14600)
        {enemy3_direction = -1}

    if (enemy3.x < 14116){
          enemy3_direction = 1}

    if (enemy3.x < 14600){
            var shoot = Math.random();
            if(enemy3_direction===-1 && shoot>0.95){
              weapon2.fireAngle = 180 ;
              weapon2.fire();
              weapon2.trackSprite(enemy3, 0, 60, false);


             }
             if(enemy3_direction===1 && shoot>0.95){
               weapon2.fireAngle = 0 ;
               weapon2.fire();
               weapon2.trackSprite(enemy3, 120, 60, false);


             }
          }


    if (enemy4.x > 15559)
          {enemy4_direction = -1}

    if (enemy4.x < 15000){
            enemy4_direction = 1}

    if (enemy5.x > 15559)
          {enemy5_direction = -1}

    if (enemy5.x < 15000){
          enemy5_direction = 1}


    if (enemy6.x > 16340)
          {enemy6_direction = -1}

    if (enemy6.x < 15850){
          enemy6_direction = 1}

          if (enemy6.x < 16340){
                  var shoot = Math.random();
                  if(enemy6_direction===-1 && shoot>0.95){
                    weapon3.fireAngle = 180 ;
                    weapon3.fire();
                    weapon3.trackSprite(enemy6, 0, 60, false);

                   }
                   if(enemy6_direction===1 && shoot>0.95){
                     weapon3.fireAngle = 0 ;
                     weapon3.fire();
                     weapon3.trackSprite(enemy6, 120, 60, false);

                   }
                }


    if (enemy7.x > 16900)
            {enemy7_direction = -1}

    if (enemy7.x < 16450){
          enemy7_direction = 1}

    if (enemy8.x > 16900)
                  {enemy8_direction = -1}

    if (enemy8.x < 16450){
                enemy8_direction = 1}

    if (enemy9.x > 17500)
                  {enemy9_direction = -1}

    if (enemy9.x < 17050){
                enemy9_direction = 1}

    if (enemy9.x < 17500){
                        var shoot = Math.random();
                    if(enemy9_direction===-1 && shoot>0.95){
                          weapon4.fireAngle = 180 ;
                          weapon4.fire();
                          weapon4.trackSprite(enemy9, 0, 60, false);

                         }
                         if(enemy9_direction===1 && shoot>0.95){
                           weapon4.fireAngle = 0 ;
                           weapon4.fire();
                           weapon4.trackSprite(enemy9, 120, 60, false);

                         }
                      }

    if (enemy10.x > 19300)
                {enemy10_direction = -1}

    if (enemy10.x < 19223){
              enemy10_direction = 1}

    if (enemy11.x > 19800)
            {enemy11_direction = -1}

    if (enemy11.x < 19739){
            enemy11_direction = 1};


        if (enemy14.x > 24792)
              {enemy14_direction = -1}

        if (enemy14.x < 24100){
            enemy14_direction = 1}


  if(enemy1_direction==1)
	enemy1.animations.play('walkingdx');
	else
	enemy1.animations.play('walkingsx');

  if(enemy2_direction==1)
  enemy2.animations.play('walkingdx');
  else
  enemy2.animations.play('walkingsx');

  if(enemy3_direction==1)
	enemy3.animations.play('walkingdx');
	else
	enemy3.animations.play('walkingsx');

  if(enemy4_direction==1)
	enemy4.animations.play('walkingdx');
	else
	enemy4.animations.play('walkingsx');

  if(enemy5_direction==1)
	enemy5.animations.play('walkingdx');
	else
	enemy5.animations.play('walkingsx');

  if(enemy6_direction==1)
	enemy6.animations.play('walkingdx');
	else
	enemy6.animations.play('walkingsx');

  if(enemy7_direction==1)
	enemy7.animations.play('walkingdx');
	else
	enemy7.animations.play('walkingsx');

  if(enemy8_direction==1)
	enemy8.animations.play('walkingdx');
	else
	enemy8.animations.play('walkingsx');

  if(enemy9_direction==1)
	enemy9.animations.play('walkingdx');
	else
	enemy9.animations.play('walkingsx');

  if(enemy10_direction==1)
	enemy10.animations.play('walkingdx');
	else
	enemy10.animations.play('walkingsx');

  if(enemy11_direction==1)
	enemy11.animations.play('walkingdx');
	else
	enemy11.animations.play('walkingsx');
  if(enemy11_direction==1)


  if(enemy14_direction==1)
	enemy14.animations.play('walkingdx');
	else
	enemy14.animations.play('walkingsx');


  //BASIC



    if (cursors.left.isDown)
    {

    player.body.velocity.x = -220;
	weapon.fireAngle = 180; //sparare avanti
    standing=1
	weapon.trackSprite (player, -7,20, false) //l'arma segue il giocatore
		if(getwand){
			if(player.body.onFloor() || player.body.touching.down || player.body.blocked.down){
				player.animations.play('CCC');
			}
		}

		else{
			if(player.body.onFloor() || player.body.touching.down || player.body.blocked.down){
				player.animations.play('walkleft');
			}
		}
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 220;
		weapon.fireAngle = 0 //sparare avanti
		standing=-1
		weapon.trackSprite (player, 65, 12, false) //l'arma segue il giocatore
		if(getwand){
			if(player.body.onFloor() || player.body.touching.down || player.body.blocked.down){
				player.animations.play('BBB');
			}
		}
		else{
			if(player.body.onFloor() || player.body.touching.down || player.body.blocked.down){
				player.animations.play('walkright');
			}
		}
    }


	if (player.body.velocity.x==0 && (player.body.onFloor() || player.body.touching.down) && fireButton.isUp && standing ===-1){
		if(getwand)
			player.frame = 40;
		else
			player.frame = 38;


	}

	if (player.body.velocity.x==0 && (player.body.onFloor() || player.body.touching.down) && fireButton.isUp && standing ===1){
		if(getwand)
			player.frame = 41;
		else
			player.frame = 39;

	}


//FIRE
if(getwand){
  if ( fireButton.isDown && player.body.velocity.x==0)
  {
		if (standing===-1 && timing){
				timing=false;
				console.log(timing);
		player.animations.play('firedx');
					game.time.events.add(1400, function(){timing=true;});
						game.time.events.add(400, function (){weapon.fire ();});
		}
     else if(standing===1 &&timing){
			timing=false;
			player.animations.play('firesx');
			game.time.events.add(1400, function(){timing=true;});
	 game.time.events.add(400, function (){weapon.fire ();});}

  }
}
	//JUMPS
  //JUMPS
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
          player.body.velocity.y = -280;

          if(standing===-1){
    		if(getwand){
    		player.animations.play('Bjumpdx');}
    		else{
    			player.animations.play('jumpdx');
    		}
          }
    	        if(standing===1){
    		if(getwand){
    		player.animations.play('Bjumpsx');}
    		else{
    		player.animations.play('jumpsx');}

          }
        }

	//NUVOLA
  if(catchstone)
{
if(nuvolaButton.isDown && crea_nuvola && player.body.blocked.down) { //nuvole sotto omino
  b = nuvola.create( player.x-2, player.y + 70, 'nuvola')
  b.scale.setTo(0.5)
  nuvola.callAll ('animations.add', 'animations', 'fly',[0,1,2,3,4,5,6,7,8,9], 12, false);
  nuvola.callAll ('play', null, 'fly');
  b.body.velocity.x = 0;
  crea_nuvola = false;
  b.body.velocity.y = -675;
  tempo_nuvola = game.time.time;
  game.time.events.add(3000, function(){crea_nuvola = true;})
  game.time.events.add(900, function(){b.kill()});
  }
  caricaJ.alpha = crea_nuvola*1 + ((!crea_nuvola)*(game.time.time-tempo_nuvola)/3000)**6;
}

else {
caricaJ.alpha=0;
}



    if (player.x>36500 && dissolvenza){

            scena1 = game.add.sprite(0, 0, 'almostthere');
            scena1.fixedToCamera=true


            game.time.events.add(2000, function (){ scena1.alpha = 0; scena1.kill(); });
            game.time.events.add(1500, function (){ player.x = 39000;player.y=2005});

            dissolvenza = false;
	}



}



function sailing (){
startboat=true;

}
function restorestalattiti1 (){
  stalattiti1.alpha=0;
  game.time.events.add(1000, function(){	 stalattiti1.x= 29680; stalattiti1.y= 1730; stalattiti1.alpha=1;})

}

function restorestalattiti2 (){
  stalattiti2.alpha=0;
  game.time.events.add(1000, function(){	 stalattiti2.x= 29880; stalattiti2.y= 1730; stalattiti2.alpha=1;})

}

function restorestalattiti3 (){
  stalattiti3.alpha=0;
  game.time.events.add(1000, function(){	 stalattiti3.x= 31251; stalattiti3.y= 1730; stalattiti3.alpha=1;})

}


function restorestalattiti5 (){
  stalattiti5.alpha=0;
  game.time.events.add(1000, function(){	 stalattiti5.x= 31936; stalattiti5.y= 1740; stalattiti5.alpha=1;})

}
function restorestalattiti6 (){
  stalattiti6.alpha=0;
  game.time.events.add(1000, function(){	 stalattiti6.x= 32468; stalattiti6.y= 1750; stalattiti6.alpha=1;})

}

function lifeup(a,b){
  b.x=50000;
  if(live <=2){
    live++;
    }}


    function getvictory()
    {
      victory.kill();
      mantello1.alpha=1
      game.load.image('victory','sprites/vittoria.jpg');
      vittoria=game.add.sprite(0,0, 'vittoria');
      vittoria.fixedToCamera=true;
      player.x=0;
      player.y=0;

      backtomainmenu2 = game.add.button(745, 40, 'scrittaMenu', backtomainmenu3, 0,1,0,1);

      backtomainmenu2.fixedToCamera=true

      game.time.events.add(200, function(){game.paused=true;});
      }

function touch_enemy (enemy, bullet) {
    enemy.kill()
}
function CH_player(obj1, obj2){
    null;
}

function rotate(obj, centerX, centerY, distance, angle) {
    var angle_rad = Math.PI/ 540 * angle;
    xx = centerX + distance * Math.sin(angle_rad);
    yy = centerY + distance * Math.cos(angle_rad);

    obj.body.velocity.x = centerX - xx;
    obj.body.velocity.y = centerY - yy;
}
function rotate1(obj, centerX, centerY, distance, angle) {
    var angle_rad1 = Math.PI/ 540 * angle;
    xx1 = centerX + distance * Math.cos(angle_rad1);
    yy1 = centerY + distance * Math.sin(angle_rad1);

    obj.body.velocity.x = centerX - xx1;
    obj.body.velocity.y = centerY - yy1;
}


  function killboss(a, b) {
      b.kill();
    //  console.log(cont)
      if(bossImmune){
      cont--;
      bossImmune=false
      game.time.events.add(2000, function(){bossImmune=true});

      game.time.events.add(100, function(){	boss.tint=0xf00000;})
    	game.time.events.add(200, function(){	boss.tint=0xFFFFFF})
    	game.time.events.add(300, function(){	boss.tint=0xf00000;})
    	game.time.events.add(400, function(){	boss.tint=0xFFFFFF})
    	game.time.events.add(500, function(){ boss.tint=0xf00000})
    	game.time.events.add(600, function(){boss.tint=0xFFFFFF})
    	game.time.events.add(700, function(){ boss.tint=0xf00000})
      game.time.events.add(800, function(){ boss.tint=0xFFFFFF})


      if(cont<1){
      boss.kill();
      bossalive=false;
      weaponBoss.bullets.destroy();
      victory.y=1500;
      victory.body.velocity.y=150;
      luce1mantello.x=40760;
      luce2mantello.x=40760;

      }
      }

  }
  function bulletsdestroy(a,b){
    a.kill();
    }

    function bulletsdestroy1(a,b){
      b.kill();
      }

function walldestroy(bullet1, walls){
    walls.kill();
    bullet1.kill();
    wallup=false;
}

function contatto (bullet1, bullet2) {
    bullet1.kill()
    bullet2.kill()


}
function info1 (){

     scrittaMove = game.add.sprite(220, 550, 'scrittaMove');
     scrittaMove.scale.setTo('0.7')
     scrittaMove.lifespan = 1;
     scrittaMove.visible=true;

 }

 function info2 (){

   scrittaSpace = game.add.sprite(750, 550, 'scrittaSpace');
   scrittaSpace.scale.setTo('0.7')
   scrittaSpace.lifespan = 1;
  }


   function info3 (){

     scrittaFire = game.add.sprite(11555, 960, 'scrittaF');
     scrittaFire.scale.setTo('0.7')
     scrittaFire.lifespan = 1;
    }

    function info4 (){

    scrittaCloud = game.add.sprite(22000, 1150, 'scrittaJ');
    scrittaCloud.scale.setTo('0.7');
    scrittaCloud.lifespan = 1;
}

function info5 (){

scrittaClimb = game.add.sprite(7890, 1900, 'scrittaClimb');
scrittaClimb.scale.setTo('0.7');
scrittaClimb.lifespan = 1;
}


    function checkpoint(player, lantern) {
       // store the position of the player at the checkpoint
       lantern_x = player.x
       lantern_y = player.y
       shine.animations.play('shine');
       lights.animations.play('lights');


    }
     function checkpoint1(player, lantern) {
       // store the position of the player at the checkpoint
       lantern_x = player.x
       lantern_y = player.y
       shine1.animations.play('shine');
       lights1.animations.play('lights');

    }
     function checkpoint2(player, lantern) {
       // store the position of the player at the checkpoint
       lantern_x = player.x
       lantern_y = player.y
   	shine2.animations.play('shine');
       lights2.animations.play('lights');

    }
     function checkpoint3(player, lantern) {
       // store the position of the player at the checkpoint
       lantern_x = player.x
       lantern_y = player.y
   	   shine3.animations.play('shine');
       lights3.animations.play('lights');

    }

    function checkpoint4(player, lantern) {
      // store the position of the player at the checkpoint
      lantern_x = player.x
      lantern_y = player.y
      shine4.animations.play('shine');
      lights4.animations.play('lights');


    }


/* function falling() {
   piatte.forEach(function down(item){
    item.body.velocity.y = 190})

   game.time.events.add (3500, restoreBoat)

}
  function restoreBoat () {
      piatte.x = 700;
      piatte.y = 180;
  }
*/

function bouncing (a,b){
  fungo.animations.play("fungare");
  fungo1.animations.play("fungare");


  if(standing===-1)
	player.animations.play("jumpdx");




	if(standing===1)
	player.animations.play("jumpsx");

	player.body.velocity.y=-400;
}
function fallplatform(a,b) {
  //piatte.body.velocity.y = 190;
  game.time.events.add (600, function(){b.body.velocity.y=190;});
  game.time.events.add (4600, function(){b.y = 1230; b.body.velocity.y=0});

}

function fallplatform1() {
  //piatte.body.velocity.y = 190;
  game.time.events.add (600, function(){p5.body.velocity.y=190;});
  game.time.events.add (4600, function(){p5.y = 1380; p5.body.velocity.y=0});

}

function fallplatform2() {
  //piatte.body.velocity.y = 190;
  game.time.events.add (600, function(){p6.body.velocity.y=190;});
  game.time.events.add (4600, function(){p6.y = 1580; p6.body.velocity.y=0});

}

function fallplatform3() {
  //piatte.body.velocity.y = 190;
  game.time.events.add (600, function(){p7.body.velocity.y=190;});
  game.time.events.add (4600, function(){p7.y = 1780; p7.body.velocity.y=0});

}








function climb () {
	player.animations.play("climb");
  if(cursors.up.isDown){
    player.body.velocity.y = -180;
	}
	if(cursors.down.isDown){
	player.body.velocity.y = 180;
    player.body.gravity.y=180
    game.time.events.add (400, function(){    player.body.gravity.y=500});
    }

}

function shake () {
  if (player.x >5729 && player.x < 7850 && player.y > 1800 && player.y < 2400){
      game.camera.shake(0.005, 400);
  }}

function shake1 () {
  if (player.x >20300 && player.x < 21800 && player.y > 1100 && player.y < 1500){
    game.camera.shake(0.005, 400);
}}



function enemyHitsPlayer () {
  if (!immune)
    {
		player.alpha=0.5;
		game.time.events.add(100, function(){	game.camera.flash(0xff0015, 80);});
		game.time.events.add(200, function(){	player.alpha=1;})
		game.time.events.add(400, function(){	player.alpha=0.5;})
		game.time.events.add(600, function(){	player.alpha=1;})
		game.time.events.add(800, function(){	player.alpha=0.5;})
		game.time.events.add(1000, function(){	player.alpha=1;})
		game.time.events.add(1200, function(){	player.alpha=0.5;})
		game.time.events.add(1400, function(){	player.alpha=1;})
        live--;
        immune = true;
        game.time.events.add(2000, function(){immune = false;})
    }// When the player dies
    if (live < 1)
    {
        player.kill();
		die();

    }
}

function enemyHitsPlayer1 (player,enemy) {


  enemy.kill()
  if (!immune)
    {
		player.alpha=0.5;
		game.time.events.add(100, function(){	game.camera.flash(0xff0015, 80)});
		game.time.events.add(200, function(){	player.alpha=1;})
		game.time.events.add(400, function(){	player.alpha=0.5;})
		game.time.events.add(600, function(){	player.alpha=1;})
		game.time.events.add(800, function(){	player.alpha=0.5;})
		game.time.events.add(1000, function(){	player.alpha=1;})
		game.time.events.add(1200, function(){	player.alpha=0.5;})
		game.time.events.add(1400, function(){	player.alpha=1;})
        live--;
        immune = true;
        game.time.events.add(2000, function(){immune = false;})
    }// When the player dies
    if (live < 1)
    {
		die();

    }
}

function enemyHitsPlayer2 (player,enemy) {

  enemy.kill()
  if (!immune)
    {
		player.alpha=0.5;
		game.time.events.add(100, function(){	game.camera.flash(0xff0015, 80)});
		game.time.events.add(200, function(){	player.alpha=1;})
		game.time.events.add(400, function(){	player.alpha=0.5;})
		game.time.events.add(600, function(){	player.alpha=1;})
		game.time.events.add(800, function(){	player.alpha=0.5;})
		game.time.events.add(1000, function(){	player.alpha=1;})
		game.time.events.add(1200, function(){	player.alpha=0.5;})
		game.time.events.add(1400, function(){	player.alpha=1;})
        live--;
        immune = true;
        game.time.events.add(2000, function(){immune = false;})
    }// When the player dies
    if (live < 1)
    {

		die();

    }
}

function die (){
		rejoice=player.x;
		player.kill();
    magianemico=true;
        mortepervite=true;
        schermatamorte.visible=true;
        backtocheckpoint1.visible=true;
        backtomainmenu1.visible=true;
        backtobeginning1.visible=true;
		player.revive();
		game.paused=true;
}


function pietrapresa(){
  stone.x=50000;
	catchstone=true;
	pietro.alpha=0.4;
  pietro1.alpha=1;
	caricaJ.alpha=1;
  luce1stone.kill()
  luce2stone.kill()




}


function bacchettapresa (){
  caricaF.alpha=1;
  bacchetta1.alpha=1;
  wand.x=50000;
  luce1wand.kill()
  luce2wand.kill()
  getwand =true;
}


function hitEnemy (a,b) {
    b.kill();
	a.x=50000;
	a.y=1000;

}

function hitEnemy1 (a,b) {
  capra.x=enemy1.x;
  capra.y=enemy1.y+10;
  	a.x=50000;
	a.y=600;
	b.kill();
}
var heart;

function hitEnemy2 (a,b) {
    capra1.x=enemy3.x;
    capra1.y=enemy3.y+10;
    a.x=50000;
	a.y=1000;
	b.kill();
}

function hitEnemy3 (a,b) {
   capra2.x=enemy6.x;
   capra2.y=enemy6.y+10;
    a.x=50000;
	a.y=1000;
	b.kill();

}

function hitEnemy4 (a,b) {
  capra3.x=enemy9.x;
  capra3.y=enemy9.y+10;
    a.x=50000;
	a.y=1000;
	b.kill();

}




 function falling() {
  boat3.body.velocity.y = 190;
  game.time.events.add (5500, restoreBoat)

}


function play () {

  mainmenu.kill();
  buttonback.kill();
  credits.visible=false;
  button.visible=false;
  story.visible=false;
  collect.visible=true;
  collect.events.onInputDown.add(function(){collect.visible=false; giangiorgio=true; game.paused=false; });


}

function credits () {
  mainmenu.visible =! mainmenu.visible;
  buttonback.inuputEnabled=true;

  credits.visible=false;
  button.visible=false;
  story.visible=false;
  schermatacrediti.visible=true;
  buttonback.visible=true;

}

function backtocheckpointt () {
	game.paused=false;
    schermatamorte.visible=false;
    mortepervite=false;
	backtomainmenu1.visible=false;
	backtobeginning1.visible=false;
	backtocheckpoint1.visible=false;
    player.x = lantern_x;
    player.y = lantern_y;
    live=3;
	giangiorgio=true;
	boat.x=28170;
	boat_direction=1;
	boat.body.velocity.x=0;
	startboat=false;

//revive enemy
  enemy1.x=12476;
  enemy1.y=1200;
  enemy2.x=13680;
  enemy2.y=2080;
  enemy3.x=14379;
  enemy3.y=2080;
  enemy4.x=15076;
  enemy4.y=2080;
  enemy5.x=15556;
  enemy5.y=2080;
  enemy6.x=16142;
  enemy6.y=2020;
  enemy7.x=16675;
  enemy7.y=1957;
  enemy8.x=16846;
  enemy8.y=1957;
  enemy9.x=17350;
  enemy9.y=1890;
  enemy10.x=19271;
  enemy10.y=1635;
  enemy11.x=19881;
  enemy11.y=1506;
  enemy14.x=24803
enemy14.y=547;
  //revive weapons

capra.x=50000;
capra1.x=50000;
capra2.x=50000;
capra3.x=50000;


	if(rejoice>0 && rejoice<=11600)
	morte.cameraOffset.x=650
	if(rejoice>=11611 && rejoice<=20590)
	morte.cameraOffset.x=600
	if(rejoice>=20598 && rejoice<=26960)
	morte.cameraOffset.x=500
	if(rejoice>=26966 && rejoice<=34000)
	morte.cameraOffset.x=450
	if(rejoice>=35000)
	morte.cameraOffset.x=450
    player.alpha=0.5;
  	game.time.events.add(200, function(){	player.alpha=1;})
  	game.time.events.add(400, function(){	player.alpha=0.5;})
  	game.time.events.add(600, function(){	player.alpha=1;})
  	game.time.events.add(800, function(){	player.alpha=0.5;})
  	game.time.events.add(1000, function(){	player.alpha=1;})
  	game.time.events.add(1200, function(){	player.alpha=0.5;})
  	game.time.events.add(1400, function(){	player.alpha=1;})

}

function backtocheckpointtempo () {


    if (game.paused && mortepertempo) {
      schermatamorte1.visible=false;
      mortepertempo=false;
      game.paused=false;
		giangiorgio=true;
}

backtomainmenu1.visible=false;
backtobeginning2.visible=false;
backtocheckpoint2.visible=false;
    player.x = lantern_x;
    player.y = lantern_y;
    live=3;
boat.x=28170;
	boat.body.velocity.x=0;
	startboat=false;

	boat_direction=1;
//revive enemy
 enemy1.x=12476;
  enemy1.y=1200;
  enemy2.x=13680;
  enemy2.y=2080;
  enemy3.x=14379;
  enemy3.y=2080;
  enemy4.x=15076;
  enemy4.y=2080;
  enemy5.x=15556;
  enemy5.y=2080;
  enemy6.x=16142;
  enemy6.y=2020;
  enemy7.x=16675;
  enemy7.y=1957;
  enemy8.x=16846;
  enemy8.y=1957;
  enemy9.x=17350;
  enemy9.y=1890;
  enemy10.x=19271;
  enemy10.y=1635;
  enemy11.x=19881;
  enemy11.y=1506;

  //revive weapons



	if(rejoice>0 && rejoice<=11600)
	morte.cameraOffset.x=650
	if(rejoice>=11611 && rejoice<=20590)
	morte.cameraOffset.x=600
	if(rejoice>=20598 && rejoice<=26960)
	morte.cameraOffset.x=500
	if(rejoice>=26966 && rejoice<=34000)
	morte.cameraOffset.x=450
	if(rejoice>=35000)
	morte.cameraOffset.x=450
    player.alpha=0.5;
  	game.time.events.add(200, function(){	player.alpha=1;})
  	game.time.events.add(400, function(){	player.alpha=0.5;})
  	game.time.events.add(600, function(){	player.alpha=1;})
  	game.time.events.add(800, function(){	player.alpha=0.5;})
  	game.time.events.add(1000, function(){	player.alpha=1;})
  	game.time.events.add(1200, function(){	player.alpha=0.5;})
  	game.time.events.add(1400, function(){	player.alpha=1;})

}








function backtobeginningg () {
	game.paused=false;
    schermatamorte.visible=false;
    mortepervite=false;
backtomainmenu1.visible=false;
backtobeginning1.visible=false;
backtocheckpoint1.visible=false;
poterimagici.visible=false;

lights.animations.stop();
lights1.animations.stop();
lights2.animations.stop();
lights3.animations.stop();
lights4.animations.stop();

pietro1.alpha=0;
pietro.alpha=0.4;


  live=3;
  boat.x=28170;
  	boat.body.velocity.x=0;
	startboat=false;

	boat_direction=1;
  catchstone=false;
  getwand=false;
  bacchetta1.alpha=0;
  pietro1.alpha=0;
  caricaF.alpha=0;
  caricaJ.alpha=0;
  morte.cameraOffset.x=650
  player.x=50;
  player.y=450;
  lantern_x=50;
  lantern_y=450;
 enemy1.x=12476;
  enemy1.y=1200;
  enemy2.x=13680;
  enemy2.y=2080;
  enemy3.x=14379;
  enemy3.y=2080;
  enemy4.x=15076;
  enemy4.y=2080;
  enemy5.x=15556;
  enemy5.y=2080;
  enemy6.x=16142;
  enemy6.y=2020;
  enemy7.x=16675;
  enemy7.y=1957;
  enemy8.x=16846;
  enemy8.y=1957;
  enemy9.x=17350;
  enemy9.y=1890;
  enemy10.x=19271;
  enemy10.y=1635;
  enemy11.x=19881;
  enemy11.y=1506;

  miniboss=3;
enemy14.x=24803
enemy14.y=547;
//revive weapons

luce2wand.revive();
wand.x=11285;
luce1wand.revive();

luce2stone.revive();
stone.x=22056
luce1stone.revive();
}

function backtobeginningtempo () {


    if (mortepertempo) {
      schermatamorte1.visible=false;
      mortepertempo=false;
}
		giangiorgio=true;

game.paused=false;
backtomainmenu1.visible=false;
backtobeginning2.visible=false;
backtocheckpoint2.visible=false;
        poterimagici.visible=false;


        lights.animations.stop();
        lights1.animations.stop();
        lights2.animations.stop();
        lights3.animations.stop();
        lights4.animations.stop();

        pietro1.alpha=0;
        pietro.alpha=0.4;


boat.x=28170;
	boat_direction=1;
		boat.body.velocity.x=0;
	startboat=false;

  live=3;
  catchstone=false;
  getwand=false;
  bacchetta1.alpha=0;
  pietro1.alpha=0;
  caricaF.alpha=0;
  caricaJ.alpha=0;
  morte.cameraOffset.x=650
  player.x=50;
  player.y=450;
  lantern_x=50;
  lantern_y=450;
  enemy1.x=12476;
  enemy1.y=1200
 enemy1.x=12476;
  enemy1.y=1200;
  enemy2.x=13680;
  enemy2.y=2080;
  enemy3.x=14379;
  enemy3.y=2080;
  enemy4.x=15076;
  enemy4.y=2080;
  enemy5.x=15556;
  enemy5.y=2080;
  enemy6.x=16142;
  enemy6.y=2020;
  enemy7.x=16675;
  enemy7.y=1957;
  enemy8.x=16846;
  enemy8.y=1957;
  enemy9.x=17350;
  enemy9.y=1890;
  enemy10.x=19271;
  enemy10.y=1635;
  enemy11.x=19881;
  enemy11.y=1506;
  miniboss=3;
enemy14.x=24803
enemy14.y=547;
//revive weapons

luce2wand.revive();
wand.x=11285;
luce1wand.revive();

luce2stone.revive();
stone.x=22056
luce1stone.revive();
}






function backtomainmeno (){
  game.paused=false;
  if (mortepervite) {
   schermatamorte.visible=false;
    backtomainmenu1.visible=false;
    backtobeginning1.visible=false;
    backtocheckpoint1.visible=false;
    mortepervite=false;
  }
  if (mortepertempo) {
    schermatamorte1.visible=false;
    mortepertempo=false;
  }
      schermatamorte1.kill();
      backtomainmenu1.kill();
      backtobeginning1.kill();
      backtocheckpoint1.kill();
      backtobeginning2.kill();
      backtocheckpoint2.kill();
      mortepertempo=false;




  player.x=0;
  player.y=1500;
  loading = game.add.sprite(0,0,'loading');
  loading.fixedToCamera=true;
	location.reload();



}




function backtomainmenu3 (){

  vittoria.visible=false;
  backtobeginning2.visible=false;
  player.revive();
  player.x=0;
  player.y=1500;
  loading1 = game.add.sprite(0,0,'loading');
  loading1.fixedToCamera=true;
 location.reload();


}




function backfromcreditss () {

    schermatacrediti.visible=false;
	buttonback.visible=false;
    mainmenu.visible=true;
    credits.visible=true;
    button.visible=true;
    story.visible=true;


}

function story () {
  mainmenu.kill()
  story.kill();
  button.kill()
  credits.kill()
  scenaa = game.add.sprite(0,0,'scena1');
  scenaa.fixedToCamera=true
  scenaa.inputEnabled = true;
  scenaa.events.onInputDown.add(buttonscena1);


}
function buttonscena1 () {

  scenaa.kill();
  scena2 = game.add.sprite(0,0,'scena2');
  scena2.fixedToCamera=true
  scena2.inputEnabled = true;
  scena2.events.onInputDown.add(buttonscena2);

}
function buttonscena2 () {

  scena2.visible =false;
  scena3 = game.add.sprite(0,0,'scena3');
  scena3.fixedToCamera=true
  scena3.inputEnabled = true;
  scena3.events.onInputDown.add(buttonscena3);

}function buttonscena3 () {

  scena3.visible =false;
  scena4 = game.add.sprite(0,0,'scena4');
  scena4.fixedToCamera=true
  scena4.inputEnabled = true;
  scena4.events.onInputDown.add(buttonscena4);

}
function buttonscena4 () {

  scena4.visible =! scena4.visible;
  tenyears = game.add.sprite(0,0,'tenyears');
  tenyears.fixedToCamera=true
  tenyears.inputEnabled = true;
  tenyears.events.onInputDown.add(buttontenyears);

}

function buttontenyears () {

      tenyears.visible =! tenyears.visible;
      scena5 = game.add.sprite(0,0,'scena5');
      scena5.fixedToCamera=true
      scena5.inputEnabled = true;
      scena5.events.onInputDown.add(buttonscena5);

}

function buttonscena5 () {

  scena5.visible =! scena5.visible;
  scena6 = game.add.sprite(0,0,'scena6');
  scena6.fixedToCamera=true
  scena6.inputEnabled = true;
  scena6.events.onInputDown.add(buttoncollect);


}
var provaperscena=true;
var giangiorgio=false;
function buttoncollect() {


	scena6.visible =! scena6.visible;
    if(provaperscena){
	collect = game.add.sprite(0,0,'collect');
    collect.fixedToCamera=true
    collect.inputEnabled = true;
	collect.events.onInputDown.add(function(){collect.kill(); buttonback.kill(); giangiorgio=true;});
	provaperscena=false;

}
}

  function buttonscena6 () {




}

function render () {

}
