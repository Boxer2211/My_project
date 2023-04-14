function loadGrain(levels) {

	// Ініціалізація функції з розрахунком
	function logic(val, arr) {

		// 2.7. Якщо кількіть елементів масиву менше 3, то сума не рахується а береться з параметру
		if (arr.length < 3) {
			localStorage.setItem("summ", val)
			return localStorage.getItem("summ");
		}

		// 2.1. Змінна поточного значення суми та поточний масив даних.
		let summ = val, inputArray = arr, summArr = [];

		// 2.2. Порівняння 1-го та останнього елементу масиву. Якщо останній елемент менший, то відбувається інверсія масиву.
		if (inputArray[0] > inputArray[inputArray.length - 1])
			inputArray = inputArray.reverse();

		// 2.3. Максимальний елемент на початку перебору масиву 1-й елемент.
		let maxEl = inputArray[0];

		// 2.4. Цикл перебору масиву даних та розрахунок кількості одиниць між рівнями.
		for (i = 0; i < inputArray.length; i++) {

			// 2.5. Порівняння поточного елементу масива з максимальним значенням.
			//    - Максимальному значенню присвоюється поточне значення, якщо воно більше макслимального.
			//    - Якщо максимальне значення більше поточного - сумується кількість одиниць між рівнями.
			if (inputArray[i] > maxEl) {
				maxEl = inputArray[i];

				// 2.6. Утворення нового масиву, починаючи від поточного значення і до останнього елементу масиву.
				levels = inputArray.slice(i);

				logic(summ, levels);
				break;
			} else {
				summ += (maxEl - inputArray[i]);
				if ((inputArray.length - i) == 2) {
					localStorage.setItem("summ", summ)
					break;
				}
			}
		}

		let res = localStorage.getItem("summ");
		return res;
	}

	// 1. Запуск функції з початковими вхідними даними
	const result = logic(0, levels);

	if (result != 0) {
		if (localStorage.getItem("summ") != null)
			localStorage.removeItem("summ");

		return parseInt(result);
	}

	return 0;
}