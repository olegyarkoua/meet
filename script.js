document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbyRg_3wF_fAQ_nygsXSjFE5EQzglncE3ySTlM7omwrjPmwo6xBdJtQ709g3j6fFFcok/exec', {
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
