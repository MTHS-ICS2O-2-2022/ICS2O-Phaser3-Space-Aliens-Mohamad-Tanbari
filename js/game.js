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
    debug: false
  },
  scale: {
    mode: Phaser.Scale.FIT,
    // Move to the center
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// key is global (can't be reused)
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// start scene
game.scene.start("splashScene")
