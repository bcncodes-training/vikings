// Soldier
class Soldier  {    
    constructor(health , strength){
    this.health=health;
    this.strength=strength;}
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health , strength){
        super(health , strength);
        this.name=name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health>0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
       
}

// Saxon
class Saxon extends Soldier {
    constructor(health , strength){
        super(health , strength);
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health>0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }  
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let i=Math.floor(Math.random())*vikingArmy.length;
        let j=Math.floor(Math.random())*saxonArmy.length;
        let t=saxonArmy[j].receiveDamage(vikingArmy[i].attack());
        if (saxonArmy[j].strength<1){saxonArmy.splice(j,1);}
        return t;   
    }
    saxonAttack(){
        let i=Math.floor(Math.random())*vikingArmy.length;
        let j=Math.floor(Math.random())*saxonArmy.length;
        let t=vikingArmy[j].receiveDamage(saxonArmy[i].attack());
        if (vikingArmy[j].strength<1){vikingArmy.splice(j,1);}
        return t;   
    }
    showStatus(){}
}
