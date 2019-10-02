/**
 * MyTorus
 * @constructor
 * @param scene - Reference to MyScene object
 * @param radius - Radius of the Sphere
 * @param slices - Slices of the Sphere
 * @param stacks - Stacks of the Sphere
 */
class MyTorus extends CGFobject {
    constructor(scene, inner_radius, outer_radius, slices, loops) {
        super(scene);
        this.inner = inner_radius;
        this.outer = outer_radius;
        this.slices = slices;
        this.loops = loops;
        
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let phi = 2*Math.PI/this.slices;    //0 to 360 degrees
        let theta = 2*Math.PI/this.loops;    //0 to 360 degrees  
        let loop_center = [0, 0, 0];

/*        
        for(let loop = 0; loop <= this.loops; loop++) {
            loop_center = [this.outer*Math.cos(theta*loop), this.outer*Math.sin(theta*loop)];
            for(let slice = 0; slice <= this.slices; slice++) {
                  this.vertices.push(loop_center[0] + this.inner*Math.cos(phi*slice)*Math.cos(loop*theta), 
                                     loop_center[1] + this.inner*Math.cos(phi*slice)*Math.sin(loop*theta), 
                                     this.inner*Math.sin(phi*slice));
                  this.normals.push(this.inner*Math.cos(phi*slice)*Math.cos(loop*theta), 
                                    this.inner*Math.cos(phi*slice)*Math.sin(loop*theta), 
                                    this.inner*Math.sin(phi*slice));
            }
        }
*/

        for(let loop = 0; loop <= this.loops; loop++) {
            loop_center = [this.outer + this.inner*Math.cos(theta*loop), 
                           this.outer + this.inner*Math.cos(theta*loop),
                           this.inner*Math.sin(theta*loop)];    //x and y need to multiply with cos and sin of phi*slice to "go to the right place"      
            
            for(let slice = 0; slice <= this.slices; slice++) {
                this.vertices.push(loop_center[0] * Math.cos(phi*slice),
                                   loop_center[1] * Math.sin(phi*slice),
                                   loop_center[2]);

                this.normals.push(this.inner*Math.cos(phi*slice)*Math.cos(theta*loop), 
                                  this.inner*Math.cos(phi*slice)*Math.sin(theta*loop), 
                                  this.inner*Math.sin(phi*loop));
            }
        }

        for(let loop = 0; loop < this.loops; loop++){
            for(let slice = 0; slice < this.slices; slice++){
                var index = (loop * (this.slices + 1)) + slice;
                this.indices.push(index, index + this.slices + 2, index + this.slices + 1);
                this.indices.push(index, index + 1, index + this.slices + 2);
            }
        } 

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}