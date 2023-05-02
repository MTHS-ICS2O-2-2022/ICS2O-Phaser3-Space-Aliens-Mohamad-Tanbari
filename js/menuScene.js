/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2nd
// This is the splash scene

/*
* This class is the Splash Scene.
*/
class MenuScene extends Phaser.Scene {
  /*
  * This method is the constructor.
  */
  constructor() {
    super({ key: "MenuScene" })
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
    console.log("Menu Scene")
  }

  create(data) {
    // pass
  }

  /*
  * Should be overriden by your own Scenes.
  * This method is called once per game step while the scene is running.
  * @param {number} time - the current time.
  * @param {number} delta - the delta time in ms since the last frame
  */
  update(time, delta) {
    // pass
  }
}

export default MenuScene
