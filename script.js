function startSimulation() {
  let balance = parseFloat(document.getElementById("balance").value);
  const baseBet = parseFloat(document.getElementById("baseBet").value);
  const spins = parseInt(document.getElementById("spins").value);

  let currentBet = baseBet;
  let log = "";

  for (let i = 1; i <= spins; i++) {
    const win = Math.random() < 0.5; // 50% win chance

    if (currentBet > balance) {
      log += `Spin ${i}: Not enough balance to continue. 💀\n`;
      break;
    }

    if (win) {
      balance += currentBet;
      log += `Spin ${i}: Win 🟢 (+$${currentBet.toFixed(2)}), Balance: $${balance.toFixed(2)}\n`;
      currentBet = baseBet; // Reset bet on win
    } else {
      balance -= currentBet;
      log += `Spin ${i}: Loss 🔴 (-$${currentBet.toFixed(2)}), Balance: $${balance.toFixed(2)}\n`;
      currentBet *= 2; // Double the bet on loss
    }
  }

  document.getElementById("result").innerText = `Final Balance: $${balance.toFixed(2)}`;
  document.getElementById("log").innerText = log;
}

