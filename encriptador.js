const d=document;

const $normal = d.getElementById("enc");
const $unenc = d.getElementById("unenc");
const $result = d.querySelector(".result");

d.addEventListener("click",(e)=>{
    //e.preventDefault();
    console.log(e.target);
    if(e.target.matches(".normal")){  
        //Encriptar
        if($normal.value!==""){
        var frase = $normal.value.toLowerCase();
        var textoCifrado = frase.replace(/e/img, "enter");
        textoCifrado = textoCifrado.replace(/o/img, "ober");
        textoCifrado = textoCifrado.replace(/i/img, "imes");
        textoCifrado = textoCifrado.replace(/a/img, "ai");
        textoCifrado = textoCifrado.replace(/u/img, "ufat");
        $unenc.value =textoCifrado;
        $normal.value="";   
        $result.innerHTML=`Texto cifrado con éxito!<br>Pulse aqui para copiar el texto`;
        }else{
            $normal.placeholder="ingrese el texto aquí"; 
            $result.innerHTML=`Ups, parece que no ha ingresado texto!...`;
        }
    }else{
        //Desencriptar
        if($unenc.value!==""){
            var frase = $unenc.value.toLowerCase();
            var textoCifrado = frase.replace(/enter/img, "e");
            textoCifrado = textoCifrado.replace(/ober/img, "o");
            textoCifrado = textoCifrado.replace(/imes/img, "i");
            textoCifrado = textoCifrado.replace(/ai/img, "a");
            textoCifrado = textoCifrado.replace(/ufat/img, "u");
            $normal.value =textoCifrado;
            $unenc.value="";
            $result.innerHTML=`Texto cifrado con éxito!<br>Pulse aqui para copiar el texto`;
        }else{
            $unenc.placeholder="ingrese el texto aquí";
            $result.innerHTML=`Ups, parece que no ha ingresado texto!...`;
            
            
        }
        
    }
});
