cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.flybuy.cordova.background-location-services/www/BackgroundLocationServices.js",
        "id": "org.flybuy.cordova.background-location-services.BackgroundLocationServices",
        "pluginId": "org.flybuy.cordova.background-location-services",
        "clobbers": [
            "plugins.backgroundLocationServices"
        ]
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/tests.js",
        "id": "cordova-plugin-test-framework.cdvtests",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
        "id": "cordova-plugin-test-framework.jasmine_helpers",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/medic.js",
        "id": "cordova-plugin-test-framework.medic",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/main.js",
        "id": "cordova-plugin-test-framework.main",
        "pluginId": "cordova-plugin-test-framework"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "org.flybuy.cordova.background-location-services": "1.1.1",
    "cordova-plugin-test-framework": "1.1.7-dev"
}
// BOTTOM OF METADATA
});