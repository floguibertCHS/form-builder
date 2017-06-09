var FormData = document.querySelector('#container');
// console.log([getFormData]);
//
// var control = formData;
console.log(formData[0]);

// var container = document.querySelector('#container');
// console.log([container]);


// var createInputElement = function(){

    // var inputElement = formData[0];
    // var i = 0;
    //   if(formData[i].type == 'text' || 'email' || 'tel'){

      var divElement = document.createElement('div');
      container.appendChild(divElement);
      divElement.classList.add("inputElement");

      var inputElement = document.createElement('input');
      divElement.appendChild(inputElement);

      inputElement.type = formData[0].type;
      inputElement.placeholder = formData[0].label;
      inputElement.id = formData[0].id;

      var iElement = document.createElement('i');
      divElement.appendChild(iElement);
      iElement.innerHTML = [formData[0].icon];
console.log(divElement);

      // divElement.appendChild(inputElement);



        // break;document.create document.createElement('input');


// createInputElement(formData[0]);

//////////////
// var getFormData = document.querySelector('#container');
// console.log([getFormData]);
//
//
//
// var createInput = function(formData){
//
//   var inputElement = formData[0];
//
//   for (var i=0; i < formData.length; i++){
//
//       var inputElement = document.createElement('input');
//         inputElement.type = FormData[i].type;
//         inputElement.placeholder = FormData[i].label;
//         inputElement.id = FormData[i].id;
//         inputElement.icon = FormData[i].icon;
//         inputElement.options = FormData[i].options;
//
//     container.appendChild(inputElement);
// }
// console.log(FormData[i]);
// }
//
// createInput(getFormData);
/////////
/*
var control = formData[0];
console.log(control)

var inputElement = document.createElement('input');
inputElement.id = control.id;
inputElement.placeholder = control.label;
container.appendChild(inputElement)
*/
