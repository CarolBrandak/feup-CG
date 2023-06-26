import { CGFobject, CGFappearance, CGFtexture } from "../../lib/CGF.js";
import { MySphere } from "../primitives/MySphere.js";
import { MyCylinder } from "../primitives/MyCylinder.js";
import { MyCone } from "../primitives/MyCone.js";
import { MyTriangle } from "../primitives/MyTriangle.js";

var DEGREE_TO_RAD = Math.PI / 180;

export class MyBody extends CGFobject {
  constructor(scene) {
    super(scene);
    this.initBuffers();
    this.materials();
    this.textures();
  }

  initBuffers() {
    this.Esfera = new MySphere(this.scene, 6, 10, false);
    this.cilindro1 = new MyCylinder(this.scene, 6, 1, 0.8, 0.55);
    this.cilindro2 = new MyCylinder(this.scene, 6, 1.2, 1, 0.6);
    this.cilindro3 = new MyCylinder(this.scene, 6, 1.5, 1.3, 0.85);
    this.cilindro4 = new MyCylinder(this.scene, 6, 1.5, 1, 1.23);
    this.cilindro5 = new MyCylinder(this.scene, 6, 1.8, 0.4, 1);
    this.cilindro6 = new MyCylinder(this.scene, 6, 1.5, 0, 0.39);
    this.bico = new MyCylinder(this.scene, 6, 0.5, 0.4, 0.2);
    this.cone = new MyCone(this.scene, 6, 0.2, 0.7);
    this.tri = new MyTriangle(this.scene, [0, 0, 1, 0, 0, 1]);
  }

  materials() {
    //Bico frente (orange)
    this.bicoFrenteMaterial = new CGFappearance(this.scene);

    this.bicoFrenteMaterial.setAmbient(0.9, 0.4, 0.2, 1.0);
    this.bicoFrenteMaterial.setDiffuse(0.9, 0.4, 0.2, 1.0);
    this.bicoFrenteMaterial.setSpecular(0, 0, 0, 1.0);
    this.bicoFrenteMaterial.setShininess(10.0);

    this.olhosMaterial = new CGFappearance(this.scene);

    this.olhosMaterial.setAmbient(0, 0, 0, 1.0);
    this.olhosMaterial.setDiffuse(0, 0, 0, 1.0);
    this.olhosMaterial.setSpecular(0, 0, 0, 1.0);
    this.olhosMaterial.setShininess(10.0);

    this.bodyMaterial = new CGFappearance(this.scene);

    this.bodyMaterial.setAmbient(0, 0.5, 0, 1.0);
    this.bodyMaterial.setDiffuse(0, 0.5, 0, 1.0);
    this.bodyMaterial.setSpecular(0, 0.5, 0, 1.0);
    this.bodyMaterial.setShininess(10.0);

    this.bodyMaterial2 = new CGFappearance(this.scene);

    this.bodyMaterial2.setAmbient(0, 0.5, 0.1, 1.0);
    this.bodyMaterial2.setDiffuse(0, 0.5, 0.1, 1.0);
    this.bodyMaterial2.setSpecular(0, 0.5, 0.1, 1.0);
    this.bodyMaterial2.setShininess(10.0);

    this.bodyMaterial3 = new CGFappearance(this.scene);

    this.bodyMaterial3.setAmbient(0, 0.5, 0.2, 1.0);
    this.bodyMaterial3.setDiffuse(0, 0.5, 0.2, 1.0);
    this.bodyMaterial3.setSpecular(0, 0.5, 0.2, 1.0);
    this.bodyMaterial3.setShininess(10.0);

    this.bodyMaterial4 = new CGFappearance(this.scene);

    this.bodyMaterial4.setAmbient(0, 0.5, 0.3, 1.0);
    this.bodyMaterial4.setDiffuse(0, 0.5, 0.3, 1.0);
    this.bodyMaterial4.setSpecular(0, 0.5, 0.3, 1.0);
    this.bodyMaterial4.setShininess(10.0);

    this.bodyMaterial5 = new CGFappearance(this.scene);

    this.bodyMaterial5.setAmbient(0, 0.5, 0.4, 1.0);
    this.bodyMaterial5.setDiffuse(0, 0.5, 0.4, 1.0);
    this.bodyMaterial5.setSpecular(0, 0.5, 0.4, 1.0);
    this.bodyMaterial5.setShininess(10.0);

    this.bodyMaterial6 = new CGFappearance(this.scene);

    this.bodyMaterial6.setAmbient(0, 0.5, 0.5, 1.0);
    this.bodyMaterial6.setDiffuse(0, 0.5, 0.5, 1.0);
    this.bodyMaterial6.setSpecular(0, 0.5, 0.5, 1.0);
    this.bodyMaterial6.setShininess(10.0);

    this.bodyMaterial7 = new CGFappearance(this.scene);

    this.bodyMaterial7.setAmbient(0, 0.5, 0.6, 1.0);
    this.bodyMaterial7.setDiffuse(0, 0.5, 0.6, 1.0);
    this.bodyMaterial7.setSpecular(0, 0.5, 0.6, 1.0);
    this.bodyMaterial7.setShininess(10.0);

    this.vermelhoMaterial = new CGFappearance(this.scene);

    this.vermelhoMaterial.setAmbient(0, 0.5, 0.6, 1.0);
    this.vermelhoMaterial.setDiffuse(0, 0.5, 0.6, 1.0);
    this.vermelhoMaterial.setSpecular(0, 0.5, 0.6, 1.0);
    this.vermelhoMaterial.setShininess(10.0);
  }

  textures() {
    //Bird texture
    this.birdTexture = new CGFtexture(this.scene, "images/feathers.jpeg");

    this.bodyMaterial.setTexture(this.birdTexture);
    this.bodyMaterial2.setTexture(this.birdTexture);
    this.bodyMaterial3.setTexture(this.birdTexture);
    this.bodyMaterial4.setTexture(this.birdTexture);
    this.bodyMaterial5.setTexture(this.birdTexture);
    this.bodyMaterial6.setTexture(this.birdTexture);
    this.bodyMaterial7.setTexture(this.birdTexture);
    this.vermelhoMaterial.setTexture(this.birdTexture);
  }

  display() {
    this.bodyMaterial2.apply();

    this.scene.pushMatrix();
    this.scene.rotate(70 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, 2.3, 0);
    this.cilindro1.display();
    this.scene.popMatrix();

    this.bodyMaterial3.apply();

    this.scene.pushMatrix();
    this.scene.rotate(55 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, 1.5, 0.6);
    this.cilindro2.display();
    this.scene.popMatrix();

    this.bodyMaterial4.apply();

    this.scene.pushMatrix();
    this.scene.rotate(65 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, 0.4, 0.37);
    this.cilindro3.display();
    this.scene.popMatrix();

    this.bodyMaterial5.apply();

    this.scene.pushMatrix();
    this.scene.rotate(75 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, -0.8, 0.32);
    this.cilindro4.display();
    this.scene.popMatrix();

    this.bodyMaterial6.apply();

    this.scene.pushMatrix();
    this.scene.rotate(87 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, -2.3, 0.45);
    this.cilindro5.display();
    this.scene.popMatrix();

    this.bodyMaterial7.apply();

    this.scene.pushMatrix();
    this.scene.rotate(60 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(0, -3.55, -0.6);
    this.cilindro6.display();
    this.scene.popMatrix();

    this.vermelhoMaterial.apply();

    this.scene.pushMatrix();
    this.scene.rotate(265 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.rotate(-85 * DEGREE_TO_RAD, 0, 0, 1);
    this.scene.rotate(30 * DEGREE_TO_RAD, 1, 0, 1);
    this.scene.translate(-2.5, 0.7, 0);
    this.scene.scale(2, 0.5, 1);
    this.tri.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(265 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.rotate(-95 * DEGREE_TO_RAD, 0, 0, 1);
    this.scene.rotate(-30 * DEGREE_TO_RAD, 1, 0, 0);
    this.scene.translate(-2.5, 0.7, 0);
    this.scene.scale(2, 0.5, 1);
    this.tri.display();
    this.scene.popMatrix();

    this.bodyMaterial.apply();

    this.scene.pushMatrix();
    this.scene.translate(0, 1.1, 3);
    this.Esfera.display();
    this.scene.popMatrix();

    this.olhosMaterial.apply();

    this.scene.pushMatrix();
    this.scene.translate(0.35, 1.4, 3.2);
    this.scene.scale(0.2, 0.2, 0.2);
    this.Esfera.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.35, 1.4, 3.2);
    this.scene.scale(0.2, 0.2, 0.2);
    this.Esfera.display();
    this.scene.popMatrix();

    this.bicoFrenteMaterial.apply();

    this.scene.pushMatrix();
    this.scene.translate(0, 1.1, 3.4);
    this.scene.rotate(90 * DEGREE_TO_RAD, 1, 0, 0);
    this.bico.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 1.1, 3.9);
    this.scene.rotate(90 * DEGREE_TO_RAD, 1, 0, 0);
    this.cone.display();
    this.scene.popMatrix();
  }
}
