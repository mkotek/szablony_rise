/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';
    fonts['bebas-neue, sans-serif']='<script src=\"http://use.edgefonts.net/bebas-neue:n4:all.js\"></script>';

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
                id: 'flight-map',
                type: 'image',
                rect: ['-3px', '-2px','100.5%','101.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flight-map.png",'0px','0px']
            },
            {
                id: 'transparent-clouds',
                type: 'image',
                rect: ['829px', '-288px','130.6%','247.9%','auto', 'auto'],
                opacity: 0.78614075203252,
                fill: ["rgba(0,0,0,0)",im+"transparent-clouds.png",'0px','0px']
            },
            {
                id: '_2-Plane',
                type: 'image',
                rect: ['748px', '-190px','23.2%','68.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2-Plane.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['45px', '30px','auto','auto','auto', 'auto'],
                text: "Tools of productivity:",
                font: ['abel, sans-serif', 24, "rgba(41,41,41,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['829px', '227px','auto','auto','auto', 'auto'],
                text: "www.risevision.com",
                font: ['abel, sans-serif', 16, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['91px', '70px','39%','20.4%','auto', 'auto'],
                text: "YOUR LAPTOP.",
                align: "left",
                font: ['bebas-neue, sans-serif', 48, "rgba(41,41,41,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['91px', '126px','39%','20.4%','auto', 'auto'],
                text: "YOUR SMART PHONE.",
                align: "left",
                font: ['bebas-neue, sans-serif', 48, "rgba(41,41,41,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['91px', '182px','39%','20.4%','auto', 'auto'],
                text: "YOUR AIRLINE.",
                align: "left",
                font: ['bebas-neue, sans-serif', 48, "rgba(41,41,41,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["style", "top", '126px'],
                ["style", "font-size", '48px'],
                ["style", "height", '20.38%'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '38.98%']
            ],
            "${__2-Plane}": [
                ["style", "left", '748px'],
                ["style", "top", '-190px']
            ],
            "${_flight-map}": [
                ["style", "top", '-2px'],
                ["style", "width", '100.52%'],
                ["style", "left", '-3px'],
                ["transform", "skewX", '0deg']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '182px'],
                ["style", "width", '38.98%'],
                ["style", "height", '20.38%'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "font-size", '48px']
            ],
            "${_Text}": [
                ["style", "top", '30px'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '45px'],
                ["style", "font-family", 'abel, sans-serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_transparent-clouds}": [
                ["style", "top", '-288px'],
                ["style", "opacity", '0.78614075203252'],
                ["style", "left", '-1242px']
            ],
            "${_TextCopy}": [
                ["style", "top", '227px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '829px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2}": [
                ["style", "top", '70px'],
                ["style", "width", '38.98%'],
                ["style", "height", '20.38%'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "font-size", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid30", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "transform", "${_flight-map}", "skewX", '0deg', { fromValue: '0deg'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1", tween: [ "style", "${__2-Plane}", "top", '268px', { fromValue: '-190px'}], position: 3500, duration: 7000, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid28", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${__2-Plane}", "left", '227px', { fromValue: '748px'}], position: 3500, duration: 7000, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_Text2}", "left", '45px', { fromValue: '344px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid15", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid31", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${_transparent-clouds}", "left", '829px', { fromValue: '-1242px'}], position: 0, duration: 20000 },
                { id: "eid24", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid7", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid11", tween: [ "style", "${_Text2Copy}", "left", '45px', { fromValue: '344px'}], position: 1750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid9", tween: [ "style", "${_Text2Copy2}", "left", '45px', { fromValue: '344px'}], position: 2500, duration: 1000, easing: "easeOutBounce" }            ]
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
})(jQuery, AdobeEdge, "EDGE-179219663");
