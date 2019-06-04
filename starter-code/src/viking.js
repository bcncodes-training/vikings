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
        let i=Math.floor(Math.random())*this.vikingArmy.length;
        let j=Math.floor(Math.random())*this.saxonArmy.length;
        let t=this.saxonArmy[j].receiveDamage(this.vikingArmy[i].attack());
        if (this.saxonArmy[j].health<=0){this.saxonArmy.splice(j,1);}
        return t;   
    }
    saxonAttack(){
        let i=Math.floor(Math.random())*this.vikingArmy.length;
        let j=Math.floor(Math.random())*this.saxonArmy.length;
        let t=this.vikingArmy[j].receiveDamage(this.saxonArmy[i].attack());
        if (this.vikingArmy[j].health<=0){this.vikingArmy.splice(j,1);}
        return t;   
    }
    showStatus(){
        if (this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survive another day...';
        }
        if (this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!';
        }
        if ((this.saxonArmy.length>0)&&(this.vikingArmy.length>0)){
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
