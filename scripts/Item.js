'use strict';
function validateName(name){
  if(!name){
    throw new TypeError('Name does not exist')
}}

function create(name){
  return {
    id: cuid(),
    name,
    checked: false,
  };

}

const Item = (function() {


  return {
    validateName,
    create
  };
}());