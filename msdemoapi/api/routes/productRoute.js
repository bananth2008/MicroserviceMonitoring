'use strict';
module.exports = function(app) {
  var productInfo = require('../controllers/productController');


app.route('/productInfo/:productId')
    .get(productInfo.read_prod_info);
};

