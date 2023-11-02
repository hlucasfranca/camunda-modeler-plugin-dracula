import BpmnRenderer from "bpmn-js/lib/draw/BpmnRenderer";
import { DEFAULT_RENDERER_COLORS, HIGH_PRIORITY } from "../DraculaColors";

export default class CustomBpmnRenderer extends BpmnRenderer {
  constructor(eventBus, textRenderer, canvas, styles, pathMap) {
    super(DEFAULT_RENDERER_COLORS, eventBus, styles, pathMap, canvas, textRenderer, HIGH_PRIORITY);
  }
}

CustomBpmnRenderer.$inject = ["eventBus", "textRenderer", "canvas", "styles", "pathMap"];
