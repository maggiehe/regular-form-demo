require.config({
    paths: {
        "text": "/node_modules/text/text",
        "Regular": "/node_modules/regularjs/dist/regular.min",
        "RegularForm": "/node_modules/regular-form/dist/regular-form",
        "RegularUI": "/node_modules/regular-ui/dist/js/regular-ui",
        "Form": "module/form",
        "Util": "helper/util",
        "DatePicker": "component/datePicker"
    }
});
define(['text', 'RegularUI', 'Form'], function (Text, RegularUI, Form) {
    new Form().$inject('.m-example');
});
