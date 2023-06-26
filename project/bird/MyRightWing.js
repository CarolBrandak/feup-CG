import { CGFobject, CGFappearance, CGFtexture } from "../../lib/CGF.js";
import { MyTriangle } from "../primitives/MyTriangle.js";

var DEGREE_TO_RAD = Math.PI / 180;

export class MyRightWing extends CGFobject {
  constructor(scene) {
    super(scene);
    this.initBuffers();
    this.materials();
    this.textures();
  }

  initBuffers() {
    this.triangle = new MyTriangle(this.scene, [0, 0, 1, 0, 0, 1]);
  }

  materials() {
    this.OrandMaterial = new CGFappearance(this.scene);

    this.OrandMaterial.setAmbient(0, 0.5, 0.3, 1.0);
    this.OrandMaterial.setDiffuse(0, 0.5, 0.3, 1.0);
    this.OrandMaterial.setSpecular(0, 0.5, 0.3, 1.0);
    this.OrandMaterial.setShininess(10.0);
  }

  textures() {
    this.birdTexture = new CGFtexture(this.scene, "images/feathers.jpeg");
    this.OrandMaterial.setTexture(this.birdTexture);
  }

  display() {
    this.OrandMaterial.apply();

    this.scene.pushMatrix();
    this.scene.translate(-2, 0, 0.3);
    this.scene.rotate(260 * DEGREE_TO_RAD, 0, 1, 0);
    this.scene.rotate(-90 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.scale(1, 2, 1);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-5.24, -0.74, -0.27);
    this.scene.rotate(260 * DEGREE_TO_RAD, 0, 1, 0);
    this.scene.rotate(120 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.scale(1, 1.5, 1);
    this.triangle.display();
    this.scene.popMatrix();
  }
}
