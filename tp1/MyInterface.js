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

        //Checkbox for diamond visibility
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox for triangle visibility
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');

        //Checkbox for parallelogram visibility
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');

        //Checkbox for small triangle visibility
        this.gui.add(this.scene, 'displaySmallTriangle').name('Small Triangle');

        //Checkbox for big triangle visibility
        this.gui.add(this.scene, 'displayBigTriangle').name('Big Triangle');

        return true;
    }
}