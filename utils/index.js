exports.promiseHelper = function(resolve, reject) {
  return function (err, data) {
    if (err) {
      return reject(err);
    } else {
      return resolve(data);
    }
  };
};

exports.propChecker = function (obj, array) {
  array.forEach(function(prop) {
    if (prop in obj === false || obj[prop] === null) {
      throw new Error(prop, 'not in object');
    }
  }.bind(this));
  return obj;
};