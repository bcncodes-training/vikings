// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;//salud
        this.strength=strength;//fuerza
    }
    attack(){
        return this.strength;//fuerza
    }
    receiveDamage(damage){
        this.health=this.health-damage;//damage

    }
}
// Viking
class Viking extends Soldier{
    constructor(name,health,strength){//propiedades
        super(health,strength);//herencia paterna
        this.name=name;//name
    }
    receiveDamage(damage){
        this.health=this.health-damage;
        if (this.health>0) {return (this.name + " has received "+damage+" points of damage")}
        else { return(this.name +' has died in act of combat')}
    }//aqui no es un this.damage dado que no es propiedad 

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health=this.health-damage;
        if (this.health>0) {return ("A Saxon has received "+damage+" points of damage")}
        else { return("A Saxon has died in combat")}
    }
}

// War
class War extends Saxon {
    constructor(){
        super();

        this.vikingArmy = [];//arrays vacias
        this.saxonArmy = [];

    }

    addViking(Viking){

        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
	
		this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
/*debe hacer que `receiveDamage()` de `Saxon`
 sea igual a `strength` de un `Viking */
      
    }
    saxonAttack(){


    }
    showStatus(){


    }

}
