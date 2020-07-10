function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.getElementById("res");
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        let fsex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);
        let genero = "";
        let img = document.createElement("img");
        img.setAttribute("id", "foto");
        genero = fsex[0].checked ? "Homem":"Mulher";       
        if(idade < 10 && genero == "Homem"){
            //Criança
            img.setAttribute("src", "bebe-m.png");
        } else if(idade < 21 && genero == "Homem"){
            //Jovem
            img.setAttribute("src", "jovem-m.png");
        } else if(idade < 50 && genero == "Homem"){
            //Adulto
            img.setAttribute("src", "adulto-m.png");
        } else if(idade >= 50 && genero == "Homem"){
            //Idoso
            img.setAttribute("src", "idoso-m.png");
        }

        if(idade < 10 && genero == "Mulher"){
            //Criança
            img.setAttribute("src", "bebe-f.png");
        } else if(idade < 21 && genero == "Mulher"){
            //Jovem
            img.setAttribute("src", "jovem-f.png");
        } else if(idade < 50 && genero == "Mulher"){
            //Adulto
            img.setAttribute("src", "adulto-f.png");
        } else if(idade >= 50 && genero == "Mulher"){
            //Idoso
            img.setAttribute("src", "idoso-f.png");
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`; 
        res.appendChild(img);
    }
}