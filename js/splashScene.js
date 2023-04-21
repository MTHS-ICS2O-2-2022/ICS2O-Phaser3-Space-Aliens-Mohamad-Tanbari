/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 20
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log("Splash Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene