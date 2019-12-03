var loadscene = new Load();
var config = {
	width: 1366,
	height: 768,
	backgroundColor: 0x000000,
	scene: [Load, Menu, Credito, SelecFase, Fase1, Fase2, Fase3]
}

var game = new Phaser.Game(config);