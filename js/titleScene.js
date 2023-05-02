/* global Phaser */

// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 20
// This is the title scene

class TitleScene extends Phaser.Scene {
  /*
  * This method is the constructor.
  */
  constructor () {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTestStyle = {
      font: '200px Times',
      fill: '#fde4b9',
      align: 'center',
    }
  }

  /*
  * can be defined on your own Scenes.
  * This method is called by the Scene Manager when the scene start,
  *   before preload() and create()
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /*
  * Can be defined on your own Scenes.
  * Use it to load assets
  */
  preload () {
    console.log("Title Scene")
    this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
  }

  /*
  * Can be defined on your own Scenes.
  * Use it to create your game objects
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneTest = (this.add.text(1920 / 2, 1080 / 2 + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5))
  }

  /*
  * Should be overriden by your own Scenes.
  * This method is called once per game step while the scene is running.
  *  @param {number} time - the current time.
  *  @param {number} delta - the delta time in ms since the last frame
  */
  update (time, delta) {
  }
}

export default TitleScene
