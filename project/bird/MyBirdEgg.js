import { CGFobject, CGFappearance } from "../../lib/CGF.js";
import { MySphere } from "../primitives/MySphere.js";

export class MyBirdEgg extends CGFobject {
  constructor(scene, x, y, z) {
    super(scene);

    this.x = x;
    this.y = y;
    this.z = z;

    this.sphere = new MySphere(scene, 100, 100, false);
    this.initMaterials();
  }

  initMaterials() {
    this.material = new CGFappearance(this.scene);

    // TO BE EASILY VISIBLE
    this.material.setShininess(1);
    this.material.setEmission(1, 1, 1, 1);
    this.material.setAmbient(1, 1, 1, 1);
    this.material.setDiffuse(1, 1, 1, 1);
    this.material.setSpecular(1, 1, 1, 1);

    this.material.loadTexture("images/egg-texture.jpg");
    this.material.setTextureWrap("REPEAT", "REPEAT");
  }

  display() {
    this.scene.pushMatrix();
    this.material.apply();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.scale(0.5, 1, 0.5);
    this.scene.scale(1.5, 1.5, 1.5);
    this.sphere.display();
    this.scene.popMatrix();
  }

  getPosition() {
    return { x: this.x, y: this.y, z: this.z };
  }

  setPosition(p) {
    this.x = p.x;
    this.y = p.y;
    this.z = p.z;
  }
}
