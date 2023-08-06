/**
 * @typedef {import('diagram-js/lib/core/ElementRegistry').default} ElementRegistry
 * @typedef {import('diagram-js/lib/core/EventBus').default} EventBus
 * @typedef {import('diagram-js/lib/draw/BaseRenderer').default} BaseRenderer
 
 */

/**
 * Correct hover targets in certain situations to improve diagram interaction.
 *
 * @param {ElementRegistry} elementRegistry
 * @param {EventBus} eventBus
 * @param {BaseRenderer} bpmnRenderer
  */

export default function DraculaTheme(eventBus, elementRegistry,  commandStack, bpmnRenderer) {

  

  function changeColors(event) {

    // const gfx = event.gfx;
    const element = event.element;
    const documentElement = document.documentElement;

    if(element && element.di){
      const elementDi = element.di;

      elementDi['background-color']=getComputedStyle(documentElement).getPropertyValue('--color-white');
      elementDi['border-color']=getComputedStyle(documentElement).getPropertyValue('--color-grey-225-10-35');      

      if(element.type == 'label'){

        if(elementDi.label){
          elementDi.label.set('color', element.di['border-color']=getComputedStyle(documentElement).getPropertyValue('--color-grey-225-10-35'));
        }

      }
    }
  }

  function restoreColors(event) {

    for(let planeElement of event.definitions.diagrams[0].plane.planeElement){
      planeElement['border-color'] = '';
      planeElement['background-color'] = '';
    }    
  }

eventBus.on([
  'shape.added',
  'render.shape', 
  'render.connection',
  'shape.moved',
  'shape.changed',
  'element.changed'  
], 1250, changeColors);

eventBus.on([
  'saveXML.start'  
], 1250, restoreColors);

eventBus.on('diagram.init', function() {  
  let a = bpmnRenderer;
});

}

DraculaTheme.$inject = [
  'eventBus',
  'elementRegistry',
  'commandStack',
  'bpmnRenderer'  
];