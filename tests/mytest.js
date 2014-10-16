var config = require('../testconfig');
var Azure = require('../index.js');
var fs = require('fs')

var api = new Azure(config.auth); // {client_id: 'your azure media id', client_secret: 'your azure media secret'}
api.init(function (err, token) {
  // do your work here or after this callback
  console.log(err||"got token")

//  api.media.uploadStream('shit.mp4', fs.createReadStream('/Users/pengchengbi/Desktop/Sample2.mp4'), fs.statSync('/Users/pengchengbi/Desktop/Sample2.mp4').size,
//    function (err, path, result) {
//  }, function (err, path, result) {
//      console.log(result.asset.Id);
//  });

  api.media.getDownloadURL("nb:cid:UUID:f1951d6d-9f9f-4368-924c-6c7122432fb7", function (err, url) {
    console.log(url);
  });

//  api.media.encodeVideo("nb:cid:UUID:4f14d3e3-52ac-4cf0-b631-290049a8a852", 'H264 Broadband 720p', function (err, job, asset) {
//    console.log(err || job.toJSON());
//    console.log(asset.toJSON())
//  });

//  api.rest.asset.get("nb:cid:UUID:4dfecb13-b8bc-4e69-adad-7947356b9c5a", function (err, result) {
//    console.log(err||result.toJSON())
//  });

//  api.rest.asset.list(function (err, result) {
//    console.log(err||result[0].toJSON())
//  }, {'$filter': "Name eq 'Sample2.mp4-H264_Adaptive_Bitrate_MP4_Set_SD_16x9_iOS_Cellular-Output'"});

//  api.rest.asset.listFiles("nb:cid:UUID:f1951d6d-9f9f-4368-924c-6c7122432fb7", function (err, result) {
//    console.log(err||result[0].toJSON())
//  });

//  api.rest.asset.listLocators("nb:cid:UUID:7f97e86f-7cfc-4760-b1ff-57d071ccdc49", function (err, result) {
//    console.log(err||result[0].toJSON())
//  });

//  api.rest.assetfile.list(function (err, results) {
//    console.log(results.length)
//    console.log(results[0].toJSON())
////    results.forEach(function (res){
////      console.log(res.toJSON().ParentAssetId)
////    });
//  }, {'$filter': "Name eq 'shit.mp4'"});

//  api.rest.job.get("nb:jid:UUID:05f25bb7-b0b5-e749-b6d6-f81b62ffe66e", function (err, result) {
//    console.log(err||result.toJSON())
//  });

//    api.rest.locator.list(function (err, results) {
//      console.log(results[0].toJSON())
////      results.forEach(function (res){
////        console.log(res.toJSON())
////      });
//    }, {$orderby: 'Created desc'});


});

