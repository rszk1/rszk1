function classificarPlayer(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
        if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
        console.log(`O jogador tem um saldo de ${saldo} e está no nível de ${nivel}`);
}
const vitorias = Number(prompt("Digite a quantidade de vitórias:"));
const derrotas = Number(prompt("Digite a quantidade de derrotas:"));

classificarPlayer(vitorias, derrotas);