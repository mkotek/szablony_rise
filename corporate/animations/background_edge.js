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
                id: 'hud3',
                type: 'image',
                rect: ['-142px', '54px','986px','986px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hud3.png",'0px','0px']
            },
            {
                id: 'hud1',
                type: 'image',
                rect: ['-142px', '54px','986px','986px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hud1.png",'0px','0px']
            },
            {
                id: 'hud2',
                type: 'image',
                rect: ['-142px', '54px','986px','986px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hud2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '986px'],
                ["style", "height", '1080px'],
                ["style", "overflow", 'hidden']
            ],
            "${_hud1}": [
                ["style", "top", '54px'],
                ["style", "left", '-142px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_hud3}": [
                ["style", "top", '54px'],
                ["style", "left", '-142px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_hud2}": [
                ["style", "top", '54px'],
                ["style", "left", '-142px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "transform", "${_hud2}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 4000 },
                { id: "eid4", tween: [ "transform", "${_hud3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 4000 },
                { id: "eid2", tween: [ "transform", "${_hud1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 4000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-229852366");
