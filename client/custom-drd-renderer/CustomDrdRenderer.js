import DrdRenderer from "./DrdRenderer";
import { DEFAULT_RENDERER_COLORS, HIGH_PRIORITY } from "../DraculaColors";

export default class CustomDrdRenderer extends DrdRenderer {
  constructor(eventBus, pathMap, styles, textRenderer, canvas) {
    super(DEFAULT_RENDERER_COLORS, eventBus, pathMap, styles, textRenderer, canvas, HIGH_PRIORITY);
  }
}

CustomDrdRenderer.$inject = ["eventBus", "pathMap", "styles", "textRenderer", "canvas"];
