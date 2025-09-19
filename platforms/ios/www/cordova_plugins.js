cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.outsystems.plugins.inappbrowser.OSInAppBrowser",
      "file": "plugins/com.outsystems.plugins.inappbrowser/dist/plugin.js",
      "pluginId": "com.outsystems.plugins.inappbrowser",
      "clobbers": [
        "cordova.plugins.OSInAppBrowser"
      ]
    },
    {
      "id": "com.outsystems.plugins.barcode.OSBarcode",
      "file": "plugins/com.outsystems.plugins.barcode/www/OSBarcode.js",
      "pluginId": "com.outsystems.plugins.barcode",
      "clobbers": [
        "cordova.plugins.OSBarcode"
      ]
    },
    {
      "id": "com.outsystems.plugins.barcode.OSBarcodeScanner",
      "file": "plugins/com.outsystems.plugins.barcode/www/OSBarcodeScanner.js",
      "pluginId": "com.outsystems.plugins.barcode",
      "clobbers": [
        "cordova.plugins.OSBarcodeScanner"
      ]
    },
    {
      "id": "com.outsystems.plugins.barcode.OSBarcodeConstants",
      "file": "plugins/com.outsystems.plugins.barcode/www/OSBarcodeConstants.js",
      "pluginId": "com.outsystems.plugins.barcode",
      "clobbers": [
        "OSBarcodeConstants"
      ]
    }
  ];
  module.exports.metadata = {
    "com.outsystems.plugins.inappbrowser": "1.6.1",
    "com.outsystems.plugins.barcode": "2.0.0"
  };
});