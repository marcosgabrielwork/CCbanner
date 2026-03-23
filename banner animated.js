(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner animated_atlas_1", frames: [[0,0,1200,1000],[0,1002,1200,1000]]},
		{name:"banner animated_atlas_2", frames: [[0,0,1200,1000],[0,1002,1200,1000]]},
		{name:"banner animated_atlas_3", frames: [[0,0,1200,1000],[0,1002,1200,1000]]},
		{name:"banner animated_atlas_4", frames: [[0,0,1200,1000],[0,1002,1200,1000]]},
		{name:"banner animated_atlas_5", frames: [[0,0,1200,1000],[0,1002,1200,1000]]},
		{name:"banner animated_atlas_6", frames: [[0,0,1200,1000],[0,1002,1200,1000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._10pngcopy = function() {
	this.initialize(ss["banner animated_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._12pngcopy = function() {
	this.initialize(ss["banner animated_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2pngcopy = function() {
	this.initialize(ss["banner animated_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3pngcopy = function() {
	this.initialize(ss["banner animated_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4pngcopy = function() {
	this.initialize(ss["banner animated_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6pngcopy = function() {
	this.initialize(ss["banner animated_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._8pngcopy = function() {
	this.initialize(ss["banner animated_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._9pngcopy = function() {
	this.initialize(ss["banner animated_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BUTTON = function() {
	this.initialize(ss["banner animated_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FOLDERpngcopy = function() {
	this.initialize(ss["banner animated_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.QUADROpngcopy = function() {
	this.initialize(ss["banner animated_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TITLE = function() {
	this.initialize(ss["banner animated_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TITLE();
	this.instance.setTransform(0,0,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEXT, new cjs.Rectangle(0,0,648,540), null);


(lib.SQUARE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.QUADROpngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SQUARE, new cjs.Rectangle(0,0,600,500), null);


(lib.PHOTO_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._8pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PHOTO_3, new cjs.Rectangle(0,0,600,500), null);


(lib.PHOTO_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._10pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PHOTO_2, new cjs.Rectangle(0,0,600,500), null);


(lib.PHOTO_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._9pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PHOTO_1, new cjs.Rectangle(0,0,600,500), null);


(lib.PALI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._3pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PALI, new cjs.Rectangle(0,0,600,500), null);


(lib.MOUSE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._6pngcopy();
	this.instance.setTransform(0,0,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MOUSE, new cjs.Rectangle(0,0,372,310), null);


(lib.FOLDER = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FOLDERpngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FOLDER, new cjs.Rectangle(0,0,600,500), null);


(lib.COISA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._4pngcopy();
	this.instance.setTransform(0,0,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.COISA, new cjs.Rectangle(0,0,1008,840), null);


(lib.CC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CC, new cjs.Rectangle(0,0,600,500), null);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BUTTON();
	this.instance.setTransform(0,0,0.3102,0.3102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.2,310.2);


(lib.BACKGROUND = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12pngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BACKGROUND, new cjs.Rectangle(0,0,600,500), null);


(lib.allbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egu3gnDMBdvAAAMAAABOHMhdvAAAg");
	this.shape.setTransform(300,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3E3E3").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_1.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,602,502);


// stage content:
(lib.CCbanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,448];
	// timeline functions:
	this.frame_0 = function() {
		this.allbtn.addEventListener("click", function() {
		    window.open("https://paliadventures.com/specialty/content-creator/", "_blank");
		});
		
		this.allbtn.cursor = "pointer";
	}
	this.frame_448 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(448).call(this.frame_448).wait(2));

	// BTN
	this.instance = new lib.allbtn();
	this.instance.setTransform(300,250,1,1,0,0,0,300,250);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.allbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// MOUSE
	this.instance_1 = new lib.MOUSE();
	this.instance_1.setTransform(655.95,551,1,1,0,0,0,186,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:332,y:300.05},24).wait(4).to({x:521.05,y:408.1},13).to({y:400},20).to({y:408.1},20).to({y:400},20).to({y:408.1},20).to({y:400},20).to({y:408.1},20).to({y:400},20).to({y:408.1},20).to({y:400},20).to({y:408.1},20).to({y:400},20).to({y:408.1},20).to({y:400},19).to({y:408.1},20).to({y:400},31).to({y:408.1},20).to({y:400},31).to({y:408.1},20).to({_off:true},27).wait(1));

	// BUTTON
	this.instance_2 = new lib.button();
	this.instance_2.setTransform(300.1,368.1,1,1,0,0,0,186.1,155.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({regX:186.2,regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351,alpha:1},5).to({scaleX:1.25,scaleY:1.25,x:300.1,y:350.95},20).to({scaleX:1.2,scaleY:1.2,x:300.2,y:351},20).to({regY:155.1,scaleX:1.25,scaleY:1.25,x:300.15,y:350.85},20).to({regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351},20).to({regY:155.1,scaleX:1.25,scaleY:1.25,x:300.15,y:350.85},20).to({regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351},16).to({regY:155.1,scaleX:1.25,scaleY:1.25,x:300.15,y:350.85},20).to({regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351},22).to({regY:155.1,scaleX:1.25,scaleY:1.25,x:300.15,y:350.85},20).to({regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351},22).to({regY:155.1,scaleX:1.25,scaleY:1.25,x:300.15,y:350.85},20).to({regY:155.2,scaleX:1.2,scaleY:1.2,x:300.2,y:351},22).wait(19).to({_off:true},4).wait(1));

	// CC
	this.instance_3 = new lib.CC();
	this.instance_3.setTransform(300,250,1.45,1.45,0,0,0,300,250);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(142).to({alpha:0},5).to({_off:true},5).wait(266));

	// PHOTO_3
	this.instance_4 = new lib.PHOTO_3();
	this.instance_4.setTransform(300,256,1.21,1.21,0,0,0,300,250);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1},3).to({_off:true},407).wait(1));

	// PHOTO_2
	this.instance_5 = new lib.PHOTO_2();
	this.instance_5.setTransform(299.95,256,1.05,1.05,0,0,0,299.9,250);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({regX:300,scaleX:1,scaleY:1,x:300},3).to({_off:true},404).wait(1));

	// PHOTO_1
	this.instance_6 = new lib.PHOTO_1();
	this.instance_6.setTransform(299.95,255.9,1.05,1.05,0,0,0,299.9,249.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({regX:300,regY:250,scaleX:1,scaleY:1,x:300,y:256},3).to({_off:true},404).wait(1));

	// FOLDER
	this.instance_7 = new lib.FOLDER();
	this.instance_7.setTransform(300,265,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({regY:250.1,scaleX:1.08,scaleY:1.08,y:265.05},0).to({_off:true},2).wait(424));

	// TEXT
	this.instance_8 = new lib.TEXT();
	this.instance_8.setTransform(299.9,265,1,1,0,0,0,323.9,270);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({alpha:1},15).to({_off:true},383).wait(1));

	// PALI
	this.instance_9 = new lib.PALI();
	this.instance_9.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).to({alpha:1},14).to({_off:true},383).wait(1));

	// COISA_GIRANDO
	this.instance_10 = new lib.COISA();
	this.instance_10.setTransform(37,288,1,1,0,0,0,504,420);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:503.9,regY:419.9,rotation:-29.9992,x:36.95,y:287.95},448).to({_off:true},1).wait(1));

	// SQUARE
	this.instance_11 = new lib.SQUARE();
	this.instance_11.setTransform(444,436,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},449).wait(1));

	// BACKGROUND
	this.instance_12 = new lib.BACKGROUND();
	this.instance_12.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},449).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,-77.7,1151.4,981.4000000000001);
// library properties:
lib.properties = {
	id: 'C0086C681F5146079E7087A0E955F9C6',
	width: 600,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner animated_atlas_1.png?1773360348713", id:"banner animated_atlas_1"},
		{src:"images/banner animated_atlas_2.png?1773360348713", id:"banner animated_atlas_2"},
		{src:"images/banner animated_atlas_3.png?1773360348713", id:"banner animated_atlas_3"},
		{src:"images/banner animated_atlas_4.png?1773360348713", id:"banner animated_atlas_4"},
		{src:"images/banner animated_atlas_5.png?1773360348713", id:"banner animated_atlas_5"},
		{src:"images/banner animated_atlas_6.png?1773360348713", id:"banner animated_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C0086C681F5146079E7087A0E955F9C6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;