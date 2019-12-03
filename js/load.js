class Load extends Phaser.Scene {
	constructor(){
		super({key: "loadGame"});
	}
	preload(){

		this.load.image("bgfase1", "img/bgfase1.png");
		this.load.image("estrela", "img/estrelas.png");
		this.load.image("duvida", "img/duvida.png");
		this.load.image("bgfase1", "img/bgfase1.png");
		this.load.image("zero", "img/zero.png");
		this.load.image("barradevida4", "img/barra1.png");
		this.load.image("barradevida3", "img/barra2.png");
		this.load.image("barradevida2", "img/barra3.png");
		this.load.image("barradevida1", "img/barra4.png");
		this.load.image("barradevida0", "img/barra5.png");
		this.load.image("c1", "img/carta1.png");
		this.load.image("c2", "img/carta2.png");
		this.load.image("c3", "img/carta3.png");
		this.load.image("c4", "img/carta4.png");
		this.load.image("c5", "img/carta5.png");
		this.load.image("c6", "img/carta6.png");
		this.load.image("c7", "img/carta7.png");
		this.load.image("c8", "img/carta8.png");
		this.load.image("c9", "img/carta9.png");
		this.load.image("btFundo1", "img/btFundo1.png");
		this.load.image("btFundo2", "img/btFundo2.png");
		this.load.image('duvida', "img/duvida.png");
		this.load.image('config', "img/configuracao.png");
		this.load.image('transp', "img/trasnparencia.png");
		this.load.image('Bfala', "img/fala.png");
		this.load.image("Zcorrendo", "img/zeroCorrendo.png");
		this.load.image("campo0","img/campo0.png");
		this.load.image("campo1","img/campo1.png");
		this.load.image("campo2","img/campo2.png");
		this.load.image("campo3","img/campo3.png");
		this.load.image("campo4","img/campo4.png");
		this.load.image("numero4", "img/Numero-4-amarelo.png");
		this.load.image("Pduvida1", "img/Pdivida1.png");
		this.load.image("Pduvida2", "img/Pdivida2.png");

	}
	create(){
		this.add.text(20, 20, "Carregando Jogo...");

		this.scene.start("Menu");
	}
}