define(['RegularForm','text!components/simple/simple.html'], function(RegularForm,tpl) {
    var SimpleModule = RegularForm.extend({
        template: tpl,
        name: 'simple'
    });
    return SimpleModule;
});
