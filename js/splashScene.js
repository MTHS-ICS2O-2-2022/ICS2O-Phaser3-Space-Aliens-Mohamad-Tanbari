/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 20
// This is the splash scene

/*
* This class is the Splash Scene.
*/
class SplashScene extends Phaser.Scene {
  /*
  * This method is the constructor.
  */
  constructor() {
    super({ key: "splashScene" })
    this.splashSceneBackgroundImage = null
  }

  /*
  * Can be defined on your own Scenes.
  * This method is called by the Scene Manager when the scene start,
  *   before preload() and create()
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /*
  * Can be defined on your own Scenes.
  Use it to load assets
  */
  preload() {
    console.log("Splash Scene")
    this.load.image(
      "splashSceneBackground",
      "./assets/splashSceneImage.png"
    )
  }

  create(data) {
    // pass
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
    /*
    * Should be overriden by your own Scenes.
    * This method is called once per game step while the scene is running.
    * @param {number} time - the current time.
    * @param {number} delta - the delta time in ms since the last frame
    */
  }

  update(time, delta) {
    // pass
    if ((time > 3000)) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
