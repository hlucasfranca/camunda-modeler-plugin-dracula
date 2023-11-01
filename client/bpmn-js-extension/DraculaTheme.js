import SetColorHandler from "bpmn-js/lib/features/modeling/cmd/SetColorHandler";

import DrdRenderer from "dmn-js-drd/lib/draw/DrdRenderer"

import {
  isTypedEvent,
  isThrowEvent,
  isCollection,
  getDi,
  getSemantic,
  getCirclePath,
  getRoundRectPath,
  getDiamondPath,
  getRectPath,
  getFillColor,
  getStrokeColor,
  getLabelColor
} from 'bpmn-js/lib/draw/BpmnRenderUtil';

import { Container } from 'didi';

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




export default function DraculaTheme(
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
  self.getFillColor = getFillColor;

  self.drdRenderer = new DrdRenderer({},eventBus,pathMap,styles,textRenderer,canvas);
  debugger;

  function changeColors(event) {
    let a = getFillColor(event.element, "red");

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
