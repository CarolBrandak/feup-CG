import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Checkbox for tangram visibility
        this.gui.add(this.scene, 'displayTangram').name('Tangram');

        //Checkbox for cube visibility
        this.gui.add(this.scene, 'displayCube').name('Cube');

        //Checkbox for cube quad visibility
        this.gui.add(this.scene, 'displayCubeQuad').name('Cude Quad');

        return true;
    }
}