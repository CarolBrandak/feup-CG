import {
  CGFobject,
  CGFshader,
  CGFtexture,
  CGFappearance,
} from "../../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";

export class MyTerrain extends CGFobject {
  constructor(
    scene,
    parts,
    heightscale,
    texturePath,
    heightmapPath,
    altimetryPath
  ) {
    super(scene);
    this.heightmapPath = heightmapPath;
    this.texturePath = texturePath;
    this.altimetryPath = altimetryPath;

    this.shader = new CGFshader(
      this.scene.gl,
      "shaders/terrain.vert",
      "shaders/terrain.frag"
    );
    this.shader.setUniformsValues({ normScale: heightscale });
    this.shader.setUniformsValues({ uSampler2: 1 });
    this.shader.setUniformsValues({ uSampler3: 2 });

    this.texture = new CGFtexture(this.scene, this.texturePath);
    this.heightmap = new CGFtexture(this.scene, this.heightmapPath);
    this.altimetry = new CGFtexture(this.scene, this.altimetryPath);

    this.terrain = new MyPlane(this.scene, parts);

    this.material = new CGFappearance(this.scene);
    this.material.setShininess(1);
    this.material.setEmission(1, 1, 1, 1);
    this.material.setAmbient(1, 1, 1, 1);
    this.material.setDiffuse(1, 1, 1, 1);
    this.material.setSpecular(1, 1, 1, 1);
    this.material.setTexture(this.texture);
  }

  display() {
    this.scene.setActiveShader(this.shader);

    this.material.apply();
    this.heightmap.bind(1);
    this.altimetry.bind(2);
    this.terrain.display();

    this.scene.setActiveShader(this.scene.defaultShader);
  }
}
