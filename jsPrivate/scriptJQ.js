var nameProduct = 'WAISTBAG FORZA -> ';

let berat = 1000;
let harga = 50000;
let kabupatenBandung = 22;
// console.log(kabupatenBandung);
let tujuan = $('#skota').data('kota');

// console.log(total);

$(document).ready(function () {
    $('#sproduct').val(nameProduct);
    $('#sberat').val(berat);
    $('.tdproduct').text(nameProduct);
    $('.tdharga').text(harga);
    $('#harga').val(harga);




})

function wkota() {
    $('#skota').change(function () {
        var wilayah = $(this).val();
        wilayah;
    })
}

$('#sprov').change(function () {
    var nama = $('#sprov option:selected').data('lokasi');
    $('#province').val(nama);
})



$('#skota').change('kkota', function () {
    $('#list-kurir').html('');
    $('.wExpedisi').text('Pilih kurir');
    $('#ikurir').val('');
    $('#ongkir').val('');
    $('.tdongkir').text('');
    $('#total').val('');
    $('.tdtotal').text('');
    var nama = $('#skota option:selected').data('kota');
    var wilayah = $(this).val();
    // console.log(wilayah);
    $('#kota').val(nama);

    const kurir = ["jne", "tiki", "pos"];
    $.each(kurir, function (i, data) {
        $.ajax({
            url: 'https://api.rajaongkir.com/starter/cost',
            type: 'POST',
            dataType: 'json',
            data: {
                'key': 'bf874b98b42810aa35eeb0fd5f1a0a10',
                'origin': kabupatenBandung,
                'destination': wilayah,
                'weight': berat,
                'courier': data
            },
            success: function (ok) {
                let Lokasi = ok.rajaongkir.results;
                $.each(Lokasi, function (i, dKurir) {
                    let exped = dKurir.costs;
                    $.each(exped, function (i, dPaket) {
                        let harg = dPaket.cost;
                        $.each(harg, function (i, dHarga) {
                            $('#list-kurir').append(`
                            <li><a class="dropdown-item klik" data-kur="`+ dKurir.code + `" data-ser="` + dPaket.service + `" data-ha="` + dHarga.etd + `"data-va="` + dHarga.value + `">
                                            <div>
                                                <span class="fs-3">`+ dKurir.code + `</span>
                                                <span class="fs-5">-----`+ dPaket.service + `</span>
                                            </div>
                                            <div>
                                            <span href="#" class="fs-6 lharga">` + dHarga.etd + `</span>
                                            <span class="fs-6">----`+ dHarga.value + `</span>
                                            </div>
                                        </a></li>
                            `)
                            // console.log(dKurir.code);
                            // console.log(dPaket.service);
                            // console.log(dHarga.value);
                            // console.log(dHarga.etd);
                        })
                    })
                })
            }
        })
    })
})



$('#sdesa').change(function () {
    var nama = $('#sdesa option:selected').data('desa');
    $('#desa').val(nama);
})

$('#list-kurir').on('click', '.klik', function () {
    var kur = $(this).data('kur');
    var ser = $(this).data('ser');
    var ha = $(this).data('ha');
    var va = $(this).data('va');
    // console.log(kur);
    $('.wExpedisi').text(kur);
    $('#ikurir').val(kur);

    console.log(ser);
    console.log(ha);

    // console.log(va);
    let ongkir = va;
    let total = ongkir + harga;
    $('#ongkir').val(ongkir);
    $('.tdongkir').text(ongkir);
    $('#total').val(total);
    $('.tdtotal').text(total);
})


new AutoNumeric('#desa', {
    currencySymbol: ' €',
    decimalCharacter: ',',
    digitGroupSeparator: '.',
});
// $.ajax({
//     url: 'https://api.rajaongkir.com/starter/city',
//     type: 'get',
//     dataType: 'json',
//     data: {
//         'key': 'bf874b98b42810aa35eeb0fd5f1a0a10',
//         'province': '34'
//     },
//     success: function (ok) {
//         let Lokasi = ok.rajaongkir.results;
//         $.each(Lokasi, function (i, data) {
//             $('#input').append(`option value="` + data.city_id + `" data-kota="` + data.type + ` ` + data.city_name + `">` + data.type + ` ` + data.city_name + `/option> <br>`)

//             let idprov = data.province_id;
//             // let idcity = data.city_id;
//             // let type = data.type;
//             let city = data.city_name;
//             console.log(idprov, city);

//         })
//     }
// })