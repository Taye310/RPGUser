var _this = this;
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    console.log(_this);
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Cache.js.map