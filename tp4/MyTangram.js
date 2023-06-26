import { CGFobject, CGFappearance, CGFtexture } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyOtherTriangle } from "./MyOtherTriangle.js";

var DEGREE_TO_RAD = Math.PI / 180;

export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterials();
    }

    initBuffers() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle_pink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle_red = new MyOtherTriangle(this.scene, 1, [
            0.25, 0.75, 
            0.5, 0.5,
            0.75, 0.75,
            
            0.25, 0.75, 
            0.5, 0.5,
            0.75, 0.75
        ]);
        this.triangle_purple = new MyOtherTriangle(this.scene, 1, [
            0.00, 0.00, 
            0.25, 0.25,
            0.00, 0.50,
            
            0.00, 0.00, 
            0.25, 0.25,
            0.00, 0.50
        ]);
        this.triangle_blue = new MyOtherTriangle(this.scene, 2, [
            0.00, 0.00, 
            1, 0.00, 
            0.5, 0.5,

            0.00, 0.00, 
            1, 0.00, 
            0.5, 0.5
        ]);
        this.triangle_orange = new MyOtherTriangle(this.scene, 2, [
                1, 0.00, 
                1, 1,
                0.5, 0.5,
                
                1, 0.00, 
                1, 1,
                0.5, 0.5
            ]);

    }

    initMaterials() {
        this.Texture_material = new CGFappearance(this.scene);
        this.texture = new CGFtexture(this.scene, 'images/tangram.png');

        this.Texture_material.setAmbient(1, 1, 1, 1.0);
        this.Texture_material.setDiffuse(1, 1, 1, 1.0);
        this.Texture_material.setSpecular(1, 1, 1, 1.0);
        this.Texture_material.setShininess(10.0);

        this.Texture_material.setTexture(this.texture);
        this.Texture_material.setTextureWrap('REPEAT', 'REPEAT');
        /*
        // Cor de rosa
        this.rosa = new CGFappearance(this.scene);
        this.rosa.setAmbient(...this.scene.hexToRgbA('#ff9bcf'));
        this.rosa.setDiffuse(...this.scene.hexToRgbA('#ff9bcf'));
        this.rosa.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.rosa.setShininess(10.0);

        // vermelho
        this.vermelho = new CGFappearance(this.scene);
        this.vermelho.setAmbient(...this.scene.hexToRgbA('#ff1b1b'));
        this.vermelho.setDiffuse(...this.scene.hexToRgbA('#ff1b1b'));
        this.vermelho.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.vermelho.setShininess(10.0);

        // azul
        this.azul = new CGFappearance(this.scene);
        this.azul.setAmbient(...this.scene.hexToRgbA('#009bff'));
        this.azul.setDiffuse(...this.scene.hexToRgbA('#009bff'));
        this.azul.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.azul.setShininess(10.0);

        // laranja
        this.laranja = new CGFappearance(this.scene);
        this.laranja.setAmbient(...this.scene.hexToRgbA('#ff9b00'));
        this.laranja.setDiffuse(...this.scene.hexToRgbA('#ff9b00'));
        this.laranja.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.laranja.setShininess(10.0);

        // amarelo
        this.amarelo = new CGFappearance(this.scene);
        this.amarelo.setAmbient(...this.scene.hexToRgbA('#ffff00'));
        this.amarelo.setDiffuse(...this.scene.hexToRgbA('#ffff00'));
        this.amarelo.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.amarelo.setShininess(10.0);

        // verde
        this.verde = new CGFappearance(this.scene);
        this.verde.setAmbient(...this.scene.hexToRgbA('#00ff00'));
        this.verde.setDiffuse(...this.scene.hexToRgbA('#00ff00'));
        this.verde.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.verde.setShininess(10.0);

        // roxo
        this.roxo = new CGFappearance(this.scene);
        this.roxo.setAmbient(...this.scene.hexToRgbA('#9650be'));
        this.roxo.setDiffuse(...this.scene.hexToRgbA('#9650be'));
        this.roxo.setSpecular(0.95, 0.95, 0.95, 1.0);
        this.roxo.setShininess(10.0);
        */
    }

    enableNormalViz() {
        this.diamond.enableNormalViz()
        this.triangle_red.enableNormalViz()
        this.triangle_purple.enableNormalViz()
        this.parallelogram.enableNormalViz()
        this.triangle_blue.enableNormalViz()
        this.triangle_orange.enableNormalViz()
        this.triangle_pink.enableNormalViz()
    }
    
    disableNormalViz() {
        this.diamond.disableNormalViz()
        this.triangle_red.disableNormalViz()
        this.triangle_purple.disableNormalViz()
        this.parallelogram.disableNormalViz()
        this.triangle_blue.disableNormalViz()
        this.triangle_orange.disableNormalViz()
        this.triangle_pink.disableNormalViz()
    }

    display() {
        this.Texture_material.apply();
        this.scene.pushMatrix();
        //this.verde.apply();
        this.scene.translate(4.9, -0.4, 0);
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.azul.apply();
        this.scene.translate(4.2, -2.5, 0);
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_blue.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.laranja.apply();        
        this.scene.translate(1.4, -1.4, 0);
        this.scene.rotate(-45 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_orange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.vermelho.apply();        
        this.scene.translate(5.2, 0.3, 0);
        this.triangle_red.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.roxo.apply();        
        this.scene.translate(4.8, -2.9, 0);
        this.scene.rotate(90 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_purple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.amarelo.apply();
        this.scene.translate(1.4, -2.8, 0);
        this.scene.scale(-1, 1, 1)
        this.scene.rotate(45 * DEGREE_TO_RAD, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.rosa.apply();        
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(-135 * DEGREE_TO_RAD, 0, 0, 1);
        this.triangle_pink.display();
        this.scene.popMatrix();
    }
}