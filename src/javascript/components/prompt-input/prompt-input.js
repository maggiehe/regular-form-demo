define([
    "text!components/prompt-input/prompt-input.html",
    "RegularForm",
    "Util"
], function(tpl, RegularForm, _) {
    var PromptInput = RegularForm.extend({
        name: "prompt-input",
        template: tpl,
        config: function(data) {
            _.extend(data, {
                valid: true,
                isFocus: false,
                matchedList: [],
                key: 'key', //key字段
                value: 'value' //显示字段
            });

            data.currentValue = this.getValue(data.initialKey);
            this.$watch('currentValue', function() {
                data.initialKey = this.getKey(data.currentValue);
                this.$emit('updated', data.initialKey);
                // this.validate();
                this.filter();
            });
            this.supr(data);

        },
        init: function(data) {
            _.addEvent(document, 'click', this.onClick.bind(this));
            this.supr(data);

        },
        onClick:function(event){
          if(!this.$refs || !this.$refs.ul) return;
          var pars=_.getAncestorByClassName(event.target,'j-prompt'),inner=false;
          if(pars && pars===this.$refs.prompt) inner=true;
          if(!inner) _.addClass(this.$refs.ul,'f-dn');//外部事件，为了大数据性能使用dom操作，不用$update
        },
        onInputFocus:function(){
          var data=this.data;
          _.removeClass( this.$refs.ul,'f-dn');
        },
        select:function(value){
          var data=this.data;
          data.currentValue=value;
          _.addClass( this.$refs.ul,'f-dn');
        },
        //关键字查询
        filter: function() {
            var data = this.data,
                datalist = data.datalist,
                currvalue = data.currentValue.trim().replace(/([\(\)\*\+\.\?\{\^\\\$\|\[])/g, "\\$1"),
                reg = new RegExp(currvalue, 'i');
            var matchedList = [];
            if (!!currvalue) {
                for (var i = 0; i < datalist.length; i++) {
                    if (reg.test(datalist[i][data.value])) {
                        matchedList.push(datalist[i][data.value]);
                    }
                    if (matchedList.length >= 20) break;
                }
            }
            data.matchedList = matchedList;
        },
        getKey: function(value) {
            var datalist = this.data.datalist;
            for (var i = 0; i < datalist.length; i++) {
                if (datalist[i][this.data.value] == value) return datalist[i][this.data.key];
            }
            return null;
        },
        getValue: function(key) {
            var datalist = this.data.datalist;
            for (var i = 0; i < datalist.length; i++) {
                if (datalist[i][this.data.key] == key) return datalist[i][this.data.value];
            }
            return '';
        }
        // ,
        // validate: function() {
        //     this.data.valid = (this.data.initialKey !== null && this.data.initialKey !== undefined) ? true : false;
        //     return this.data.valid;
        // }
    });
    return PromptInput;
});
