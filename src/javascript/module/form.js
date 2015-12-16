define(['RegularForm', 'Util', 'DatePicker', 'text!module/form.html'],
    function (RegularForm, _, DatePicker, tpl) {
        var Form = RegularForm.extend({
            template: tpl,
            name: 'wgt-form',
            config: function (data) {
                data.form = data.form || {};
                this.supr(data);
                data.originForm = _.copy(data.form);
            },
        });
        return Form;
    });
