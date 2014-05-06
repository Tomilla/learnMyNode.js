function Class(child, parent) {
  for (var method in child) {
    if (child[method].hasOwnProperty && typeof(child[method]) == 'function' && method != 'initialize')
      child.constructor.prototype[method] = child[method];
  }

  if (typeof(parent == 'function'))
    child.constructor.prototype = parent;

  child.constructor.__super__ = parent;

  child.constructor.prototype.super = function(method) {
    return parent[method].apply(this);
  }

  return child.constructor;
};

module.exports = Class;
