function calcular(){
    var horas = document.getElementById("texto").value;
    var sueldo = 40;
    var sueldo2 = 80;
    var sueldo3 = 120;

    if(horas>=1 && horas<=60){
        if(horas<=40){
            var sueldofinal = horas*sueldo;
            alert(sueldofinal);
        }else{
            if(horas>=41 && horas<=50){
                var horasextra = horas-40;
                var sueldoextra = horasextra * sueldo2;
                var sueldofinal = 1600+sueldoextra;
                alert(sueldofinal);              
            }else{
                var horasextra = horas-50;
                var sueldoextra = horasextra * sueldo3;
                var sueldofinal = 2400+sueldoextra;
                alert(sueldofinal);

            }

        }
        

    }else{
        alert("--ERROR--")
    }

}