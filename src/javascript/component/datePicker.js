define(['RegularForm', 'RegularUI', 'Util', 'text!component/datePicker.html'],
    function (RegularForm, RegularUI, _, tpl) {
        var DatePicker = RegularUI.DatePicker.extend({
            template: tpl,
            name: 'wgt-datepicker'
        });
        DatePicker.implement(RegularForm.prototype);
        return DatePicker;
    });
