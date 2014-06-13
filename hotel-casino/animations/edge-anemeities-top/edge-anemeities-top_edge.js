/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['abel, sans-serif']='<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>';
    fonts['bebas-neue, sans-serif']='<script src=\"http://use.edgefonts.net/bebas-neue:n4:all.js\"></script>';
    fonts['cuprum, sans-serif']='<script src=\"http://use.edgefonts.net/cuprum:n4:all.js\"></script>';

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
                id: 'mc-fast-facts4',
                type: 'rect',
                rect: ['30px', '-72px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'mc-fast-facts4',
                symbolName: 'mc-fast-facts',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '990px'],
                ["style", "height", '350px'],
                ["style", "overflow", 'hidden']
            ],
            "${_mc-fast-facts4}": [
                ["style", "left", '30px'],
                ["style", "top", '-72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"energy-pie-75_arriving-flight": {
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
                    rect: ['5px', '5px', '200px', '200px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'progress_bar_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    type: 'group',
                    id: 'Group',
                    clip: ['rect(0px 210px 210px 104.91845703125px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_bar',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 210px 210.078857421875px 104.8828125px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'GroupCopy',
                    clip: ['rect(0px 105px 215.67651367188px 0px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_barCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 104.57177734375px 210.078857421875px 0.10107421875px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    rect: ['30px', '30px', '150px', '150px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'circle_overlay',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['60px', '61px', '89px', '88px', 'auto', 'auto'],
                    id: 'Counter',
                    text: '0',
                    align: 'center',
                    font: ['bebas-neue, sans-serif', 72, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,210,104.91845703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Progress_bar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "clip", [0,210,210.078857421875,104.8828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '210px']
            ],
            "${_Progress_barCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,104.57177734375,210.078857421875,0.10107421875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '210px']
            ],
            "${_GroupCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,105,215.67651367188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '210px']
            ],
            "${_progress_bar_background}": [
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '55px'],
                ["style", "width", '100px']
            ],
            "${_circle_overlay}": [
                ["style", "top", '30px'],
                ["style", "height", '150px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '30px'],
                ["style", "width", '150px']
            ],
            "${_Counter}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'center'],
                ["style", "height", '88px'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["style", "left", '60px'],
                ["style", "font-size", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "transform", "${_Progress_barCopy}", "rotateZ", '-137deg', { fromValue: '-180deg'}], position: 500, duration: 500 },
                { id: "eid17", tween: [ "style", "${_progress_bar_background}", "width", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid7", tween: [ "style", "${_progress_bar_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid18", tween: [ "style", "${_progress_bar_background}", "left", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_progress_bar_background}", "top", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "transform", "${_Progress_bar}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_progress_bar_background}", "height", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" }            ]
        }
    }
},
"pie-chart-domestic": {
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
                    rect: ['5px', '5px', '200px', '200px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'progress_bar_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    type: 'group',
                    id: 'Group',
                    clip: ['rect(0px 210px 215.676513671875px 104.55908203125px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_bar',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 210px 210.078857421875px 103.84716796875px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    rect: ['30px', '30px', '150px', '150px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'circle_overlay',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['60px', '61px', '89px', '88px', 'auto', 'auto'],
                    id: 'Counter',
                    text: '0',
                    align: 'center',
                    font: ['bebas-neue, sans-serif', 72, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Progress_bar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "clip", [0,210,210.078857421875,103.84716796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '210px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '210px']
            ],
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,215.676513671875,104.55908203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_progress_bar_background}": [
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '55px'],
                ["style", "width", '100px']
            ],
            "${_circle_overlay}": [
                ["style", "top", '30px'],
                ["style", "height", '150px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '30px'],
                ["style", "width", '150px']
            ],
            "${_Counter}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'center'],
                ["style", "height", '88px'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["style", "left", '60px'],
                ["style", "font-size", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "style", "${_progress_bar_background}", "width", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid7", tween: [ "style", "${_progress_bar_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid18", tween: [ "style", "${_progress_bar_background}", "left", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_progress_bar_background}", "top", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "transform", "${_Progress_bar}", "rotateZ", '-38deg', { fromValue: '-180deg'}], position: 0, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_progress_bar_background}", "height", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" }            ]
        }
    }
},
"energy-pie-100": {
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
                    rect: ['5px', '5px', '200px', '200px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'progress_bar_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    type: 'group',
                    id: 'Group',
                    clip: ['rect(0px 210px 210px 104.91845703125px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_bar',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 210px 210.078857421875px 104.8828125px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'GroupCopy',
                    clip: ['rect(0px 105px 215.67651367188px 0px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_barCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 104.57177734375px 210.078857421875px 0.10107421875px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    rect: ['30px', '30px', '150px', '150px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'circle_overlay',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['60px', '61px', '89px', '88px', 'auto', 'auto'],
                    id: 'Counter',
                    text: '0',
                    align: 'center',
                    font: ['bebas-neue, sans-serif', 72, 'rgba(0,0,0,1)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['110px', '97px', '89px', '44px', 'auto', 'auto'],
                    id: 'CounterCopy',
                    text: '%',
                    align: 'center',
                    font: ['abel, sans-serif', 28, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Progress_barCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "clip", [0,104.57177734375,210.078857421875,0.10107421875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '210px']
            ],
            "${_Progress_bar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,210.078857421875,104.8828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '210px']
            ],
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,210,104.91845703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_circle_overlay}": [
                ["style", "top", '30px'],
                ["style", "height", '150px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '30px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '210px']
            ],
            "${_GroupCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,105,215.67651367188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_progress_bar_background}": [
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '55px'],
                ["style", "width", '100px']
            ],
            "${_CounterCopy}": [
                ["style", "top", '97px'],
                ["style", "text-align", 'center'],
                ["style", "height", '44px'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '110px'],
                ["style", "font-size", '28px']
            ],
            "${_Counter}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'center'],
                ["style", "height", '88px'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["style", "left", '60px'],
                ["style", "font-size", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "transform", "${_Progress_barCopy}", "rotateZ", '-22deg', { fromValue: '-180deg'}], position: 500, duration: 500 },
                { id: "eid17", tween: [ "style", "${_progress_bar_background}", "width", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid7", tween: [ "style", "${_progress_bar_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid18", tween: [ "style", "${_progress_bar_background}", "left", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_progress_bar_background}", "top", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "transform", "${_Progress_bar}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_progress_bar_background}", "height", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" }            ]
        }
    }
},
"energy-pie-75_taxi": {
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
                    rect: ['5px', '5px', '200px', '200px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'progress_bar_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(187,214,233,1.00)']
                },
                {
                    type: 'group',
                    id: 'Group',
                    clip: ['rect(0px 210px 210px 104.91845703125px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_bar',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 210px 210.078857421875px 104.8828125px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'GroupCopy',
                    clip: ['rect(0px 105px 215.67651367188px 0px)'],
                    rect: ['0px', '0px', '210', '210', 'auto', 'auto'],
                    c: [
                    {
                        type: 'ellipse',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['0px', '0px', '210px', '210px', 'auto', 'auto'],
                        id: 'Progress_barCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        clip: ['rect(0px 104.57177734375px 210.078857421875px 0.10107421875px)'],
                        fill: ['rgba(255,154,0,1.00)']
                    }]
                },
                {
                    rect: ['30px', '30px', '150px', '150px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'circle_overlay',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['60px', '61px', '89px', '88px', 'auto', 'auto'],
                    id: 'Counter',
                    text: '0',
                    align: 'center',
                    font: ['bebas-neue, sans-serif', 72, 'rgba(0,0,0,1)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['43px', '96px', '210px', '36px', 'auto', 'auto'],
                    id: 'Text6Copy9',
                    text: 'min',
                    align: 'center',
                    font: ['abel, sans-serif', 28, 'rgba(8,12,17,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Progress_barCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "clip", [0,104.57177734375,210.078857421875,0.10107421875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '210px']
            ],
            "${_Text6Copy9}": [
                ["style", "top", '96px'],
                ["style", "width", '210px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(8,12,17,1)'],
                ["style", "height", '36px'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '28px']
            ],
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,210,104.91845703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '210px']
            ],
            "${_GroupCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,105,215.67651367188,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Progress_bar}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,154,0,1.00)'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '210px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,210,210.078857421875,104.8828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '210px']
            ],
            "${_progress_bar_background}": [
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(187,214,233,1.00)'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '55px'],
                ["style", "width", '100px']
            ],
            "${_circle_overlay}": [
                ["style", "top", '30px'],
                ["style", "height", '150px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '30px'],
                ["style", "width", '150px']
            ],
            "${_Counter}": [
                ["style", "top", '61px'],
                ["style", "text-align", 'center'],
                ["style", "height", '88px'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["style", "left", '60px'],
                ["style", "font-size", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "transform", "${_Progress_barCopy}", "rotateZ", '-106deg', { fromValue: '-180deg'}], position: 500, duration: 500 },
                { id: "eid17", tween: [ "style", "${_progress_bar_background}", "width", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid7", tween: [ "style", "${_progress_bar_background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid18", tween: [ "style", "${_progress_bar_background}", "left", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_progress_bar_background}", "top", '5px', { fromValue: '55px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid2", tween: [ "transform", "${_Progress_bar}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_progress_bar_background}", "height", '200px', { fromValue: '100px'}], position: 0, duration: 1000, easing: "easeOutBounce" }            ]
        }
    }
},
"anim_people": {
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
                    type: 'image',
                    id: 'person',
                    rect: ['0px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy4',
                    rect: ['30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy5',
                    rect: ['60px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy6',
                    rect: ['90px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy7',
                    rect: ['120px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy9',
                    rect: ['150px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy8',
                    rect: ['180px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy3',
                    rect: ['210px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy2',
                    rect: ['240px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy',
                    rect: ['270px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy19',
                    rect: ['300px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy18',
                    rect: ['330px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy17',
                    rect: ['360px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy16',
                    rect: ['390px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy15',
                    rect: ['420px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy14',
                    rect: ['450px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy13',
                    rect: ['480px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy12',
                    rect: ['510px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy11',
                    rect: ['540px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy10',
                    rect: ['570px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3',
                    rect: ['-30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy',
                    rect: ['0px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy2',
                    rect: ['30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy3',
                    rect: ['60px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy4',
                    rect: ['90px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person1717.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_person}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_personCopy10}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '570px']
            ],
            "${_personCopy19}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '300px']
            ],
            "${_personCopy18}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '330px']
            ],
            "${_personCopy14}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '450px']
            ],
            "${symbolSelector}": [
                ["style", "height", '148px'],
                ["style", "width", '180px']
            ],
            "${_personCopy6}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '90px']
            ],
            "${_personCopy11}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '540px']
            ],
            "${_personCopy15}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '420px']
            ],
            "${_person3Copy4}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '90px']
            ],
            "${_personCopy16}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '390px']
            ],
            "${_personCopy4}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '30px']
            ],
            "${_personCopy8}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '180px']
            ],
            "${_person3}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-30px']
            ],
            "${_personCopy9}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '150px']
            ],
            "${_person3Copy}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_person3Copy2}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '30px']
            ],
            "${_personCopy7}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '120px']
            ],
            "${_personCopy}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '270px']
            ],
            "${_personCopy12}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '510px']
            ],
            "${_personCopy5}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '60px']
            ],
            "${_personCopy13}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '480px']
            ],
            "${_person3Copy3}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '60px']
            ],
            "${_personCopy3}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '210px']
            ],
            "${_personCopy2}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '240px']
            ],
            "${_personCopy17}": [
                ["style", "top", '-215px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '360px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "style", "${_personCopy10}", "top", '0px', { fromValue: '-215px'}], position: 4750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1066", tween: [ "style", "${_person}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBounce" },
                { id: "eid82", tween: [ "style", "${_personCopy18}", "top", '0px', { fromValue: '-215px'}], position: 2750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid67", tween: [ "style", "${_personCopy10}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 500, easing: "easeOutBounce" },
                { id: "eid70", tween: [ "style", "${_personCopy12}", "top", '0px', { fromValue: '-215px'}], position: 4250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid84", tween: [ "style", "${_personCopy19}", "top", '0px', { fromValue: '-215px'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid83", tween: [ "style", "${_personCopy18}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeOutBounce" },
                { id: "eid1070", tween: [ "style", "${_personCopy7}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid30", tween: [ "style", "${_personCopy5}", "top", '0px', { fromValue: '-215px'}], position: 500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid60", tween: [ "style", "${_personCopy8}", "top", '0px', { fromValue: '-215px'}], position: 1500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid57", tween: [ "style", "${_personCopy2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid68", tween: [ "style", "${_personCopy11}", "top", '0px', { fromValue: '-215px'}], position: 4500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1067", tween: [ "style", "${_personCopy4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBounce" },
                { id: "eid55", tween: [ "style", "${_personCopy}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBounce" },
                { id: "eid28", tween: [ "style", "${_person}", "top", '0px', { fromValue: '-215px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1069", tween: [ "style", "${_personCopy6}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBounce" },
                { id: "eid34", tween: [ "style", "${_personCopy6}", "top", '0px', { fromValue: '-215px'}], position: 750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid77", tween: [ "style", "${_personCopy15}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500, easing: "easeOutBounce" },
                { id: "eid1068", tween: [ "style", "${_personCopy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBounce" },
                { id: "eid73", tween: [ "style", "${_personCopy13}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeOutBounce" },
                { id: "eid69", tween: [ "style", "${_personCopy11}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeOutBounce" },
                { id: "eid32", tween: [ "style", "${_personCopy7}", "top", '0px', { fromValue: '-215px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid59", tween: [ "style", "${_personCopy3}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBounce" },
                { id: "eid54", tween: [ "style", "${_personCopy}", "top", '0px', { fromValue: '-215px'}], position: 2250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid62", tween: [ "style", "${_personCopy9}", "top", '0px', { fromValue: '-215px'}], position: 1250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid56", tween: [ "style", "${_personCopy2}", "top", '0px', { fromValue: '-215px'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid58", tween: [ "style", "${_personCopy3}", "top", '0px', { fromValue: '-215px'}], position: 1750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid85", tween: [ "style", "${_personCopy19}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid80", tween: [ "style", "${_personCopy17}", "top", '0px', { fromValue: '-215px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid36", tween: [ "style", "${_personCopy4}", "top", '0px', { fromValue: '-215px'}], position: 250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid81", tween: [ "style", "${_personCopy17}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBounce" },
                { id: "eid72", tween: [ "style", "${_personCopy13}", "top", '0px', { fromValue: '-215px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid78", tween: [ "style", "${_personCopy16}", "top", '0px', { fromValue: '-215px'}], position: 3250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid63", tween: [ "style", "${_personCopy9}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBounce" },
                { id: "eid74", tween: [ "style", "${_personCopy14}", "top", '0px', { fromValue: '-215px'}], position: 3750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid61", tween: [ "style", "${_personCopy8}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBounce" },
                { id: "eid76", tween: [ "style", "${_personCopy15}", "top", '0px', { fromValue: '-215px'}], position: 3500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid75", tween: [ "style", "${_personCopy14}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 500, easing: "easeOutBounce" },
                { id: "eid71", tween: [ "style", "${_personCopy12}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutBounce" },
                { id: "eid79", tween: [ "style", "${_personCopy16}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 500, easing: "easeOutBounce" }            ]
        }
    }
},
"mc-fast-facts": {
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
                    id: 'final-energy',
                    type: 'group',
                    rect: ['0', '108px', '954', '281', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '938px', '111px', 'auto', 'auto'],
                        font: ['abel, sans-serif', 20, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                        id: 'Text3Copy',
                        text: 'Rise Vision provides opulent amenities and decadent décor. Relax in our plush bed linens, spa-quality robes, and savor the resplendence of morning coffee or afternoon cocktails on your private patio. Rise Team Members are part of a global family that ensures every guest feels cared for, valued and respected. We currently have over 20 team members on staff to serve all your needs.<br>',
                        align: 'left',
                        type: 'text'
                    }]
                },
                {
                    id: 'anim_people',
                    type: 'rect',
                    transform: [[], [], [], ['1.47778', '1.47778']],
                    rect: ['70px', '284px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'anim_people',
                symbolName: 'anim_people',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_anim_people}": [
                ["transform", "scaleX", '1.47778'],
                ["style", "left", '70px'],
                ["transform", "scaleY", '1.47778'],
                ["style", "top", '284px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '0px'],
                ["style", "font-size", '20px'],
                ["style", "height", '111px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'abel, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '938px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '529px']
            ],
            "${_final-energy}": [
                ["style", "top", '108px'],
                ["style", "opacity", '0'],
                ["style", "left", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid758", tween: [ "style", "${_final-energy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid756", tween: [ "style", "${_final-energy}", "left", '0px', { fromValue: '50px'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid967", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_anim_people}', [0] ], ""], position: 0 }            ]
        }
    }
},
"anim_people_1": {
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
                    type: 'image',
                    id: 'person',
                    rect: ['0px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy4',
                    rect: ['30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy5',
                    rect: ['60px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy6',
                    rect: ['90px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy7',
                    rect: ['120px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy12',
                    rect: ['0px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy11',
                    rect: ['30px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy10',
                    rect: ['60px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy9',
                    rect: ['90px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'personCopy8',
                    rect: ['120px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 30px 74px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3',
                    rect: ['-30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy',
                    rect: ['0px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy2',
                    rect: ['30px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy3',
                    rect: ['60px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy4',
                    rect: ['90px', '0px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy5',
                    rect: ['-30px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'person3Copy6',
                    rect: ['0px', '74px', '60px', '74px', 'auto', 'auto'],
                    clip: ['rect(0px 60px 74px 30px)'],
                    fill: ['rgba(0,0,0,0)', 'images/person18.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_person}": [
                ["style", "top", '-215px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy10}": [
                ["style", "top", '168px'],
                ["style", "left", '60px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy4}": [
                ["style", "top", '-215px'],
                ["style", "left", '30px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3Copy5}": [
                ["style", "top", '74px'],
                ["style", "left", '-30px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy6}": [
                ["style", "top", '-215px'],
                ["style", "left", '90px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy11}": [
                ["style", "top", '168px'],
                ["style", "left", '30px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3Copy6}": [
                ["style", "top", '74px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3}": [
                ["style", "top", '0px'],
                ["style", "left", '-30px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy9}": [
                ["style", "top", '168px'],
                ["style", "left", '90px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '148px'],
                ["style", "width", '180px']
            ],
            "${_person3Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '90px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy5}": [
                ["style", "top", '-215px'],
                ["style", "left", '60px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy7}": [
                ["style", "top", '-215px'],
                ["style", "left", '120px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '60px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_person3Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '30px'],
                ["style", "clip", [0,30,74,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy8}": [
                ["style", "top", '168px'],
                ["style", "left", '120px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_personCopy12}": [
                ["style", "top", '168px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,30,74,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid34", tween: [ "style", "${_personCopy6}", "top", '0px', { fromValue: '-215px'}], position: 750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid56", tween: [ "style", "${_person3Copy6}", "clip", [0,49,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 2750, duration: 250 },
                { id: "eid62", tween: [ "style", "${_person3Copy}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 1500, duration: 250 },
                { id: "eid60", tween: [ "style", "${_person3Copy3}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 2000, duration: 250 },
                { id: "eid58", tween: [ "style", "${_person3}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 1250, duration: 250 },
                { id: "eid42", tween: [ "style", "${_personCopy12}", "top", '74px', { fromValue: '168px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid32", tween: [ "style", "${_personCopy7}", "top", '0px', { fromValue: '-215px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid50", tween: [ "style", "${_person3Copy5}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 2500, duration: 250 },
                { id: "eid36", tween: [ "style", "${_personCopy4}", "top", '0px', { fromValue: '-215px'}], position: 250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid46", tween: [ "style", "${_personCopy9}", "top", '74px', { fromValue: '168px'}], position: 750, duration: 1000, easing: "easeOutBounce" },
                { id: "eid30", tween: [ "style", "${_personCopy5}", "top", '0px', { fromValue: '-215px'}], position: 500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid40", tween: [ "style", "${_personCopy8}", "top", '74px', { fromValue: '168px'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid52", tween: [ "style", "${_person3Copy4}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 2250, duration: 250 },
                { id: "eid44", tween: [ "style", "${_personCopy11}", "top", '74px', { fromValue: '168px'}], position: 250, duration: 1000, easing: "easeOutBounce" },
                { id: "eid48", tween: [ "style", "${_person3Copy2}", "clip", [0,60,74,30], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,74,30]}], position: 1750, duration: 250 },
                { id: "eid28", tween: [ "style", "${_person}", "top", '0px', { fromValue: '-215px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid38", tween: [ "style", "${_personCopy10}", "top", '74px', { fromValue: '168px'}], position: 500, duration: 1000, easing: "easeOutBounce" }            ]
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
})(jQuery, AdobeEdge, "EDGE-122173174");
