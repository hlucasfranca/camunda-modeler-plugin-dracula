# Camunda Modeler Plugin Example

 [![Compatible with Camunda Modeler version 5](https://img.shields.io/badge/Modeler_Version-5.0.0+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin%20Type-BPMN-orange.svg)](#)

This example serves as a starting point for creating your own plugin for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).


## Development Setup

Use [npm](https://www.npmjs.com/), the [Node.js](https://nodejs.org/en/) package manager to download and install required dependencies:

```sh
npm install
```

To make the Camunda Modeler aware of your plugin you must link the plugin to the [Camunda Modeler plugin directory](https://github.com/camunda/camunda-modeler/tree/develop/docs/plugins#plugging-into-the-camunda-modeler) via a symbolic link.
Available utilities to do that are [`mklink /d`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) on Windows and [`ln -s`](https://linux.die.net/man/1/ln) on MacOS / Linux.

Re-start the app in order to recognize the newly linked plugin.


## Building the Plugin

You may spawn the development setup to watch source files and re-build the client plugin on changes:

```sh
npm run dev
```

Given you've setup and linked your plugin [as explained above](#development-setup), you should be able to reload the modeler to pick up plugin changes. To do so, open the app's built in development toos via `F12`. Then, within the development tools press the reload shortcuts `CTRL + R` or `CMD + R` to reload the app.


To prepare the plugin for release, executing all necessary steps, run:

```sh
npm run all
```


## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plugin is compatible with and which type of plugin it is by changing the badges at the top of this README. See [best-practice examples below](#badges-to-indicate-typical-plugin-types).
* [ ] Ensure you renamed the [bpmn-js extension](./client/bpmn-js-extension/index.js#L17) from `PLEASE_CHANGE_ME` to something unique
* [ ] Ensure you've removed the menu and style folders as well as their references in `./index.js` if you do not need them


### Badges to indicate typical plugin types

| Badge | Markdown |
|-|-|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_7)-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_7)-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_8)-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_(Camunda_Platform_8)-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle_(Camunda_Platform_7)-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle_(Camunda_Platform_7)-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle_(Camunda_Platform_8)-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle_(Camunda_Platform_8)-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-DMN-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-DMN-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-DMN_Moddle-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-DMN_Moddle-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-React-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-React-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-Styles-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-Styles-orange.svg)](#)`|
|[![Plugin Type](https://img.shields.io/badge/Plugin_Type-Menu-orange.svg)](#)|`[![Plugin Type](https://img.shields.io/badge/Plugin_Type-Menu-orange.svg)](#)`|

## Additional Resources

* [List of existing plugins](https://github.com/camunda/camunda-modeler-plugins)
* [Plugins documentation](https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/)


## Licence

MIT
