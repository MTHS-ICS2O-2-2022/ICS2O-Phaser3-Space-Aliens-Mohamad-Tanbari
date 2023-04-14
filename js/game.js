/* global Phaser*/

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 14
// This is the Phaser3 game confiuration file

/*
* Start Phaser Game.
*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0x5f6e7a,
}

const game = new Phaser.Game(config)
console.log(game)
