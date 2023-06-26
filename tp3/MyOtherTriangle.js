import {CGFobject} from '../lib/CGF.js';
/**
 * MyOtherTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyOtherTriangle extends CGFobject {
	constructor(scene, size) {
		super(scene);
        this.size = size;
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-this.size, 0, 0,	    //0
			this.size, 0, 0,	    //1
            0, this.size, 0,	   	//2
			-this.size, 0, 0,	    //3
			this.size, 0, 0,	    //4
            0, this.size, 0,	   	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            1, 2, 0,
			4, 3, 5
		];

		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1,	//2
			0, 0, -1,	//3
			0, 0, -1,	//4
			0, 0, -1	//5
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

