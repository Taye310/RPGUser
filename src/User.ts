class User {

    cash = 0;
    gold = 0;
    exp = 0;
    level = 0;
    totalExp = 0;

    heroes: Hero[] = [];
    __heroesInTeam: Hero[] = [];//jichu 

    pet: Pet;


    get heroesInTeam() {//高阶 数据单向流动
        return this.heroes.filter(hero => hero.isInTeam);
    }

    getFightPower() {

        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.getFightPower());
        result += this.pet.getFihgtPower();
        return result;

        //arr.every     arr.some     arr.map     arr.foreach    arr.filter
        //大数据 map reduce


    }
}

class Hero {

    isInTeam: boolean = false;

    equipments: Equipments[] = [];

    //maxHp=100;//
    hp = 50;
    level = 1;

    quality: number = 2.8;

    get maxHp() {
        return this.level * 100 * this.quality;
    }

    //attack:number=100;//游戏树枝都是高级数值 大多数    高级数值 基础数值
    get attack() {
        var result = 0;
        this.equipments.forEach(e => result += e.attack);
        return result;
    }

    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        return this.maxHp * 1.5 + this.attack * 1.8;//取整 前后端统一
    }

}

class Equipments {
    jewel: Jewel[];

    get attack() {
        return 100;
    }

}

class Jewel {

    get attack(){
        return 10;
    }

}

class Pet {

    getFihgtPower() {
        return 10;
    }
}