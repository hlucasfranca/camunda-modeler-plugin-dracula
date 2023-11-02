import {
  registerBpmnJSPlugin,
  registerDmnJSPlugin,
} from "camunda-modeler-plugin-helpers";

import CustomBpmnRenderer from './custom-bpmn-renderer'
import CustomDrdRenderer from './custom-drd-renderer'

registerBpmnJSPlugin(CustomBpmnRenderer);
registerDmnJSPlugin(CustomDrdRenderer, ["drd", "literalExpression"]);
