/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 20
// This is the splash scene

/*
 * This class is the Splash Scene.
 */
class GameScene extends Phaser.Scene {
  /*
   * This method is the constructor.
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissile = false
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
    console.log("Game Scene")

    this.load.image("starBackground", "assets/starBackground.png")
    this.load.image("ship", "assets/spaceShip.png")
    this.load.image("missile", "assets/missile.png")
  }

  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // create a group for the missles
    this.missleGroup = this.physics.add.group()
  }

  /*
   * Should be overriden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - the current time.
   * @param {number} delta - the delta time in ms since the last frame
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyRightObj = this.input.keyboard.addKey("D")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 1920
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissle === false) {
        // fire missle
        this.fireMissle
        const aNewMissle = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
        this.missleGroup.add(aNewMissle)
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissle = false
    }
  }
}

export default GameScene
