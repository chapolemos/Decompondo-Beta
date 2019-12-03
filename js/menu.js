class Menu extends Phaser.Scene {
	constructor(){
		super("Menu");
	}
	create(){
		this.add.text(20, 20, "Menu");
		this.bg = this.add.image(0,0,"bgfase1").setInteractive();
		this.bg.setOrigin(0,0);
		this.bg.click = false;
		this.bg.on("pointerdown", function(){
			this.click = true;
		});
	}

	update(){
		if(this.bg.click){
			this.scene.start("Fase1");
		}
	}
}