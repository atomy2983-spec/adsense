document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const lottoContainer = document.getElementById('lotto-container');

  generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
  });

  function generateLottoNumbers() {
    lottoContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    sortedNumbers.forEach(number => {
      createLottoBall(number);
    });
  }

  function createLottoBall(number) {
    const ball = document.createElement('div');
    ball.classList.add('lotto-ball');
    ball.textContent = number;
    ball.style.backgroundColor = getBallColor(number);
    lottoContainer.appendChild(ball);
  }

  function getBallColor(number) {
    if (number <= 10) return '#fbc400'; // 노란색
    if (number <= 20) return '#69c8f2'; // 파란색
    if (number <= 30) return '#ff7272'; // 빨간색
    if (number <= 40) return '#aaa'; // 회색
    return '#b0d840'; // 녹색
  }
});
