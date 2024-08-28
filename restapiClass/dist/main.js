"use strict";
document.addEventListener('DOMContentLoaded', function (event) {
    formHandler('customerForm');
});
async function formHandler(formId) {
    const form = document.getElementById(formId);
    const notify = document.getElementById('notify');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    form.addEventListener('submit', async function () {
        const formData = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
        };
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                notify.style.display = 'block';
                notify.textContent = "등록 되었습니다.";
                form.reset();
                setTimeout(() => {
                    notify.style.display = 'none';
                }, 3000);
            }
            else {
                alert('전송 중 실패하였습니다.');
            }
        }
        catch (error) {
            console.log(error);
            alert('데이터베이스에 정보 저장 실패');
        }
    });
}
