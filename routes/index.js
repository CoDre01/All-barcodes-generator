var express = require('express');
var router = express.Router();
const { barcodeTypes } = require('./barcodeTypes');
const bwipjs = require('bwip-js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {barcodeTypes});
});

router.post('/', function(req, res) {
  bwipjs.toBuffer({
    bcid:        req.body.barcodeType,       // Barcode type
    text:        req.body.barcodeText,    // Text to encode
    scale:       req.body.scale,               // 3x scaling factor
    height:      req.body.scale * 3.333333333,             // Bar height, in millimeters
    includetext: true,            // Show human-readable text
    textxalign:  'center',       // Always good to set this
    backgroundcolor: req.body.backgroundColor,
    barcolor: req.body.color,
}, function (err, buffer) {
    if (err) {
      console.log(err);
      let errMessage = err.message;
      console.log(errMessage);
      res.render('index', {errMessage});
    } else {
      let png = `data:image/png;base64,${buffer.toString('base64')}`;
      
      res.render('index', { png });;
    }
});
})


module.exports = router;
