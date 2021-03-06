/**
* MyInterface class, creating a GUI interface.
*/
class MyInterface extends CGFinterface {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Initializes the interface.
     * @param {CGFapplication} application
     */
    init(application) {
        super.init(application);
        // init GUI. For more information on the methods, check:
        //  http://workshop.chromeexperiments.com/examples/gui

        this.gui = new dat.GUI();

        // Adds the option to disable the axis
        this.gui.add(this.scene, 'displayAxis')
                .name('Display Axis');

        this.initKeys();

        return true;
    }

    /**
     *  Loads the entire interface: cameras and lights
     */
    loadInterface(graphLights) {
        this.loadLightsOption(graphLights);
        this.loadCamerasOption();
    }

    /**
     * Loads all of the camera options to interface
     */
    loadCamerasOption() {
        const cameras = this.scene.cameras;

        this.gui.add(this.scene, 'current_camera_id', this.scene.cameraNames)
                     .name('Camera')
                     .onChange(this.scene.updateCamera.bind(this.scene));   // calls updateCamera() of XMLscene
    }                                                                       // when a new camera is chosen

    /**
     * Loads all of the light options to interface
     */
    loadLightsOption(graphLights) {
        var folder = this.gui.addFolder('Lights');
        var names = this.scene.graph.lightNames;
        
        // Lights index
        let i = 0;

        // Reads the lights from the scene graph
        for(let key in graphLights){
            if(i >= 8)
                break;
            
            if(graphLights.hasOwnProperty(key)){
                folder.add(graphLights[key], '0')
                .name(names[i]);
      
                i++;
            }
        }
    }

    /**
     * Initializes the keys
     */
    initKeys() {
        this.scene.gui=this;
        this.processKeyboard=function(){};
        this.activeKeys={};
    }

    /**
     * Processes a key being pressed
     */
    processKeyDown(event) {
        this.activeKeys[event.code]=true;
    };

    /**
     * Processes a key being released
     */
    processKeyUp(event) {
        this.activeKeys[event.code]=false;
    };

    /**
     * Checks if a key is currently pressed
     */
    isKeyPressed(keyCode) {
        return this.activeKeys[keyCode] || false;
    }
}