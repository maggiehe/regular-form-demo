require.config({
    paths: {
        "text": "/node_modules/text/text",
        "Regular": "/node_modules/regularjs/dist/regular.min",
        "RegularForm": "/node_modules/regular-form/dist/regular-form",
        "Util":"helper/util",
        "form": "form",
        "CheckboxGroup": "components/checkbox-group/checkbox-group",
        "Simple": "components/simple/simple",
        "PromptInput":"components/prompt-input/prompt-input"
    }
});
define(['text', 'Regular', 'form'], function(Text, Regular, Form) {
    var IndexModule = Regular.extend({
        config: function(data) {
            this.supr();
            new Form().$inject('#box');
        }
    });
    return new IndexModule();
});
