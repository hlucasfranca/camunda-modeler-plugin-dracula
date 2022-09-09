export default function DraculaTheme(eventBus) {

  function changeColors(event) {

    const gfx = event.gfx;
    const element = event.element;

    if(element){
      element.di['background-color']='#262936';
      element.di['border-color']='rgb(207, 205, 205)';
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