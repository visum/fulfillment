const global = (function(){return this;})();

export default function() {
  if (global === this) {
    throw new Error("Fulfillment must be invoked as a constructor");
  }

  const promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  

};