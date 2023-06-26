import { CGFobject } from "../../lib/CGF.js";
import { MyRightWing } from "./MyRightWing.js";
import { MyLeftWing } from "./MyLeftWing.js";
import { MyBody } from "./MyBody.js";
import { MyBirdEgg } from "./MyBirdEgg.js";
import { MyNest } from "../objects/MyNest.js";

const DEGREE_TO_RAD = Math.PI / 180;
const MIN_DISTANCE_FROM_NEST = 30;

const EGG_COORDS = [
  [10, -21.5, 10],
  [-30, -21.5, -30],
  [57, -21.5, -40],
  [-90, -21.5, 70],
];

const NEST_EGG_TRANSLATE_COORDS = [
  [-2.5, 0, -2.5],
  [2.5, 0, -2.5],
  [-2.5, 0, 2.5],
  [2.5, 0, 2.5],
];

export class MyBird extends CGFobject {
  constructor(scene, angle, speed, position) {
    super(scene);

    this.initialHeight = position[1];
    this.standardHeight = 3; // "Coloque a Ave na cena a cerca de 3 unidades acima do chão"
    this.scaleFactor = 1;
    //normal moves varaiables
    this.variable = 0;
    this.angle = angle; // in degrees
    this.position = [];
    this.position.x = position[0];
    this.position.y = position[1];
    this.position.z = position[2];
    this.speed = speed;
    this.nestCoords = [];
    this.nestCoords.x = 15;
    this.nestCoords.y = -22;
    this.nestCoords.z = 30;
    this.egg_list = [];

    this.catchMode = false;
    this.startTime = 0;
    this.currentEgg = null;
    this.time = 0;

    this.droppedEgg = null;

    this.wingAngle = 0;
    this.maxAngle = 30;
    this.maxX = 50;
    this.maxY = 50;
    this.maxZ = 50;

    this.initBuffers();
    this.initEggs();
  }

  initBuffers() {
    this.rightWing = new MyRightWing(this.scene);
    this.leftWing = new MyLeftWing(this.scene);
    this.body = new MyBody(this.scene);
    this.nest = new MyNest(this.scene);
  }

  initEggs() {
    this.egg_list[0] = new MyBirdEgg(
      this.scene,
      EGG_COORDS[0][0],
      EGG_COORDS[0][1],
      EGG_COORDS[0][2]
    ); // x, y, z
    this.egg_list[1] = new MyBirdEgg(
      this.scene,
      EGG_COORDS[1][0],
      EGG_COORDS[1][1],
      EGG_COORDS[1][2]
    ); // x, y, z
    this.egg_list[2] = new MyBirdEgg(
      this.scene,
      EGG_COORDS[2][0],
      EGG_COORDS[2][1],
      EGG_COORDS[2][2]
    ); // x, y, z
    this.egg_list[3] = new MyBirdEgg(
      this.scene,
      EGG_COORDS[3][0],
      EGG_COORDS[3][1],
      EGG_COORDS[3][2]
    ); // x, y, z
  }

  update() {
    this.display();
  }

  display() {
    this.scene.pushMatrix();
    this.scene.translate(15, -22, 30);
    this.scene.scale(10, 10, 10);
    this.nest.display();
    this.scene.popMatrix();

    for (let i = 0; i < this.nest.eggs_list.length; i++) {
      this.scene.pushMatrix();
      this.scene.translate(
        15 + NEST_EGG_TRANSLATE_COORDS[i][0],
        -20 + NEST_EGG_TRANSLATE_COORDS[i][1],
        30 + NEST_EGG_TRANSLATE_COORDS[i][2]
      );
      this.nest.eggs_list[i].display();
      this.scene.popMatrix();
    }

    for (var i = 0; i < this.egg_list.length; i++) {
      this.egg_list[i].display();
    }

    if (this.currentEgg != null) this.currentEgg.display();
    if (this.droppedEgg != null) this.droppedEgg.display();

    this.scene.pushMatrix();

    this.move();

    this.scene.pushMatrix();

    this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

    this.scene.pushMatrix();
    this.scene.translate(0, 1, 1.5);
    this.moveWings(1);
    this.rightWing.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 1, 1.5);
    this.moveWings(-1);
    this.leftWing.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.body.display();
    this.scene.popMatrix();
  }

  move() {
    this.scene.translate(this.position.x, this.position.y, this.position.z);
    this.scene.rotate(this.angle * DEGREE_TO_RAD, 0, 1, 0);
  }

  moveWings(wing) {
    this.scene.rotate(
      wing * this.maxAngle * Math.sin(this.wingAngle) * DEGREE_TO_RAD,
      0,
      0,
      1
    );
  }

  updateMove(speedFactor, scaleFactor) {
    this.scaleFactor = scaleFactor;

    if (this.position.z > this.maxZ) {
      this.position.z = 0;
    }
    //horizontal move
    if (this.speed > 0) {
      this.position.x =
        this.position.x + Math.sin(this.angle * DEGREE_TO_RAD) * this.speed;
      this.position.z =
        this.position.z + Math.cos(this.angle * DEGREE_TO_RAD) * this.speed;
    } else if (this.speed < 0) {
      this.position.x =
        this.position.x + Math.sin(this.angle * DEGREE_TO_RAD) * this.speed;
      this.position.z =
        this.position.z + Math.cos(this.angle * DEGREE_TO_RAD) * this.speed;
    }

    if (this.position.x > 200 || this.position.x < -200) {
      this.position.x = 0;
    }

    if (this.position.y > 200 || this.position.y < -200) {
      this.position.y = 0;
    }
    if (this.position.z > 200 || this.position.z < -200) {
      this.position.z = 0;
    }

    if (this.currentEgg != null) {
      this.currentEgg.setPosition({
        x: this.position.x,
        y: this.position.y - 2,
        z: this.position.z,
      });
    }

    if (!this.catchMode) {
      this.speed = speedFactor;

      this.variable += (Math.PI / 20) * 2; // Math.PI / 20 because 20 frames per second, * 2 because it goes up and down
      // vertical movement
      this.position.y =
        this.initialHeight +
        this.standardHeight * Math.sin(this.variable * this.speed); // Math.sin so it's a sinusoidal movement (loop), Math.sin(this.variable * this.speed) if you want it to depend on bird speed
      // wings rotation
      this.wingAngle = this.variable * this.speed; // * this.speed to make it depend on bird speed (speed = oscilations per second)

      if (this.scene.gui.isKeyPressed("KeyR")) {
        this.angle = 0;
        this.speed = 0;
        this.scaleFactor = 1;
        this.position.x = 0;
        this.position.y = 0;
        this.position.z = 0;
        this.variable = 0;
        this.wingAngle = 0;
      }

      if (this.scene.gui.isKeyPressed("KeyA")) {
        this.turn(speedFactor);
      }
      if (this.scene.gui.isKeyPressed("KeyD")) {
        this.turn(-speedFactor);
      }
      if (this.scene.gui.isKeyPressed("KeyW")) {
        this.accelerate(speedFactor);
      }
      if (this.scene.gui.isKeyPressed("KeyS")) {
        this.accelerate(-speedFactor);
      }
    }
  }

  tryCatchEgg(t) {
    if (this.scene.gui.isKeyPressed("KeyP")) {
      this.catchMode = true;
    }
    this.pickEgg(t);
  }

  tryDropEgg(t) {
    if (this.scene.gui.isKeyPressed("KeyO")) {
      if (
        this.position.x - this.nestCoords.x < MIN_DISTANCE_FROM_NEST &&
        this.position.x - this.nestCoords.x > -MIN_DISTANCE_FROM_NEST &&
        this.position.z - this.nestCoords.z < MIN_DISTANCE_FROM_NEST &&
        this.position.z - this.nestCoords.z > -MIN_DISTANCE_FROM_NEST
      ) {
        this.droppedEgg = this.currentEgg;
        this.currentEgg = null;
        this.catchMode = false;
      }
    }
    this.dropEgg(t);
  }

  turn(v) {
    this.angle += 3 * v;
  }

  accelerate(v) {
    this.speed += v;
  }

  pickEgg(t) {
    if (this.catchMode) {
      var returnedEgg = null;
      if (this.startTime == 0) {
        // just pressed key P
        this.startTime = t;
        if (this.currentEgg == null) {
          if (this.egg_list.length > 0) {
            var position = this.egg_list[0].getPosition();
          } else {
            var position = { x: 0, y: 0, z: 0 };
          }
        }
        var distance = this.position.y + 22; // -22 because the egg is at y = -22
        this.v = distance / 1000; // 1s to reach the egg
        this.startCoordY = this.position.y;
      }
      this.time = t - this.startTime;
      if (this.time < 1000) {
        //down movement
        this.position.y = this.startCoordY - this.v * this.time;
      } else if (this.time < 2000) {
        //up movement
        if (this.currentEgg == null) {
          if (this.egg_list.length > 0) {
            for (var i = 0; i < this.egg_list.length; i++) {
              var position = this.egg_list[i].getPosition();
              if (
                this.position.x < position.x + 5 &&
                this.position.x > position.x - 5 &&
                this.position.y < position.y + 5 &&
                this.position.y > position.y - 5 &&
                this.position.z < position.z + 5 &&
                this.position.z > position.z - 5
              ) {
                this.currentEgg = this.egg_list[i];
                this.currentEgg.setPosition({
                  x: this.position.x,
                  y: this.position.y - 2,
                  z: this.position.z,
                });
                this.egg_list.splice(i, 1);
                break;
              }
            }
          }
        }
        this.position.y = this.startCoordY - this.v * (2000 - this.time);
      } else {
        this.catchMode = false;
        this.startTime = 0;
        this.position.y = this.startCoordY;
      }
      return returnedEgg;
    }
  }

  dropEgg(t) {
    if (this.droppedEgg != null) {
      if (this.startTime == 0) {
        // just pressed key O
        this.startTime = t;
        this.startCoordY = this.droppedEgg.getPosition().y;
        var distance = this.position.y + 22; // -22 because the egg is at y = -22
        this.v = distance / 1000; // 1s to drop the egg
        this.startCoordY = this.position.y;
      }
      this.time = t - this.startTime;
      if (this.time < 1000) {
        //dropping movement
        let positionX =
          this.droppedEgg.getPosition().x +
          ((Math.abs(this.nestCoords.x - this.droppedEgg.getPosition().x) *
            this.time) /
            1000) *
            Math.sin(this.angle * DEGREE_TO_RAD);
        let positionY = this.startCoordY - this.v * this.time;
        let positionZ =
          this.droppedEgg.getPosition().z +
          ((Math.abs(this.nestCoords.z - this.droppedEgg.getPosition().z) *
            this.time) /
            1000) *
            Math.cos(this.angle * DEGREE_TO_RAD);
        this.droppedEgg.setPosition({
          x: positionX,
          y: positionY,
          z: positionZ,
        });
      } else {
        this.droppedEgg.setPosition({
          x: 0,
          y: 0,
          z: 0,
        });
        this.nest.addEgg(this.droppedEgg);
        this.droppedEgg = null;
        this.startTime = 0;
      }
    }
  }
}
