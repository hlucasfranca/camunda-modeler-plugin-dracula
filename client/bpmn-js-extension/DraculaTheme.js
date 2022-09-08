export default function DraculaTheme(eventBus) {

  function changeColors(event) {

    const gfx = event.gfx;

    if(gfx.children.length > 0 && gfx.children[0].children){
      for (let child of gfx.children[0].children) {

        let style = child.style;
        let fill = style.fill;

        if( style.fill == 'white' || style.fill == "rgb(255, 255, 255)"){
          style.fill = '#262936';  
        } else if (style.fill == 'black' || style.fill == 'rgb(0, 0, 0)' || style.fill == 'rgb(34, 36, 42)'|| style.fill == 'rgb(38, 41, 54)'){
          style.fill = 'rgb(207, 205, 205)';
        }       
        
        if(style.stroke == 'black' || style.stroke == 'rgb(0, 0, 0)' || style.stroke == 'rgb(34, 36, 42)'|| style.stroke == 'rgb(38, 41, 54)'){
          style.stroke = 'rgb(207, 205, 205)';
        }
      }
    }
    
  }

eventBus.on([
  'shape.added',
  'render.shape', 
  'render.connection',
  'shape.moved',
  'shape.changed'
], changeColors);

}

DraculaTheme.$inject = [
  'eventBus'
];