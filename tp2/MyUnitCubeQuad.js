import {CGFobject} from '../lib/CGF.js';

import { MyQuad } from "./MyQuad.js";

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.front = new MyQuad(this.scene);
        this.back = new MyQuad(this.scene);
        this.left = new MyQuad(this.scene);
        this.right = new MyQuad(this.scene);
        this.top = new MyQuad(this.scene);
        this.bottom = new MyQuad(this.scene);
	}

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.45, -0.3 , 0);
        // this.scene.translate(0, 0, 0.5);
        this.front.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.45, -0.3 , -1.02);
        // this.scene.translate(0, 0, -0.5);
        this.back.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(2.95, -0.3 , -0.51);
        // this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.left.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.96, -0.3 , -0.51);
        // this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.right.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.45, 0.21 , -0.51);
        // this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.45, -0.81 , -0.51);
        // this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bottom.display();
        this.scene.popMatrix();
    }
}

