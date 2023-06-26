import { CGFobject, CGFappearance } from "../../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyPanorama extends CGFobject {
  constructor(scene, texture) {
    super(scene);
    this.texture = texture;
    this.initBuffers();
  }

  display() {
    this.sphere = new MySphere(this.scene, 100, 100, true);

    this.panoram = new CGFappearance(this.scene);
    this.panoram_texture = this.texture;
    this.panoram.setAmbient(4, 4, 4, 1);

    // "material apenas com componente emissiva"
    this.panoram.setDiffuse(0, 0, 0, 0);
    this.panoram.setSpecular(0, 0, 0, 0);
    this.panoram.setShininess(0);

    this.panoram.setTexture(this.panoram_texture);
    this.panoram.setTextureWrap("REPEAT", "REPEAT");

    this.panoram.apply();
    this.sphere.display();
  }
}
