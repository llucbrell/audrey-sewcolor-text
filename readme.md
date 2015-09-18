# audrey-sewcolor-text

> Seed for audrey-two VCCLI (View-Control-->Command-Line-Interface) ^v2.0.0


## What this seed does?

Include into your audrey-two-view different strings in different colors. The string changes with the audrey-errors passed. Uses the err, warn, suc of the audrey-custom-view-object.

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags. Now taggies replaced by custom audrey-seeds. This seeds can be included or not in your projects.

This node-module redefine the older audrey-two taggy "~". Now you can use it again with audrey.

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-sewcolor-text
```
## Usage

Example

```js
var myTerminalDisplay={
	body:["~~stringChange"],//tell audrey where you want to display it
	stringChange:["Action success", "Action warning", "Action error"],
	//only admit an array of 3 strings
	colors:{warning: "yellow", 
		 	error: chalk.red.bold,//you can use chalk
			success: "green", }//tell audrey wich color use
};

var audrey2= require('audrey-two');
var audrey= audrey2(myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.seed(["audrey-sewcolor-text-~~"]);//tell audrey that there is a new seed
audrey.feed("E01","I'm an error..");
/* pass an error to audrey
 * if first param start in "W"--> print "Action warning" in yellow 
 *  "   "     "     "   "  "E"-->   "    "      error    in  red
 *  "   "     "     "   "  "S"-->   "    "      succes   in green
 */
audrey.talk();//run audrey to display view
```
