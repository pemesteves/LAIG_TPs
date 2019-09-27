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

        let phi = 2*Math.PI/this.slices;    //0 to 180 degrees
        let theta = 2*Math.PI/this.loops;    //0 to 180 degrees  
        
        for(let loop = 0; loop <= this.loops; loop++) {
            for(let slice = 0; slice <= this.slices; slice++) {
                
                /*let x = Math.cos(theta * slice) * Math.cos(phi * stack);
                let y = Math.cos(theta * slice) * Math.sin(phi * stack);
                let z = Math.sin(theta * slice);

                this.vertices.push(this.radius * x, this.radius * y, this.radius * z);
                this.normals.push(x, y, z);
                this.texCoords.push(1 - (slice / this.slices), 1 - (stack / this.stacks));
              
                if(stack != this.stacks && slice != this.slices) {
                    var index = (stack * (this.slices + 1)) + slice;

                    this.indices.push(index, index + this.slices + 2, index + this.slices + 1);
                    this.indices.push(index, index + 1, index + this.slices + 2);
                }*/
            }
        }
/*
        for(let i = 0; i < this.stacks; i++) {
            for(let j = 0; j < this.slices; j++) {
                this.indices.push(i * (this.slices + 1) + j, i * (this.slices + 1) + 1 + j, (i+1) * (this.slices + 1) + j);
                this.indices.push(i * (this.slices + 1) + 1 + j, (i+1) * (this.slices + 1) + 1 + j, (i*1) * (this.slices + 1) + j);
            }
        }  
*/
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}