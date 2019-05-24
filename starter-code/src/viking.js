// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health  -= damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health  -= damage;

        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }

    }

    battleCry() {
        return "Odin Owns You All!";
        
    }
}

// Saxon

class Saxon extends Soldier {
    constructor (health, strength){
        super (health, strength); 
    }

    receiveDamage(damage) {
        this.health  -= damage;

        if (this.health > 0){
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
        }

    }

}



// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vicking) {
        this.vikingArmy.push(vicking);

    }


    addSaxon(saxon){
        this.saxonArmy.push(saxon);

    }


    vikingAttack(){
        // OBTENIENDO SOLDADO VIKING
        let vikingSoldiers = this.vikingArmy.length;
        let indiceSoldadoViking = Math.floor(Math.random()*vikingSoldiers);
        let vikingSoldier = this.vikingArmy[indiceSoldadoViking];


        // OBTENIENDO SOLDADO SAXON
        let saxonSoldiers = this.saxonArmy.length;
        let indiceSoldadoSaxon = Math.floor(Math.random()*saxonSoldiers);
        let saxonSoldier = this.saxonArmy[indiceSoldadoSaxon];
        


        saxonSoldier.receiveDamage(vikingSoldier.strength);
        
        if(saxonSoldier.health <= 0){
            this.saxonArmy.splice(indiceSoldadoSaxon, 1);
        }

}
saxonAttack(){

}
showStatus(){

}





}


// let vikingo = new Viking ('pepe', 100, 1000);
// vikingo.receiveDamage(50);

