var gameState = "play";
var Engine = Matter.Engine,
  	World = Matter.World,
  	Events = Matter.Events,
  	Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var score = 0;

var divisionHeight=300;
var score = 0;
var count = 5;
var particle;
function setup(){
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,800,800,1);

   	for (var k = 0; k <=width; k = k + 80){
     	divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   	}

    for (var j = 75; j <=width; j=j+50){
       	plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       	plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
       	plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
      	plinkos.push(new Plinko(j,375));
	}
	
	boundary1 = new Ground(0, 400, 1, 800);
	boundary2 = new Ground(800, 400, 1, 800);
  
}

function draw(){
  	background("black");
	textSize(30)
	text("Chances : "+count, 630, 30)  
	text("Score : "+score,20,30);
	text("100", 20, 500+20);
	text("100", 100, 500+20);
	text("300", 180, 500+20);
	text("300", 260, 500+20);
	text("500", 260+80, 500+20);
	text("500", 260+80+80, 500+20);
	text("300", 260+80+80+80, 500+20);
	text("300", 260+80+80+80+80, 500+20);
	text("100", 260+80+80+80+80+80, 500+20);
	text("100", 260+80+80+80+80+80+80, 500+20);
  	Engine.update(engine);
	
	ground.display();

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 0 && particle.body.position.x < 80){
				score = score+100
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}

		}

	}
	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 81 && particle.body.position.x < 160){
				score = score+100
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 161 && particle.body.position.x < 240){
				score = score+300
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 241 && particle.body.position.x < 320){
				score = score+300
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 321 && particle.body.position.x < 400){
				score = score+500
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}
	
	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 401 && particle.body.position.x < 480){
				score = score+500
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 481 && particle.body.position.x < 560){
				score = score+300
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 560 && particle.body.position.x < 640){
				score = score+300
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 641 && particle.body.position.x < 720){
				score = score+100
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}

	if(particle != null){

		particle.display();

		if(particle.body.position.y > 495){

			if(particle.body.position.x > 721 && particle.body.position.x < 800){
				score = score+100
				particle = null;
			}
			if(count <= 0){
				gameState = "end"
			}
		}

	}
	if(gameState === "end"){
		textSize(100);
		fill("white");
		stroke("white")
		text("Game Over", 200, 300);
		
	}
   	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
   	}

	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	}
	
}

function mousePressed(){
	if (gameState !== "end"){
		particle = new Particle(mouseX, 20, 10);
		count = count - 1;
	}
}