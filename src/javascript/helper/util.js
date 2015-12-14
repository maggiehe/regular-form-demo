define([], function() {
    var _ = {};
    _.extend = function(o1, o2, override) {
        for (var i in o2)
            if (o1[i] == undefined || override) {
                o1[i] = o2[i]
            }
        return o1;
    };
    _.addEvent = function(elem, type, handler) {
        if (document.addEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (document.attachEvent) {
            elem.attachEvent("on" + type, handler);
        } else {
            elem["on" + type] = handler;
        }
    };
    _.hasClass = function(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    _.addClass = function(obj, cls) {
        if (!_.hasClass(obj, cls)) obj.className += " " + cls;
    };

    _.removeClass = function(obj, cls) {
        if (_.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    };
    //根据类名获取祖先节点
    _.getAncestorByClassName = function(node, className) {
        if (node == document) return null;
        var parent = node.parentNode;
        while (parent.className && parent.className.indexOf(className) < 0 && parent != document) {
            parent = parent.parentNode;
        }
        if (node == document) return null;
        else return parent;
    };
    Function.prototype.bind = function() {
        var fn = this,
            args = Array.prototype.slice.call(arguments),
            object = args.shift();
        return function() {
            return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
    return _;
});
