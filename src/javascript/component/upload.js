define(['RegularForm', 'Util', 'text!module/form.html'],
    function (RegularForm, _, tpl) {
        var Upload = RegularForm.extend({
            template: tpl,
            name: 'wgt-form',
            config: function (data) {
                data.regexp = data.regexp || {};
                data.form = data.form || {};
                data.regexp.phone = /^1[3|4|5|6|7|8|9]\d{9}$/;
                this.supr(data);
                data.originForm = _.copy(data.form);
            },
            checkVCCode: function(model){
                return model.toUpperCase() === 'RNNAG';
            }
        });
        return Upload;
    });
