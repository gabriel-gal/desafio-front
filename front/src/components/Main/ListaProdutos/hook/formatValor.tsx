export default function formatValor(valor: number) {
    const valorReais = valor / 100
    return valorReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
