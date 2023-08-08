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

import { oneDarkTheme } from "@codemirror/theme-one-dark";

import {getFillColor} from "bpmn-js/lib/draw/BpmnRenderUtil"

export default function DraculaTheme(
  eventBus,
  elementRegistry,
  commandStack,
  bpmnRenderer,
  canvas
) {
  let editorView = undefined;

  function changeColors(event) {
    // const gfx = event.gfx;
    const element = event.element;
    const documentElement = document.documentElement;

    // if (element && element.di) {
    //   const elementDi = element.di;

    //   elementDi["background-color"] =
    //     getComputedStyle(documentElement).getPropertyValue("--color-white");
    //   elementDi["border-color"] = getComputedStyle(documentElement).getPropertyValue("--color-grey-225-10-35");

    //   if (element.type == "label") {
    //     if (elementDi.label) {
    //       elementDi.label.set("color", (element.di["border-color"] = getComputedStyle(documentElement).getPropertyValue("--color-grey-225-10-35")));
    //     }
    //   }
    // }
  }

  function restoreColors(event) {
    for (let planeElement of event.definitions.diagrams[0].plane.planeElement) {
      planeElement["border-color"] = "";
      planeElement["background-color"] = "";
    }
  }

  function teste(event) {
    debugger;

    let container = canvas.getContainer();

    

    let cmEditorElement = document.querySelector(".cm-editor"); // Or whatever query you need

    if (cmEditorElement) {
      editorView = cmEditorElement.querySelector(".cm-content").cmView.view;
    }
    
  }

  eventBus.on(
    [
      "shape.added",
      "render.shape",
      "render.connection",
      "shape.moved",
      "shape.changed",
      "element.changed",
    ],
    1250,
    changeColors
  );

  eventBus.on(
    ["propertiesPanel.attach", "propertiesPanel.detach"],
    1250,
    teste
  );

  eventBus.on(["saveXML.start"], 1250, restoreColors);

  eventBus.on("diagram.init", function () {
    const handlers = bpmnRenderer.handlers;
    


    

    debugger;
  });
}

DraculaTheme.$inject = [
  "eventBus",
  "elementRegistry",
  "commandStack",
  "bpmnRenderer",
  'canvas'
];
