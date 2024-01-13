document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbzfXg2QXRmSh02gtnZyx9jyO7HMnNS9VYxHifypnrz3XUBn6tdOy0L-bWuYEU_899-s/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'eventDescription=' + encodeURIComponent('Кнопка была нажата'),
    })
    .then(() => {
        // Уведомление отправлено успешно, перенаправление на новую страницу
        //window.location.href = 'https://heyyep.com/channel/DJFYlAccmRfKMX3SPUGV';
         // window.history.back();
        document.getElementById('confirmationMessage').style.display = 'block'; // Показываем сообщение
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        // Здесь можно обработать ошибку, если нужно
    });
});
