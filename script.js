const questions = [
    { equations: ["x + y = 7", "x - y = 3"], x: 5, y: 2 },
    { equations: ["2x + 3y = 12", "x - y = 1"], x: 3, y: 2 },
    { equations: ["3x + y = 20", "2x + y = 5"], x: 15, y: -25 },
    { equations: ["x + 2y = 8", "2x - y = 16"], x: 8, y: 0 },
    { equations: ["2x + y = 14", "x + y = 7"], x: 7, y: 0 },
    { equations: ["x + y = 10", "2x - y = 5"], x: 5, y: 5 },
    { equations: ["3x - 2y = 4", "x + y = 5"], x: 2.8, y: 2.2 },
    { equations: ["2x + y = 9", "x + y = 3"], x: 6, y: -3 },
    { equations: ["x - 2y = 2", "2x + y = 11"], x: 4.8, y: 1.4 },
    { equations: ["3x + 2y = 12", "x - y = 2"], x: 3.2, y: 1.2 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionText = questions[currentQuestionIndex].equations.join('<br>');
        document.getElementById('question').innerHTML = questionText;
        document.getElementById('x-value').value = '';
        document.getElementById('y-value').value = '';
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('question').innerText = 'Fim de jogo!';
        document.getElementById('input-container').style.display = 'none';
        document.getElementById('result').innerText = '';
        document.getElementById('score').innerText = `Pontuação final: ${score} de ${questions.length}`;
    }
}

document.getElementById('submit-button').addEventListener('click', () => {
    let xValue = document.getElementById('x-value').value.trim();
    let yValue = document.getElementById('y-value').value.trim();

    // Substituir vírgula por ponto
    xValue = xValue.replace(',', '.');
    yValue = yValue.replace(',', '.');

    if (xValue === '' || yValue === '' || isNaN(xValue) || isNaN(yValue)) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos para x e y.';
        return;
    }

    const x = parseFloat(xValue);
    const y = parseFloat(yValue);

    if (x === questions[currentQuestionIndex].x && y === questions[currentQuestionIndex].y) {
        document.getElementById('result').innerText = 'Correto!';
        score++;
    } else {
        document.getElementById('result').innerText = 'Incorreto. Tente novamente.';
    }
    document.getElementById('score').innerText = `Pontuação: ${score}`;
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
});

loadQuestion();