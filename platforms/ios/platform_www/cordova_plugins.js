cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.outsystems.plugins.inappbrowser.OSInAppBrowser",
      "file": "plugins/com.outsystems.plugins.inappbrowser/dist/plugin.js",
      "pluginId": "com.outsystems.plugins.inappbrowser",
      "clobbers": [
        "cordova.plugins.OSInAppBrowser"
      ]
    }
  ];
  module.exports.metadata = {
    "com.outsystems.plugins.inappbrowser": "1.6.1"
  };
});