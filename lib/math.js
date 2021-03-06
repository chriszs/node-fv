// Generated by CoffeeScript 1.10.0
module.exports.length = function(vector) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
};

module.exports.distance = function(boxA, boxB) {
  var center1X, center1Y, center2X, center2Y, ref, ref1, ref2, ref3;
  center1X = boxA.x + ((ref = boxA.width) != null ? ref : 0) / 2;
  center1Y = boxA.y + ((ref1 = boxA.height) != null ? ref1 : 0) / 2;
  center2X = boxB.x + ((ref2 = boxB.width) != null ? ref2 : 0) / 2;
  center2Y = boxB.y + ((ref3 = boxB.height) != null ? ref3 : 0) / 2;
  return Math.abs(center1X - center2X) + Math.abs(center1Y - center2Y);
};

module.exports.center = function(box) {
  return {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2
  };
};

module.exports.distanceVector = function(vectorA, vectorB) {
  return {
    x: vectorA.x - vectorB.x,
    y: vectorA.y - vectorB.y
  };
};

module.exports.boxDistanceVector = function(boxA, boxB) {
  return {
    x: Math.max(boxA.x, boxB.x) - Math.min(boxA.x + boxA.width, boxB.x + boxB.width),
    y: Math.max(boxA.y, boxB.y) - Math.min(boxA.y + boxA.height, boxB.y + boxB.height)
  };
};

module.exports.intersectBox = function(boxA, boxB) {
  return boxA.x < (boxB.x + boxB.width) && (boxA.x + boxA.width) > boxB.x && boxA.y < (boxB.y + boxB.height) && (boxA.y + boxA.height) > boxB.y;
};

module.exports.boundingBox = function(boxes) {
  var box, i, len, maxX, maxY, minX, minY;
  minX = Number.MAX_VALUE;
  minY = Number.MAX_VALUE;
  maxX = Number.MIN_VALUE;
  maxY = Number.MIN_VALUE;
  for (i = 0, len = boxes.length; i < len; i++) {
    box = boxes[i];
    if (!(box != null)) {
      continue;
    }
    minX = Math.min(box.x, minX);
    minY = Math.min(box.y, minY);
    maxX = Math.max(box.x, maxX);
    maxY = Math.max(box.y, maxY);
    minX = Math.min(box.x + box.width, minX);
    minY = Math.min(box.y + box.height, minY);
    maxX = Math.max(box.x + box.width, maxX);
    maxY = Math.max(box.y + box.height, maxY);
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
};
