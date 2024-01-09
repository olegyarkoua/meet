document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('URL_вашего_веб-приложения', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'eventDescription=' + encodeURIComponent('Кнопка была нажата'),
    })
    .then(() => {
        // Уведомление отправлено успешно, перенаправление на новую страницу
        window.location.href = 'https://heyyep.com/channel/DJFYlAccmRfKMX3SPUGV';
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        // Здесь можно обработать ошибку, если нужно
    });
});
