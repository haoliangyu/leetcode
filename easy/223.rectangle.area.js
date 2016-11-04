// Find the total area covered by two rectilinear rectangles in a 2D plane.
//
// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
// Rectangle Area
//
// Assume that the total area is never beyond the maximum possible value of int.

function isIntersect(A, B, C, D, E, F, G, H) {
  return !(E > C || A > G) && !(F > D || B > H);
}

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var heightA = D - B;
  var widthA = C - A;

  var heightB = H - F;
  var widthB = G - E;

  var area = heightA * widthA + heightB * widthB;

  if (isIntersect(A, B, C, D, E, F, G, H)) {

    var height = F < B ? H - B : D - F;
    height = height < heightA && height < heightB ? height :
             heightA < heightB ? heightA : heightB;

    var width = A < E ? C - E : G - A;
    width = width < widthA && width < widthB ? width :
            widthA < widthB ? widthA : widthB;

    area = area - height * width;
  }

  return area;
};
