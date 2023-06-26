import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
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
			-0.5, 0.5, -0.5,	// 0 - top left back (back face)
            0.5, 0.5, -0.5,		// 1 - top right back (back face)
            0.5, -0.5, -0.5,	// 2 - bottom right back (back face)
            -0.5, -0.5, -0.5,	// 3 - bottom left back (back face)
            -0.5, 0.5, 0.5,	    // 4 - top left front (front face)
            0.5, 0.5, 0.5,		// 5 - top right front (front face)
            0.5, -0.5, 0.5,	    // 6 - bottom right front (front face)
            -0.5, -0.5, 0.5,	// 7 - bottom left front (front face)
            -0.5, 0.5, 0.5,     // 8 - top left front (left face)
            -0.5, 0.5, -0.5,    // 9 - top left back (left face)
            -0.5, -0.5, -0.5,	// 10 - bottom left back (left face)
            -0.5, -0.5, 0.5,	// 11 - bottom left front (left face)
            0.5, 0.5, 0.5,      // 12 - top right front (right face)
            0.5, 0.5, -0.5,     // 13 - top right back (right face)
            0.5, -0.5, -0.5,	// 14 - bottom right back (right face)
            0.5, -0.5, 0.5,	    // 15 - bottom right front (right face)
            -0.5, 0.5, -0.5,	// 16 - top left back (top face)
            0.5, 0.5, -0.5,		// 17 - top right back (top face)
            0.5, 0.5, 0.5,		// 18 - top right front (top face)
            -0.5, 0.5, 0.5,	    // 19 - top left front (top face)
            -0.5, -0.5, -0.5,	// 20 - bottom left back (bottom face)
            0.5, -0.5, -0.5,	// 21 - top right back (bottom face)
            0.5, -0.5, 0.5,		// 22 - top right front (bottom face)
            -0.5, -0.5, 0.5,	// 23 - top left front (bottom face)
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            1, 0, 3,    // back face
            1, 2, 3,    // back face
            3, 0, 1,    // back face
            3, 2, 1,    // back face
            5, 4, 7,    // front face
            5, 6, 7,    // front face
            7, 4, 5,    // front face
            7, 6, 5,    // front face
            9, 8, 11,   // left face
            9, 10, 11,  // left face
            11, 8, 9,   // left face
            11, 10, 9,  // left face
            13, 12, 15, // right face
            13, 14, 15, // right face
            15, 12, 13, // right face
            15, 14, 13, // right face
            17, 16, 19, // top face
            17, 18, 19, // top face
            19, 16, 17, // top face
            19, 18, 17, // top face
            21, 20, 23, // bottom face
            21, 22, 23, // bottom face
            23, 20, 21, // bottom face
            23, 22, 21, // bottom face
		];

        this.normals = [
            0, 0, -1,	// 0 - top left back (back face)
            0, 0, -1,	// 1 - top right back (back face)
            0, 0, -1,	// 2 - bottom right back (back face)
            0, 0, -1,	// 3 - bottom left back (back face)
            0, 0, 1,	// 4 - top left front (front face)
            0, 0, 1,	// 5 - top right front (front face)
            0, 0, 1,	// 6 - bottom right front (front face)
            0, 0, 1,	// 7 - bottom left front (front face)
            -1, 0, 0,	// 8 - top left front (left face)
            -1, 0, 0,	// 9 - top left back (left face)
            -1, 0, 0,	// 10 - bottom left back (left face)
            -1, 0, 0,	// 11 - bottom left front (left face)
            1, 0, 0,	// 12 - top right front (right face)
            1, 0, 0,	// 13 - top right back (right face)
            1, 0, 0,	// 14 - bottom right back (right face)
            1, 0, 0,	// 15 - bottom right front (right face)
            0, 1, 0,	// 16 - top left back (top face)
            0, 1, 0,	// 17 - top right back (top face)
            0, 1, 0,	// 18 - top right front (top face)
            0, 1, 0,	// 19 - top left front (top face)
            0, -1, 0,	// 20 - bottom left back (bottom face)
            0, -1, 0,	// 21 - top right back (bottom face)
            0, -1, 0,	// 22 - top right front (bottom face)
            0, -1, 0,	// 23 - top left front (bottom face)
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    display() {
        //this.scene.pushMatrix();
        //this.scene.scale(1.42, 1.42, 1.42);
        //this.scene.translate(3.45, -0.3 , -0.51);
        super.display();
        //this.scene.popMatrix();
    }
}

