const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(" .mensaje");

const matrizCodigo = [
    ["e", "entender"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function btn_Encriptar(){
    const textoEncriptado = encriptar(textArea.value)

    mensaje.value = textoEncriptado;
    textArea.value = ""
}

function btn_Desencriptar(){
    const textoDesencriptado = descencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase()
    for (let i=0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }      
    }
    return stringEncriptado;
}

function descencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i=0; i<matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function btn_Copiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
}