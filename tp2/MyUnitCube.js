import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	// 0
			-0.5, -0.5, 0.5,	// 1
			-0.5, 0.5,  -0.5,	// 2
			-0.5, 0.5,  0.5,	// 3
            0.5, -0.5, -0.5,	// 4
			0.5, -0.5, 0.5,	    // 5
			0.5, 0.5,  -0.5,	// 6
			0.5, 0.5,  0.5,	    // 7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 3, // parallel YZ negative x
			1, 0, 3, // parallel YZ negative x
            4, 6, 7, // parallel YZ positive x
            5, 4, 7, // parallel YZ positive x
            3, 2, 0, // parallel YZ negative x (flipped)
            3, 0, 1, // parallel YZ negative x (flipped)
            7, 6, 4, // parallel YZ positive x (flipped)
            7, 4, 5, // parallel YZ positive x (flipped)
            7, 6, 2, // parallel XY positive z
            7, 2, 3, // parallel XY positive z
            5, 4, 0, // parallel XY negative z
            5, 0, 1, // parallel XY negative z
            3, 2, 6, // parallel XY positive z (flipped)
            3, 6, 7, // parallel XY positive z (flipped)
            1, 0, 4, // parallel XY negative z (flipped)
            1, 4, 5, // parallel XY negative z (flipped)
            2, 6, 4, // parallel XZ positive y
            2, 4, 0, // parallel XZ positive y
            3, 7, 5, // parallel XZ negative y
            3, 5, 1, // parallel XZ negative y
            0, 4, 6, // parallel XZ positive y (flipped)
            0, 6, 2, // parallel XZ positive y (flipped)
            1, 5, 7, // parallel XZ negative y (flipped)
            1, 7, 3, // parallel XZ negative y (flipped)
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1.42, 1.42, 1.42);
        this.scene.translate(3.45, -0.3 , -0.51);
        super.display();
        this.scene.popMatrix();
    }
}

