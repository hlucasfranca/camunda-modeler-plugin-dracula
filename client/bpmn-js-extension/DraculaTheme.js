export default function DraculaTheme(eventBus) {

  function changeColors(event) {

    const gfx = event.gfx;
    const element = event.element;

    if(element){
      element.di['background-color']=getComputedStyle(document.documentElement).getPropertyValue('--color-white');
      element.di['border-color']=getComputedStyle(document.documentElement).getPropertyValue('--color-grey-225-10-35');
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

}

DraculaTheme.$inject = [
  'eventBus'
];