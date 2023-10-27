import {
  registerBpmnJSPlugin, registerDmnJSPlugin 
} from 'camunda-modeler-plugin-helpers';

import DraculaTheme from './bpmn-js-extension';

//registerBpmnJSPlugin(DraculaTheme);
registerDmnJSPlugin(DraculaTheme, [ 'drd', 'literalExpression' ])
