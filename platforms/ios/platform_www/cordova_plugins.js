cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "org.flybuy.cordova.background-location-services.BackgroundLocationServices",
    "file": "plugins/org.flybuy.cordova.background-location-services/www/BackgroundLocationServices.js",
    "pluginId": "org.flybuy.cordova.background-location-services",
    "clobbers": [
      "plugins.backgroundLocationServices"
    ]
  },
  {
    "id": "cordova-plugin-test-framework.cdvtests",
    "file": "plugins/cordova-plugin-test-framework/www/tests.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.jasmine_helpers",
    "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.medic",
    "file": "plugins/cordova-plugin-test-framework/www/medic.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.main",
    "file": "plugins/cordova-plugin-test-framework/www/main.js",
    "pluginId": "cordova-plugin-test-framework"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "org.flybuy.cordova.background-location-services": "1.1.1",
  "cordova-plugin-test-framework": "1.1.7-dev"
};
// BOTTOM OF METADATA
});