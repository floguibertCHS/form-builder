var container = document.querySelector('.fields');
// function buildLabel(labelData) {
//
//     console.log(labelData);
//     var labelElement = document.createElement('label');
//     labelElement.innerHTML = labelData;
//     container.appendChild(labelElement);
//
// }

function buildSelect(selectData) {

  var selectElement = document.createElement('select');
  //console.log(selectData.options);
  selectElement.placeholder = selectData.label;
  selectElement.id = selectData.id;

  for (var i = 0; i < selectData.options.length; i++) {

    var optionElement = document.createElement('option');
    optionElement.label = selectData.options[i].label;
    optionElement.value = selectData.options[i].value;
    selectElement.appendChild(optionElement);

  }

  container.appendChild(selectElement);

}

function buildTextArea(textAreaData) {

  var textAreaElement = document.createElement('textarea');
  textAreaElement.id = textAreaData.id;
  container.appendChild(textAreaElement);

}

function buildTextInput(textInputData) {

  var inputElement = document.createElement('input');
  inputElement.id = textInputData.id;
  inputElement.placeholder = textInputData.label;

  var elementDiv = document.createElement('div');
  elementDiv.classList.add(textInputData.icon);
  elementDiv.content = textInputData.icon;

  container.appendChild(elementDiv);
  elementDiv.appendChild(inputElement);

}

for (var i = 0; i < formData.length; i++) {

  if (formData[i].type == "select") {

    buildSelect(formData[i]);

  } else if (formData[i].type == "textarea") {

    buildTextArea(formData[i]);

  } else {

    buildTextInput(formData[i]);

  }

}
