document.addEventListener('DOMContentLoaded', function(event) {

    formHandler('customerForm');
})
async function formHandler(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    const notify = document.getElementById('notify') as HTMLDivElement;
    const nameInput = document.getElementById('name') as HTMLFormElement;
    const addressInput = document.getElementById('address') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLFormElement;

    form.addEventListener('submit', async function(event) {
        event?.preventDefault();
        const formData = {
            name: nameInput.value,
            address: addressInput.value,
            email: emailInput.value,
            // name: (document.getElementById('name') as HTMLFormElement).value,
            // address: (document.getElementById('address') as HTMLFormElement).value,
            // email: (document.getElementById('email') as HTMLFormElement).value,
        };
        try{
            const response = await fetch(form. action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if(response.ok){
                notify.style.display = 'block';
                notify.textContent = "등록 되었습니다."
                form.reset() ;
                setTimeout (() => {
                    notify.style.display = 'none'
                }, 3000);
            }else{
                alert('전송 중 실패하였습니다.');
            }
        }catch(error){
        console.log(error);
        alert('데이터베이스에 정보 저장 실패')
        }
    }
)}