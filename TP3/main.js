//From https://github.com/EvanHahn/ScriptInclude
include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return vars;
}	 
//Include additional files here
serialInclude(['../lib/CGF.js', 
                'XMLscene.js', 
                'MySceneGraph.js', 
                'MyInterface.js', 
                'MyRectangle.js',
                'MySphere.js',
                'MyCylinder.js',
                'MyTriangle.js',
                'MyTorus.js',
                'Animation.js',
                'KeyframeAnimation.js',
                'MySecurityCamera.js',
                'MyPatch.js',
                'MyPlane.js',
                'MyCylinder2.js',
                'MyTile.js',
                'MyWaterTile.js',
                'MyBoard.js',
                'MyFrog.js',
                'CGFOBJModel.js',
                'CGFResourceReader.js',
                'ServerAPI.js',
                'MyLake.js',
                'MyLakeTile.js',
                'MyRock.js',
                'MyLakeWaterTile.js',
                'MyLilyPad.js',
                'MyLakeWater.js',
                'FrogChess.js',
                'JumpAnimation.js',
                'MyPiece.js',
                'MyUndoButton.js',
                'FinishMoveButton.js',
                'UI.js',
                'numbers/Hexagon.js',
                'numbers/Zero.js',
                'numbers/One.js',
                'numbers/Two.js',
                'numbers/Three.js',
                'numbers/Four.js',
                'numbers/Five.js',
                'numbers/Six.js',
                'numbers/Seven.js',
                'numbers/Eight.js',
                'numbers/Nine.js',
                'ScoreClock.js',

main=function()
{
	// Standard application, scene and interface setup
    var app = new CGFapplication(document.body);
    var myInterface = new MyInterface();
    var myScene = new XMLscene(myInterface);

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

	// get file name provided in URL, e.g. http://localhost/myproj/?file=myfile.xml 
	// or use "LAIG_TP2_XML_T6_G05.xml" as default (assumes files in subfolder "scenes", check MySceneGraph constructor) 
	
    var filename=getUrlVars()['file'] || "Frog_Chess.xml";

	// create and load graph, and associate it to scene. 
	// Check console for loading errors
	var myGraph = new MySceneGraph(filename, myScene);
	
	// start
    app.run();
}

]);