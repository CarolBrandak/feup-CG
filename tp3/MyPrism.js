import {CGFobject} from '../lib/CGF.js';

var DEGREE_TO_RAD = Math.PI / 180;

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slice, stacks) {
		super(scene);
        this.slice = slice;
        this.stacks = stacks;
		this.initBuffers();
	}
	
	initBuffers() {
        var step = 1 / this.stacks;
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        /* VERTICES */
        for (let k = 0; k < 2; k++) {
            for (let i = 0; i <= this.stacks; i++) {
                for (let j = 0; j < this.slice; j++) {
                    this.vertices.push(Math.cos(j * 360 * DEGREE_TO_RAD / this.slice), Math.sin(j * 360 * DEGREE_TO_RAD / this.slice), i*step);
                }
            }
        }

        /* INDICES */
        for (var i = 0; i < this.stacks; i++) {
            for (var j = 0; j < this.slice; j++) {
                if (j == this.slice-1) {
                    this.indices.push((i*this.slice)+j, (i*this.slice), (i*this.slice)+this.slice+j);
                    this.indices.push((i*this.slice)+this.slice+j, (i*this.slice), (i*this.slice)+j);
                    this.indices.push((i*this.slice)+this.slice+j, (i*this.slice), (i*this.slice)+this.slice);
                    this.indices.push((i*this.slice)+this.slice, (i*this.slice), (i*this.slice)+this.slice+j);
                }
                else {
                    this.indices.push((i*this.slice)+j, (i*this.slice)+1+j, (i*this.slice)+this.slice+j);
                    this.indices.push((i*this.slice)+this.slice+j, (i*this.slice)+1+j, (i*this.slice)+j);
                    this.indices.push((i*this.slice)+this.slice+j, (i*this.slice)+1+j, (i*this.slice)+this.slice+1+j);
                    this.indices.push((i*this.slice)+this.slice+1+j, (i*this.slice)+1+j, (i*this.slice)+this.slice+j);
                }
            }
        }

        /* NORMALS */
        for (var i = 0; i < this.slice*(this.stacks+1); i ++) {
            this.normals.push(Math.cos(((i)+0.5)*360 * DEGREE_TO_RAD / this.slice), Math.sin(((i)+0.5)*360 * DEGREE_TO_RAD / this.slice), 0);
        }
        for (var i = 0; i < this.slice*(this.stacks+1); i ++) {
            this.normals.push(Math.cos(((i-1)+0.5)*360 * DEGREE_TO_RAD / this.slice), Math.sin(((i-1)+0.5)*360 * DEGREE_TO_RAD / this.slice), 0);
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

