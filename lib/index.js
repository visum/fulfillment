var global = (function(){return this;})();

module.exports = function() {
  if (this === global) {
    throw new Error("Fulfillment must be invoked as a constructor.");
  }

  var self = this;

  const promise = new Promise((resolve, reject) => {
    self.resolve = resolve;
    self.reject = reject;
  });

}
