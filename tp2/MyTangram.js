import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyOtherTriangle } from "./MyOtherTriangle.js";

var DEGREE_TO_RAD = Math.PI / 180;

export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle_pink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle_red = new MyOtherTriangle(this.scene, 1);
        this.triangle_purple = new MyOtherTriangle(this.scene, 1);
        this.triangle_blue = new MyOtherTriangle(this.scene, 2);
        this.triangle_orange = new MyOtherTriangle(this.scene, 2);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(4.9, -0.4, 0);
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.2, -2.5, 0);
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_blue.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -1.4, 0);
        this.scene.rotate(-45 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_orange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.2, 0.3, 0);
        this.triangle_red.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(4.8, -2.9, 0);
        this.scene.rotate(90 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_purple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -2.8, 0);
        this.scene.scale(-1, 1, 1)
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(-135 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_pink.display();
        this.scene.popMatrix();
    }
}