/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Oswald, sans-serif']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Oswald:400,300,700:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';

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
                id: 'EVENT1',
                display: 'none',
                type: 'group',
                rect: ['130', '111','640','259','auto', 'auto'],
                c: [
                {
                    id: 'header',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "June 12, 2014 - 07:00 pm<br>Guest Speaker: Dr. James J. Heiman",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'description',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Author and professor, Dr. James J. Heiman will <br>provide us with a first-hand account of Kansas <br>City’s experience of World War I.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT1COPY',
                display: 'none',
                type: 'group',
                rect: ['130', '111','640','259','auto', 'auto'],
                opacity: 0.3,
                c: [
                {
                    id: 'headerCOPY',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "June 12, 2014 - 07:00 pm<br>Guest Speaker: Dr. James J. Heiman",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'descriptionCOPY',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Author and professor, Dr. James J. Heiman will <br>provide us with a first-hand account of Kansas <br>City’s experience of World War I.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT2',
                type: 'group',
                rect: ['130px', '111','640','259','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'header2',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "July 3, 2014 - 08:00 pm<br>Summer Community Days",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 8.2191780821918, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'description2',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Residents celebrate Community Days each year <br>around the 4th of July with a pancake feed, parade <br>through Old Down Town, a pet show, and fireworks.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT2Copy',
                type: 'group',
                rect: ['130px', '111','640','259','auto', 'auto'],
                opacity: 0.2,
                c: [
                {
                    id: 'header2Copy',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "July 3, 2014 - 08:00 pm<br>Summer Community Days",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 8.2191780821918, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'description2Copy',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Residents celebrate Community Days each year <br>around the 4th of July with a pancake feed, parade <br>through Old Down Town, a pet show, and fireworks.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 8, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT3',
                type: 'group',
                rect: ['1410px', '111','640','259','auto', 'auto'],
                opacity: 0.3,
                c: [
                {
                    id: 'headerCopy',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "August 12, 2014 - 07:00 pm<br>Guest Speaker: Dr. James J. Heiman",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'descriptionCopy',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Author and professor, Dr. James J. Heiman will <br>provide us with a first-hand account of Kansas City’s <br>experience of World War I.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT4',
                display: 'none',
                type: 'group',
                rect: ['1413px', '111','640','259','auto', 'auto'],
                opacity: 0.3,
                c: [
                {
                    id: 'header4Copy',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "September 7, 2014 - 07:00 pm<br>Teacher Appreciation Night",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 8.2191780821918, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'description4Copy',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Kick off the new school year in style! Join the <br>town hall for an exclusive evening celebrating <br>educators of all stripes.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 8, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'EVENT4COPY',
                type: 'group',
                rect: ['1413px', '111','640','259','auto', 'auto'],
                opacity: 0.2,
                c: [
                {
                    id: 'header4COPY',
                    type: 'text',
                    rect: ['0px', '-6px','640px','auto','auto', 'auto'],
                    text: "September 7, 2014 - 07:00 pm<br>Teacher Appreciation Night",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "700", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'description4COPY',
                    type: 'text',
                    rect: ['0px', '78px','640px','181px','auto', 'auto'],
                    text: "Kick off the new school year in style! Join the <br>town hall for an exclusive evening celebrating <br>educators of all stripes.",
                    align: "center",
                    font: ['Oswald, sans-serif', 34, "rgba(255,255,255,1.00)", "300", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_header2}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '34px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_headerCopy}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_EVENT2Copy}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0.2'],
                ["style", "left", '1465px']
            ],
            "${_EVENT4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.2'],
                ["style", "left", '1413px'],
                ["style", "top", '41px']
            ],
            "${_description}": [
                ["subproperty", "filter.grayscale", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "line-height", '36px'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_header4}": [
                ["style", "line-height", 'normal'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '0px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '28px'],
                ["subproperty", "filter.blur", '8.219178199768066px']
            ],
            "${_header4COPY}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '34px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_EVENT1}": [
                ["style", "top", '41px'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '134px']
            ],
            "${_descriptionCopy}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_EVENT3}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0.30000001192092896'],
                ["style", "left", '1414px']
            ],
            "${_header2Copy}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_headerCOPY}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '34px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_EVENT1COPY}": [
                ["style", "top", '41px'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.2'],
                ["style", "left", '1413px']
            ],
            "${_descriptionCOPY}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '34px'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["subproperty", "filter.grayscale", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '900px'],
                ["style", "height", '250px'],
                ["style", "overflow", 'hidden']
            ],
            "${_description2Copy}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_header}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_header4Copy}": [
                ["style", "line-height", '38px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '-6px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_description4}": [
                ["style", "line-height", 'normal'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '28px'],
                ["subproperty", "filter.blur", '8px']
            ],
            "${_description2}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '34px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_description4Copy}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "font-size", '34px']
            ],
            "${_description4COPY}": [
                ["style", "line-height", '36px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '640px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'center'],
                ["style", "height", '181px'],
                ["style", "font-family", 'Oswald, sans-serif'],
                ["style", "font-size", '34px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_EVENT2}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0.2'],
                ["style", "left", '772px']
            ],
            "${_EVENT4COPY}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0.2'],
                ["style", "left", '-506px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36000,
            autoPlay: true,
            timeline: [
                { id: "eid146", tween: [ "style", "${_EVENT1COPY}", "opacity", '1', { fromValue: '0.2'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid60", tween: [ "style", "${_EVENT4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid69", tween: [ "style", "${_EVENT4}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_EVENT3}", "left", '773px', { fromValue: '1414px'}], position: 8000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_EVENT3}", "left", '133px', { fromValue: '773px'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid79", tween: [ "style", "${_EVENT3}", "left", '-502px', { fromValue: '133px'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid116", tween: [ "style", "${_EVENT3}", "left", '-1148px', { fromValue: '-502px'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid73", tween: [ "style", "${_EVENT2}", "left", '130px', { fromValue: '772px'}], position: 8000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "style", "${_EVENT2}", "left", '-507px', { fromValue: '130px'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid77", tween: [ "style", "${_EVENT2}", "left", '-1142px', { fromValue: '-507px'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid7", tween: [ "style", "${_EVENT1}", "left", '-507px', { fromValue: '134px'}], position: 8000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_EVENT1}", "left", '-1147px', { fromValue: '-507px'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "style", "${_EVENT1}", "left", '-1782px', { fromValue: '-1147px'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid142", tween: [ "style", "${_EVENT4}", "opacity", '1', { fromValue: '0.2'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_EVENT4}", "opacity", '0.3', { fromValue: '1'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid127", tween: [ "style", "${_EVENT2Copy}", "left", '772px', { fromValue: '1465px'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid70", tween: [ "style", "${_EVENT4}", "left", '773px', { fromValue: '1413px'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid76", tween: [ "style", "${_EVENT4}", "left", '138px', { fromValue: '773px'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid115", tween: [ "style", "${_EVENT4}", "left", '-508px', { fromValue: '138px'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid71", tween: [ "style", "${_EVENT1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid56", tween: [ "style", "${_EVENT1}", "display", 'block', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid136", tween: [ "style", "${_EVENT3}", "opacity", '0.2', { fromValue: '0.30000001192092896'}], position: 8000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid139", tween: [ "style", "${_EVENT3}", "opacity", '1', { fromValue: '0.2'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_EVENT3}", "opacity", '0.2', { fromValue: '1'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid138", tween: [ "style", "${_EVENT2}", "opacity", '1', { fromValue: '0.2'}], position: 8000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid140", tween: [ "style", "${_EVENT2}", "opacity", '0.2', { fromValue: '1'}], position: 17000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid135", tween: [ "style", "${_EVENT1}", "opacity", '0.2', { fromValue: '1'}], position: 8000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid119", tween: [ "style", "${_EVENT1COPY}", "display", 'block', { fromValue: 'none'}], position: 20250, duration: 0, easing: "easeOutCirc" },
                { id: "eid123", tween: [ "style", "${_EVENT1COPY}", "left", '778px', { fromValue: '1413px'}], position: 26000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid125", tween: [ "style", "${_EVENT1COPY}", "left", '132px', { fromValue: '778px'}], position: 35000, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid91", tween: [ "style", "${_EVENT4COPY}", "left", '-1146px', { fromValue: '-506px'}], position: 8000, duration: 1000, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-351089231");
