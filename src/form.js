define(['Regular', 'RegularForm', 'text!form.html', 'Simple'], function(Regular, RegularForm, tpl, Simple) {
    var Form = RegularForm.extend({
        template: tpl,
        name: 'wgt-form',
        config:function(data){
            data.value1='some text for input';
            data.value2='some text';
            data.pattern=/^\w+$/;
            this.supr(data);
        }
    });
    return Form;
});
