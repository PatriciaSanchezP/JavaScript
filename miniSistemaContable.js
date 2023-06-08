    /* Tiempo: 30 minutos
    5 instancias
    Sueldo por día: $ 156.78
    Calcular sueldo por quincena y por mes (brutos y netos)
    ISR 31%
    7 días a la semana, 8 hrs por día
    parámetros (nombre, edad, RFC, #días trabajdos, sueldo por día)
    Métodos: mes, bruto y neto, quincena: bruto y neto
    */

  
    class sistemaContablePlantilla {
        
        nombre = "";
        edad = 0;
        rfc = "";
        diasTrabajadosALaSemana = 0;
        sueldoPorDia = 0;


        constructor(nombre, edad, rfc, diasTrabajadosALaSemana, sueldoPorDia){
            this.nombre = nombre;
            this.edad = edad;
            this.rfc = rfc;
            this.diasTrabajadosALaSemana = diasTrabajadosALaSemana;
            this.sueldoPorDia = sueldoPorDia;
        }

        salarioMensualBruto(){
            let salarioMensualB = this.diasTrabajadosALaSemana * this.sueldoPorDia * 4;
            console.log("Su salario mensual neto es de: ", salarioMensualB);

        }

        salarioMensualNeto(){
            let ISR = 31;
            let salarioMNeto = this.diasTrabajadosALaSemana*this.sueldoPorDia* 4*(1-ISR/100);
            console.log("Su salario mensual neto es de: ", salarioMNeto);
        }

        salarioQuincenalBruto(){
            let salarioQBruto = this.diasTrabajadosALaSemana*this.sueldoPorDia* 2;
            console.log("Su salario quincenal bruto es de: ", salarioQBruto);
        }


        salarioQuincenalNeto(){
            let ISR = 31;
            let salarioQNeto = this.diasTrabajadosALaSemana*this.sueldoPorDia* 2*(1-ISR/100);
            console.log("Su salario quincenal neto es de: ", salarioQNeto);
        }
    }
    
    let sueldoPancho = new sistemaContablePlantilla("Pancho",50,"AJJSJHD",7,156.78);

    console.log(sueldoPancho);
    sueldoPancho.salarioMensualNeto();
    sueldoPancho.salarioQuincenalBruto();
    sueldoPancho.salarioQuincenalNeto();
    sueldoPancho.salarioMensualBruto();

