export default function Calcular(peso,altura,){
    const imc = peso/(altura**2)
    return (imc.toFixed(2));
}


