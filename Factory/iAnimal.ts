export interface iAnimal{
    hacerSonido():void;
    mover():void;
}
export class Perro implements iAnimal{
    private pelo:string;
    constructor(pPelo:string){
        this.pelo=pPelo
    }
    getPelo(){
        return this.pelo
    }
    setPelo(pPelo:string):void{
        this.pelo=pPelo
    }
    hacerSonido(): void {
        return console.log("guau")
    }
    mover(): void {
        return console.log("correr")
    }
};

export class Gato implements iAnimal{
    private pelo:string;
    constructor(pPelo:string){
        this.pelo=pPelo
    }
    getPelo(){
        return this.pelo
    }
    setPelo(pPelo:string):void{
        this.pelo=pPelo
    }

    hacerSonido(): void {
        return console.log("miau")
    }
    mover():void {
        return console.log("sigiloso")
    }

    }

export class Pajaro implements iAnimal{
    private plumas:string;
    constructor(pPlumas:string){
        this.plumas=pPlumas;
    }

    getPlumas(){
        return this.plumas
    }
    setPlumas(pPlumas:string):void{
        this.plumas=pPlumas
    }
    hacerSonido(): void {
        return console.log("piu")
    }
    mover(): void {
        return console.log("vuela")

}
}
export class FabricaDeAnimales {
    public crearAnimal(tipo:string,atributos:any):iAnimal{
        if(tipo == "perro"){
            return new Perro(atributos.pelo);
        }else if(tipo==="gato"){
            return new Gato(atributos.pelo);
        }else if(tipo==="pajaro"){
            return new Pajaro(atributos.plumas);
        }
        else{  
            throw new Error("No es un animal de la Fabrica");
        }
    }
};

let fabrica = new FabricaDeAnimales();
const labrador= fabrica.crearAnimal("perro",{pelo:"largo"});
console.log(labrador.hacerSonido());
const barsino= fabrica.crearAnimal("gato",{pelo:"atigrado"})
console.log(barsino.mover());
console.log(barsino);
const canario= fabrica.crearAnimal("pajaro",{plumas:"amarillas"});
console.log(canario.hacerSonido(),canario.mover());


try{
    const pejerrey= fabrica.crearAnimal("pez","Verde");
    }catch(error){
        console.log(error.name + ": " + error.message);
    }