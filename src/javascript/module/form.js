define(['RegularForm', 'Util', 'text!module/form.html'],
    function (RegularForm, _, tpl) {
        var Form = RegularForm.extend({
            template: tpl,
            name: 'wgt-form',
            config: function (data) {
                data.regexp = data.regexp || {};
                data.form = data.form || {};
                data.formData = data.formData || {};
                data.formData.contact = '0';
                data.formData.education = '';
                data.regexp.phone = /^1[3|4|5|6|7|8|9]\d{9}$/;
                this.supr(data);
                data.originForm = _.copy(data.formData);
            },
            checkVCCode: function(model){
                return model.toUpperCase() === 'RNNAG';
            },
            reset: function(event){
                var data = this.data;
                if(this.$get('$dirty')){
                    data.formData = _.copy(data.originForm);
                }
            }
        });
        return Form;
    });
