import {
  registerBpmnJSPlugin,
  registerDmnJSPlugin,
} from "camunda-modeler-plugin-helpers";

import DraculaTheme from "./bpmn-js-extension";

import CustomRenderer from './custom-renderer'

registerBpmnJSPlugin(CustomRenderer);
//registerDmnJSPlugin(DraculaTheme, ["drd", "literalExpression"]);
