document.addEventListener('DOMContentLoaded', function () {
    let input1 = '';
    let input2 = '';
    let operasiSelected = null;

    document.querySelectorAll('.tombol-angka').forEach(button => {
        button.addEventListener('click', function () {
            let angka = this.textContent;
            if (operasiSelected === null) {
                input1 += angka;
                document.getElementById('input1').textContent = input1;
            } else {
                input2 += angka;
                document.getElementById('input2').textContent = input2;
            }
        });
    });

    document.querySelectorAll('.tombol-operasi').forEach(button => {
        button.addEventListener('click', function () {
            let newOperasi = this.textContent;
            if (operasiSelected === null) {
                operasiSelected = newOperasi;
                document.getElementById('operasi-selected').textContent = newOperasi;
            } else {
                hitungHasil();
                operasiSelected = newOperasi;
                document.getElementById('operasi-selected').textContent = newOperasi;
                input1 = document.getElementById('hasil').textContent;
                input2 = '';
                document.getElementById('input2').textContent = '...';
            }
        });
    });

    document.getElementById('btn-hitung').addEventListener('click', function () {
        hitungHasil();
    });

    document.getElementById('btn-clear').addEventListener('click', function () {
        clearDisplay();
    });

    function hitungHasil() {
        input1 = parseFloat(document.getElementById('input1').textContent);
        input2 = parseFloat(document.getElementById('input2').textContent);
        let hasil;

        if (operasiSelected === '+') {
            hasil = input1 + input2;
        } else if (operasiSelected === '-') {
            hasil = input1 - input2;
        } else if (operasiSelected === '*') {
            hasil = input1 * input2;
        } else if (operasiSelected === '/') {
            hasil = input1 / input2;
        } else if (operasiSelected === '%') {
            hasil = input1 % input2;
        } else if (operasiSelected === '^') {
            hasil = Math.pow(input1, input2);
        } else {
            alert(`Belum ada handle untuk operasi ${operasiSelected}`);
            return;
        }

        document.getElementById('hasil').textContent = hasil;
    }

    function clearDisplay() {
        document.getElementById('input1').textContent = '...';
        document.getElementById('input2').textContent = '...';
        document.getElementById('operasi-selected').textContent = '...';
        document.getElementById('hasil').textContent = '...';
        input1 = '';
        input2 = '';
        operasiSelected = null;
    }
});
