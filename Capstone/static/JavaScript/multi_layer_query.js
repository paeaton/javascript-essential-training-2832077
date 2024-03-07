/*
Class definitions for Multi Layer Query
*/

class Multi_Layer_Query {
  constructor(
    // Defines parameters:
    numLayers,
    layers,
    addLayer,
    removeLayer
  ) {
    // Define properties:
    this.numLayers = numLayers;
    this.layers = layers;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Multi_Layer_Query;
