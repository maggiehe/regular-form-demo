require.config({
    paths: {
        "text": "/node_modules/text/text",
        "Regular": "/node_modules/regularjs/dist/regular",
        "RegularForm": "/node_modules/regular-form/dist/regular-form",
        "Form": "module/form",
        "Util": "helper/util"
    }
});
define(['text', 'Form'], function (Text, Form) {
    new Form().$inject('.m-example');
});
