const checkValue = (value, balance) => {
  if (value === 0) {
    alert('Введите сумму для проведения операции!');
  } else if (value > balance) {
    alert('На счету недостаточно средств для проведения операции!');
  }
};

export default checkValue;
