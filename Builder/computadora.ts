export class Computadora{
    private procesador?:string;
    private ram?:number;
    private almacenamiento?:number;
    private tarjetaGrafica?:boolean;
    private sistemaOperativo?:boolean;



    constructor(pProcesador?:string,pRam?:number, pAlmacenamiento?:number,pTarjetaGrafica?:boolean,pSistemaOperativo?:boolean){
        this.procesador=pProcesador;
        this.ram =pRam;
        this.almacenamiento =pAlmacenamiento ;
        this.tarjetaGrafica =pTarjetaGrafica ;
        this.sistemaOperativo =pSistemaOperativo ;

    }

    toString():string{
        return "Microprocesador:" +""+ this.procesador  + " " + "Memoria: "+ this.ram+"GB"+ " " + this.almacenamiento +"GB" + " " + this.tarjetaGrafica + " " + 
        this.sistemaOperativo;
    }

}

export class CompuBuilder{
    private procesador:string = "Procesador Intel";
    private ram:number = 16;
    private almacenamiento:number = 4;
    private tarjetaGrafica:boolean=false;
    private sistemaOperativo=false;

    setProcesador(procesador:string):CompuBuilder{
        this.procesador = procesador;
        return this;
    }
    setRam(ram:number):CompuBuilder{
        this.ram = ram;
        return this;
    } 
    setAlmacenamiento(almacenamiento:number):CompuBuilder{
        this.almacenamiento = almacenamiento;
        return this;
    }
    setTarjetaGrafica(tarjetaGrafica:boolean):CompuBuilder{
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    }
    SetSistemaOperativo(sistemaOperativo:boolean){
        this.sistemaOperativo= sistemaOperativo;
        return this
    }

    build():Computadora{
        return new Computadora(this.procesador,this.ram,this.almacenamiento,this.tarjetaGrafica,this.sistemaOperativo);
    }
}

const miCompu =new CompuBuilder().setProcesador("intel I3").setRam(16).setAlmacenamiento(500).setTarjetaGrafica(true).build();
console.log(miCompu.toString());
/*let miAuto = new Auto("V8","Rojo",4,5,true,true,false);

let cocheFamiliar = new CompuBuilder().setLlantas(5).setMotor("V8").setColor("Azul").build();

console.log(cocheFamiliar.toString());

*/