const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

// HELPING UTILITIES FOR VALIDATING           //
// OBJECTS AND ABSTRACTING REUSABLE CODE      //
const utils = require('../utils'),            //
  propChecker = utils.propChecker,            //
  promiseHelper = utils.promiseHelper;        //
// *****************************************  //

function Instance (obj) {
  if (!obj) { throw new Error('no object, check invocation of Instance'); }

  return new Promise(function (resolve, reject) {
    ec2.runInstances(
      propChecker(obj, ['ImageId', 'MaxCount', 'MinCount' ]),
      promiseHelper(resolve, reject)
    );
  });
}

module.exports = Instance;