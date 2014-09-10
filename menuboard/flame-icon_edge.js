/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'flame',
                type: 'image',
                rect: ['4px', '-1px','43px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flame.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '50px'],
                ["style", "height", '60px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flame}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '63px'],
                ["style", "left", '4px'],
                ["style", "width", '43px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "transform", "${_flame}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "transform", "${_flame}", "scaleY", '1', { fromValue: '0.8'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "transform", "${_flame}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "transform", "${_flame}", "scaleX", '1', { fromValue: '0.8'}], position: 1000, duration: 1000, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-424159748");
