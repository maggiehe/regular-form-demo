define(['Regular','text!components/simple/simple.html'], function(Regular,tpl) {
    var SimpleModule = Regular.extend({
        template: tpl,
        name: 'simple'
    });
    return SimpleModule;
});
