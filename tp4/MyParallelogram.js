import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
			1, 1, 0,	//2
            2, 0, 0,    //3
            2, 1, 0,    //4
            3, 1, 0,    //5
			0, 0, 0,	//6
			1, 0, 0,	//7
			1, 1, 0,	//8
            2, 0, 0,    //9
            2, 1, 0,    //10
            3, 1, 0     //11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2, //
            1, 3, 4, //     First
            1, 4, 2, //     Side
            3, 5, 4, //

            2, 1, 0, //
            4, 3, 1, //     Second
            2, 4, 1, //     Side
            4, 5, 3, //
		];

		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1,	//2
			0, 0, 1,	//3
			0, 0, 1,	//4
			0, 0, 1,	//5
			0, 0, -1,	//6
			0, 0, -1,	//7
			0, 0, -1,	//8
			0, 0, -1,	//9
			0, 0, -1,	//10
			0, 0, -1	//11
		];

		this.texCoords = [
			0.25, 0.75,
			0.50, 0.75,
			0.50, 1,
			0.75, 0.75,
			0.75, 1, 
			1, 1,

			0.25, 0.75,
			0.50, 0.75,
			0.50, 1,
			0.75, 0.75,
			0.75, 1, 
			1, 1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

