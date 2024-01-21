function drawTriangle() {
    const numberInput = document.getElementById('numberInput');
    const triangleOutput = document.getElementById('triangleOutput');
    const number = numberInput.value;

    try {
        if (number < 1 || number > 10) {
            throw new Error('Nhập vào số từ 1 đến 10');
        }

        let triangle = '';
        for (let i = 1; i <= number; i++) {
            triangle += '*'.repeat(i) + '\n';
        }

        triangleOutput.textContent = triangle;
    } catch (error) {
        triangleOutput.textContent = 'Error: ' + error.message;
    }
}