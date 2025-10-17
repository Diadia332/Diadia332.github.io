// 生成1-100之间的随机数（游戏目标数字）
const targetNumber = Math.floor(Math.random() * 100) + 1;

// 获取页面元素（输入框、按钮、结果区）
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resultText = document.getElementById('resultText');

// 给按钮绑定点击事件：点击后执行猜测逻辑
guessBtn.addEventListener('click', checkGuess);

// 猜测逻辑函数
function checkGuess() {
  // 获取用户输入的数字（转为整数）
  const userGuess = parseInt(guessInput.value);

  // 验证输入是否有效（必须是1-100的数字）
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultText.textContent = "请输入1-100之间的有效数字！";
    return;
  }

  // 判断结果并提示
  if (userGuess === targetNumber) {
    resultText.textContent = `恭喜你！猜对了，就是${targetNumber}！`;
    resultText.style.color = "green";
    // 猜对后禁用按钮（防止重复提交）
    guessBtn.disabled = true;
  } else if (userGuess < targetNumber) {
    resultText.textContent = "太小了！再试一次～";
    resultText.style.color = "orange";
  } else {
    resultText.textContent = "太大了！再试一次～";
    resultText.style.color = "orange";
  }

  // 清空输入框，方便下次输入
  guessInput.value = "";
}