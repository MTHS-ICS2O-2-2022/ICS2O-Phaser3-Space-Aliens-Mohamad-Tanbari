/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 20
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "SplashScene" })
    this.splashSceneBackgroundImage = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
    this.load.image(
      "splashSceneBackground",
      "./assets/sprites/splashSceneBackground.png"
    )
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update(time, delta) {
    if ((time, delta > 5000)) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
