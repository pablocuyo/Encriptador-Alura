const d=document;

const $normal = d.getElementById("enc");
const $unenc = d.getElementById("unenc");
const $result = d.querySelector(".result");

d.addEventListener("click",(e)=>{
    //e.preventDefault();
    //console.log(e.target);
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
        $result.innerHTML=`Texto encriptado con éxito!`;
        setTimeout(e=>{
            $result.classList.add("copy");
            $result.innerHTML=`Pulse aqui para copiar el mensaje!`;
        },1500);
        }else{
            $normal.placeholder="ingrese el texto aquí para encriptarlo"; 
            $result.innerHTML=`Ups, parece que no ha ingresado texto!...`;
            setTimeout(e=>{
                $result.innerHTML=``;
            },2000);
        }
    }else if(e.target.matches(".crypto")){
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
            $result.innerHTML=`Texto desencriptado con éxito!`;
            setTimeout(e=>{
                $result.classList.add("copy");
                $result.innerHTML=`Pulse aqui para copiar el mensaje!`;
            },1500);
        }else{
            $unenc.placeholder="ingrese el texto aquí para desencriptarlo";
            $result.innerHTML=`Ups, parece que no ha ingresado texto!...`;
            setTimeout(e=>{
                $result.innerHTML=``;
            },2000);
            
            
        }
        
    }else{
        //console.log(e.target);
    }
});
d.addEventListener("click",(e)=>{
    
    if(e.target.matches(".copy")){
       if($unenc.value!=="" && $normal.value===""){
        let copied=$unenc.value;
        navigator.clipboard.writeText(copied)
        .then(() => {
            console.log('Text copied to clipboard');
            $result.classList.remove("copy");
            $result.innerHTML=`Ya tiene el mensaje!<br>Cuidado, que no caiga en manos equivocadas!`;
            setTimeout(e=>{
                $result.innerHTML=``;
            },2000);
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
       }
       if($unenc.value==="" && $normal.value!==""){
        let copied=$normal.value;
        navigator.clipboard.writeText(copied)
        .then(() => {
            console.log('Text copied to clipboard');
            $result.classList.remove("copy");
            $result.innerHTML=`Ya tiene el mensaje!<br>Cuidado, que no caiga en manos equivocadas!`;
            setTimeout(e=>{
                $result.innerHTML=``;
            },2000);
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
       }
    }


});
