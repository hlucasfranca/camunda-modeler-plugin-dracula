/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/bpmn-js-extension/DraculaTheme.js":
/*!**************************************************!*\
  !*** ./client/bpmn-js-extension/DraculaTheme.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DraculaTheme)
/* harmony export */ });
/* harmony import */ var dmn_js_drd_lib_draw_DrdRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dmn-js-drd/lib/draw/DrdRenderer */ "./node_modules/dmn-js-drd/lib/draw/DrdRenderer.js");
/* harmony import */ var bpmn_js_lib_draw_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js/lib/draw/BpmnRenderUtil */ "./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js");








/**
 * @typedef {import('diagram-js/lib/core/ElementRegistry').default} ElementRegistry
 * @typedef {import('diagram-js/lib/core/EventBus').default} EventBus
 * @typedef {import('diagram-js/lib/core/Canvas').default} Canvas
 * @typedef {import('diagram-js/lib/draw/BaseRenderer').default} BaseRenderer
  
 */

/**
 * Correct hover targets in certain situations to improve diagram interaction.
 *
 * @param {ElementRegistry} elementRegistry
 * @param {EventBus} eventBus
 * @param {BaseRenderer} bpmnRenderer
 */




function DraculaTheme(
  modeling,
  commandStack,
  //drdRenderer,
 // config,
  eventBus,
  pathMap,
  styles,
  textRenderer,
  canvas,
  injector
) {
  let m = modeling;

  const self = this;

  // getFillColor.prototype = function(){
  //   console.log('getfillcolor');
  // }

  self.commandStack = commandStack;
  self.getFillColor = bpmn_js_lib_draw_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_1__.getFillColor;

  self.drdRenderer = new dmn_js_drd_lib_draw_DrdRenderer__WEBPACK_IMPORTED_MODULE_0__["default"]({},eventBus,pathMap,styles,textRenderer,canvas);
  debugger;

  function changeColors(event) {
    let a = (0,bpmn_js_lib_draw_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_1__.getFillColor)(event.element, "red");

    debugger;

    // const gfx = event.gfx;
    const element = event.element;
    const documentElement = document.documentElement;

    if (element && element.di) {
      const elementDi = element.di;

      if (!elementDi["background-color"]) {
        elementDi["background-color"] = getComputedStyle(documentElement).getPropertyValue("--color-white");
      }
      if (!elementDi["border-color"]) {
        elementDi["border-color"] = getComputedStyle(documentElement).getPropertyValue("--color-grey-225-10-35");
      }

      if (element.type == "label") {
        if (elementDi.label) {
          elementDi.label.set(
            "color",
            (element.di["border-color"] = getComputedStyle(documentElement).getPropertyValue("--color-grey-225-10-35"))
          );
        }
      }
    }
  }

  function restoreColors(event) {
    for (let planeElement of event.definitions.diagrams[0].plane.planeElement) {
      planeElement["border-color"] = "";
      planeElement["background-color"] = "";
    }
  }

  // function teste(event) {
  //   let container = canvas.getContainer();

  //   let cmEditorElement = document.querySelector(".cm-editor"); // Or whatever query you need

  //   if (cmEditorElement) {
  //     editorView = cmEditorElement.querySelector(".cm-content").cmView.view;
  //   }
  // }

  eventBus.on(
    ["shape.added", "render.shape", "render.connection", "shape.moved", "shape.changed", "element.changed"],
    1250,
    changeColors
  );

  // eventBus.on(
  //   ["propertiesPanel.attach", "propertiesPanel.detach"],
  //   1250,
  //   teste
  // );

  eventBus.on(["saveXML.start"], 1250, restoreColors);

  function teste(){
    console.log(this.handlers);
  }

  eventBus.on("diagram.init", function () {
    //delete self.commandStack._handlerMap['element.setColor'];
    //self.commandStack

    
    
    
  });
}

DraculaTheme.$inject = [
  "modeling",
  "commandStack",
//  "drdRenderer",
//  "config.drdRenderer",
  "eventBus",
  "pathMap",
  "styles",
  "textRenderer",
  "canvas",
  "injector"
];


/***/ }),

/***/ "./client/bpmn-js-extension/index.js":
/*!*******************************************!*\
  !*** ./client/bpmn-js-extension/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DraculaTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraculaTheme */ "./client/bpmn-js-extension/DraculaTheme.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __init__: [ 'DraculaTheme' ],
  DraculaTheme: ['type', _DraculaTheme__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});


/***/ }),

/***/ "./client/custom-renderer/CustomRenderer.js":
/*!**************************************************!*\
  !*** ./client/custom-renderer/CustomRenderer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomRenderer)
/* harmony export */ });
/* harmony import */ var bpmn_js_lib_draw_BpmnRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmn-js/lib/draw/BpmnRenderer */ "./node_modules/bpmn-js/lib/draw/BpmnRenderer.js");


const HIGH_PRIORITY = 1500;

const DEFAULT_COLORS = {
    defaultFillColor: "red",
    defaultStrokeColor: "green",
    defaultLabelColor: "green"
};

class CustomRenderer extends bpmn_js_lib_draw_BpmnRenderer__WEBPACK_IMPORTED_MODULE_0__["default"] {
  
  constructor(eventBus, textRenderer, canvas, styles, pathMap) {
    super(DEFAULT_COLORS, eventBus, styles, pathMap, canvas, textRenderer, HIGH_PRIORITY);
  }
}

CustomRenderer.$inject = [ 'eventBus', 'textRenderer', 'canvas', 'styles', 'pathMap' ];




/***/ }),

/***/ "./client/custom-renderer/index.js":
/*!*****************************************!*\
  !*** ./client/custom-renderer/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomRenderer */ "./client/custom-renderer/CustomRenderer.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __init__: [ 'CustomRenderer' ],
  CustomRenderer: ['type', _CustomRenderer__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});


/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js":
/*!*********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   black: () => (/* binding */ black),
/* harmony export */   getCirclePath: () => (/* binding */ getCirclePath),
/* harmony export */   getDi: () => (/* reexport safe */ _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi),
/* harmony export */   getDiamondPath: () => (/* binding */ getDiamondPath),
/* harmony export */   getFillColor: () => (/* binding */ getFillColor),
/* harmony export */   getLabelColor: () => (/* binding */ getLabelColor),
/* harmony export */   getRectPath: () => (/* binding */ getRectPath),
/* harmony export */   getRoundRectPath: () => (/* binding */ getRoundRectPath),
/* harmony export */   getSemantic: () => (/* reexport safe */ _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject),
/* harmony export */   getStrokeColor: () => (/* binding */ getStrokeColor),
/* harmony export */   isCollection: () => (/* binding */ isCollection),
/* harmony export */   isThrowEvent: () => (/* binding */ isThrowEvent),
/* harmony export */   isTypedEvent: () => (/* binding */ isTypedEvent)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/RenderUtil */ "./node_modules/diagram-js/lib/util/RenderUtil.js");







/**
 * @typedef {import('../model').ModdleElement} ModdleElement
 * @typedef {import('../model').Element} Element
 *
 * @typedef {import('../model').ShapeLike} ShapeLike
 */

// re-export for compatibility



var black = 'hsl(225, 10%, 15%)';

// element utils //////////////////////

/**
 * Checks if eventDefinition of the given element matches with semantic type.
 *
 * @param {ModdleElement} event
 * @param {string} eventDefinitionType
 *
 * @return {boolean}
 */
function isTypedEvent(event, eventDefinitionType) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.some)(event.eventDefinitions, function(definition) {
    return definition.$type === eventDefinitionType;
  });
}

/**
 * Check if element is a throw event.
 *
 * @param {ModdleElement} event
 *
 * @return {boolean}
 */
function isThrowEvent(event) {
  return (event.$type === 'bpmn:IntermediateThrowEvent') || (event.$type === 'bpmn:EndEvent');
}

/**
 * Check if element is a throw event.
 *
 * @param {ModdleElement} element
 *
 * @return {boolean}
 */
function isCollection(element) {
  var dataObject = element.dataObjectRef;

  return element.isCollection || (dataObject && dataObject.isCollection);
}


// color access //////////////////////

/**
 * @param {Element} element
 * @param {string} [defaultColor]
 *
 * @return {string}
 */
function getFillColor(element, defaultColor) {
  var di = (0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element);

  return di.get('color:background-color') || di.get('bioc:fill') || defaultColor || 'white';
}

/**
 * @param {Element} element
 * @param {string} [defaultColor]
 *
 * @return {string}
 */
function getStrokeColor(element, defaultColor) {
  var di = (0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element);

  return di.get('color:border-color') || di.get('bioc:stroke') || defaultColor || black;
}

/**
 * @param {Element} element
 * @param {string} [defaultColor]
 * @param {string} [defaultStrokeColor]
 *
 * @return {string}
 */
function getLabelColor(element, defaultColor, defaultStrokeColor) {
  var di = (0,_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element),
      label = di.get('label');

  return label && label.get('color:color') || defaultColor ||
    getStrokeColor(element, defaultStrokeColor);
}

// cropping path customizations //////////////////////

/**
 * @param {ShapeLike} shape
 *
 * @return {string} path
 */
function getCirclePath(shape) {

  var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;

  var circlePath = [
    [ 'M', cx, cy ],
    [ 'm', 0, -radius ],
    [ 'a', radius, radius, 0, 1, 1, 0, 2 * radius ],
    [ 'a', radius, radius, 0, 1, 1, 0, -2 * radius ],
    [ 'z' ]
  ];

  return (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_2__.componentsToPath)(circlePath);
}

/**
 * @param {ShapeLike} shape
 * @param {number} [borderRadius]
 *
 * @return {string} path
 */
function getRoundRectPath(shape, borderRadius) {

  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var roundRectPath = [
    [ 'M', x + borderRadius, y ],
    [ 'l', width - borderRadius * 2, 0 ],
    [ 'a', borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius ],
    [ 'l', 0, height - borderRadius * 2 ],
    [ 'a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius ],
    [ 'l', borderRadius * 2 - width, 0 ],
    [ 'a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius ],
    [ 'l', 0, borderRadius * 2 - height ],
    [ 'a', borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius ],
    [ 'z' ]
  ];

  return (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_2__.componentsToPath)(roundRectPath);
}

/**
 * @param {ShapeLike} shape
 *
 * @return {string} path
 */
function getDiamondPath(shape) {

  var width = shape.width,
      height = shape.height,
      x = shape.x,
      y = shape.y,
      halfWidth = width / 2,
      halfHeight = height / 2;

  var diamondPath = [
    [ 'M', x + halfWidth, y ],
    [ 'l', halfWidth, halfHeight ],
    [ 'l', -halfWidth, halfHeight ],
    [ 'l', -halfWidth, -halfHeight ],
    [ 'z' ]
  ];

  return (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_2__.componentsToPath)(diamondPath);
}

/**
 * @param {ShapeLike} shape
 *
 * @return {string} path
 */
function getRectPath(shape) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var rectPath = [
    [ 'M', x, y ],
    [ 'l', width, 0 ],
    [ 'l', 0, height ],
    [ 'l', -width, 0 ],
    [ 'z' ]
  ];

  return (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_2__.componentsToPath)(rectPath);
}


/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/BpmnRenderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/BpmnRenderer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BpmnRenderer)
/* harmony export */ });
/* harmony import */ var inherits_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inherits-browser */ "./node_modules/inherits-browser/dist/index.es.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/draw/BaseRenderer */ "./node_modules/diagram-js/lib/draw/BaseRenderer.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BpmnRenderUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/util/RenderUtil */ "./node_modules/diagram-js/lib/util/RenderUtil.js");
/* harmony import */ var _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BpmnRenderUtil */ "./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! diagram-js/lib/util/SvgTransformUtil */ "./node_modules/diagram-js/lib/util/SvgTransformUtil.js");
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ids */ "./node_modules/ids/dist/index.esm.js");


























var RENDERER_IDS = new ids__WEBPACK_IMPORTED_MODULE_0__["default"]();

var TASK_BORDER_RADIUS = 10;
var INNER_OUTER_DIST = 3;

var DEFAULT_FILL_OPACITY = .95,
    HIGH_FILL_OPACITY = .35;

var ELEMENT_LABEL_DISTANCE = 10;

/**
 * @typedef { Partial<{
 *   defaultFillColor: string,
 *   defaultStrokeColor: string,
 *   defaultLabelColor: string
 * }> } BpmnRendererConfig
 */

/**
 * @typedef { import('../model/Types').Element } Element
 */

/**
 * A renderer for BPMN elements
 *
 * @param {BpmnRendererConfig} config
 * @param {import('diagram-js/lib/core/EventBus').default} eventBus
 * @param {import('diagram-js/lib/draw/Styles').default} styles
 * @param {import('./PathMap').default} pathMap
 * @param {import('diagram-js/lib/core/Canvas').default} canvas
 * @param {import('./TextRenderer').default} textRenderer
 * @param {number} [priority]
 */
function BpmnRenderer(
    config, eventBus, styles, pathMap,
    canvas, textRenderer, priority) {

  diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, eventBus, priority);

  var defaultFillColor = config && config.defaultFillColor,
      defaultStrokeColor = config && config.defaultStrokeColor,
      defaultLabelColor = config && config.defaultLabelColor;

  var rendererId = RENDERER_IDS.next();

  var markers = {};

  function shapeStyle(attrs) {
    return styles.computeStyle(attrs, {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      stroke: _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.black,
      strokeWidth: 2,
      fill: 'white'
    });
  }

  function lineStyle(attrs) {
    return styles.computeStyle(attrs, [ 'no-fill' ], {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      stroke: _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.black,
      strokeWidth: 2
    });
  }

  function addMarker(id, options) {
    var {
      ref = { x: 0, y: 0 },
      scale = 1,
      element
    } = options;

    var marker = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('marker', {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto'
    });

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(marker, element);

    var defs = (0,min_dom__WEBPACK_IMPORTED_MODULE_4__.query)('defs', canvas._svg);

    if (!defs) {
      defs = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('defs');

      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(canvas._svg, defs);
    }

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(defs, marker);

    markers[id] = marker;
  }

  function colorEscape(str) {

    // only allow characters and numbers
    return str.replace(/[^0-9a-zA-Z]+/g, '_');
  }

  function marker(type, fill, stroke) {
    var id = type + '-' + colorEscape(fill) + '-' + colorEscape(stroke) + '-' + rendererId;

    if (!markers[id]) {
      createMarker(id, type, fill, stroke);
    }

    return 'url(#' + id + ')';
  }

  function createMarker(id, type, fill, stroke) {

    if (type === 'sequenceflow-end') {
      var sequenceflowEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'M 1 5 L 11 10 L 1 15 Z',
        ...shapeStyle({
          fill: stroke,
          stroke: stroke,
          strokeWidth: 1
        })
      });

      addMarker(id, {
        element: sequenceflowEnd,
        ref: { x: 11, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'messageflow-start') {
      var messageflowStart = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('circle', {
        cx: 6,
        cy: 6,
        r: 3.5,
        ...shapeStyle({
          fill: fill,
          stroke: stroke,
          strokeWidth: 1,

          // fix for safari / chrome / firefox bug not correctly
          // resetting stroke dash array
          strokeDasharray: [ 10000, 1 ]
        })
      });

      addMarker(id, {
        element: messageflowStart,
        ref: { x: 6, y: 6 }
      });
    }

    if (type === 'messageflow-end') {
      var messageflowEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'm 1 5 l 0 -3 l 7 3 l -7 3 z',
        ...shapeStyle({
          fill: fill,
          stroke: stroke,
          strokeWidth: 1,

          // fix for safari / chrome / firefox bug not correctly
          // resetting stroke dash array
          strokeDasharray: [ 10000, 1 ]
        })
      });

      addMarker(id, {
        element: messageflowEnd,
        ref: { x: 8.5, y: 5 }
      });
    }

    if (type === 'association-start') {
      var associationStart = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'M 11 5 L 1 10 L 11 15',
        ...lineStyle({
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5,

          // fix for safari / chrome / firefox bug not correctly
          // resetting stroke dash array
          strokeDasharray: [ 10000, 1 ]
        })
      });

      addMarker(id, {
        element: associationStart,
        ref: { x: 1, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'association-end') {
      var associationEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'M 1 5 L 11 10 L 1 15',
        ...lineStyle({
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5,

          // fix for safari / chrome / firefox bug not correctly
          // resetting stroke dash array
          strokeDasharray: [ 10000, 1 ]
        })
      });

      addMarker(id, {
        element: associationEnd,
        ref: { x: 11, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'conditional-flow-marker') {
      var conditionalFlowMarker = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'M 0 10 L 8 6 L 16 10 L 8 14 Z',
        ...shapeStyle({
          fill: fill,
          stroke: stroke
        })
      });

      addMarker(id, {
        element: conditionalFlowMarker,
        ref: { x: -1, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'conditional-default-flow-marker') {
      var defaultFlowMarker = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
        d: 'M 6 4 L 10 16',
        ...shapeStyle({
          stroke: stroke
        })
      });

      addMarker(id, {
        element: defaultFlowMarker,
        ref: { x: 0, y: 10 },
        scale: 0.5
      });
    }
  }

  function drawCircle(parentGfx, width, height, offset, attrs) {

    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_5__.isObject)(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = shapeStyle(attrs);

    if (attrs.fill === 'none') {
      delete attrs.fillOpacity;
    }

    var cx = width / 2,
        cy = height / 2;

    var circle = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('circle', {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4 - offset),
      ...attrs
    });

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, circle);

    return circle;
  }

  function drawRect(parentGfx, width, height, r, offset, attrs) {

    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_5__.isObject)(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = shapeStyle(attrs);

    var rect = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('rect', {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r,
      ...attrs
    });

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, rect);

    return rect;
  }

  function drawDiamond(parentGfx, width, height, attrs) {

    var x_2 = width / 2;
    var y_2 = height / 2;

    var points = [
      { x: x_2, y: 0 },
      { x: width, y: y_2 },
      { x: x_2, y: height },
      { x: 0, y: y_2 }
    ];

    var pointsString = points.map(function(point) {
      return point.x + ',' + point.y;
    }).join(' ');

    attrs = shapeStyle(attrs);

    var polygon = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('polygon', {
      ...attrs,
      points: pointsString
    });

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, polygon);

    return polygon;
  }

  /**
   * @param {SVGElement} parentGfx
   * @param {Point[]} waypoints
   * @param {any} attrs
   * @param {number} [radius]
   *
   * @return {SVGElement}
   */
  function drawLine(parentGfx, waypoints, attrs, radius) {
    attrs = lineStyle(attrs);

    var line = (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__.createLine)(waypoints, attrs, radius);

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, line);

    return line;
  }

  /**
   * @param {SVGElement} parentGfx
   * @param {Point[]} waypoints
   * @param {any} attrs
   *
   * @return {SVGElement}
   */
  function drawConnectionSegments(parentGfx, waypoints, attrs) {
    return drawLine(parentGfx, waypoints, attrs, 5);
  }

  function drawPath(parentGfx, d, attrs) {

    attrs = lineStyle(attrs);

    var path = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.create)('path', {
      ...attrs,
      d
    });

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, path);

    return path;
  }

  function drawMarker(type, parentGfx, path, attrs) {
    return drawPath(parentGfx, path, (0,min_dash__WEBPACK_IMPORTED_MODULE_5__.assign)({ 'data-marker': type }, attrs));
  }

  function renderer(type) {
    return handlers[type];
  }

  function as(type) {
    return function(parentGfx, element, options) {
      return renderer(type)(parentGfx, element, options);
    };
  }

  function renderEventContent(element, parentGfx) {

    var event = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);
    var isThrowing = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isThrowEvent)(event);

    if (event.eventDefinitions && event.eventDefinitions.length > 1) {
      if (event.parallelMultiple) {
        return renderer('bpmn:ParallelMultipleEventDefinition')(parentGfx, element, isThrowing);
      }
      else {
        return renderer('bpmn:MultipleEventDefinition')(parentGfx, element, isThrowing);
      }
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:MessageEventDefinition')) {
      return renderer('bpmn:MessageEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:TimerEventDefinition')) {
      return renderer('bpmn:TimerEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:ConditionalEventDefinition')) {
      return renderer('bpmn:ConditionalEventDefinition')(parentGfx, element);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:SignalEventDefinition')) {
      return renderer('bpmn:SignalEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:EscalationEventDefinition')) {
      return renderer('bpmn:EscalationEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:LinkEventDefinition')) {
      return renderer('bpmn:LinkEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:ErrorEventDefinition')) {
      return renderer('bpmn:ErrorEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:CancelEventDefinition')) {
      return renderer('bpmn:CancelEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:CompensateEventDefinition')) {
      return renderer('bpmn:CompensateEventDefinition')(parentGfx, element, isThrowing);
    }

    if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isTypedEvent)(event, 'bpmn:TerminateEventDefinition')) {
      return renderer('bpmn:TerminateEventDefinition')(parentGfx, element, isThrowing);
    }

    return null;
  }

  function renderLabel(parentGfx, label, options) {

    options = (0,min_dash__WEBPACK_IMPORTED_MODULE_5__.assign)({
      size: {
        width: 100
      }
    }, options);

    var text = textRenderer.createText(label || '', options);

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.classes)(text).add('djs-label');

    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.append)(parentGfx, text);

    return text;
  }

  function renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

    return renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 7,
      style: {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getLabelColor)(element, defaultLabelColor, defaultStrokeColor)
      }
    });
  }

  function renderExternalLabel(parentGfx, element) {

    var box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y
    };

    return renderLabel(parentGfx, (0,_util_LabelUtil__WEBPACK_IMPORTED_MODULE_8__.getLabel)(element), {
      box: box,
      fitBox: true,
      style: (0,min_dash__WEBPACK_IMPORTED_MODULE_5__.assign)(
        {},
        textRenderer.getExternalStyle(),
        {
          fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getLabelColor)(element, defaultLabelColor, defaultStrokeColor)
        }
      )
    });
  }

  function renderLaneLabel(parentGfx, text, element) {
    var textBox = renderLabel(parentGfx, text, {
      box: {
        height: 30,
        width: element.height
      },
      align: 'center-middle',
      style: {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getLabelColor)(element, defaultLabelColor, defaultStrokeColor)
      }
    });

    var top = -1 * element.height;

    (0,diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_9__.transform)(textBox, 0, -top, 270);
  }

  var handlers = this.handlers = {
    'bpmn:Event': function(parentGfx, element, attrs) {

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawCircle(parentGfx, element.width, element.height, attrs);
    },
    'bpmn:StartEvent': function(parentGfx, element, options) {
      var attrs = {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      };

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      if (!semantic.isInterrupting) {
        attrs = {
          strokeDasharray: '6',
          fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
        };
      }

      var circle = renderer('bpmn:Event')(parentGfx, element, attrs);

      if (!options || options.renderIcon !== false) {
        renderEventContent(element, parentGfx);
      }

      return circle;
    },
    'bpmn:MessageEventDefinition': function(parentGfx, element, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MESSAGE', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.235,
          my: 0.315
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor) : (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor);
      var stroke = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor) : (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      var messagePath = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: stroke
      });

      return messagePath;
    },
    'bpmn:TimerEventDefinition': function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 0.2 * element.height, {
        strokeWidth: 2,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var pathData = pathMap.getScaledPath('EVENT_TIMER_WH', {
        xScaleFactor: 0.75,
        yScaleFactor: 0.75,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.5,
          my: 0.5
        }
      });

      drawPath(parentGfx, pathData, {
        strokeWidth: 2,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      for (var i = 0;i < 12; i++) {

        var linePathData = pathMap.getScaledPath('EVENT_TIMER_LINE', {
          xScaleFactor: 0.75,
          yScaleFactor: 0.75,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.5,
            my: 0.5
          }
        });

        var width = element.width / 2;
        var height = element.height / 2;

        drawPath(parentGfx, linePathData, {
          strokeWidth: 1,
          transform: 'rotate(' + (i * 30) + ',' + height + ',' + width + ')',
          stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
        });
      }

      return circle;
    },
    'bpmn:EscalationEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ESCALATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:ConditionalEventDefinition': function(parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_CONDITIONAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.222
        }
      });

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:LinkEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_LINK', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.57,
          my: 0.263
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:ErrorEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ERROR', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.2,
          my: 0.722
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:CancelEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_CANCEL_45', {
        xScaleFactor: 1.0,
        yScaleFactor: 1.0,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.638,
          my: -0.055
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      var path = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });

      (0,diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_9__.rotate)(path, 45);

      return path;
    },
    'bpmn:CompensateEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.22,
          my: 0.5
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:SignalEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_SIGNAL', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:MultipleEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MULTIPLE', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.222,
          my: 0.36
        }
      });

      var fill = isThrowing ? (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill
      });
    },
    'bpmn:ParallelMultipleEventDefinition': function(parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_PARALLEL_MULTIPLE', {
        xScaleFactor: 1.2,
        yScaleFactor: 1.2,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.458,
          my: 0.194
        }
      });

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(event, defaultStrokeColor)
      });
    },
    'bpmn:EndEvent': function(parentGfx, element, options) {
      var circle = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 4,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      if (!options || options.renderIcon !== false) {
        renderEventContent(element, parentGfx, true);
      }

      return circle;
    },
    'bpmn:TerminateEventDefinition': function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 8, {
        strokeWidth: 4,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return circle;
    },
    'bpmn:IntermediateEvent': function(parentGfx, element, options) {
      var outer = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 1.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      /* inner */
      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, {
        strokeWidth: 1.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, 'none'),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      if (!options || options.renderIcon !== false) {
        renderEventContent(element, parentGfx);
      }

      return outer;
    },
    'bpmn:IntermediateCatchEvent': as('bpmn:IntermediateEvent'),
    'bpmn:IntermediateThrowEvent': as('bpmn:IntermediateEvent'),

    'bpmn:Activity': function(parentGfx, element, attrs) {

      attrs = attrs || {};

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, attrs);
    },

    'bpmn:Task': function(parentGfx, element) {
      var attrs = {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      };

      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);

      renderEmbeddedLabel(parentGfx, element, 'center-middle');
      attachTaskMarkers(parentGfx, element);

      return rect;
    },
    'bpmn:ServiceTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathDataBG = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 12,
          y: 18
        }
      });

      /* service bg */ drawPath(parentGfx, pathDataBG, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var fillPathData = pathMap.getScaledPath('TASK_TYPE_SERVICE_FILL', {
        abspos: {
          x: 17.2,
          y: 18
        }
      });

      /* service fill */ drawPath(parentGfx, fillPathData, {
        strokeWidth: 0,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor)
      });

      var pathData = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 17,
          y: 22
        }
      });

      /* service */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:UserTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var x = 15;
      var y = 12;

      var pathData = pathMap.getScaledPath('TASK_TYPE_USER_1', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user path */ drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var pathData2 = pathMap.getScaledPath('TASK_TYPE_USER_2', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user2 path */ drawPath(parentGfx, pathData2, {
        strokeWidth: 0.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var pathData3 = pathMap.getScaledPath('TASK_TYPE_USER_3', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user3 path */ drawPath(parentGfx, pathData3, {
        strokeWidth: 0.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:ManualTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_MANUAL', {
        abspos: {
          x: 17,
          y: 15
        }
      });

      /* manual path */ drawPath(parentGfx, pathData, {
        strokeWidth: 0.5, // 0.25,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:SendTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: 21,
        containerHeight: 14,
        position: {
          mx: 0.285,
          my: 0.357
        }
      });

      /* send path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor)
      });

      return task;
    },
    'bpmn:ReceiveTask' : function(parentGfx, element) {
      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData;

      if (semantic.instantiate) {
        drawCircle(parentGfx, 28, 28, 20 * 0.22, { strokeWidth: 1 });

        pathData = pathMap.getScaledPath('TASK_TYPE_INSTANTIATING_SEND', {
          abspos: {
            x: 7.77,
            y: 9.52
          }
        });
      } else {

        pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: 21,
          containerHeight: 14,
          position: {
            mx: 0.3,
            my: 0.4
          }
        });
      }

      /* receive path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:ScriptTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_SCRIPT', {
        abspos: {
          x: 15,
          y: 20
        }
      });

      /* script path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:BusinessRuleTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var headerPathData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_HEADER', {
        abspos: {
          x: 8,
          y: 8
        }
      });

      var businessHeaderPath = drawPath(parentGfx, headerPathData);
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.attr)(businessHeaderPath, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, '#aaaaaa'),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var headerData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_MAIN', {
        abspos: {
          x: 8,
          y: 8
        }
      });

      var businessPath = drawPath(parentGfx, headerData);
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.attr)(businessPath, {
        strokeWidth: 1,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:SubProcess': function(parentGfx, element, attrs) {
      attrs = {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        ...attrs
      };

      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);

      var expanded = (0,_util_DiUtil__WEBPACK_IMPORTED_MODULE_10__.isExpanded)(element);

      if ((0,_util_DiUtil__WEBPACK_IMPORTED_MODULE_10__.isEventSubProcess)(element)) {
        (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.attr)(rect, {
          strokeDasharray: '0, 5.5',
          strokeWidth: 2.5
        });
      }

      renderEmbeddedLabel(parentGfx, element, expanded ? 'center-top' : 'center-middle');

      if (expanded) {
        attachTaskMarkers(parentGfx, element);
      } else {
        attachTaskMarkers(parentGfx, element, [ 'SubProcessMarker' ]);
      }

      return rect;
    },
    'bpmn:AdHocSubProcess': function(parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element);
    },
    'bpmn:Transaction': function(parentGfx, element) {
      var outer = renderer('bpmn:SubProcess')(parentGfx, element, { strokeWidth: 1.5 });

      var innerAttrs = styles.style([ 'no-fill', 'no-events' ], {
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        strokeWidth: 1.5
      });

      /* inner path */ drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS - 3, INNER_OUTER_DIST, innerAttrs);

      return outer;
    },
    'bpmn:CallActivity': function(parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element, {
        strokeWidth: 5
      });
    },
    'bpmn:Participant': function(parentGfx, element) {

      var strokeWidth = 1.5;

      var attrs = {
        fillOpacity: DEFAULT_FILL_OPACITY,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        strokeWidth
      };

      var lane = renderer('bpmn:Lane')(parentGfx, element, attrs);

      var expandedPool = (0,_util_DiUtil__WEBPACK_IMPORTED_MODULE_10__.isExpanded)(element);

      if (expandedPool) {
        drawLine(parentGfx, [
          { x: 30, y: 0 },
          { x: 30, y: element.height }
        ], {
          stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
          strokeWidth
        });
        var text = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element).name;
        renderLaneLabel(parentGfx, text, element);
      } else {

        // collapsed pool draw text inline
        var text2 = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element).name;
        renderLabel(parentGfx, text2, {
          box: element, align: 'center-middle',
          style: {
            fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getLabelColor)(element, defaultLabelColor, defaultStrokeColor)
          }
        });
      }

      var participantMultiplicity = !!((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element).participantMultiplicity);

      if (participantMultiplicity) {
        renderer('ParticipantMultiplicityMarker')(parentGfx, element);
      }

      return lane;
    },
    'bpmn:Lane': function(parentGfx, element, attrs) {
      var rect = drawRect(parentGfx, element.width, element.height, 0, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        fillOpacity: HIGH_FILL_OPACITY,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        strokeWidth: 1.5,
        ...attrs
      });

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      if (semantic.$type === 'bpmn:Lane') {
        var text = semantic.name;
        renderLaneLabel(parentGfx, text, element);
      }

      return rect;
    },
    'bpmn:InclusiveGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      /* circle path */
      drawCircle(parentGfx, element.width, element.height, element.height * 0.24, {
        strokeWidth: 2.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:ExclusiveGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_EXCLUSIVE', {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.32,
          my: 0.3
        }
      });

      if (((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getDi)(element).isMarkerVisible)) {
        drawPath(parentGfx, pathData, {
          strokeWidth: 1,
          fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
          stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
        });
      }

      return diamond;
    },
    'bpmn:ComplexGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_COMPLEX', {
        xScaleFactor: 0.5,
        yScaleFactor:0.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.26
        }
      });

      /* complex path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:ParallelGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
        xScaleFactor: 0.6,
        yScaleFactor:0.6,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.2
        }
      });

      /* parallel path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:EventBasedGateway': function(parentGfx, element) {

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      /* outer circle path */ drawCircle(parentGfx, element.width, element.height, element.height * 0.20, {
        strokeWidth: 1,
        fill: 'none',
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var type = semantic.eventGatewayType;
      var instantiate = !!semantic.instantiate;

      function drawEvent() {

        var pathData = pathMap.getScaledPath('GATEWAY_EVENT_BASED', {
          xScaleFactor: 0.18,
          yScaleFactor: 0.18,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.36,
            my: 0.44
          }
        });

        /* event path */ drawPath(parentGfx, pathData, {
          strokeWidth: 2,
          fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, 'none'),
          stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
        });
      }

      if (type === 'Parallel') {

        var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
          xScaleFactor: 0.4,
          yScaleFactor:0.4,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.474,
            my: 0.296
          }
        });

        drawPath(parentGfx, pathData, {
          strokeWidth: 1,
          fill: 'none'
        });
      } else if (type === 'Exclusive') {

        if (!instantiate) {
          drawCircle(parentGfx, element.width, element.height, element.height * 0.26, {
            strokeWidth: 1,
            fill: 'none',
            stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
          });
        }

        drawEvent();
      }


      return diamond;
    },
    'bpmn:Gateway': function(parentGfx, element) {
      return drawDiamond(parentGfx, element.width, element.height, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'bpmn:SequenceFlow': function(parentGfx, element) {
      var fill = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      var path = drawConnectionSegments(parentGfx, element.waypoints, {
        markerEnd: marker('sequenceflow-end', fill, stroke),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var sequenceFlow = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      var source;

      if (element.source) {
        source = element.source.businessObject;

        // conditional flow marker
        if (sequenceFlow.conditionExpression && source.$instanceOf('bpmn:Activity')) {
          (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.attr)(path, {
            markerStart: marker('conditional-flow-marker', fill, stroke)
          });
        }

        // default marker
        if (source.default && (source.$instanceOf('bpmn:Gateway') || source.$instanceOf('bpmn:Activity')) &&
            source.default === sequenceFlow) {
          (0,tiny_svg__WEBPACK_IMPORTED_MODULE_3__.attr)(path, {
            markerStart: marker('conditional-default-flow-marker', fill, stroke)
          });
        }
      }

      return path;
    },
    'bpmn:Association': function(parentGfx, element, attrs) {

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      var fill = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      attrs = {
        strokeDasharray: '0, 5',
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        ...attrs
      };

      if (semantic.associationDirection === 'One' ||
          semantic.associationDirection === 'Both') {
        attrs.markerEnd = marker('association-end', fill, stroke);
      }

      if (semantic.associationDirection === 'Both') {
        attrs.markerStart = marker('association-start', fill, stroke);
      }

      return drawConnectionSegments(parentGfx, element.waypoints, attrs);
    },
    'bpmn:DataInputAssociation': function(parentGfx, element) {
      var fill = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:DataOutputAssociation': function(parentGfx, element) {
      var fill = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:MessageFlow': function(parentGfx, element) {

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element),
          di = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getDi)(element);

      var fill = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
          stroke = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor);

      var path = drawConnectionSegments(parentGfx, element.waypoints, {
        markerEnd: marker('messageflow-end', fill, stroke),
        markerStart: marker('messageflow-start', fill, stroke),
        strokeDasharray: '10, 11',
        strokeWidth: 1.5,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      if (semantic.messageRef) {
        var midPoint = path.getPointAtLength(path.getTotalLength() / 2);

        var markerPathData = pathMap.getScaledPath('MESSAGE_FLOW_MARKER', {
          abspos: {
            x: midPoint.x,
            y: midPoint.y
          }
        });

        var messageAttrs = { strokeWidth: 1 };

        if (di.messageVisibleKind === 'initiating') {
          messageAttrs.fill = 'white';
          messageAttrs.stroke = _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.black;
        } else {
          messageAttrs.fill = '#888';
          messageAttrs.stroke = 'white';
        }

        var message = drawPath(parentGfx, markerPathData, messageAttrs);

        var labelText = semantic.messageRef.name;
        var label = renderLabel(parentGfx, labelText, {
          align: 'center-top',
          fitBox: true,
          style: {
            fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultLabelColor, defaultStrokeColor)
          }
        });

        var messageBounds = message.getBBox(),
            labelBounds = label.getBBox();

        var translateX = midPoint.x - labelBounds.width / 2,
            translateY = midPoint.y + messageBounds.height / 2 + ELEMENT_LABEL_DISTANCE;

        (0,diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_9__.transform)(label, translateX, translateY, 0);

      }

      return path;
    },
    'bpmn:DataObject': function(parentGfx, element) {
      var pathData = pathMap.getScaledPath('DATA_OBJECT_PATH', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.474,
          my: 0.296
        }
      });

      var elementObject = drawPath(parentGfx, pathData, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

      if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.isCollection)(semantic)) {
        renderDataItemCollection(parentGfx, element);
      }

      return elementObject;
    },
    'bpmn:DataObjectReference': as('bpmn:DataObject'),
    'bpmn:DataInput': function(parentGfx, element) {

      var arrowPathData = pathMap.getRawPath('DATA_ARROW');

      // page
      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);

      /* input arrow path */ drawPath(parentGfx, arrowPathData, { strokeWidth: 1 });

      return elementObject;
    },
    'bpmn:DataOutput': function(parentGfx, element) {
      var arrowPathData = pathMap.getRawPath('DATA_ARROW');

      // page
      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);

      /* output arrow path */ drawPath(parentGfx, arrowPathData, {
        strokeWidth: 1,
        fill: _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.black
      });

      return elementObject;
    },
    'bpmn:DataStoreReference': function(parentGfx, element) {
      var DATA_STORE_PATH = pathMap.getScaledPath('DATA_STORE', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0,
          my: 0.133
        }
      });

      var elementStore = drawPath(parentGfx, DATA_STORE_PATH, {
        strokeWidth: 2,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      return elementStore;
    },
    'bpmn:BoundaryEvent': function(parentGfx, element, options) {

      var semantic = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element),
          cancel = semantic.cancelActivity;

      var attrs = {
        strokeWidth: 1.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      };

      if (!cancel) {
        attrs.strokeDasharray = '6';
      }

      // apply fillOpacity
      var outerAttrs = {
        ...attrs,
        fillOpacity: 1
      };

      // apply no-fill
      var innerAttrs = {
        ...attrs,
        fill: 'none'
      };

      var outer = renderer('bpmn:Event')(parentGfx, element, outerAttrs);

      /* inner path */ drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, innerAttrs);

      if (!options || options.renderIcon !== false) {
        renderEventContent(element, parentGfx);
      }

      return outer;
    },
    'bpmn:Group': function(parentGfx, element) {
      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, {
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        strokeWidth: 1.5,
        strokeDasharray: '10,6,0,6',
        fill: 'none',
        pointerEvents: 'none'
      });
    },
    'label': function(parentGfx, element) {
      return renderExternalLabel(parentGfx, element);
    },
    'bpmn:TextAnnotation': function(parentGfx, element) {
      var textElement = drawRect(parentGfx, element.width, element.height, 0, 0, {
        'fill': 'none',
        'stroke': 'none'
      });

      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });

      drawPath(parentGfx, textPathData, {
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      var text = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element).text || '';
      renderLabel(parentGfx, text, {
        box: element,
        align: 'left-top',
        padding: 7,
        style: {
          fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getLabelColor)(element, defaultLabelColor, defaultStrokeColor)
        }
      });

      return textElement;
    },
    'ParticipantMultiplicityMarker': function(parentGfx, element) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2) / element.width),
          my: (element.height - 15) / element.height
        }
      });

      drawMarker('participant-multiplicity', parentGfx, markerPath, {
        strokeWidth: 2,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'SubProcessMarker': function(parentGfx, element) {
      var markerRect = drawRect(parentGfx, 14, 14, 0, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });

      // Process marker is placed in the middle of the box
      // therefore fixed values can be used here
      (0,diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_9__.translate)(markerRect, element.width / 2 - 7.5, element.height - 20);

      var markerPath = pathMap.getScaledPath('MARKER_SUB_PROCESS', {
        xScaleFactor: 1.5,
        yScaleFactor: 1.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 - 7.5) / element.width,
          my: (element.height - 20) / element.height
        }
      });

      drawMarker('sub-process', parentGfx, markerPath, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'ParallelMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.parallel) / element.width),
          my: (element.height - 20) / element.height
        }
      });

      drawMarker('parallel', parentGfx, markerPath, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'SequentialMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_SEQUENTIAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.seq) / element.width),
          my: (element.height - 19) / element.height
        }
      });

      drawMarker('sequential', parentGfx, markerPath, {
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'CompensationMarker': function(parentGfx, element, position) {
      var markerMath = pathMap.getScaledPath('MARKER_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.compensation) / element.width),
          my: (element.height - 13) / element.height
        }
      });

      drawMarker('compensation', parentGfx, markerMath, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    },
    'LoopMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_LOOP', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.loop) / element.width),
          my: (element.height - 7) / element.height
        }
      });

      drawMarker('loop', parentGfx, markerPath, {
        strokeWidth: 1.5,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getFillColor)(element, defaultFillColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        strokeMiterlimit: 0.5
      });
    },
    'AdhocMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_ADHOC', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.adhoc) / element.width),
          my: (element.height - 15) / element.height
        }
      });

      drawMarker('adhoc', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor),
        stroke: (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getStrokeColor)(element, defaultStrokeColor)
      });
    }
  };

  function attachTaskMarkers(parentGfx, element, taskMarkers) {
    var obj = (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.getBusinessObject)(element);

    var subprocess = taskMarkers && taskMarkers.indexOf('SubProcessMarker') !== -1;
    var position;

    if (subprocess) {
      position = {
        seq: -21,
        parallel: -22,
        compensation: -42,
        loop: -18,
        adhoc: 10
      };
    } else {
      position = {
        seq: -3,
        parallel: -6,
        compensation: -27,
        loop: 0,
        adhoc: 10
      };
    }

    (0,min_dash__WEBPACK_IMPORTED_MODULE_5__.forEach)(taskMarkers, function(marker) {
      renderer(marker)(parentGfx, element, position);
    });

    if (obj.isForCompensation) {
      renderer('CompensationMarker')(parentGfx, element, position);
    }

    if (obj.$type === 'bpmn:AdHocSubProcess') {
      renderer('AdhocMarker')(parentGfx, element, position);
    }

    var loopCharacteristics = obj.loopCharacteristics,
        isSequential = loopCharacteristics && loopCharacteristics.isSequential;

    if (loopCharacteristics) {

      if (isSequential === undefined) {
        renderer('LoopMarker')(parentGfx, element, position);
      }

      if (isSequential === false) {
        renderer('ParallelMarker')(parentGfx, element, position);
      }

      if (isSequential === true) {
        renderer('SequentialMarker')(parentGfx, element, position);
      }
    }
  }

  function renderDataItemCollection(parentGfx, element) {

    var yPosition = (element.height - 18) / element.height;

    var pathData = pathMap.getScaledPath('DATA_OBJECT_COLLECTION_PATH', {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.33,
        my: yPosition
      }
    });

    /* collection path */ drawPath(parentGfx, pathData, {
      strokeWidth: 2
    });
  }


  // extension API, use at your own risk
  this._drawPath = drawPath;

  this._renderer = renderer;
}


(0,inherits_browser__WEBPACK_IMPORTED_MODULE_11__["default"])(BpmnRenderer, diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__["default"]);

BpmnRenderer.$inject = [
  'config.bpmnRenderer',
  'eventBus',
  'styles',
  'pathMap',
  'canvas',
  'textRenderer'
];


/**
 * @param {Element} element
 *
 * @return {boolean}
 */
BpmnRenderer.prototype.canRender = function(element) {
  return (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.is)(element, 'bpmn:BaseElement');
};

/**
 * Draw shape into parentGfx.
 *
 * @param {SVGElement} parentGfx
 * @param {Element} element
 *
 * @return {SVGElement} mainGfx
 */
BpmnRenderer.prototype.drawShape = function(parentGfx, element) {
  var type = element.type;
  var h = this._renderer(type);

  /* jshint -W040 */
  return h(parentGfx, element);
};

/**
 * Draw connection into parentGfx.
 *
 * @param {SVGElement} parentGfx
 * @param {Element} element
 *
 * @return {SVGElement} mainGfx
 */
BpmnRenderer.prototype.drawConnection = function(parentGfx, element) {
  var type = element.type;
  var h = this._renderer(type);

  /* jshint -W040 */
  return h(parentGfx, element);
};

/**
 * Get shape path.
 *
 * @param {Element} element
 *
 * @return {string} path
 */
BpmnRenderer.prototype.getShapePath = function(element) {

  if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.is)(element, 'bpmn:Event')) {
    return (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getCirclePath)(element);
  }

  if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.is)(element, 'bpmn:Activity')) {
    return (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getRoundRectPath)(element, TASK_BORDER_RADIUS);
  }

  if ((0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__.is)(element, 'bpmn:Gateway')) {
    return (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getDiamondPath)(element);
  }

  return (0,_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_2__.getRectPath)(element);
};


/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/DiUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/DiUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCompensateEventDefinition: () => (/* binding */ hasCompensateEventDefinition),
/* harmony export */   hasErrorEventDefinition: () => (/* binding */ hasErrorEventDefinition),
/* harmony export */   hasEscalationEventDefinition: () => (/* binding */ hasEscalationEventDefinition),
/* harmony export */   hasEventDefinition: () => (/* binding */ hasEventDefinition),
/* harmony export */   isEventSubProcess: () => (/* binding */ isEventSubProcess),
/* harmony export */   isExpanded: () => (/* binding */ isExpanded),
/* harmony export */   isInterrupting: () => (/* binding */ isInterrupting)
/* harmony export */ });
/* harmony import */ var _ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");




/**
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').ModdleElement} ModdleElement
 */

/**
 * @param {Element} element
 * @param {ModdleElement} [di]
 *
 * @return {boolean}
 */
function isExpanded(element, di) {

  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:CallActivity')) {
    return false;
  }

  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:SubProcess')) {
    di = di || (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getDi)(element);

    if (di && (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(di, 'bpmndi:BPMNPlane')) {
      return true;
    }

    return di && !!di.isExpanded;
  }

  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(element, 'bpmn:Participant')) {
    return !!(0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).processRef;
  }

  return true;
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isInterrupting(element) {
  return element && (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).isInterrupting !== false;
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function isEventSubProcess(element) {
  return element && !!(0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).triggeredByEvent;
}

/**
 * @param {Element} element
 * @param {string} eventType
 *
 * @return {boolean}
 */
function hasEventDefinition(element, eventType) {
  var eventDefinitions = (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element).eventDefinitions;

  return (0,min_dash__WEBPACK_IMPORTED_MODULE_1__.some)(eventDefinitions, function(event) {
    return (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.is)(event, eventType);
  });
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasErrorEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:ErrorEventDefinition');
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasEscalationEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:EscalationEventDefinition');
}

/**
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasCompensateEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:CompensateEventDefinition');
}


/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/LabelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/LabelUtil.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_LABEL_SIZE: () => (/* binding */ DEFAULT_LABEL_SIZE),
/* harmony export */   FLOW_LABEL_INDENT: () => (/* binding */ FLOW_LABEL_INDENT),
/* harmony export */   getExternalLabelBounds: () => (/* binding */ getExternalLabelBounds),
/* harmony export */   getExternalLabelMid: () => (/* binding */ getExternalLabelMid),
/* harmony export */   getFlowLabelPosition: () => (/* binding */ getFlowLabelPosition),
/* harmony export */   getLabel: () => (/* binding */ getLabel),
/* harmony export */   getWaypointsMid: () => (/* binding */ getWaypointsMid),
/* harmony export */   hasExternalLabel: () => (/* binding */ hasExternalLabel),
/* harmony export */   isLabel: () => (/* reexport safe */ diagram_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.isLabel),
/* harmony export */   isLabelExternal: () => (/* binding */ isLabelExternal),
/* harmony export */   setLabel: () => (/* binding */ setLabel)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/ModelUtil */ "./node_modules/diagram-js/lib/util/ModelUtil.js");








/**
 * @typedef {import('diagram-js/lib/util/Types').Point} Point
 * @typedef {import('diagram-js/lib/util/Types').Rect} Rect
 *
 * @typedef {import('../model/Types').Element} Element
 * @typedef {import('../model/Types').ModdleElement} ModdleElement
 */

var DEFAULT_LABEL_SIZE = {
  width: 90,
  height: 20
};

var FLOW_LABEL_INDENT = 15;


/**
 * Return true if the given semantic has an external label.
 *
 * @param {Element} semantic
 *
 * @return {boolean}
 */
function isLabelExternal(semantic) {
  return (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Event') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Gateway') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataStoreReference') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataObjectReference') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataInput') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataOutput') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:SequenceFlow') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:MessageFlow') ||
         (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Group');
}

/**
 * Return true if the given element has an external label.
 *
 * @param {Element} element
 *
 * @return {boolean}
 */
function hasExternalLabel(element) {
  return (0,diagram_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.isLabel)(element.label);
}

/**
 * Get the position of a sequence flow label.
 *
 * @param  {Point[]} waypoints
 *
 * @return {Point}
 */
function getFlowLabelPosition(waypoints) {

  // get the waypoints mid
  var mid = waypoints.length / 2 - 1;

  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];

  // get position
  var position = getWaypointsMid(waypoints);

  // calculate angle
  var angle = Math.atan((second.y - first.y) / (second.x - first.x));

  var x = position.x,
      y = position.y;

  if (Math.abs(angle) < Math.PI / 2) {
    y -= FLOW_LABEL_INDENT;
  } else {
    x += FLOW_LABEL_INDENT;
  }

  return { x: x, y: y };
}


/**
 * Get the middle of a number of waypoints.
 *
 * @param  {Point[]} waypoints
 *
 * @return {Point}
 */
function getWaypointsMid(waypoints) {

  var mid = waypoints.length / 2 - 1;

  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];

  return {
    x: first.x + (second.x - first.x) / 2,
    y: first.y + (second.y - first.y) / 2
  };
}

/**
 * Get the middle of the external label of an element.
 *
 * @param {Element} element
 *
 * @return {Point}
 */
function getExternalLabelMid(element) {

  if (element.waypoints) {
    return getFlowLabelPosition(element.waypoints);
  } else if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(element, 'bpmn:Group')) {
    return {
      x: element.x + element.width / 2,
      y: element.y + DEFAULT_LABEL_SIZE.height / 2
    };
  } else {
    return {
      x: element.x + element.width / 2,
      y: element.y + element.height + DEFAULT_LABEL_SIZE.height / 2
    };
  }
}


/**
 * Return the bounds of an elements label, parsed from the elements DI or
 * generated from its bounds.
 *
 * @param {ModdleElement} di
 * @param {Element} element
 *
 * @return {Rect}
 */
function getExternalLabelBounds(di, element) {

  var mid,
      size,
      bounds,
      label = di.label;

  if (label && label.bounds) {
    bounds = label.bounds;

    size = {
      width: Math.max(DEFAULT_LABEL_SIZE.width, bounds.width),
      height: bounds.height
    };

    mid = {
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    };
  } else {

    mid = getExternalLabelMid(element);

    size = DEFAULT_LABEL_SIZE;
  }

  return (0,min_dash__WEBPACK_IMPORTED_MODULE_2__.assign)({
    x: mid.x - size.width / 2,
    y: mid.y - size.height / 2
  }, size);
}

/**
 * @param {ModdleElement} semantic
 *
 * @returns {string}
 */
function getLabelAttr(semantic) {
  if (
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:FlowElement') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Participant') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Lane') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:SequenceFlow') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:MessageFlow') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataInput') ||
    (0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:DataOutput')
  ) {
    return 'name';
  }

  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:TextAnnotation')) {
    return 'text';
  }

  if ((0,_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(semantic, 'bpmn:Group')) {
    return 'categoryValueRef';
  }
}

/**
 * @param {ModdleElement} semantic
 *
 * @returns {string}
 */
function getCategoryValue(semantic) {
  var categoryValueRef = semantic['categoryValueRef'];

  if (!categoryValueRef) {
    return '';
  }


  return categoryValueRef.value || '';
}

/**
 * @param {Element} element
 *
 * @return {string}
 */
function getLabel(element) {
  var semantic = element.businessObject,
      attr = getLabelAttr(semantic);

  if (attr) {

    if (attr === 'categoryValueRef') {

      return getCategoryValue(semantic);
    }

    return semantic[attr] || '';
  }
}


/**
 * @param {Element} element
 * @param {string} text
 *
 * @return {Element}
 */
function setLabel(element, text) {
  var semantic = element.businessObject,
      attr = getLabelAttr(semantic);

  if (attr) {

    if (attr === 'categoryValueRef') {
      semantic['categoryValueRef'].value = text;
    } else {
      semantic[attr] = text;
    }

  }

  return element;
}


/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/ModelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/ModelUtil.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusinessObject: () => (/* binding */ getBusinessObject),
/* harmony export */   getDi: () => (/* binding */ getDi),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef { import('../model/Types').Element } Element
 * @typedef { import('../model/Types').ModdleElement } ModdleElement
 */

/**
 * Is an element of the given BPMN type?
 *
 * @param  {Element|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return true if element has any of the given types.
 *
 * @param {Element|ModdleElement} element
 * @param {string[]} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)(types, function(t) {
    return is(element, t);
  });
}

/**
 * Return the business object for a given element.
 *
 * @param {Element|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

/**
 * Return the di object for a given element.
 *
 * @param {Element} element
 *
 * @return {ModdleElement}
 */
function getDi(element) {
  return element && element.di;
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getModelerDirectory: () => (/* binding */ getModelerDirectory),
/* harmony export */   getPluginsDirectory: () => (/* binding */ getPluginsDirectory),
/* harmony export */   registerBpmnJSModdleExtension: () => (/* binding */ registerBpmnJSModdleExtension),
/* harmony export */   registerBpmnJSPlugin: () => (/* binding */ registerBpmnJSPlugin),
/* harmony export */   registerClientExtension: () => (/* binding */ registerClientExtension),
/* harmony export */   registerClientPlugin: () => (/* binding */ registerClientPlugin),
/* harmony export */   registerCloudBpmnJSModdleExtension: () => (/* binding */ registerCloudBpmnJSModdleExtension),
/* harmony export */   registerCloudBpmnJSPlugin: () => (/* binding */ registerCloudBpmnJSPlugin),
/* harmony export */   registerCloudDmnJSModdleExtension: () => (/* binding */ registerCloudDmnJSModdleExtension),
/* harmony export */   registerCloudDmnJSPlugin: () => (/* binding */ registerCloudDmnJSPlugin),
/* harmony export */   registerDmnJSModdleExtension: () => (/* binding */ registerDmnJSModdleExtension),
/* harmony export */   registerDmnJSPlugin: () => (/* binding */ registerDmnJSPlugin),
/* harmony export */   registerPlatformBpmnJSModdleExtension: () => (/* binding */ registerPlatformBpmnJSModdleExtension),
/* harmony export */   registerPlatformBpmnJSPlugin: () => (/* binding */ registerPlatformBpmnJSPlugin),
/* harmony export */   registerPlatformDmnJSModdleExtension: () => (/* binding */ registerPlatformDmnJSModdleExtension),
/* harmony export */   registerPlatformDmnJSPlugin: () => (/* binding */ registerPlatformDmnJSPlugin)
/* harmony export */ });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a client plugin.
 *
 * @param {import('react').ComponentType} extension
 *
 * @example
 *
 * import MyExtensionComponent from './MyExtensionComponent';
 *
 * registerClientExtension(MyExtensionComponent);
 */
function registerClientExtension(component) {
  registerClientPlugin(component, 'client');
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a platform specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformBpmnJSPlugin(BpmnJSModule);
 */
function registerPlatformBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.platform.modeler.additionalModules');
}

/**
 * Validate and register a cloud specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudBpmnJSPlugin(BpmnJSModule);
 */
function registerCloudBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.cloud.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformBpmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudBpmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerDmnJSModdleExtension(moddleDescriptor);
 */
function registerDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudDmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformDmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a cloud specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerCloudDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerCloudDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.cloud.modeler.${c}.additionalModules`));
}

/**
 * Validate and register a platform specific dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerPlatformDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerPlatformDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.platform.modeler.${c}.additionalModules`));
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/draw/BaseRenderer.js":
/*!**********************************************************!*\
  !*** ./node_modules/diagram-js/lib/draw/BaseRenderer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseRenderer)
/* harmony export */ });
var DEFAULT_RENDER_PRIORITY = 1000;

/**
 * @typedef {import('../core/Types').ElementLike} Element
 * @typedef {import('../core/Types').ConnectionLike} Connection
 * @typedef {import('../core/Types').ShapeLike} Shape
 *
 * @typedef {import('../core/EventBus').default} EventBus
 */

/**
 * The base implementation of shape and connection renderers.
 *
 * @param {EventBus} eventBus
 * @param {number} [renderPriority=1000]
 */
function BaseRenderer(eventBus, renderPriority) {
  var self = this;

  renderPriority = renderPriority || DEFAULT_RENDER_PRIORITY;

  eventBus.on([ 'render.shape', 'render.connection' ], renderPriority, function(evt, context) {
    var type = evt.type,
        element = context.element,
        visuals = context.gfx,
        attrs = context.attrs;

    if (self.canRender(element)) {
      if (type === 'render.shape') {
        return self.drawShape(visuals, element, attrs);
      } else {
        return self.drawConnection(visuals, element, attrs);
      }
    }
  });

  eventBus.on([ 'render.getShapePath', 'render.getConnectionPath' ], renderPriority, function(evt, element) {
    if (self.canRender(element)) {
      if (evt.type === 'render.getShapePath') {
        return self.getShapePath(element);
      } else {
        return self.getConnectionPath(element);
      }
    }
  });
}

/**
 * Checks whether an element can be rendered.
 *
 * @param {Element} element The element to be rendered.
 *
 * @return {boolean} Whether the element can be rendered.
 */
BaseRenderer.prototype.canRender = function(element) {};

/**
 * Draws a shape.
 *
 * @param {SVGElement} visuals The SVG element to draw the shape into.
 * @param {Shape} shape The shape to be drawn.
 *
 * @return {SVGElement} The SVG element of the shape drawn.
 */
BaseRenderer.prototype.drawShape = function(visuals, shape) {};

/**
 * Draws a connection.
 *
 * @param {SVGElement} visuals The SVG element to draw the connection into.
 * @param {Connection} connection The connection to be drawn.
 *
 * @return {SVGElement} The SVG element of the connection drawn.
 */
BaseRenderer.prototype.drawConnection = function(visuals, connection) {};

/**
 * Gets the SVG path of the graphical representation of a shape.
 *
 * @param {Shape} shape The shape.
 *
 * @return {string} The SVG path of the shape.
 */
BaseRenderer.prototype.getShapePath = function(shape) {};

/**
 * Gets the SVG path of the graphical representation of a connection.
 *
 * @param {Connection} connection The connection.
 *
 * @return {string} The SVG path of the connection.
 */
BaseRenderer.prototype.getConnectionPath = function(connection) {};


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/ModelUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/ModelUtil.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isConnection: () => (/* binding */ isConnection),
/* harmony export */   isLabel: () => (/* binding */ isLabel),
/* harmony export */   isRoot: () => (/* binding */ isRoot)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * Checks whether a value is an instance of Connection.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isConnection(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'waypoints');
}

/**
 * Checks whether a value is an instance of Label.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isLabel(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.has)(value, 'labelTarget');
}

/**
 * Checks whether a value is an instance of Root.
 *
 * @param {any} value
 *
 * @return {boolean}
 */
function isRoot(value) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value.parent);
}

/***/ }),

/***/ "./node_modules/diagram-js/lib/util/RenderUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/RenderUtil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentsToPath: () => (/* binding */ componentsToPath),
/* harmony export */   createLine: () => (/* binding */ createLine),
/* harmony export */   toSVGPoints: () => (/* binding */ toSVGPoints),
/* harmony export */   updateLine: () => (/* binding */ updateLine)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");





/**
 * @typedef {(string|number)[]} Component
 *
 * @typedef {import('../util/Types').Point} Point
 */

/**
 * @param {Component[] | Component[][]} elements
 *
 * @return {string}
 */
function componentsToPath(elements) {
  return elements.flat().join(',').replace(/,?([A-z]),?/g, '$1');
}

/**
 * @param {Point[]} points
 *
 * @return {string}
 */
function toSVGPoints(points) {
  var result = '';

  for (var i = 0, p; (p = points[i]); i++) {
    result += p.x + ',' + p.y + ' ';
  }

  return result;
}

/**
 * @param {Point} point
 *
 * @return {Component[]}
 */
function move(point) {
  return [ 'M', point.x, point.y ];
}

/**
 * @param {Point} point
 *
 * @return {Component[]}
 */
function lineTo(point) {
  return [ 'L', point.x, point.y ];
}

/**
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 *
 * @return {Component[]}
 */
function curveTo(p1, p2, p3) {
  return [ 'C', p1.x, p1.y, p2.x, p2.y, p3.x, p3.y ];
}

/**
 * @param {Point[]} waypoints
 * @param {number} [cornerRadius]
 * @return {Component[][]}
 */
function drawPath(waypoints, cornerRadius) {
  const pointCount = waypoints.length;

  const path = [ move(waypoints[0]) ];

  for (let i = 1; i < pointCount; i++) {

    const pointBefore = waypoints[i - 1];
    const point = waypoints[i];
    const pointAfter = waypoints[i + 1];

    if (!pointAfter || !cornerRadius) {
      path.push(lineTo(point));

      continue;
    }

    const effectiveRadius = Math.min(
      cornerRadius,
      vectorLength(point.x - pointBefore.x, point.y - pointBefore.y),
      vectorLength(pointAfter.x - point.x, pointAfter.y - point.y)
    );

    if (!effectiveRadius) {
      path.push(lineTo(point));

      continue;
    }

    const beforePoint = getPointAtLength(point, pointBefore, effectiveRadius);
    const beforePoint2 = getPointAtLength(point, pointBefore, effectiveRadius * .5);

    const afterPoint = getPointAtLength(point, pointAfter, effectiveRadius);
    const afterPoint2 = getPointAtLength(point, pointAfter, effectiveRadius * .5);

    path.push(lineTo(beforePoint));
    path.push(curveTo(beforePoint2, afterPoint2, afterPoint));
  }

  return path;
}

function getPointAtLength(start, end, length) {

  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  const totalLength = vectorLength(deltaX, deltaY);

  const percent = length / totalLength;

  return {
    x: start.x + deltaX * percent,
    y: start.y + deltaY * percent
  };
}

function vectorLength(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

/**
 * @param {Point[]} points
 * @param {number|Object} [attrs]
 * @param {number} [radius]
 *
 * @return {SVGElement}
 */
function createLine(points, attrs, radius) {

  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(attrs)) {
    radius = attrs;
    attrs = null;
  }

  if (!attrs) {
    attrs = {};
  }

  const line = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.create)('path', attrs);

  if ((0,min_dash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(radius)) {
    line.dataset.cornerRadius = String(radius);
  }

  return updateLine(line, points);
}

/**
 * @param {SVGElement} gfx
 * @param {Point[]} points
 *
 * @return {SVGElement}
 */
function updateLine(gfx, points) {

  const cornerRadius = parseInt(gfx.dataset.cornerRadius, 10) || 0;

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_1__.attr)(gfx, {
    d: componentsToPath(drawPath(points, cornerRadius))
  });

  return gfx;
}


/***/ }),

/***/ "./node_modules/diagram-js/lib/util/SvgTransformUtil.js":
/*!**************************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/SvgTransformUtil.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   transform: () => (/* binding */ transform),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");



/**
 * @param {SVGElement} gfx
 * @param {number} x
 * @param {number} y
 * @param {number} [angle]
 * @param {number} [amount]
 */
function transform(gfx, x, y, angle, amount) {
  var translate = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  translate.setTranslate(x, y);

  var rotate = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  rotate.setRotate(angle || 0, 0, 0);

  var scale = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  scale.setScale(amount || 1, amount || 1);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.transform)(gfx, [ translate, rotate, scale ]);
}


/**
 * @param {SVGElement} gfx
 * @param {number} x
 * @param {number} y
 */
function translate(gfx, x, y) {
  var translate = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  translate.setTranslate(x, y);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.transform)(gfx, translate);
}


/**
 * @param {SVGElement} gfx
 * @param {number} angle
 */
function rotate(gfx, angle) {
  var rotate = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  rotate.setRotate(angle, 0, 0);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.transform)(gfx, rotate);
}


/**
 * @param {SVGElement} gfx
 * @param {number} amount
 */
function scale(gfx, amount) {
  var scale = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.createTransform)();
  scale.setScale(amount, amount);

  (0,tiny_svg__WEBPACK_IMPORTED_MODULE_0__.transform)(gfx, scale);
}


/***/ }),

/***/ "./node_modules/dmn-js-drd/lib/draw/DrdRenderer.js":
/*!*********************************************************!*\
  !*** ./node_modules/dmn-js-drd/lib/draw/DrdRenderer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrdRenderer)
/* harmony export */ });
/* harmony import */ var inherits_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inherits-browser */ "./node_modules/inherits-browser/dist/index.es.js");
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ids */ "./node_modules/ids/dist/index.esm.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/draw/BaseRenderer */ "./node_modules/diagram-js/lib/draw/BaseRenderer.js");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/util/RenderUtil */ "./node_modules/diagram-js/lib/util/RenderUtil.js");
/* harmony import */ var dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dmn-js-shared/lib/util/ModelUtil */ "./node_modules/dmn-js-shared/lib/util/ModelUtil.js");








var RENDERER_IDS = new ids__WEBPACK_IMPORTED_MODULE_0__["default"]();
var black = 'hsl(225, 10%, 15%)';

/**
 * Renderer for the DRD view. The default colors are configurable.
 * When default label color is not provided, it will take the default
 * stroke color.
 *
 * @example
 * ```javascript
 * // for simple DRD viewer
 * const viewer = new DrdViewer({
 *   drdRenderer: {
 *     defaultFillColor: '#ffd700',
 *     defaultStrokeColor: '#0057b8',
 *     defaultLabelColor: '#0057b8'
 *   }
 * });
 *
 * // in dmn-js
 * const modeler = new DmnModeler({
 *   drd: {
 *     drdRenderer: {
 *       defaultFillColor: '#ffd700',
 *       defaultStrokeColor: '#0057b8',
 *       defaultLabelColor: '#0057b8'
 *     }
 *   }
 * });
 * ```
 */
function DrdRenderer(config, eventBus, pathMap, styles, textRenderer, canvas) {
  diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, eventBus);
  var rendererId = RENDERER_IDS.next();
  var computeStyle = styles.computeStyle;
  var markers = {};
  var defaultFillColor = config && config.defaultFillColor || 'white',
    defaultStrokeColor = config && config.defaultStrokeColor || black,
    defaultLabelColor = config && config.defaultLabelColor;
  function marker(type, fill, stroke) {
    var id = type + '-' + colorEscape(fill) + '-' + colorEscape(stroke) + '-' + rendererId;
    if (!markers[id]) {
      createMarker(id, type, fill, stroke);
    }
    return 'url(#' + id + ')';
  }
  function addMarker(id, options) {
    var attrs = (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.assign)({
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeDasharray: 'none'
    }, options.attrs);
    var ref = options.ref || {
      x: 0,
      y: 0
    };
    var scale = options.scale || 1;

    // fix for safari / chrome / firefox bug not correctly
    // resetting stroke dash array
    if (attrs.strokeDasharray === 'none') {
      attrs.strokeDasharray = [10000, 1];
    }
    var marker = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('marker');
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(options.element, attrs);
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(marker, options.element);
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(marker, {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto'
    });
    var defs = (0,min_dom__WEBPACK_IMPORTED_MODULE_5__.query)('defs', canvas._svg);
    if (!defs) {
      defs = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('defs');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(canvas._svg, defs);
    }
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(defs, marker);
    markers[id] = marker;
  }
  function createMarker(id, type, fill, stroke) {
    if (type === 'association-start') {
      var associationStart = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('path');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(associationStart, {
        d: 'M 11 5 L 1 10 L 11 15'
      });
      addMarker(id, {
        element: associationStart,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 1,
          y: 10
        },
        scale: 0.5
      });
    } else if (type === 'association-end') {
      var associationEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('path');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(associationEnd, {
        d: 'M 1 5 L 11 10 L 1 15'
      });
      addMarker(id, {
        element: associationEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 12,
          y: 10
        },
        scale: 0.5
      });
    } else if (type === 'information-requirement-end') {
      var informationRequirementEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('path');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(informationRequirementEnd, {
        d: 'M 1 5 L 11 10 L 1 15 Z'
      });
      addMarker(id, {
        element: informationRequirementEnd,
        attrs: {
          fill: stroke,
          stroke: 'none'
        },
        ref: {
          x: 11,
          y: 10
        },
        scale: 1
      });
    } else if (type === 'knowledge-requirement-end') {
      var knowledgeRequirementEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('path');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(knowledgeRequirementEnd, {
        d: 'M 1 3 L 11 10 L 1 17'
      });
      addMarker(id, {
        element: knowledgeRequirementEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 2
        },
        ref: {
          x: 11,
          y: 10
        },
        scale: 0.8
      });
    } else if (type === 'authority-requirement-end') {
      var authorityRequirementEnd = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('circle');
      (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(authorityRequirementEnd, {
        cx: 3,
        cy: 3,
        r: 3
      });
      addMarker(id, {
        element: authorityRequirementEnd,
        attrs: {
          fill: stroke,
          stroke: 'none'
        },
        ref: {
          x: 3,
          y: 3
        },
        scale: 0.9
      });
    }
  }
  function drawRect(p, width, height, r, offset, attrs) {
    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_3__.isObject)(offset)) {
      attrs = offset;
      offset = 0;
    }
    offset = offset || 0;
    attrs = computeStyle(attrs, {
      stroke: black,
      strokeWidth: 2,
      fill: 'white'
    });
    var rect = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('rect');
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(rect, {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r
    });
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(rect, attrs);
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(p, rect);
    return rect;
  }
  function renderLabel(p, label, options) {
    var text = textRenderer.createText(label || '', options);
    (0,min_dom__WEBPACK_IMPORTED_MODULE_5__.attr)(text, 'class', 'djs-label');
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(p, text);
    return text;
  }
  function renderEmbeddedLabel(p, element, align, options) {
    var name = (0,dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.getName)(element);
    options = (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.assign)({
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
      }
    }, options);
    return renderLabel(p, name, options);
  }
  function drawPath(p, d, attrs) {
    attrs = computeStyle(attrs, ['no-fill'], {
      strokeWidth: 2,
      stroke: black
    });
    var path = (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.create)('path');
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(path, {
      d: d
    });
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.attr)(path, attrs);
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(p, path);
    return path;
  }
  var handlers = {
    'dmn:Decision': function dmnDecision(p, element) {
      var rect = drawRect(p, element.width, element.height, 0, {
        stroke: getStrokeColor(element, defaultStrokeColor),
        fill: getFillColor(element, defaultFillColor)
      });
      renderEmbeddedLabel(p, element, 'center-middle');
      return rect;
    },
    'dmn:KnowledgeSource': function dmnKnowledgeSource(p, element) {
      var pathData = pathMap.getScaledPath('KNOWLEDGE_SOURCE', {
        xScaleFactor: 1.021,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.075
        }
      });
      var knowledgeSource = drawPath(p, pathData, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      renderEmbeddedLabel(p, element, 'center-middle');
      return knowledgeSource;
    },
    'dmn:BusinessKnowledgeModel': function dmnBusinessKnowledgeModel(p, element) {
      var pathData = pathMap.getScaledPath('BUSINESS_KNOWLEDGE_MODEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.3
        }
      });
      var businessKnowledge = drawPath(p, pathData, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      renderEmbeddedLabel(p, element, 'center-middle');
      return businessKnowledge;
    },
    'dmn:InputData': function dmnInputData(p, element) {
      var rect = drawRect(p, element.width, element.height, 22, {
        stroke: getStrokeColor(element, defaultStrokeColor),
        fill: getFillColor(element, defaultFillColor)
      });
      renderEmbeddedLabel(p, element, 'center-middle');
      return rect;
    },
    'dmn:TextAnnotation': function dmnTextAnnotation(p, element) {
      var style = {
        'fill': 'none',
        'stroke': 'none'
      };
      var textElement = drawRect(p, element.width, element.height, 0, 0, style);
      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });
      drawPath(p, textPathData, {
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var text = getSemantic(element).text || '';
      renderLabel(p, text, {
        style: {
          fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
        },
        box: element,
        align: 'left-top',
        padding: 5
      });
      return textElement;
    },
    'dmn:Association': function dmnAssociation(p, element) {
      var semantic = getSemantic(element);
      var fill = getFillColor(element, defaultFillColor),
        stroke = getStrokeColor(element, defaultStrokeColor),
        attrs = {
          stroke: stroke,
          strokeDasharray: '0.5, 5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          fill: 'none'
        };
      if (semantic.associationDirection === 'One' || semantic.associationDirection === 'Both') {
        attrs.markerEnd = marker('association-end', fill, stroke);
      }
      if (semantic.associationDirection === 'Both') {
        attrs.markerStart = marker('association-start', fill, stroke);
      }
      return drawLine(p, element.waypoints, attrs);
    },
    'dmn:InformationRequirement': function dmnInformationRequirement(p, element) {
      var fill = getFillColor(element, defaultFillColor),
        stroke = getStrokeColor(element, defaultStrokeColor),
        attrs = {
          stroke: stroke,
          strokeWidth: 1,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          markerEnd: marker('information-requirement-end', fill, stroke)
        };
      return drawLine(p, element.waypoints, attrs);
    },
    'dmn:KnowledgeRequirement': function dmnKnowledgeRequirement(p, element) {
      var fill = getFillColor(element, defaultFillColor),
        stroke = getStrokeColor(element, defaultStrokeColor);
      var attrs = {
        stroke: stroke,
        strokeWidth: 1,
        strokeDasharray: 5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        markerEnd: marker('knowledge-requirement-end', fill, stroke)
      };
      return drawLine(p, element.waypoints, attrs);
    },
    'dmn:AuthorityRequirement': function dmnAuthorityRequirement(p, element) {
      var fill = getFillColor(element, defaultFillColor),
        stroke = getStrokeColor(element, defaultStrokeColor),
        attrs = {
          stroke: stroke,
          strokeWidth: 1.5,
          strokeDasharray: 5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          markerEnd: marker('authority-requirement-end', fill, stroke)
        };
      return drawLine(p, element.waypoints, attrs);
    }
  };

  // draw shape and connection //////////////////

  function drawShape(parent, element) {
    var h = handlers[element.type];
    if (!h) {
      return diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.drawShape.apply(this, [parent, element]);
    } else {
      return h(parent, element);
    }
  }
  function drawConnection(parent, element) {
    var type = element.type;
    var h = handlers[type];
    if (!h) {
      return diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.drawConnection.apply(this, [parent, element]);
    } else {
      return h(parent, element);
    }
  }
  function drawLine(p, waypoints, attrs) {
    attrs = computeStyle(attrs, ['no-fill'], {
      stroke: black,
      strokeWidth: 2,
      fill: 'none'
    });
    var line = (0,diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__.createLine)(waypoints, attrs);
    (0,tiny_svg__WEBPACK_IMPORTED_MODULE_4__.append)(p, line);
    return line;
  }
  this.canRender = function (element) {
    return (0,dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(element, 'dmn:DMNElement') || (0,dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(element, 'dmn:InformationRequirement') || (0,dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(element, 'dmn:KnowledgeRequirement') || (0,dmn_js_shared_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__.is)(element, 'dmn:AuthorityRequirement');
  };
  this.drawShape = drawShape;
  this.drawConnection = drawConnection;
}
(0,inherits_browser__WEBPACK_IMPORTED_MODULE_7__["default"])(DrdRenderer, diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]);
DrdRenderer.$inject = ['config.drdRenderer', 'eventBus', 'pathMap', 'styles', 'textRenderer', 'canvas'];

// helper functions //////////////////////

function getSemantic(element) {
  return element.businessObject;
}
function colorEscape(str) {
  // only allow characters and numbers
  return str.replace(/[^0-9a-zA-z]+/g, '_');
}
function getStrokeColor(element, defaultColor) {
  return defaultColor;
}
function getFillColor(element, defaultColor) {
  return defaultColor;
}
function getLabelColor(element, defaultColor, defaultStrokeColor) {
  return defaultColor || getStrokeColor(element, defaultStrokeColor);
}
//# sourceMappingURL=DrdRenderer.js.map

/***/ }),

/***/ "./node_modules/dmn-js-shared/lib/util/ModelUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/dmn-js-shared/lib/util/ModelUtil.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusinessObject: () => (/* binding */ getBusinessObject),
/* harmony export */   getName: () => (/* binding */ getName),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny),
/* harmony export */   isInput: () => (/* binding */ isInput),
/* harmony export */   isOutput: () => (/* binding */ isOutput),
/* harmony export */   isRule: () => (/* binding */ isRule)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * Is an element of the given DMN type?
 *
 * @param  {tjs.model.Base|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);
  return bo && typeof bo.$instanceOf === 'function' && bo.$instanceOf(type);
}
function isInput(element) {
  return is(element, 'dmn:InputClause');
}
function isOutput(element) {
  return is(element, 'dmn:OutputClause');
}
function isRule(element) {
  return is(element, 'dmn:DecisionRule');
}

/**
 * Return the business object for a given element.
 *
 * @param  {tjs.model.Base|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return element && element.businessObject || element;
}
function getName(element) {
  return getBusinessObject(element).name;
}

/**
 * Return true if element has any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {Array<string>} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)(types, function (t) {
    return is(element, t);
  });
}
//# sourceMappingURL=ModelUtil.js.map

/***/ }),

/***/ "./node_modules/ids/dist/index.esm.js":
/*!********************************************!*\
  !*** ./node_modules/ids/dist/index.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hat_1 = createCommonjsModule(function (module) {
var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};
});

/**
 * Create a new id generator / cache instance.
 *
 * You may optionally provide a seed that is used internally.
 *
 * @param {Seed} seed
 */
function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }
  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}

/**
 * Generate a next id.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */
Ids.prototype.next = function (element) {
  return this._seed(element || true);
};

/**
 * Generate a next id with a given prefix.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */
Ids.prototype.nextPrefixed = function (prefix, element) {
  var id;
  do {
    id = prefix + this.next(true);
  } while (this.assigned(id));

  // claim {prefix}{random}
  this.claim(id, element);

  // return
  return id;
};

/**
 * Manually claim an existing id.
 *
 * @param {String} id
 * @param {String} [element] element the id is claimed by
 */
Ids.prototype.claim = function (id, element) {
  this._seed.set(id, element || true);
};

/**
 * Returns true if the given id has already been assigned.
 *
 * @param  {String} id
 * @return {Boolean}
 */
Ids.prototype.assigned = function (id) {
  return this._seed.get(id) || false;
};

/**
 * Unclaim an id.
 *
 * @param  {String} id the id to unclaim
 */
Ids.prototype.unclaim = function (id) {
  delete this._seed.hats[id];
};

/**
 * Clear all claimed ids.
 */
Ids.prototype.clear = function () {
  var hats = this._seed.hats,
    id;
  for (id in hats) {
    this.unclaim(id);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ids);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/inherits-browser/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/inherits-browser/dist/index.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/min-dom/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/min-dom/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignStyle: () => (/* binding */ assign),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   delegate: () => (/* binding */ delegate),
/* harmony export */   domify: () => (/* binding */ domify$1),
/* harmony export */   event: () => (/* binding */ event),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   queryAll: () => (/* binding */ all),
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Assigns style attributes in a style-src compliant way.
 *
 * @param {Element} element
 * @param {...Object} styleSources
 *
 * @return {Element} the element
 */
function assign(element, ...styleSources) {
  const target = element.style;

  forEach(styleSources, function(style) {
    if (!style) {
      return;
    }

    forEach(style, function(value, key) {
      target[key] = value;
    });
  });

  return element;
}

/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {

  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

/**
 * @param { HTMLElement } element
 * @param { String } selector
 *
 * @return { boolean }
 */
function matches(element, selector) {
  return element && typeof element.matches === 'function' && element.matches(selector);
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE &&
      currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matches(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matches(currentElem, selector) ? currentElem : null;
}

var componentEvent = {};

var bind$1, unbind$1, prefix;

function detect () {
  bind$1 = window.addEventListener ? 'addEventListener' : 'attachEvent';
  unbind$1 = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
  prefix = bind$1 !== 'addEventListener' ? 'on' : '';
}

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = componentEvent.bind = function(el, type, fn, capture){
  if (!bind$1) detect();
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = componentEvent.unbind = function(el, type, fn, capture){
  if (!unbind$1) detect();
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};

var event = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  'default': componentEvent
}, [componentEvent]);

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = [ 'focus', 'blur' ];

function bind(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.unbind(el, type, fn, capture);
}

var delegate = {
  bind,
  unbind
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = Object.prototype.hasOwnProperty.call(map, tag) ? map[tag] : map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var domify$1 = domify;

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/tiny-svg/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tiny-svg/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   appendTo: () => (/* binding */ appendTo),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   createMatrix: () => (/* binding */ createMatrix),
/* harmony export */   createPoint: () => (/* binding */ createPoint),
/* harmony export */   createTransform: () => (/* binding */ createTransform),
/* harmony export */   innerSVG: () => (/* binding */ innerSVG),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prependTo: () => (/* binding */ prependTo),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
function ensureImported(element, target) {

  if (element.ownerDocument !== target.ownerDocument) {
    try {

      // may fail on webkit
      return target.ownerDocument.importNode(element, true);
    } catch (e) {

      // ignore
    }
  }

  return element;
}

/**
 * appendTo utility
 */

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}

/**
 * append utility
 */

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
function append(target, node) {
  appendTo(node, target);
  return target;
}

/**
 * attribute accessor utility
 */

var LENGTH_ATTR = 2;

var CSS_PROPERTIES = {
  'alignment-baseline': 1,
  'baseline-shift': 1,
  'clip': 1,
  'clip-path': 1,
  'clip-rule': 1,
  'color': 1,
  'color-interpolation': 1,
  'color-interpolation-filters': 1,
  'color-profile': 1,
  'color-rendering': 1,
  'cursor': 1,
  'direction': 1,
  'display': 1,
  'dominant-baseline': 1,
  'enable-background': 1,
  'fill': 1,
  'fill-opacity': 1,
  'fill-rule': 1,
  'filter': 1,
  'flood-color': 1,
  'flood-opacity': 1,
  'font': 1,
  'font-family': 1,
  'font-size': LENGTH_ATTR,
  'font-size-adjust': 1,
  'font-stretch': 1,
  'font-style': 1,
  'font-variant': 1,
  'font-weight': 1,
  'glyph-orientation-horizontal': 1,
  'glyph-orientation-vertical': 1,
  'image-rendering': 1,
  'kerning': 1,
  'letter-spacing': 1,
  'lighting-color': 1,
  'marker': 1,
  'marker-end': 1,
  'marker-mid': 1,
  'marker-start': 1,
  'mask': 1,
  'opacity': 1,
  'overflow': 1,
  'pointer-events': 1,
  'shape-rendering': 1,
  'stop-color': 1,
  'stop-opacity': 1,
  'stroke': 1,
  'stroke-dasharray': 1,
  'stroke-dashoffset': 1,
  'stroke-linecap': 1,
  'stroke-linejoin': 1,
  'stroke-miterlimit': 1,
  'stroke-opacity': 1,
  'stroke-width': LENGTH_ATTR,
  'text-anchor': 1,
  'text-decoration': 1,
  'text-rendering': 1,
  'unicode-bidi': 1,
  'visibility': 1,
  'word-spacing': 1,
  'writing-mode': 1
};


function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  var type = CSS_PROPERTIES[hyphenated];

  if (type) {

    // append pixel unit, unless present
    if (type === LENGTH_ATTR && typeof value === 'number') {
      value = String(value) + 'px';
    }

    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name;

  for (i = 0, name; (name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets raw attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
function attr(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
  * Wrap `el` in a `ClassList`.
  *
  * @param {Element} el
  * @return {ClassList}
  * @api public
  */

function classes(el) {
  return new ClassList(el);
}

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
  * Add class `name` if not already present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
  * Remove class `name` when present, or
  * pass a regular expression to remove
  * any which match.
  *
  * @param {String|RegExp} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
  * Remove all classes matching `re`.
  *
  * @param {RegExp} re
  * @return {ClassList}
  * @api private
  */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
  * Toggle class `name`, can force state via `force`.
  *
  * For browsers that support classList, but do not support `force` yet,
  * the mistake will be detected and corrected.
  *
  * @param {String} name
  * @param {Boolean} force
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
  * Return an array of classes.
  *
  * @return {Array}
  * @api public
  */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
  * Check if class `name` is present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.has =
 ClassList.prototype.contains = function(name) {
   return this.list.contains(name);
 };

function remove(element) {
  var parent = element.parentNode;

  if (parent) {
    parent.removeChild(element);
  }

  return element;
}

/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}

function clone(element) {
  return element.cloneNode(true);
}

var ns = {
  svg: 'http://www.w3.org/2000/svg'
};

/**
 * DOM parsing utility
 */

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function parse(svg) {

  var unwrap = false;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {

    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
    unwrap = true;
  }

  var parsed = parseDocument(svg);

  if (!unwrap) {
    return parsed;
  }

  var fragment = document.createDocumentFragment();

  var parent = parsed.firstChild;

  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }

  return fragment;
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}

/**
 * Create utility for SVG elements
 */


/**
 * Create a specific type from name or SVG markup.
 *
 * @param {String} name the name or markup of the element
 * @param {Object} [attrs] attributes to set on the element
 *
 * @returns {SVGElement}
 */
function create(name, attrs) {
  var element;

  if (name.charAt(0) === '<') {
    element = parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }

  if (attrs) {
    attr(element, attrs);
  }

  return element;
}

/**
 * Events handling utility
 */

function on(node, event, listener, useCapture) {
  node.addEventListener(event, listener, useCapture);
}

function off(node, event, listener, useCapture) {
  node.removeEventListener(event, listener, useCapture);
}

/**
 * Geometry helpers
 */

// fake node used to instantiate svg geometry elements
var node = null;

function getNode() {
  if (node === null) {
    node = create('svg');
  }

  return node;
}

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; (k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}


function createPoint(x, y) {
  var point = getNode().createSVGPoint();

  switch (arguments.length) {
  case 0:
    return point;
  case 2:
    x = {
      x: x,
      y: y
    };
    break;
  }

  return extend(point, x);
}

/**
 * Create matrix via args.
 *
 * @example
 *
 * createMatrix({ a: 1, b: 1 });
 * createMatrix();
 * createMatrix(1, 2, 0, 0, 30, 20);
 *
 * @return {SVGMatrix}
 */
function createMatrix(a, b, c, d, e, f) {
  var matrix = getNode().createSVGMatrix();

  switch (arguments.length) {
  case 0:
    return matrix;
  case 1:
    return extend(matrix, a);
  case 6:
    return extend(matrix, {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    });
  }
}

function createTransform(matrix) {
  if (matrix) {
    return getNode().createSVGTransformFromMatrix(matrix);
  } else {
    return getNode().createSVGTransform();
  }
}

/**
 * Serialization util
 */

var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;

var ENTITY_REPLACEMENT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '\''
};

function escape(str, pattern) {

  function replaceFn(match, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }

  return str.replace(pattern, replaceFn);
}

function serialize(node, output) {

  var i, len, attrMap, attrNode, childNodes;

  switch (node.nodeType) {

  // TEXT
  case 3:

    // replace special XML characters
    output.push(escape(node.textContent, TEXT_ENTITIES));
    break;

  // ELEMENT
  case 1:
    output.push('<', node.tagName);

    if (node.hasAttributes()) {
      attrMap = node.attributes;
      for (i = 0, len = attrMap.length; i < len; ++i) {
        attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '="', escape(attrNode.value, ATTR_ENTITIES), '"');
      }
    }

    if (node.hasChildNodes()) {
      output.push('>');
      childNodes = node.childNodes;
      for (i = 0, len = childNodes.length; i < len; ++i) {
        serialize(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
    break;

  // COMMENT
  case 8:
    output.push('<!--', escape(node.nodeValue, TEXT_ENTITIES), '-->');
    break;

  // CDATA
  case 4:
    output.push('<![CDATA[', node.nodeValue, ']]>');
    break;

  default:
    throw new Error('unable to handle node ' + node.nodeType);
  }

  return output;
}

/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */


function set(element, svg) {

  var parsed = parse(svg);

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  if (!isFragment(parsed)) {

    // extract <svg> from parsed document
    parsed = parsed.documentElement;
  }

  var nodes = slice(parsed.childNodes);

  // import + append each node
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }

}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function isFragment(node) {
  return node.nodeName === '#document-fragment';
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}


function slice(arr) {
  return Array.prototype.slice.call(arr);
}

/**
 * Selection utilities
 */

function select(node, selector) {
  return node.querySelector(selector);
}

function selectAll(node, selector) {
  var nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}

/**
 * prependTo utility
 */

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} node
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the prepended node
 */
function prependTo(node, target) {
  return target.insertBefore(ensureImported(node, target), target.firstChild || null);
}

/**
 * prepend utility
 */

/**
 * Prepend a node to a target element
 *
 * @param  {SVGElement} target
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the target element
 */
function prepend(target, node) {
  prependTo(node, target);
  return target;
}

/**
 * Replace utility
 */

function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}

/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  }

  return transform;
}


function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}

/**
 * Get or set the transforms on the given node.
 *
 * @param {SVGElement} node
 * @param  {SVGTransform|SVGMatrix|Array<SVGTransform|SVGMatrix>} [transforms]
 *
 * @return {SVGTransform} the consolidated transform
 */
function transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (transforms) {

    if (!Array.isArray(transforms)) {
      transforms = [ transforms ];
    }

    setTransforms(transformList, transforms);
  }

  return transformList.consolidate();
}




/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][]} arr
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _bpmn_js_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bpmn-js-extension */ "./client/bpmn-js-extension/index.js");
/* harmony import */ var _custom_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-renderer */ "./client/custom-renderer/index.js");






(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerBpmnJSPlugin)(_custom_renderer__WEBPACK_IMPORTED_MODULE_2__["default"]);
//registerDmnJSPlugin(DraculaTheme, ["drd", "literalExpression"]);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=client.js.map