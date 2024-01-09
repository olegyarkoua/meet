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
        alert('Уведомление отправлено!');
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
});
