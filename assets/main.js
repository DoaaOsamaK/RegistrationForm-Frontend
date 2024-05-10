document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('select');
    var data = '';
    for (var i = 2025; i <= 2030; i++) {
        data += `<option value="${i}">${i}</option>`;
    }
    selectElement.innerHTML += data;  
});
