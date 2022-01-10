var TukTukGo = TukTukGo || {};

TukTukGo.game = new Phaser.Game(240, 320, Phaser.CANVAS, 'container');

TukTukGo.game.state.add('Boot', TukTukGo.Boot);
TukTukGo.game.state.add('Preload', TukTukGo.Preload);
TukTukGo.game.state.add('Game', TukTukGo.Game);

TukTukGo.game.state.start('Boot');
