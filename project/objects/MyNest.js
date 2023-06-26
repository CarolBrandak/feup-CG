import { CGFobject, CGFappearance } from "../../lib/CGF.js";
import { MyBirdEgg } from "../bird/MyBirdEgg.js";

import { MyCylinder } from "../primitives/MyCylinder.js";

export class MyNest extends CGFobject {
  constructor(scene) {
    super(scene);

    this.eggs_list = [];
    this.initBuffers();
    this.initMaterials();
  }

  initBuffers() {
    this.cylinder = new MyCylinder(this.scene, 100, 1, 0.05, 0.05);
    this.cylinder2 = new MyCylinder(this.scene, 100, 1, 0.05, 0.05);
    this.cylinder3 = new MyCylinder(this.scene, 100, 1, 0.05, 0.05);
    this.cylinder4 = new MyCylinder(this.scene, 100, 1, 0.05, 0.05);
  }

  initMaterials() {
    this.material = new CGFappearance(this.scene);
    this.material.setEmission(1, 1, 1, 1);
    this.material.setAmbient(1, 1, 1, 1);
    this.material.setDiffuse(1, 1, 1, 1);
    this.material.setSpecular(1, 1, 1, 1);

    this.material.loadTexture("images/nest-texture.jpg");
    this.material.setTextureWrap("REPEAT", "REPEAT");
  }

  display() {
    this.scene.pushMatrix();
    this.material.apply();
    this.scene.translate(0, 0, 0.5);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.cylinder.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.material.apply();
    this.scene.translate(-0.5, 0, 0);
    this.scene.rotate(-Math.PI / 2, 0, 0, 1);
    this.cylinder2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.material.apply();
    this.scene.translate(-0.35, 0, 0.35);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.scene.rotate(-Math.PI / 4, 0, 0, 1);
    this.cylinder3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.material.apply();
    this.scene.translate(0.35, 0, 0.35);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.scene.rotate(Math.PI / 4, 0, 0, 1);
    this.cylinder4.display();
    this.scene.popMatrix();
  }

  addEgg(egg) {
    this.eggs_list.push(egg);
  }
}
