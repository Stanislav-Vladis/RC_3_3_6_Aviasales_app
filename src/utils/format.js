export function formatPrice(price) {
	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0, // Минимальное количество десятичных знаков
		maximumFractionDigits: 2, // Максимальное количество десятичных знаков
	}).format(price);

	return formattedPrice;
}

export function formatMinutesToHoursAndMinutes(minutes) {
	// Вычисляем количество часов (целая часть от деления на 60)
	const hours = Math.floor(minutes / 60);

	// Остаток от деления на 60 дает количество оставшихся минут
	const remainingMinutes = minutes % 60;

	// Формируем строку вида 'ччччччччччччммммммм'
	const formattedString = `${hours}ч ${remainingMinutes}м`;

	// Возвращаем отформатированную строку
	return formattedString;
}

export function calculateArrivalTime(baseTime, additionalMinutes) {
	const date = new Date(baseTime);

	// Вычисляем время прибытия
	const arrivalTime = new Date(date.getTime() + additionalMinutes * 60 * 1000);

	// Форматируем базовое время
	const formattedTime = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

	// Форматируем время прибытия
	const formattedArrivalTime = arrivalTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

	// Создаем строку времени в нужном формате 'HH:MM – HH:MM'
	const resultString = `${formattedTime} – ${formattedArrivalTime}`;

	return resultString;
}
