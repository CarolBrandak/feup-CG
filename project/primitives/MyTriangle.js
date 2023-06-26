import { CGFobject } from "../../lib/CGF.js";

/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
  constructor(scene, coords) {
    super(scene);
    this.coords = coords;

    this.initBuffers();
  }
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    for (var i = 0; i < 2; i++)
      this.vertices.push(
        -1,
        -1,
        0, //0
        -1,
        1,
        0, //1
        1,
        -1,
        0 //2
      );

    //Counter-clockwise reference of vertices

    this.indices.push(
      0 + 0 * 3,
      1 + 0 * 3,
      2 + 0 * 3,
      1 + 1 * 3,
      0 + 1 * 3,
      2 + 1 * 3
    );

    //Normals
    for (var i = 0; i < 3; i++) this.normals.push(0, 0, -1);

    for (var i = 0; i < 3; i++) this.normals.push(0, 0, 1);

    for (var i = 0; i < 2; i++) this.texCoords.push(...this.coords);

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
  updateBuffers() {}
}
