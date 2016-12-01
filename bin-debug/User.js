var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 0;
        this.totalExp = 0;
        this.heroes = [];
        this.__heroesInTeam = []; //jichu 
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.forEach(function (hero) { return result += hero.getFightPower(); });
        result += this.pet.getFihgtPower();
        return result;
        //arr.every     arr.some     arr.map     arr.foreach    arr.filter
        //大数据 map reduce
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.isInTeam = false;
        this.equipments = [];
        //maxHp=100;//
        this.hp = 50;
        this.leve = 1;
        this.quality = 2.8;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.leve * 100 * this.quality;
        }
    );
    d(p, "attack"
        //attack:number=100;//游戏树枝都是高级数值 大多数    高级数值 基础数值
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHp * 1.5 + this.attack * 1.8; //取整 前后端统一
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipments = (function () {
    function Equipments() {
    }
    var d = __define,c=Equipments,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 100;
        }
    );
    return Equipments;
}());
egret.registerClass(Equipments,'Equipments');
var Jewel = (function () {
    function Jewel() {
    }
    var d = __define,c=Jewel,p=c.prototype;
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Pet = (function () {
    function Pet() {
    }
    var d = __define,c=Pet,p=c.prototype;
    p.getFihgtPower = function () {
        return 10;
    };
    return Pet;
}());
egret.registerClass(Pet,'Pet');
//# sourceMappingURL=User.js.map