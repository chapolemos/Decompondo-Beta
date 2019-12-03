var FimDeFase = false;
var usada = 0;
var posPossivel = [0,0];
var pause = false;
var DicaAtual = 0;
var operacao = "+";
var mudaDica = false;
var estrela;
var resetar = false;
class Fase1 extends Phaser.Scene {
	constructor(){
		super("Fase1");
	};	
	create(){
		pause = false;
		this.elementosEscondidosDica = [];
		this.elementosEscondidosPausa = [];
		this.vida = 4;
		this.alvo=0;
		this.cartaEscolhida = [0,0];
		this.jogadas = [
			[1,4,6,8,5,2],
			[3,7,9,8,5,4],
			[2,5,7,9,6,4],
			[5,6,4,8,1,2],
			[4,6,5,3,2,7],
			[1,2,3,4,5,6]
		];

		this.ajogar=[0,0];
		this.cartas = [0,0,0,0,0,0];
		
		this.bg = this.add.image(0,0,"bgfase1");
		this.bg.setOrigin(0,0);

		this.campo = this.add.image(412, 302, "campo1");
		
		this.duvida = this.add.image(695, 466, "duvida").setInteractive();
		this.duvida.click = false;
		this.duvida.on("pointerdown", function(){
			if(!pause){
				this.click = true;
			}
		});

		this.configura = this.add.image(127, 466, "config").setInteractive();
		this.configura.click = false;
		this.configura.on("pointerdown", function(){
			if(!pause){
				this.click = true;
			}
		});


		this.btSprite = this.add.image(411,466, "btFundo1").setInteractive();
		this.btSprite.click = false;
		this.btSprite.on("pointerover", function(){
			if(!pause){
				this.setTexture("btFundo2");
			}
		});
		this.btSprite.on("pointerout", function(){
			this.setTexture("btFundo1");
		});
		this.btSprite.on("pointerdown", function(){
			if(!pause){
				this.click = true;
			}
		});

		this.calcular = this.add.text(411, 466, "CALCULAR",{font: '45px balloon', fill: "white"});
		this.calcular.setOrigin(0.5);

		this.barradevida = this.add.image(1073,83,"barradevida4").setInteractive();
		
		this.zero = this.add.image(1073,350,"zero");
		
		estrela = this.add.image(1082, 181, "estrela");
		estrela.visible = false;

		this.textoAlvo = this.add.text(598 , 290, "0", {font: '125px balloon', fill: "white"});
		this.textoAlvo.setOrigin(0.5);
		this.criaCartas();

		this.transparencia = this.add.image(0,0, "transp");
		this.transparencia.setOrigin(0);
		this.transparencia.visible = false;
		this.elementosEscondidosDica.push(this.transparencia);
		this.elementosEscondidosPausa.push(this.transparencia);

		this.n4 = this.add.image(1184, 489,"numero4");
		this.n4.setScale(0.8);
		this.n4.visible = false;

		this.personagem = this.add.image(153, 450, "Pduvida"+personagemSpt);
		this.personagem.setScale(0.3);
		this.personagem.visible = false;

		this.Bfala = this.add.image(0,549, "Bfala").setInteractive();
		this.Bfala.setOrigin(0);
		this.Bfala.visible = false;
		this.Bfala.on('pointerdown', function (pointer) {
	        DicaAtual++;
	        mudaDica = true;
	     });
		this.elementosEscondidosDica.push(this.Bfala);

		this.textoDica = this.add.text(56, 585, "O que é para fazer?",{font: '65px balloon', fill: "black",});
		this.textoDica.setLineSpacing(20);
		this.textoDica.visible = false;
		this.textoDica.var = 1;
		this.elementosEscondidosDica.push(this.textoDica);


		this.campoConf = this.add.image(412, 302, "campo0");
		this.campoConf.visible = false;
		this.elementosEscondidosPausa.push(this.campoConf);

		this.continuar = this.add.image(410,224, "btFundo1").setInteractive();
		this.continuar.click = false;
		this.continuar.setScale(1.2);
		this.continuar.visible = false;
		this.continuar.on("pointerover", function(){
			this.setTexture("btFundo2");
		});
		this.continuar.on("pointerout", function(){
			this.setTexture("btFundo1");
		});
		this.continuar.on("pointerdown", function(){
			this.click = true;
		});
		this.elementosEscondidosPausa.push(this.continuar);

		this.Continue = this.add.text(412, 224, "continuar",{font: '45px balloon', fill: "white"});
		this.Continue.setOrigin(0.5);
		this.Continue.visible = false;
		this.elementosEscondidosPausa.push(this.Continue);

		this.menu = this.add.image(410,334, "btFundo1").setInteractive();
		this.menu.click = false;
		this.menu.setScale(1.2);
		this.menu.visible = false;
		this.menu.on("pointerover", function(){
			this.setTexture("btFundo2");
		});
		this.menu.on("pointerout", function(){
			this.setTexture("btFundo1");
		});
		this.menu.on("pointerdown", function(){
			this.click = true;
		});
		this.elementosEscondidosPausa.push(this.menu);

		this.menuT = this.add.text(412, 334, "menu",{font: '45px balloon', fill: "white"});
		this.menuT.setOrigin(0.5);
		this.menuT.visible = false;
		this.elementosEscondidosPausa.push(this.menuT);
	};

	update(){
		if(!pause){
			if(this.duvida.click){
				this.duvida.click=false;
				for(var i = 0; i<this.elementosEscondidosDica.length; i++){
					this.elementosEscondidosDica[i].visible = true;
				}
				pause= true;
				mudaDica = true;
			}

			if(this.configura.click){
				this.configura.click=false;
				for(var i = 0; i<this.elementosEscondidosPausa.length; i++){
					this.elementosEscondidosPausa[i].visible = true;
				}
				pause= true;

			}

			if(this.btSprite.click){
				if(posPossivel[0]===1 && posPossivel[1]===1){
					this.calcula();
				}
				this.btSprite.click = false;
			}

			if (resetar){
				this.resetaJogada();
				resetar = false;
			}

			if(this.vida <= 0 && !estrela.visible){
				this.FinaldeFase();
			}
		}else{

			if(this.continuar.click){
				this.continuar.click=false;
				for(var i = 0; i<this.elementosEscondidosPausa.length; i++){
					this.elementosEscondidosPausa[i].visible = false;
				}
				pause= false;
			}

			if(this.menu.click){
				this.menu.click=false;
				for(var i = 0; i<this.elementosEscondidosPausa.length; i++){
					this.elementosEscondidosPausa[i].visible = false;
				}
				pause= false;
				this.scene.start("Menu");
			}

			if(mudaDica){
				this.atualizaDica();
				mudaDica = false;
			}

			if(FimDeFase){
				FimDeFase = false;
				this.scene.start("Menu");
			}
		}

	};

	criaCartas(){
		posPossivel = [0,0];
		this.verificaPos = posPossivel;
		this.escolha = Math.floor(Math.random() * this.jogadas.length);
		for(var i = 0; i<6; i++){
			var carta = this.add.image(380+(130*i),644,"c"+this.jogadas[this.escolha][i]).setInteractive();
			carta.valor = this.jogadas[this.escolha][i];
			carta.uso = false;
			carta.origemX = carta.x;
			carta.origemY = carta.y;
			
			carta.on('pointerover', function (pointer) {
	            if(this.y != 285 && !pause){
	            	this.y -= 50;
	            }
	        });
	        carta.on('pointerout', function (pointer) {
	            if(this.y != 285 && !pause){
	            	this.y = 644;
	            }
	        });
	        carta.on('pointerdown', function (pointer) {
		        if(!pause){
		            if(this.y===594 && usada < 2){
		            	if(posPossivel[0]===0){
		            		this.x = 181;
		            		this.y = 285;
		            		posPossivel[0] = 1;
		            	}else{
		            		this.x = 368;
		            		this.y = 285;
		            		posPossivel[1] = 1;
		            	}
		            	usada++;
		    			this.uso = true;
		            	this.verificaPos = posPossivel;
		            }
		            else if(this.y == 285){
		            	if(this.x === 181){
		            		posPossivel[0] = 0;
		            		this.x = this.origemX;
		            		this.y = this.origemY-50;
		            	}else{
		            		posPossivel[1] = 0;
		            		this.x = this.origemX;
		            		this.y = this.origemY-50;
		            	}
		            	usada--;
		            	this.uso = false;
		            	this.verificaPos = posPossivel;
		            }
		        }
	        });

	        this.cartas[i] = carta;
		}
		this.calculaAlvo();
	};

	calculaAlvo(){
		var valor1 = this.jogadas[this.escolha][Math.floor(Math.random() * this.jogadas.length)];
		var valor2 = this.jogadas[this.escolha][Math.floor(Math.random() * this.jogadas.length)];
		while(valor1===valor2){
			var valor2 = this.jogadas[this.escolha][Math.floor(Math.random() * this.jogadas.length)];
		}
		this.alvo=valor1 + valor2;
		this.textoAlvo.text = this.alvo;
	};

	calcula(){
		var soma = 0;
		for(var i = 0; i<6; i++){
			if(this.cartas[i].uso){
				soma += this.cartas[i].valor;
			}
		}
		if(soma === this.alvo){
			this.vida -= 1;
			if(this.vida>=0){
				this.barradevida.setTexture("barradevida"+this.vida);
				this.levandoDano();
			}
		}else{
			alert("jogada errada");
		}
	}

	resetaJogada(){
		usada = 0;
		posPossivel = [0,0];
		this.escolha = Math.floor(Math.random() * this.jogadas.length);
		for(var i = 0; i<6; i++){
			var cart = this.cartas[i];
			cart.x = cart.origemX;
			cart.y = cart.origemY;
			cart.uso = false;
			cart.valor = this.jogadas[this.escolha][i];
			cart.setTexture("c"+this.jogadas[this.escolha][i]);
		}
		this.calculaAlvo();
	}

	FinaldeFase(){
		this.zero.setTexture("Zcorrendo");
		this.zero.morte = false;
		pause = true;
		var tween = this.tweens.add({
        	targets: this.zero,
        	x:1370,
        	y:325,
 			scaleX: 0.1,
  			scaleY: 0.1,
  			ease: 'Linear',
  			duration: 2000,
  			yoyo: false,
			repeat: 0,
			onComplete: function () { FimDeFase = true;}
		});	
	}

	levandoDano(){
		pause = true;
		estrela.visible=true;
		var tween = this.tweens.add({
        	targets: estrela,
        	x:1082,
        	flipX: true,
        	ease: 'Power1',
	        duration: 100,
	        flipX: true,
	        yoyo: true,
	        repeat: 6,
			onComplete: function () { pause = false; estrela.visible=false; resetar = true}
		});
	}

	atualizaDica(){
		switch (DicaAtual) {
			case 0:
				this.personagem.visible =true;
		    	break;
			case 1:
				this.personagem.visible =false;
				this.n4.visible =true;
				if(posPossivel[0]===0){
					this.textoDica.text = "Clique nas cartas para realizar a jogada.";
				}else if(posPossivel[1]===1){
					this.textoDica.text = "Clique no botão calcular para var se a \nresposta está certa.";
				}else{
					var cartaAtual =0;
					var possivelComb=100;
					for(var i=0; i<6; i++){
						if(this.cartas[i].uso){
							cartaAtual = this.cartas[i].valor;
						}
					}
					while(possivelComb>9 || (possivelComb + cartaAtual) === this.alvo || possivelComb===cartaAtual){
						possivelComb = this.jogadas[this.escolha][Math.floor(Math.random() * this.jogadas.length)];
					}
					var val = cartaAtual + possivelComb;
					if(val > this.alvo){
						this.textoDica.text = cartaAtual + operacao + possivelComb +" é igual a " + val + ", use uma combinação \nmais fraca";
					}else{
						this.textoDica.text = cartaAtual + operacao + possivelComb +" é igual a " + val + ", use uma combinação \nmais forte";
					}
				}
		  		break;
			case 2:
				this.n4.visible =false;
				this.textoDica.text = "O que é para fazer?";
				for(var i = 0; i<this.elementosEscondidosDica.length; i++){
					this.elementosEscondidosDica[i].visible = false;
				}
				DicaAtual=0;
				pause = false;
		    	break;

		}
	}
};