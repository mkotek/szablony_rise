/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['bebas-neue, sans-serif']='<script src="http://use.edgefonts.net/bebas-neue:n4:all.js"></script>';

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
                id: 'navigation',
                type: 'rect',
                rect: ['327', '144','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'navigation',
                symbolName: 'navigation'
            }
            ]
        },
    states: {
        "Base State": {
            "${_navigation}": [
                ["style", "left", '8px'],
                ["style", "top", '10px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '990px'],
                ["style", "height", '80px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7500,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"home-center_dot": {
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
                    rect: ['0px', '0px', '15px', '15px', 'auto', 'auto'],
                    borderRadius: ['2px 2px', '2px 2px', '2px 2px', '2px 2px'],
                    id: 'RoundRect2',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,214,150,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '15px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '15px'],
                ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '14px']
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
                { id: "eid292", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(255,154,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,214,233,1.00)'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid293", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(187,214,233,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,154,0,1)'}], position: 1000, duration: 1000, easing: "easeInOutQuad" }            ]
        }
    }
},
"navigation": {
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
                    rect: ['0px', '29px', '175px', '1px', 'auto', 'auto'],
                    id: 'line1',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    rect: ['200px', '29px', '142px', '1px', 'auto', 'auto'],
                    id: 'line2',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    rect: ['399px', '29px', '175px', '1px', 'auto', 'auto'],
                    id: 'line3',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    rect: ['599px', '29px', '175px', '1px', 'auto', 'auto'],
                    id: 'line4',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    rect: ['17px', '29px', '142px', '1px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.23944']],
                    id: 'line1_fill',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,154,0,1.00)']
                },
                {
                    rect: ['17px', '29px', '142px', '1px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.23944']],
                    id: 'line2-fill',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,154,0,1.00)']
                },
                {
                    rect: ['17px', '29px', '142px', '1px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.23944']],
                    id: 'line3-fill',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,154,0,1.00)']
                },
                {
                    rect: ['17px', '29px', '142px', '1px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.23944']],
                    id: 'line4-fill',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,154,0,1.00)']
                },
                {
                    rect: ['800px', '29px', '175px', '1px', 'auto', 'auto'],
                    id: 'line5',
                    stroke: [2, 'rgb(185, 215, 239)', 'none'],
                    type: 'rect',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    rect: ['176px', '17px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square1radar',
                    stroke: [1, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['375px', '17px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square2radar',
                    stroke: [1, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['575px', '17px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square3radar',
                    stroke: [1, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['775px', '17px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square4radar',
                    stroke: [1, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['175px', '11px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square2halo',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,0.00)']
                },
                {
                    rect: ['175px', '11px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square3halo',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,0.00)']
                },
                {
                    rect: ['175px', '11px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square4halo',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,0.00)']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['163', '4', 'auto', 'auto', 'auto', 'auto'],
                    id: 'mc-halo'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['163', '4', 'auto', 'auto', 'auto', 'auto'],
                    id: 'halo2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['163', '4', 'auto', 'auto', 'auto', 'auto'],
                    id: 'halo3'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['163', '4', 'auto', 'auto', 'auto', 'auto'],
                    id: 'halo4'
                },
                {
                    rect: ['175px', '16px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square1',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['374px', '16px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square2',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['574px', '16px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square3',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    rect: ['774px', '16px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square4',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,1.00)']
                },
                {
                    id: 'status-square1',
                    type: 'rect',
                    transform: [[], [], [], ['0.92857', '0.92857']],
                    rect: ['180px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'status-square2',
                    type: 'rect',
                    transform: [[], [], [], ['0.92857', '0.92857']],
                    rect: ['180px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'status-square3',
                    type: 'rect',
                    transform: [[], [], [], ['0.92857', '0.92857']],
                    rect: ['180px', '21px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'status-square4',
                    type: 'rect',
                    transform: [[], [], [], ['0.92857', '0.92857']],
                    rect: ['180px', '21px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'status-square1',
                symbolName: 'home-center_dot',
                autoPlay: {

               }
            },
            {
                id: 'halo2',
                symbolName: 'mc-halo',
                autoPlay: {

               }
            },
            {
                id: 'mc-halo',
                symbolName: 'mc-halo',
                autoPlay: {

               }
            },
            {
                id: 'halo4',
                symbolName: 'mc-halo',
                autoPlay: {

               }
            },
            {
                id: 'status-square4',
                symbolName: 'home-center_dot',
                autoPlay: {

               }
            },
            {
                id: 'halo3',
                symbolName: 'mc-halo',
                autoPlay: {

               }
            },
            {
                id: 'status-square3',
                symbolName: 'home-center_dot',
                autoPlay: {

               }
            },
            {
                id: 'status-square2',
                symbolName: 'home-center_dot',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_square1}": [
                ["color", "background-color", 'rgba(8,12,17,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '175px']
            ],
            "${_status-square2}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.92857'],
                ["transform", "scaleX", '0.92857'],
                ["style", "opacity", '0'],
                ["style", "left", '379px']
            ],
            "${_square3radar}": [
                ["color", "background-color", 'rgba(8,12,17,1)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '17px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "left", '575px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1']
            ],
            "${_line4}": [
                ["style", "top", '29px'],
                ["color", "background-color", 'rgba(187,214,233,1)'],
                ["style", "border-style", 'none'],
                ["style", "height", '1px'],
                ["style", "opacity", '0.73'],
                ["style", "left", '599px'],
                ["style", "width", '175px']
            ],
            "${_status-square3}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.92857'],
                ["transform", "scaleX", '0.92857'],
                ["style", "opacity", '0'],
                ["style", "left", '579px']
            ],
            "${_status-square1}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.92857'],
                ["transform", "scaleX", '0.92857'],
                ["style", "opacity", '0'],
                ["style", "left", '180px']
            ],
            "${_line3-fill}": [
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["style", "top", '29px'],
                ["style", "clip", [0,0,1,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1px'],
                ["transform", "scaleX", '1.23944'],
                ["style", "border-style", 'none'],
                ["style", "left", '416px'],
                ["style", "width", '142px']
            ],
            "${_line2-fill}": [
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["style", "top", '29px'],
                ["style", "left", '217px'],
                ["transform", "scaleX", '1.23944'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "clip", [0,0,1,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '142px']
            ],
            "${_line4-fill}": [
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["style", "top", '29px'],
                ["style", "clip", [0,0,1,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1px'],
                ["transform", "scaleX", '1.23944'],
                ["style", "border-style", 'none'],
                ["style", "left", '616px'],
                ["style", "width", '142px']
            ],
            "${_square4radar}": [
                ["color", "background-color", 'rgba(8,12,17,1)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '17px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "border-width", '1px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '775px'],
                ["style", "opacity", '1']
            ],
            "${_halo4}": [
                ["style", "top", '3px'],
                ["style", "left", '762px'],
                ["style", "display", 'none']
            ],
            "${_square2radar}": [
                ["color", "background-color", 'rgba(8,12,17,1)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '17px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "border-width", '1px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '375px'],
                ["style", "opacity", '1']
            ],
            "${_halo2}": [
                ["style", "top", '3px'],
                ["style", "left", '361px'],
                ["style", "display", 'none']
            ],
            "${_status-square4}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.92857'],
                ["transform", "scaleX", '0.92857'],
                ["style", "opacity", '0'],
                ["style", "left", '779px']
            ],
            "${_square3}": [
                ["color", "background-color", 'rgba(8,12,17,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '574px']
            ],
            "${_mc-halo}": [
                ["style", "top", '3px'],
                ["style", "left", '162px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '103px'],
                ["style", "width", '990px']
            ],
            "${_square1radar}": [
                ["color", "background-color", 'rgba(8,12,17,1)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '17px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "left", '176px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1']
            ],
            "${_line3}": [
                ["style", "top", '29px'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "height", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", '399px'],
                ["style", "width", '175px']
            ],
            "${_square4}": [
                ["color", "background-color", 'rgba(8,12,17,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '774px']
            ],
            "${_line5}": [
                ["color", "background-color", 'rgba(187,214,233,1)'],
                ["style", "top", '29px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '799px'],
                ["style", "width", '175px']
            ],
            "${_square2}": [
                ["color", "background-color", 'rgba(8,12,17,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["style", "left", '374px']
            ],
            "${_square4halo}": [
                ["color", "background-color", 'rgba(8,12,17,0.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '17px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "left", '774px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "opacity", '1']
            ],
            "${_line1}": [
                ["style", "top", '29px'],
                ["style", "opacity", '1'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["gradient", "background-image", [0,[['rgba(187,214,233,1.00)',0],['rgba(186,214,232,1.00)',100]]]],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '175px']
            ],
            "${_line2}": [
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["gradient", "background-image", [0,[['rgba(187,214,233,1.00)',0],['rgba(186,214,232,1.00)',100]]]],
                ["style", "left", '200px'],
                ["style", "width", '175px'],
                ["style", "top", '29px'],
                ["style", "height", '1px'],
                ["style", "opacity", '0.99000000953674'],
                ["style", "right", 'auto'],
                ["style", "border-style", 'none']
            ],
            "${_line1_fill}": [
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["style", "top", '29px'],
                ["style", "clip", [0,0,1,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1px'],
                ["transform", "scaleX", '1.23944'],
                ["style", "border-style", 'none'],
                ["style", "left", '17px'],
                ["style", "width", '142px']
            ],
            "${_halo3}": [
                ["style", "top", '3px'],
                ["style", "left", '562px'],
                ["style", "display", 'none']
            ],
            "${_square3halo}": [
                ["color", "background-color", 'rgba(8,12,17,0.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '1'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '574px']
            ],
            "${_square2halo}": [
                ["color", "background-color", 'rgba(8,12,17,0.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '16px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "left", '374px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8500,
            autoPlay: true,
            labels: {
                "L2": 2500,
                "L3": 4500,
                "L4": 6500
            },
            timeline: [
                { id: "eid200", tween: [ "style", "${_status-square1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid949", tween: [ "style", "${_status-square1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250 },
                { id: "eid343", tween: [ "color", "${_square4}", "border-color", 'rgba(255,154,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(187, 214, 233)'}], position: 6500, duration: 250, easing: "easeOutElastic" },
                { id: "eid322", tween: [ "style", "${_status-square3}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
                { id: "eid951", tween: [ "style", "${_status-square3}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
                { id: "eid342", tween: [ "color", "${_square2}", "border-color", 'rgba(255,154,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(187, 214, 233)'}], position: 2500, duration: 250, easing: "easeOutElastic" },
                { id: "eid364", tween: [ "transform", "${_square3}", "scaleY", '1.2', { fromValue: '1'}], position: 4500, duration: 250, easing: "easeOutElastic" },
                { id: "eid313", tween: [ "style", "${_status-square2}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid950", tween: [ "style", "${_status-square2}", "opacity", '0', { fromValue: '1'}], position: 4007, duration: 243 },
                { id: "eid29", tween: [ "style", "${_halo4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_halo4}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_halo3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_halo3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_halo3}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid194", tween: [ "style", "${_line1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid303", tween: [ "style", "${_line3-fill}", "clip", [0,141,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1,0]}], position: 4000, duration: 500, easing: "easeOutQuad" },
                { id: "eid344", tween: [ "color", "${_square3}", "border-color", 'rgba(255,154,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(187, 214, 233)'}], position: 4500, duration: 250, easing: "easeOutElastic" },
                { id: "eid361", tween: [ "transform", "${_square4}", "scaleX", '1.2', { fromValue: '1'}], position: 6500, duration: 250, easing: "easeOutElastic" },
                { id: "eid296", tween: [ "style", "${_line4-fill}", "clip", [0,141,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1,0]}], position: 6000, duration: 500, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_halo2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_halo2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_halo2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid360", tween: [ "transform", "${_square2}", "scaleY", '1.2', { fromValue: '1'}], position: 2500, duration: 250, easing: "easeOutElastic" },
                { id: "eid362", tween: [ "transform", "${_square4}", "scaleY", '1.2', { fromValue: '1'}], position: 6500, duration: 250, easing: "easeOutElastic" },
                { id: "eid963", tween: [ "style", "${_line2}", "opacity", '1', { fromValue: '0.99000000953674'}], position: 0, duration: 2500, easing: "easeInOutQuad" },
                { id: "eid227", tween: [ "style", "${_line2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 250 },
                { id: "eid339", tween: [ "style", "${_line3}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 250 },
                { id: "eid341", tween: [ "color", "${_square1}", "border-color", 'rgba(255,154,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(187, 214, 233)'}], position: 500, duration: 250, easing: "easeOutElastic" },
                { id: "eid159", tween: [ "style", "${_line1_fill}", "clip", [0,141,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1,0]}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "transform", "${_square2}", "scaleX", '1.2', { fromValue: '1'}], position: 2500, duration: 250, easing: "easeOutElastic" },
                { id: "eid357", tween: [ "transform", "${_square1}", "scaleX", '1.2', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutElastic" },
                { id: "eid568", tween: [ "transform", "${_square1}", "scaleX", '1.2', { fromValue: '1.2'}], position: 750, duration: 0 },
                { id: "eid294", tween: [ "style", "${_line2-fill}", "clip", [0,141,1,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,1,0]}], position: 2000, duration: 500, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_line4}", "opacity", '0', { fromValue: '0.73'}], position: 6500, duration: 250 },
                { id: "eid330", tween: [ "style", "${_status-square4}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500 },
                { id: "eid36", tween: [ "style", "${_mc-halo}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid363", tween: [ "transform", "${_square3}", "scaleX", '1.2', { fromValue: '1'}], position: 4500, duration: 250, easing: "easeOutElastic" },
                { id: "eid358", tween: [ "transform", "${_square1}", "scaleY", '1.2', { fromValue: '1'}], position: 500, duration: 250, easing: "easeOutElastic" },
                { id: "eid5", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_status-square1}', [] ], ""], position: 0 },
                { id: "eid16", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_status-square4}', [] ], ""], position: 0 },
                { id: "eid17", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_halo4}', [] ], ""], position: 0 },
                { id: "eid18", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_halo3}', [] ], ""], position: 0 },
                { id: "eid19", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_status-square2}', [] ], ""], position: 0 },
                { id: "eid20", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_status-square3}', [] ], ""], position: 0 },
                { id: "eid21", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_halo2}', [] ], ""], position: 0 },
                { id: "eid7", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mc-halo}', [] ], ""], position: 0 },
                { id: "eid6", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_status-square1}', [0] ], ""], position: 500 },
                { id: "eid8", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mc-halo}', [0] ], ""], position: 500 },
                { id: "eid22", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_halo2}', [0] ], ""], position: 2500 },
                { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_status-square2}', [0] ], ""], position: 2500 },
                { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_status-square3}', [0] ], ""], position: 4500 },
                { id: "eid25", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_halo3}', [0] ], ""], position: 4500 },
                { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_status-square4}', [0] ], ""], position: 6500 },
                { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_halo4}', [0] ], ""], position: 6500 }            ]
        }
    }
},
"mc-halo": {
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
                    rect: ['13px', '13px', '21px', '21px', 'auto', 'auto'],
                    borderRadius: ['4px 4px', '4px 4px', '4px 4px', '4px 4px'],
                    id: 'square1halo',
                    stroke: [2, 'rgba(187,214,233,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(8,12,17,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_square1halo}": [
                ["color", "background-color", 'rgba(8,12,17,0.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '21px'],
                ["style", "top", '13px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "left", '13px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgb(187, 214, 233)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
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
                { id: "eid370", tween: [ "subproperty", "${_square1halo}", "filter.blur", '0px', { fromValue: '0px'}], position: 1000, duration: 0, easing: "easeOutElastic" },
                { id: "eid373", tween: [ "transform", "${_square1halo}", "scaleY", '2', { fromValue: '1'}], position: 1000, duration: 1000, easing: "swing" },
                { id: "eid372", tween: [ "transform", "${_square1halo}", "scaleX", '2', { fromValue: '1'}], position: 1000, duration: 1000, easing: "swing" },
                { id: "eid374", tween: [ "style", "${_square1halo}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "swing" }            ]
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
})(jQuery, AdobeEdge, "EDGE-127554267");
