document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // 폼 데이터 가져오기
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageDiv = document.getElementById('message');
    
    // 유효성 검사
    if (!name) {
        messageDiv.innerText = '이름을 입력해주세요.';
        return;
    }

    if (!address) {
        messageDiv.innerText = '주소를 입력해주세요.';
        return;
    }

    if (!email) {
        messageDiv.innerText = '이메일을 입력해주세요.';
        return;
    }

    if (!validateEmail(email)) {
        messageDiv.innerText = '유효한 이메일 주소를 입력해주세요.';
        return;
    }

    // 서버에 전송할 데이터
    const data = {
        name: name,
        address: address,
        email: email
    };

    try {
        // 서버에 POST 요청 보내기
        const response = await fetch('http://localhost:5050/api/v1/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // 응답 처리
        if (response.ok) {
            messageDiv.style.color = 'green';
            messageDiv.innerText = '회원 등록 성공!';
            document.getElementById('register-form').reset();
        } else {
            messageDiv.style.color = 'red';
            messageDiv.innerText = '회원 등록 실패. 다시 시도해주세요.';
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.style.color = 'red';
        messageDiv.innerText = '회원 등록 중 오류가 발생했습니다.';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
