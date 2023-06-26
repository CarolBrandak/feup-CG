import { CGFobject, CGFappearance, CGFtexture} from '../lib/CGF.js';

import { MyQuad } from "./MyQuad.js";

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, top_text, bottom_text, front_text, back_text, left_text, right_text) {
		super(scene);
        this.front_text = front_text;
        this.back_text = back_text;
        this.left_text = left_text;
        this.right_text = right_text;
        this.top_text = top_text;
        this.bottom_text = bottom_text;
		this.initBuffers();
        this.initMaterials();
	}
	
	initBuffers() {
        this.front = new MyQuad(this.scene);
        this.back = new MyQuad(this.scene);
        this.left = new MyQuad(this.scene);
        this.right = new MyQuad(this.scene);
        this.top = new MyQuad(this.scene);
        this.bottom = new MyQuad(this.scene);
	}

    initMaterials() {
        //textura bottom
        this.Bottom_texture = new CGFappearance(this.scene);

        this.Bottom_texture.setAmbient(1, 1, 1, 1.0);
        this.Bottom_texture.setDiffuse(1, 1, 1, 1.0);
        this.Bottom_texture.setSpecular(1, 1, 1, 1.0);
        this.Bottom_texture.setShininess(10.0);

        this.Bottom_texture.loadTexture('images/mineBottom.png');
        this.Bottom_texture.setTextureWrap('REPEAT', 'REPEAT');

        //textura top
        this.Top_texture = new CGFappearance(this.scene);

        this.Top_texture.setAmbient(1, 1, 1, 1.0);
        this.Top_texture.setDiffuse(1, 1, 1, 1.0);
        this.Top_texture.setSpecular(1, 1, 1, 1.0);
        this.Top_texture.setShininess(10.0);

        this.Top_texture.loadTexture('images/mineTop.png');
        this.Top_texture.setTextureWrap('REPEAT', 'REPEAT');

        //textura side
        this.Side_texture = new CGFappearance(this.scene);

        this.Side_texture.setAmbient(1, 1, 1, 1.0);
        this.Side_texture.setDiffuse(1, 1, 1, 1.0);
        this.Side_texture.setSpecular(1, 1, 1, 1.0);
        this.Side_texture.setShininess(10.0);

        this.Side_texture.loadTexture('images/mineSide.png');
        this.Side_texture.setTextureWrap('REPEAT', 'REPEAT');
    }


    display() {
        //Frente
        this.Side_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.front.display();
        this.scene.popMatrix();

        //Tras
        this.Side_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.display();
        this.scene.popMatrix();

        //Esquerda
        this.Side_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.left.display();
        this.scene.popMatrix();

        //Direita
        this.Side_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.right.display();
        this.scene.popMatrix();

        //Cima
        this.Top_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        //Baixo
        this.Bottom_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bottom.display();
        this.scene.popMatrix();
    }
}

