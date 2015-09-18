
module.exports= function(){

var data;
var name;	
var bul;
var terminal;



return{
	     grow: function(simName, customObject){ 
        terminal= customObject;
        printChange(simName);},
harvestData: function(){ return data;}
}

function checkColors(name){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}


function checkProperties(name){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}

function printCBrand(name, tagColor){
  console.log(); 
      process.stdout.write(tagColor(name));
}

function printChange(simName){
  var name= simName.slice(2); //delete simbol of the name
  checkProperties(name, terminal);
  checkArrayLength(name, 3, 3);
  if(terminal.colors[name]){
    if(terminal.ers>0){printCBrand(terminal[name][2], terminal.colors[name]);}
    if(terminal.ers===0 && terminal.warn===0){printCBrand(terminal[name][0],terminal.colors[name]);}
    if(terminal.ers===0 && terminal.warn>0){printCBrand(terminal[name][1],terminal.colors[name]);}
  }
  else{
    checkColors("error", terminal);
    checkColors("warning", terminal);
    checkColors("success", terminal);
    if(terminal.ers>0){printCBrand(terminal[name][2], terminal.colors.error);}
    if(terminal.ers===0 && terminal.warn===0){printCBrand(terminal[name][0], terminal.colors.success);}
    if(terminal.ers===0 && terminal.warn>0){printCBrand(terminal[name][1], terminal.colors.warning);}  
  }
 
}

function checkArrayLength(name, minLength, maxLength){
   if(terminal[name].length> maxLength){
    throw new Error("The Array"+name+" can't be bigger than 3");
   } 
   if(terminal[name].length< minLength){
    throw new Error("The Array"+name+" can't be smaller than 3");
   }
}



}