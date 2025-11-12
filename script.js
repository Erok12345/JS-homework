let message = prompt("Введите ваше имя:");
if (message === null) {
  alert("Ввод отменён.");
} else {
  message = message.trim();
  if (message.length === 0) {
    alert("Вы не ввели имя.");
  } else {
    let letter = prompt("Введите любую букву:");
    if (letter === null) {
      alert("Ввод отменён.");
    } else {
      letter = letter.trim();
      if (letter.length === 0) {
        alert("Вы не ввели букву.");
      } else {
        letter = letter[0];

        const nameLower = message.toLowerCase();
        const letterLower = letter.toLowerCase();

        if (nameLower.includes(letterLower)) {
          alert("В вашем имени есть буква " + letter + "!");
        } else {
          alert("В вашем имени нет буквы " + letter + ".");
        }
      }
    }
  }
}
