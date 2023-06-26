import {
  CGFscene,
  CGFcamera,
  CGFaxis,
  CGFappearance,
  CGFshader,
  CGFtexture,
} from "../lib/CGF.js";

import { MyPlane } from "./primitives/MyPlane.js";
import { MySphere } from "./primitives/MySphere.js";
import { MyPanorama } from "./primitives/MyPanorama.js";
import { MyTerrain } from "./primitives/MyTerrain.js";
import { MyBird } from "./bird/MyBird.js";
import { MyBillboard } from "./tree/MyBillboard.js";
import { MyTreeGroupPatch } from "./tree/MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./tree/MyTreeRowPatch.js";
import { MyQuad } from "./primitives/MyQuad.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);

    this.initCameras();
    this.initLights();

    this.enableTextures(true);
    this.setUpdatePeriod(50);

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this, 30);
    this.outside_sphere = new MySphere(this, 100, 100, false);

    this.panorama_texture = new CGFtexture(this, "images/panorama4.jpg");
    this.panorama = new MyPanorama(this, this.panorama_texture);

    this.bird = new MyBird(this, 90, 0, [0, 0, 0]); // angle (degrees), speed, position(x,y,z)
    this.groupTree3x3 = new MyTreeGroupPatch(this, 3, -1.9, 2);
    this.groupTree3x3_2 = new MyTreeGroupPatch(this, -0.5, -1.9, 2);
    this.groupTree = new MyTreeRowPatch(this, 6, -1.7, -5);
    this.groupTree3x3_3 = new MyTreeGroupPatch(this, -7.5, -1.9, -9);
    this.groupTree_2 = new MyTreeRowPatch(this, 7, -1.7, -5);

    this.terrain = new MyTerrain(
      this,
      100,
      100,
      "images/terrain.jpg",
      "images/heightmap.jpg",
      "images/altimetry.png"
    );

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.speedFactor = 0.1;
    this.scaleFactor = 1;

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap("REPEAT", "REPEAT");

    this.earth = new CGFappearance(this.scene);

    this.earth_texture = new CGFtexture(this, "images/earth.jpg");
    this.earth = new CGFappearance(this);
    this.earth.setTexture(this.earth_texture);
    this.earth.setTextureWrap("REPEAT", "REPEAT");
  }

  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }

  initCameras() {
    this.camera = new CGFcamera(
      2.0,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }

  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();

    this.setDefaultAppearance();

    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    this.lights[0].update();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.appearance.apply();
    this.translate(0, -100, 0);
    this.scale(400, 400, 400);
    this.rotate(-Math.PI / 2.0, 1, 0, 0);
    this.popMatrix();

    this.pushMatrix();
    this.scale(200, 200, 200);
    this.earth.apply();
    this.outside_sphere.display();
    this.popMatrix();

    this.pushMatrix();
    this.scale(200, 200, 200);
    this.panorama.display();
    this.popMatrix();

    this.pushMatrix();
    this.rotate(-0.5 * Math.PI, 1, 0, 0);
    this.translate(0, 0, -100);
    this.scale(400, 400, 15);
    this.terrain.display();
    this.popMatrix();

    this.pushMatrix();
    this.groupTree3x3.display();
    this.groupTree3x3_2.display();
    this.groupTree.display();
    this.groupTree3x3_3.display();
    this.groupTree_2.display();
    this.popMatrix();
    
    this.pushMatrix();
    this.bird.display();
    this.setActiveShader(this.defaultShader);
    this.popMatrix();

    // ---- END Primitive drawing section
  }

  update(t) {
    this.checkKeys();
    this.bird.updateMove(this.speedFactor, this.scaleFactor);
    this.bird.tryCatchEgg(t);
    this.bird.tryDropEgg(t);
  }

  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;
    // Check for key codes e.g. in https://keycode.info/

    if (this.gui.isKeyPressed("KeyR")) {
      this.speedFactor = 0;
      this.scaleFactor = 1;
    }
    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyP")) {
      text += " P ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyO")) {
      text += " O ";
      keysPressed = true;
    }

    if (keysPressed) console.log(text);
  }
}
