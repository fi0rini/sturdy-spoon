var AWS = require('aws-sdk');
AWS.config.accessKeyId = 'AKIAJ34CERN7M5JENF7Q';
AWS.config.secretAccessKey = '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';
AWS.config.region = 'us-east-1';

var Instance = require('./lib/Instance.js');

var i1 = Instance({
  'ImageId': 'ami-2051294a',
  'MaxCount': 1,
  'MinCount': 1,
  'InstanceType': 't2.micro',
  'SecurityGroupIds': ['sg-b92b19c3'],
  'KeyName': 'nick-key'
});

i1
  .then((data) => console.warn('data', data))
  .catch((error) => console.error('err', error));
