export default function DraculaTheme(eventBus) {

  function changeColors(event) {

    const gfx = event.gfx;
    const element = event.element;

    if(element && element.di){
      element.di['background-color']=getComputedStyle(document.documentElement).getPropertyValue('--color-white');
      element.di['border-color']=getComputedStyle(document.documentElement).getPropertyValue('--color-grey-225-10-35');
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

}

DraculaTheme.$inject = [
  'eventBus'
];