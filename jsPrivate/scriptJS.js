// untuk slider form

const muncul = document.querySelector('.muncul');
const tutup = document.querySelector('.close');
const input = document.querySelector('.formInput');

muncul.addEventListener('click', function () {
    input.classList.toggle('slide');
})

muncul.addEventListener('click', function () {
    input.classList.toggle('slide-up');
})
tutup.addEventListener('click', function () {
    input.classList.toggle('slide-up');
})


// untuk pengisian goole spreadsheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbyRuqWiyCj0WEaBYM9L7Tk1NEEY096lToEDkkz4ZJ7iLD_E0HAE3VdkhE48MgTcHsvC/exec'
const form = document.forms['submit-to-google-sheet']

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

ikurir = document.getElementById('ikurir');
tdongkir = document.getElementById('tdongkir');
tdtotal = document.getElementById('tdtotal');

form.addEventListener('submit', e => {
    e.preventDefault()

    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {

            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            document.getElementById('dropdownMenuButton1').innerText = "Pilih kurir";
            document.getElementById('tdongkir').innerHTML = ""
            document.getElementById('tdtotal').innerText = "";

            input.classList.toggle('slide');

            form.reset();

            new swal("Terima Kasih!", "PESANAN anda telah kami TERIMA !", "success");

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})


