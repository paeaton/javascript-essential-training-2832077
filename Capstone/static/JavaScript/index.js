/* 
Multi_Layer_Query Java Script File
-Add Documentation info here
*/

var layerData = [];

const dropdown_materials = [
  { value: "", text: "Select Material" },
  { value: "Si", text: "Silicon" },
  { value: "Pb", text: "Lead" },
  // Add more options as needed
];

const layer_data = {
  numberOfLayers: 1,
};

generateLayers();

/* 
Functions Listed Below
*/

function printLayerData() {
  console.log(layerData);
}

function generateLayers() {
  var numberOfLayers = layer_data.numberOfLayers;
  var layerContainer = document.getElementById("layerContainer");
  layerContainer.innerHTML = "";

  for (var i = 1; i <= numberOfLayers; i++) {
    var layerDiv = document.createElement("div");
    layerDiv.className = "box";
    layerDiv.innerHTML = "<h4>Layer " + i + "</h4>";

    var materialInput = createInput(
      "select",
      "materialLayer" + i,
      "Material",
      dropdown_materials
    );
    var thicknessInput = createInput("text", "ThicknessLayer" + i, "Thickness");

    var materialInputGroup = createInputGroup("Material", materialInput);
    var thicknessInputGroup = createInputGroup("Thickness", thicknessInput);

    layerDiv.appendChild(materialInputGroup);
    layerDiv.appendChild(thicknessInputGroup);

    layerContainer.appendChild(layerDiv);

    layerData.push({
      material: "",
      thickness: "",
    });

    materialInput.addEventListener(
      "input",
      createInputListener(i - 1, "material")
    );
    thicknessInput.addEventListener(
      "input",
      createInputListener(i - 1, "thickness")
    );
  }
}

function addLayer() {
  var i = layer_data.numberOfLayers + 1;
  layer_data.numberOfLayers = i;
  var layerContainer = document.getElementById("layerContainer");
  var layerDiv = document.createElement("div");
  layerDiv.className = "box";
  layerDiv.innerHTML = "<h4>Layer " + i + "</h4>";

  var materialInput = createInput(
    "select",
    "materialLayer" + i,
    "Material",
    dropdown_materials
  );
  var thicknessInput = createInput("text", "ThicknessLayer" + i, "Thickness");

  var materialInputGroup = createInputGroup("Material", materialInput);
  var thicknessInputGroup = createInputGroup("Thickness", thicknessInput);

  layerDiv.appendChild(materialInputGroup);
  layerDiv.appendChild(thicknessInputGroup);

  layerContainer.appendChild(layerDiv);

  layerData.push({
    material: "",
    thickness: "",
  });

  materialInput.addEventListener(
    "input",
    createInputListener(i - 1, "material")
  );
  thicknessInput.addEventListener(
    "input",
    createInputListener(i - 1, "thickness")
  );
}

function createInput(type, id, placeholder, options) {
  if (type === "select") {
    var select = document.createElement("select");
    select.id = id;
    select.name = id;

    // Create and append option elements
    options.forEach(function (option) {
      var optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      select.appendChild(optionElement);
    });

    return select;
  } else {
    var input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    return input;
  }
}

function createInputListener(index, property) {
  return function (event) {
    layerData[index][property] = event.target.value;
  };
}

function createInputGroup(labelText, inputElement) {
  var groupDiv = document.createElement("div");
  groupDiv.className = "inputGroup";
  var label = document.createElement("label");
  label.textContent = labelText;
  groupDiv.appendChild(label);
  groupDiv.appendChild(inputElement);
  return groupDiv;
}

document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Layer Data:", layerData);
    document.getElementById("layerDataHeading").style.display = "block";
    var outputDiv = document.getElementById("layerDataOutput");
    outputDiv.innerHTML =
      "<pre>" + JSON.stringify(layerData, null, 2) + "</pre>";
  });
