/* global Phaser*/

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 14
// This is the Phaser3 game confiuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()

/*
* Start Phaser Game.`
*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  // Set background color
  backgroundColor: 0x5f6e7a,
  physics: {
    default: "arcade",
    debug: true
  },
  scale: {
    mode: Phaser.Scale.Fit,
    // Move to the center
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)

// load scenes
// key is global (can't be reused)
game.scene.add("SplashScene", splashScene)
game.scene.add("TitleScene", titleScene)
game.scene.add("MenuScene", menuScene)
game.scene.add("GameScene", gameScene)

// start scene
game.scene.start("SplashScene")
