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
                id: 'background',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
            },
            {
                id: 'test',
                type: 'image',
                rect: ['0%', '75%','141.7%','32.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"transparent-fog2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_test}": [
                ["style", "top", '75%'],
                ["style", "opacity", '0'],
                ["style", "left", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 90000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_test}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_test}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid5", tween: [ "style", "${_test}", "opacity", '1', { fromValue: '0'}], position: 45000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_test}", "opacity", '0', { fromValue: '1'}], position: 86000, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid1", tween: [ "style", "${_test}", "left", '-41.67%', { fromValue: '0%'}], position: 0, duration: 45000, easing: "easeInOutQuad" },
                { id: "eid2", tween: [ "style", "${_test}", "left", '0%', { fromValue: '-41.67%'}], position: 45000, duration: 45000, easing: "easeInOutQuad" }            ]
        }
    }
},
"fog": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '352px'],
                ["style", "width", '2720px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"fog_1": {
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
                    id: 'test',
                    type: 'image',
                    rect: ['0px', '0px', '2720px', '352px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/transparent-fog2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_test}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-777px']
            ],
            "${symbolSelector}": [
                ["style", "height", '352px'],
                ["style", "width", '2720px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 90000,
            autoPlay: true,
            timeline: [
                { id: "eid961", tween: [ "style", "${_test}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid957", tween: [ "style", "${_test}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid958", tween: [ "style", "${_test}", "opacity", '1', { fromValue: '0'}], position: 45000, duration: 5000, easing: "easeInOutQuad" },
                { id: "eid962", tween: [ "style", "${_test}", "opacity", '0', { fromValue: '1'}], position: 86000, duration: 4000, easing: "easeInOutQuad" },
                { id: "eid953", tween: [ "style", "${_test}", "left", '0px', { fromValue: '-777px'}], position: 0, duration: 45000, easing: "easeInOutQuad" },
                { id: "eid956", tween: [ "style", "${_test}", "left", '-799px', { fromValue: '0px'}], position: 45000, duration: 45000, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-42580763");
