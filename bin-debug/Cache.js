var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    console.log(target);
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Cache.js.map