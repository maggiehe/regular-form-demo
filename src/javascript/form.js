define(['Regular', 'RegularForm', 'Util', 'text!form.html', 'Simple', 'PromptInput'], function(Regular, RegularForm, _, tpl, Simple, PromptInput) {
    var Form = RegularForm.extend({
        template: tpl,
        name: 'wgt-form',
        config: function(data) {
            _.extend(data, {
                value1: 'some text for input',
                value2: 'some text',
                pattern: /^\w+$/,
                list: [{
                    "id": 962,
                    "name": "kaola"
                }, {
                    "id": 982,
                    "name": "相宜本草"
                }, {
                    "id": 983,
                    "name": "雅培"
                }, {
                    "id": 1002,
                    "name": "Nike"
                }, {
                    "id": 1003,
                    "name": "碧生源"
                }, {
                    "id": 1004,
                    "name": "同仁堂"
                }, {
                    "id": 1005,
                    "name": "初元"
                }, {
                    "id": 1006,
                    "name": "Aptamil"
                }, {
                    "id": 1007,
                    "name": "proya"
                }, {
                    "id": 1008,
                    "name": "三星"
                }, {
                    "id": 1022,
                    "name": "AptamIL爱他美"
                }, {
                    "id": 1023,
                    "name": "大王"
                }, {
                    "id": 1024,
                    "name": "荷兰牛栏"
                }, {
                    "id": 1042,
                    "name": "李宁"
                }, {
                    "id": 1062,
                    "name": "misel"
                }, {
                    "id": 1082,
                    "name": "åå"
                }, {
                    "id": 1083,
                    "name": "haha"
                }, {
                    "id": 1084,
                    "name": "呵呵"
                }, {
                    "id": 1102,
                    "name": "é²å¾æ¸"
                }, {
                    "id": 1103,
                    "name": "test"
                }, {
                    "id": 1104,
                    "name": "1"
                }, {
                    "id": 1105,
                    "name": "特步"
                }, {
                    "id": 1106,
                    "name": "百草味"
                }, {
                    "id": 1107,
                    "name": "华为"
                }, {
                    "id": 1108,
                    "name": "三只松鼠"
                }, {
                    "id": 1109,
                    "name": "三只松鼠"
                }, {
                    "id": 1110,
                    "name": "海盗船"
                }, {
                    "id": 1111,
                    "name": "浪莎"
                }, {
                    "id": 1122,
                    "name": "LuKawa"
                }, {
                    "id": 1123,
                    "name": "2"
                }, {
                    "id": 1124,
                    "name": "erteg"
                }, {
                    "id": 1125,
                    "name": "Ã¥Â¥Â½Ã¥ÂÂ"
                }, {
                    "id": 1126,
                    "name": "妮维雅"
                }, {
                    "id": 1142,
                    "name": "悦木之源"
                }, {
                    "id": 1143,
                    "name": "特vuss芳芳"
                }, {
                    "id": 1144,
                    "name": "旧街场"
                }, {
                    "id": 1162,
                    "name": "边一娟"
                }, {
                    "id": 1164,
                    "name": "七匹狼2"
                }, {
                    "id": 1182,
                    "name": "果果"
                }, {
                    "id": 1184,
                    "name": "叶22"
                }, {
                    "id": 1185,
                    "name": "testlala"
                }, {
                    "id": 1186,
                    "name": "xiaoye"
                }, {
                    "id": 1202,
                    "name": "阿玛尼a"
                }, {
                    "id": 1203,
                    "name": "阿玛尼1"
                }, {
                    "id": 1204,
                    "name": "prada"
                }, {
                    "id": 1205,
                    "name": "新建品牌"
                }, {
                    "id": 1206,
                    "name": "我威威"
                }, {
                    "id": 1207,
                    "name": "试一下行不行"
                }, {
                    "id": 1208,
                    "name": "卡卡"
                }, {
                    "id": 1209,
                    "name": "BYJ测试"
                }, {
                    "id": 1229,
                    "name": "王尼玛"
                }, {
                    "id": 1230,
                    "name": "非官方"
                }, {
                    "id": 1249,
                    "name": "倩碧-bmj"
                }, {
                    "id": 1250,
                    "name": "tessss"
                }, {
                    "id": 1269,
                    "name": "贝因美"
                }, {
                    "id": 1289,
                    "name": "sssss"
                }, {
                    "id": 1290,
                    "name": "品牌发布下线"
                }, {
                    "id": 1291,
                    "name": "tttttt"
                }, {
                    "id": 1309,
                    "name": "下线状态"
                }, {
                    "id": 1329,
                    "name": "新建test"
                }, {
                    "id": 1349,
                    "name": "ceshi"
                }, {
                    "id": 1369,
                    "name": "jinma"
                }, {
                    "id": 1389,
                    "name": "回归啦"
                }, {
                    "id": 1409,
                    "name": "特v"
                }, {
                    "id": 1429,
                    "name": "三星的"
                }, {
                    "id": 1430,
                    "name": "规格"
                }, {
                    "id": 1449,
                    "name": "打发打发"
                }, {
                    "id": 1450,
                    "name": "斯蒂芬"
                }, {
                    "id": 1451,
                    "name": "地方"
                }, {
                    "id": 1452,
                    "name": "bk"
                }, {
                    "id": 1469,
                    "name": "789"
                }, {
                    "id": 1470,
                    "name": "sfs"
                }, {
                    "id": 1471,
                    "name": "巨火大牌"
                }, {
                    "id": 1472,
                    "name": "dfdf"
                }, {
                    "id": 1473,
                    "name": "嗯嗯嗯"
                }, {
                    "id": 1489,
                    "name": "201508291700"
                }, {
                    "id": 1509,
                    "name": "Panj_测试品牌"
                }, {
                    "id": 1529,
                    "name": "BBb边的"
                }, {
                    "id": 1549,
                    "name": "让他"
                }, {
                    "id": 1550,
                    "name": "test回归"
                }, {
                    "id": 1569,
                    "name": "海贼王"
                }, {
                    "id": 1589,
                    "name": "hahasadfsdaf"
                }, {
                    "id": 1609,
                    "name": "红色"
                }, {
                    "id": 1610,
                    "name": "屎黄色"
                }, {
                    "id": 1611,
                    "name": "红红的"
                }, {
                    "id": 1629,
                    "name": "NULL"
                }, {
                    "id": 1630,
                    "name": "SADF"
                }, {
                    "id": 1631,
                    "name": "12345"
                }, {
                    "id": 1632,
                    "name": "SDFSDF"
                }, {
                    "id": 1649,
                    "name": "兔女郎哦"
                }, {
                    "id": 1669,
                    "name": "品牌测试"
                }, {
                    "id": 1670,
                    "name": "规范的共和党"
                }, {
                    "id": 1689,
                    "name": "20151021"
                }, {
                    "id": 1709,
                    "name": "hq香香"
                }, {
                    "id": 1729,
                    "name": "SEO"
                }, {
                    "id": 1749,
                    "name": "seoms"
                }, {
                    "id": 1769,
                    "name": "seven小果子"
                }]
            });
            this.supr(data);
        }
    });
    return Form;
});