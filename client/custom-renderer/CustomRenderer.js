import BpmnRenderer from 'bpmn-js/lib/draw/BpmnRenderer';

const HIGH_PRIORITY = 1500;

const DEFAULT_COLORS = {
    defaultFillColor: "red",
    defaultStrokeColor: "green",
    defaultLabelColor: "green"
};

export default class CustomRenderer extends BpmnRenderer {
  
  constructor(eventBus, textRenderer, canvas, styles, pathMap) {
    super(DEFAULT_COLORS, eventBus, styles, pathMap, canvas, textRenderer, HIGH_PRIORITY);
  }
}

CustomRenderer.$inject = [ 'eventBus', 'textRenderer', 'canvas', 'styles', 'pathMap' ];


