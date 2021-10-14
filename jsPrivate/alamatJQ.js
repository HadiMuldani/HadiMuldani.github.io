$('#sprov').change(function () {
    var sProv = $('#sprov').val()
    if (sProv == 'Province :') {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        `)
    } else if (sProv == 1) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="17" data-kota="Kabupaten Badung">Kabupaten Badung</option>
        <option value="32" data-kota="Kabupaten Bangli">Kabupaten Bangli</option>
        <option value="94" data-kota="Kabupaten Buleleng">Kabupaten Buleleng</option>
        <option value="114" data-kota="Kota Denpasar">Kota Denpasar</option>
        <option value="128" data-kota="Kabupaten Gianyar">Kabupaten Gianyar</option>
        <option value="161" data-kota="Kabupaten Jembrana">Kabupaten Jembrana</option>
        <option value="170" data-kota="Kabupaten Karangasem">Kabupaten Karangasem</option>
        <option value="197" data-kota="Kabupaten Kalungkung">Kabupaten Kalungkung</option>
        <option value="447" data-kota="Kabupaten Tabanan">Kabupaten Tabanan</option>
        `)
    } else if (sProv == 2) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="27" data-kota="Kabupaten Bangka">Kabupaten Bangka</option>
        <option value="28" data-kota="Kabupaten Bangka Barat">Kabupaten Bangka Barat</option>
        <option value="29" data-kota="Kabupaten Bangka Selatan">Kabupaten Bangka Selatan</option>
        <option value="30" data-kota="Kabupaten Bangka Tengah">Kabupaten Bangka Tengah</option>
        <option value="56" data-kota="Kabupaten Belitung">Kabupaten Belitung</option>
        <option value="57" data-kota="Kabupaten Belitung Timur">Kabupaten Belitung Timur</option>
        <option value="334" data-kota="Kabupaten Pangkal Pinang">Kabupaten Pangkal Pinang</option>
        `)
    } else if (sProv == 3) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="106" data-kota="Kota Cilegon">Kota Cilegon</option>
        <option value="232" data-kota="Kabupaten Lebak">Kabupaten Lebak</option>
        <option value="331" data-kota="Kabupaten Pandeglang">Kabupaten Pandeglang</option>
        <option value="402" data-kota="Kabupaten Serang">Kabupaten Serang</option>
        <option value="403" data-kota="Kota Serang">Kota Serang</option>
        <option value="455" data-kota="Kabupaten Tangerang">Kabupaten Tangerang</option>
        <option value="456" data-kota="Kota Tangerang">Kota Tangerang</option>
        <option value="457" data-kota="Kota Tangerang Selatan">Kota Tangerang Selatan</option>
        `)
    } else if (sProv == 4) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="62" data-kota="Kota Bengkulu">Kota Bengkulu</option>
        <option value="63" data-kota="Kabupaten Bengkulu Selatan">Kabupaten Bengkulu Selatan</option>
        <option value="64" data-kota="Kabupaten Bengkulu Tengah">Kabupaten Bengkulu Tengah</option>
        <option value="65" data-kota="Kabupaten Bengkulu Utara">Kabupaten Bengkulu Utara</option>
        <option value="175" data-kota="Kabupaten Kaur">Kabupaten Kaur</option>
        <option value="183" data-kota="Kabupaten Kepahiang">Kabupaten Kepahiang</option>
        <option value="233" data-kota="Kabupaten Lebong">Kabupaten Lebong</option>
        <option value="294" data-kota="Kabupaten Muko Muko">Kabupaten Muko Muko</option>
        <option value="379" data-kota="Kabupaten Rejang Lebong">Kabupaten Rejang Lebong</option>
        <option value="397" data-kota="Kabupaten Seluma">Kabupaten Seluma</option>
        `)
    } else if (sProv == 5) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="39" data-kota="Kabupaten Bantul">Kabupaten Bantul</option>
        <option value="135" data-kota="Kabupaten Gunung Kidul">Kabupaten Gunung Kidul</option>
        <option value="210" data-kota="Kabupaten Kulon Progo">Kabupaten Kulon Progo</option>
        <option value="419" data-kota="Kabupaten Sleman">Kabupaten Sleman</option>
        <option value="501" data-kota="Kota Yogyakarta">Kota Yogyakarta</option>
        `)
    } else if (sProv == 6) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="151" data-kota="Kota Jakarta Barat">Kota Jakarta Barat</option>
        <option value="152" data-kota="Kota Jakarta Pusat">Kota Jakarta Pusat</option>
        <option value="153" data-kota="Kota Jakarta Selatan">Kota Jakarta Selatan</option>
        <option value="154" data-kota="Kota Jakarta Timur">Kota Jakarta Timur</option>
        <option value="155" data-kota="Kota Jakarta Utara">Kota Jakarta Utara</option>
        <option value="189" data-kota="Kabupaten Kepulauan Seribu">KaKepulauan Seribu Selatan</option>
        `)
    } else if (sProv == 7) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="77" data-kota="Kabupaten Boalemo">Kabupaten Boalemo</option>
        <option value="88" data-kota="Kabupaten Bone Bolango">Kabupaten Bone Bolango</option>
        <option value="129" data-kota="Kabupaten Gorontalo">Kabupaten Gorontalo</option>
        <option value="130" data-kota="Kota Gorontalo">Kota Gorontalo</option>
        <option value="131" data-kota="Kabupaten Gorontalo Utara">Kabupaten Gorontalo Utara</option>
        <option value="361" data-kota="Kota Pohuwato">Kota Pohuwato</option>
        `)
    } else if (sProv == 8) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="50" data-kota="Kabupaten Batang Hari">Kabupaten Batang Hari</option>
        <option value="97" data-kota="Kabupaten Bungo">Kabupaten Bungo</option>
        <option value="156" data-kota="Kota Jambi">Kota Jambi</option>
        <option value="194" data-kota="Kabupaten Kerinci">Kabupaten Kerinci</option>
        <option value="280" data-kota="Kabupaten Merangi">Kabupaten Merangi</option>
        <option value="293" data-kota="Kabupaten Muaro Jambi">Kabupaten Muaro Jambi</option>
        <option value="393" data-kota="Kabupaten Sarolangun">Kabupaten Sarolangun</option>
        <option value="442" data-kota="Kota Sungaipenuh">Kota Sungaipenuh</option>
        <option value="460" data-kota="Kabupaten Tanjung Jabung Barat">Kabupaten Tanjung Jabung Barat</option>
        <option value="461" data-kota="Kabupaten Tanjung Jabung Timur">Kabupaten Tanjung Jabung Timur</option>
        <option value="471" data-kota="Kabupaten Tebo">Kabupaten Tebo</option>
        `)
    } else if (sProv == 9) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="22" data-kota="Kabupaten Bandung">Kabupaten Bandung</option>
        <option value="23" data-kota="Kota Bandung">Kota Bandung</option>
        <option value="24" data-kota="Kabupaten Bandung Barat">Kabupaten Bandung Barat</option>
        <option value="34" data-kota="Kota Banjar">Kota Banjar</option>
        <option value="54" data-kota="Kabupaten Bekasi">Kabupaten Bekasi</option>
        <option value="55" data-kota="Kota Bekasi">Kota Bekasi</option>
        <option value="78" data-kota="Kabupaten Bogor">Kabupaten Bogor</option>
        <option value="79" data-kota="Kota Bogor">Kota Bogor</option>
        <option value="103" data-kota="Kabupaten Ciamis">Kabupaten Ciamis</option>
        <option value="104" data-kota="Kabupaten Cianjur">Kabupaten Cianjur</option>
        <option value="107" data-kota="Kota Cimahi">Kota Cimahi</option>
        <option value="108" data-kota="Kabupaten Cirebon">Kabupaten Cirebon</option>
        <option value="109" data-kota="Kota Cirebon">Kota Cirebon</option>
        <option value="115" data-kota="Kota Depok">Kota Depok</option>
        <option value="126" data-kota="Kabupaten Garut">Kabupaten Garut</option>
        <option value="149" data-kota="Kabupaten Indramayu">Kabupaten Indramayu</option>
        <option value="171" data-kota="Kabupaten Karawang">Kabupaten Karawang</option>
        <option value="211" data-kota="Kabupaten Kuningan">Kabupaten Kuningan</option>
        <option value="252" data-kota="Kabupaten Majalengka">Kabupaten Majalengka</option>
        <option value="332" data-kota="Kabupaten Pangandaran">Kabupaten Pangandaran</option>
        <option value="376" data-kota="Kabupaten Purwakarta">Kabupaten Purwakarta</option>
        <option value="428" data-kota="Kabupaten Subang">Kabupaten Subang</option>
        <option value="430" data-kota="Kabupaten Sukabumi">Kabupaten Sukabumi</option>
        <option value="431" data-kota="Kota Sukabumi">Kota Sukabumi</option>
        <option value="440" data-kota="Kabupaten Sumendang">Kabupaten Sumendang</option>
        <option value="468" data-kota="Kabupaten Tasikmalaya">Kabupaten Tasikmalaya</option>
        <option value="469" data-kota="Tasik Tasikmalaya">Tasik Tasikmalaya</option>
        `)
    } else if (sProv == 10) {
        $('#skota').html('');
        $('#skota').append(`
                <option selected >Kota / Kabupaten :</option>
                <option value="37" data-kota="Kabupaten Banjarnegara">Kabupaten Banjarnegara</option>
                <option value="41" data-kota="Kabupaten Banyumas">Kabupaten Banyumas</option>
                <option value="49" data-kota="Kabupaten Batang">Kabupaten Batang</option>
                <option value="76" data-kota="Kabupaten Blora">Kabupaten Blora</option>
                <option value="91" data-kota="Kabupaten Boyolali">Kabupaten Boyolali</option>
                <option value="92" data-kota="Kabupaten Brebes">Kabupaten Brebes</option>
                <option value="105" data-kota="Kabupaten Cilacap">Kabupaten Cilacap</option>
                <option value="113" data-kota="Kabupaten Demak">Kabupaten Demak</option>
                <option value="134" data-kota="Kabupaten Grobogan">Kabupaten Grobogan</option>
                <option value="163" data-kota="Kabupaten Jepara">Kabupaten Jepara</option>
                <option value="169" data-kota="Kabupaten Karanganyar">Kabupaten Karanganyar</option>
                <option value="177" data-kota="Kabupaten Kebumen">Kabupaten Kebumen</option>
                <option value="181" data-kota="Kabupaten Kendal">Kabupaten Kendal</option>
                <option value="196" data-kota="Kabupaten Klaten">Kabupaten Klaten</option>
                <option value="209" data-kota="Kabupaten Kudus">Kabupaten Kudus</option>
                <option value="249" data-kota="Kabupaten Magelang">Kabupaten Magelang</option>
                <option value="250" data-kota="Kota Magelang">Kota Magelang</option>
                <option value="344" data-kota="Kabupaten Pati">Kabupaten Pati</option>
                <option value="348" data-kota="Kabupaten Pekalongan">Kabupaten Pekalongan</option>
                <option value="349" data-kota="Kota Pekalongan">Kota Pekalongan</option>
                <option value="352" data-kota="Kabupaten Pemalang">Kabupaten Pemalang</option>
                <option value="375" data-kota="Kabupaten Purbalingga">Kabupaten Purbalingga</option>
                <option value="377" data-kota="Kabupaten Purworejo">Kabupaten Purworejo</option>
                <option value="380" data-kota="Kabupaten Rembang">Kabupaten Rembang</option>
                <option value="386" data-kota="Kota Salatiga">Kota Salatiga</option>
                <option value="398" data-kota="Kabupaten Semarang">Kabupaten Semarang</option>
                <option value="399" data-kota="Kota Semarang">Kota Semarang</option>
                <option value="427" data-kota="Kabupaten Sragen">Kabupaten Sragen</option>
                <option value="433" data-kota="Kabupaten Sukoharjo">Kabupaten Sukoharjo</option>
                <option value="445" data-kota="Kota Surakarta (Solo)">Kota Surakarta (Solo)</option>
                <option value="472" data-kota="Kabupaten Tegal">Kabupaten Tegal</option>
                <option value="473" data-kota="Kota Tegal">Kota Tegal</option>
                <option value="476" data-kota="Kabupaten Temanggung">Kabupaten Temanggung</option>
                <option value="497" data-kota="Kabupaten Wonogiri">Kabupaten Wonogiri</option>
                <option value="498" data-kota="Kabupaten Wonosobo">Kabupaten Wonosobo</option>
        `)
    } else if (sProv == 11) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="31" data-kota="Kabupaten Bangkalan">Kabupaten Bangkalan</option>
<option value="42" data-kota="Kabupaten Banyuwangi">Kabupaten Banyuwangi</option>
<option value="51" data-kota="Kota Batu">Kota Batu</option>
<option value="74" data-kota="Kabupaten Blitar">Kabupaten Blitar</option>
<option value="75" data-kota="Kota Blitar">Kota Blitar</option>
<option value="80" data-kota="Kabupaten Bojonegoro">Kabupaten Bojonegoro</option>
<option value="86" data-kota="Kabupaten Bondowoso">Kabupaten Bondowoso</option>
<option value="133" data-kota="Kabupaten Gresik">Kabupaten Gresik</option>
<option value="160" data-kota="Kabupaten Jember">Kabupaten Jember</option>
<option value="164" data-kota="Kabupaten Jombang">Kabupaten Jombang</option>
<option value="178" data-kota="Kabupaten Kediri">Kabupaten Kediri</option>
<option value="179" data-kota="Kota Kediri">Kota Kediri</option>
<option value="222" data-kota="Kabupaten Lamongan">Kabupaten Lamongan</option>
<option value="243" data-kota="Kabupaten Lumajang">Kabupaten Lumajang</option>
<option value="247" data-kota="Kabupaten Madiun">Kabupaten Madiun</option>
<option value="248" data-kota="Kota Madiun">Kota Madiun</option>
<option value="251" data-kota="Kabupaten Magetan">Kabupaten Magetan</option>
<option value="256" data-kota="Kota Malang">Kota Malang</option>
<option value="255" data-kota="Kabupaten Malang">Kabupaten Malang</option>
<option value="289" data-kota="Kabupaten Mojokerto">Kabupaten Mojokerto</option>
<option value="290" data-kota="Kota Mojokerto">Kota Mojokerto</option>
<option value="305" data-kota="Kabupaten Nganjuk">Kabupaten Nganjuk</option>
<option value="306" data-kota="Kabupaten Ngawi">Kabupaten Ngawi</option>
<option value="317" data-kota="Kabupaten Pacitan">Kabupaten Pacitan</option>
<option value="330" data-kota="Kabupaten Pamekasan">Kabupaten Pamekasan</option>
<option value="342" data-kota="Kabupaten Pasuruan">Kabupaten Pasuruan</option>
<option value="343" data-kota="Kota Pasuruan">Kota Pasuruan</option>
<option value="363" data-kota="Kabupaten Ponorogo">Kabupaten Ponorogo</option>
<option value="369" data-kota="Kabupaten Probolinggo">Kabupaten Probolinggo</option>
<option value="370" data-kota="Kota Probolinggo">Kota Probolinggo</option>
<option value="390" data-kota="Kabupaten Sampang">Kabupaten Sampang</option>
<option value="409" data-kota="Kabupaten Sidoarjo">Kabupaten Sidoarjo</option>
<option value="418" data-kota="Kabupaten Situbondo">Kabupaten Situbondo</option>
<option value="441" data-kota="Kabupaten Sumenep">Kabupaten Sumenep</option>
<option value="444" data-kota="Kota Surabaya">Kota Surabaya</option>
<option value="487" data-kota="Kabupaten Trenggalek">Kabupaten Trenggalek</option>
<option value="489" data-kota="Kabupaten Tuban">Kabupaten Tuban</option>
<option value="492" data-kota="Kabupaten Tulungagung">Kabupaten Tulungagung</option>
        `)
    } else if (sProv == 12) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="61" data-kota="Kabupaten Bengkayang">Kabupaten Bengkayang</option>
<option value="168" data-kota="Kabupaten Kapuas Hulu">Kabupaten Kapuas Hulu</option>
<option value="176" data-kota="Kabupaten Kayong Utara">Kabupaten Kayong Utara</option>
<option value="195" data-kota="Kabupaten Ketapang">Kabupaten Ketapang</option>
<option value="208" data-kota="Kabupaten Kubu Raya">Kabupaten Kubu Raya</option>
<option value="228" data-kota="Kabupaten Landak">Kabupaten Landak</option>
<option value="279" data-kota="Kabupaten Melawi">Kabupaten Melawi</option>
<option value="364" data-kota="Kabupaten Pontianak">Kabupaten Pontianak</option>
<option value="365" data-kota="Kota Pontianak">Kota Pontianak</option>
<option value="388" data-kota="Kabupaten Sambas">Kabupaten Sambas</option>
<option value="391" data-kota="Kabupaten Sanggau">Kabupaten Sanggau</option>
<option value="395" data-kota="Kabupaten Sekadau">Kabupaten Sekadau</option>
<option value="415" data-kota="Kota Singkawang">Kota Singkawang</option>
<option value="417" data-kota="Kabupaten Sintang">Kabupaten Sintang</option>
        `)
    } else if (sProv == 13) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="18" data-kota="Kabupaten Balangan">Kabupaten Balangan</option>
<option value="33" data-kota="Kabupaten Banjar">Kabupaten Banjar</option>
<option value="35" data-kota="Kota Banjarbaru">Kota Banjarbaru</option>
<option value="36" data-kota="Kota Banjarmasin">Kota Banjarmasin</option>
<option value="43" data-kota="Kabupaten Barito Kuala">Kabupaten Barito Kuala</option>
<option value="143" data-kota="Kabupaten Hulu Sungai Selatan">Kabupaten Hulu Sungai Selatan</option>
<option value="144" data-kota="Kabupaten Hulu Sungai Tengah">Kabupaten Hulu Sungai Tengah</option>
<option value="145" data-kota="Kabupaten Hulu Sungai Utara">Kabupaten Hulu Sungai Utara</option>
<option value="203" data-kota="Kabupaten Kotabaru">Kabupaten Kotabaru</option>
<option value="446" data-kota="Kabupaten Tabalong">Kabupaten Tabalong</option>
<option value="452" data-kota="Kabupaten Tanah Bumbu">Kabupaten Tanah Bumbu</option>
<option value="454" data-kota="Kabupaten Tanah Laut">Kabupaten Tanah Laut</option>
<option value="466" data-kota="Kabupaten Tapin">Kabupaten Tapin</option>
        `)
    } else if (sProv == 14) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="44" data-kota="Kabupaten Barito Selatan">Kabupaten Barito Selatan</option>
<option value="45" data-kota="Kabupaten Barito Timur">Kabupaten Barito Timur</option>
<option value="46" data-kota="Kabupaten Barito Utara">Kabupaten Barito Utara</option>
<option value="136" data-kota="Kabupaten Gunung Mas">Kabupaten Gunung Mas</option>
<option value="167" data-kota="Kabupaten Kapuas">Kabupaten Kapuas</option>
<option value="174" data-kota="Kabupaten Katingan">Kabupaten Katingan</option>
<option value="205" data-kota="Kabupaten Kotawaringin Barat">Kabupaten Kotawaringin Barat</option>
<option value="206" data-kota="Kabupaten Kotawaringin Timur">Kabupaten Kotawaringin Timur</option>
<option value="221" data-kota="Kabupaten Lamandau">Kabupaten Lamandau</option>
<option value="296" data-kota="Kabupaten Murung Raya">Kabupaten Murung Raya</option>
<option value="326" data-kota="Kota Palangka Raya">Kota Palangka Raya</option>
<option value="371" data-kota="Kabupaten Pulang Pisau">Kabupaten Pulang Pisau</option>
<option value="405" data-kota="Kabupaten Seruyan">Kabupaten Seruyan</option>
<option value="432" data-kota="Kabupaten Sukamara">Kabupaten Sukamara</option>
        `)
    } else if (sProv == 15) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="19" data-kota="Kota Balikpapan">Kota Balikpapan</option>
<option value="66" data-kota="Kabupaten Berau">Kabupaten Berau</option>
<option value="89" data-kota="Kota Bontang">Kota Bontang</option>
<option value="214" data-kota="Kabupaten Kutai Barat">Kabupaten Kutai Barat</option>
<option value="215" data-kota="Kabupaten Kutai Kartanegara">Kabupaten Kutai Kartanegara</option>
<option value="216" data-kota="Kabupaten Kutai Timur">Kabupaten Kutai Timur</option>
<option value="341" data-kota="Kabupaten Paser">Kabupaten Paser</option>
<option value="354" data-kota="Kabupaten Penajam Paser Utara">Kabupaten Penajam Paser Utara</option>
<option value="387" data-kota="Kota Samarinda">Kota Samarinda</option>
        `)
    } else if (sProv == 16) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="96" data-kota="Kabupaten Bulungan (Bulongan)">Kabupaten Bulungan (Bulongan)</option>
<option value="257" data-kota="Kabupaten Malinau">Kabupaten Malinau</option>
<option value="311" data-kota="Kabupaten Nunukan">Kabupaten Nunukan</option>
<option value="450" data-kota="Kabupaten Tana Tidung">Kabupaten Tana Tidung</option>
<option value="467" data-kota="Kota Tarakan">Kota Tarakan</option>
        `)
    } else if (sProv == 17) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="48" data-kota="Kota Batam">Kota Batam</option>
<option value="71" data-kota="Kabupaten Bintan">Kabupaten Bintan</option>
<option value="172" data-kota="Kabupaten Karimun">Kabupaten Karimun</option>
<option value="184" data-kota="Kabupaten Kepulauan Anambas">Kabupaten Kepulauan Anambas</option>
<option value="237" data-kota="Kabupaten Lingga">Kabupaten Lingga</option>
<option value="302" data-kota="Kabupaten Natuna">Kabupaten Natuna</option>
<option value="462" data-kota="Kota Tanjung Pinang">Kota Tanjung Pinang</option>
        `)
    } else if (sProv == 18) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="21" data-kota="Kota Bandar Lampung">Kota Bandar Lampung</option>
<option value="223" data-kota="Kabupaten Lampung Barat">Kabupaten Lampung Barat</option>
<option value="224" data-kota="Kabupaten Lampung Selatan">Kabupaten Lampung Selatan</option>
<option value="225" data-kota="Kabupaten Lampung Tengah">Kabupaten Lampung Tengah</option>
<option value="226" data-kota="Kabupaten Lampung Timur">Kabupaten Lampung Timur</option>
<option value="227" data-kota="Kabupaten Lampung Utara">Kabupaten Lampung Utara</option>
<option value="282" data-kota="Kabupaten Mesuji">Kabupaten Mesuji</option>
<option value="283" data-kota="Kota Metro">Kota Metro</option>
<option value="355" data-kota="Kabupaten Pesawaran">Kabupaten Pesawaran</option>
<option value="356" data-kota="Kabupaten Pesisir Barat">Kabupaten Pesisir Barat</option>
<option value="368" data-kota="Kabupaten Pringsewu">Kabupaten Pringsewu</option>
<option value="458" data-kota="Kabupaten Tanggamus">Kabupaten Tanggamus</option>
<option value="490" data-kota="Kabupaten Tulang Bawang">Kabupaten Tulang Bawang</option>
<option value="491" data-kota="Kabupaten Tulang Bawang Barat">Kabupaten Tulang Bawang Barat</option>
<option value="496" data-kota="Kabupaten Way Kanan">Kabupaten Way Kanan</option>
        `)
    } else if (sProv == 19) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="14" data-kota="Kota Ambon">Kota Ambon</option>
<option value="99" data-kota="Kabupaten Buru">Kabupaten Buru</option>
<option value="100" data-kota="Kabupaten Buru Selatan">Kabupaten Buru Selatan</option>
<option value="185" data-kota="Kabupaten Kepulauan Aru">Kabupaten Kepulauan Aru</option>
<option value="258" data-kota="Kabupaten Maluku Barat Daya">Kabupaten Maluku Barat Daya</option>
<option value="259" data-kota="Kabupaten Maluku Tengah">Kabupaten Maluku Tengah</option>
<option value="260" data-kota="Kabupaten Maluku Tenggara">Kabupaten Maluku Tenggara</option>
<option value="261" data-kota="Kabupaten Maluku Tenggara Barat">Kabupaten Maluku Tenggara Barat</option>
<option value="400" data-kota="Kabupaten Seram Bagian Barat">Kabupaten Seram Bagian Barat</option>
<option value="401" data-kota="Kabupaten Seram Bagian Timur">Kabupaten Seram Bagian Timur</option>
<option value="488" data-kota="Kota Tual">Kota Tual/option>
        `)
    } else if (sProv == 20) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="138" data-kota="Kabupaten Halmahera Barat">Kabupaten Halmahera Barat</option>
<option value="139" data-kota="Kabupaten Halmahera Selatan">Kabupaten Halmahera Selatan</option>
<option value="140" data-kota="Kabupaten Halmahera Tengah">Kabupaten Halmahera Tengah</option>
<option value="141" data-kota="Kabupaten Halmahera Timur">Kabupaten Halmahera Timur</option>
<option value="142" data-kota="Kabupaten Halmahera Utara">Kabupaten Halmahera Utara</option>
<option value="191" data-kota="Kabupaten Kepulauan Sula">Kabupaten Kepulauan Sula</option>
<option value="372" data-kota="Kabupaten Pulau Morotai">Kabupaten Pulau Morotai</option>
<option value="477" data-kota="Kota Ternate">Kota Ternate</option>
<option value="478" data-kota="Kota Tidore Kepulauan">Kota Tidore Kepulauan</option>
        `)
    } else if (sProv == 21) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="1" data-kota="Kabupaten Aceh Barat">Kabupaten Aceh Barat</option>
<option value="2" data-kota="Kabupaten Aceh Barat Daya">Kabupaten Aceh Barat Daya</option>
<option value="3" data-kota="Kabupaten Aceh Besar">Kabupaten Aceh Besar</option>
<option value="4" data-kota="Kabupaten Aceh Jaya">Kabupaten Aceh Jaya</option>
<option value="5" data-kota="Kabupaten Aceh Selatan">Kabupaten Aceh Selatan</option>
<option value="6" data-kota="Kabupaten Aceh Singkil">Kabupaten Aceh Singkil</option>
<option value="7" data-kota="Kabupaten Aceh Tamiang">Kabupaten Aceh Tamiang</option>
<option value="8" data-kota="Kabupaten Aceh Tengah">Kabupaten Aceh Tengah</option>
<option value="9" data-kota="Kabupaten Aceh Tenggara">Kabupaten Aceh Tenggara</option>
<option value="10" data-kota="Kabupaten Aceh Timur">Kabupaten Aceh Timur</option>
<option value="11" data-kota="Kabupaten Aceh Utara">Kabupaten Aceh Utara</option>
<option value="20" data-kota="Kota Banda Aceh">Kota Banda Aceh</option>
<option value="59" data-kota="Kabupaten Bener Meriah">Kabupaten Bener Meriah</option>
<option value="72" data-kota="Kabupaten Bireuen">Kabupaten Bireuen</option>
<option value="127" data-kota="Kabupaten Gayo Lues">Kabupaten Gayo Lues</option>
<option value="230" data-kota="Kota Langsa">Kota Langsa</option>
<option value="235" data-kota="Kota Lhokseumawe">Kota Lhokseumawe</option>
<option value="300" data-kota="Kabupaten Nagan Raya">Kabupaten Nagan Raya</option>
<option value="358" data-kota="Kabupaten Pidie">Kabupaten Pidie</option>
<option value="359" data-kota="Kabupaten Pidie Jaya">Kabupaten Pidie Jaya</option>
<option value="384" data-kota="Kota Sabang">Kota Sabang</option>
<option value="414" data-kota="Kabupaten Simeulue">Kabupaten Simeulue</option>
<option value="429" data-kota="Kota Subulussalam">Kota Subulussalam</option>
        `)
    } else if (sProv == 22) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="68" data-kota="Kabupaten Bima">Kabupaten Bima</option>
<option value="69" data-kota="Kota Bima">Kota Bima</option>
<option value="118" data-kota="Kabupaten Dompu">Kabupaten Dompu</option>
<option value="238" data-kota="Kabupaten Lombok Barat">Kabupaten Lombok Barat</option>
<option value="239" data-kota="Kabupaten Lombok Tengah">Kabupaten Lombok Tengah</option>
<option value="240" data-kota="Kabupaten Lombok Timur">Kabupaten Lombok Timur</option>
<option value="241" data-kota="Kabupaten Lombok Utara">Kabupaten Lombok Utara</option>
<option value="276" data-kota="Kota Mataram">Kota Mataram</option>
<option value="438" data-kota="Kabupaten Sumbawa">Kabupaten Sumbawa</option>
<option value="439" data-kota="Kabupaten Sumbawa Barat">Kabupaten Sumbawa Barat</option><option value="68" data-kota="Kabupaten Bima">Kabupaten Bima</option>
<option value="69" data-kota="Kota Bima">Kota Bima</option>
<option value="118" data-kota="Kabupaten Dompu">Kabupaten Dompu</option>
<option value="238" data-kota="Kabupaten Lombok Barat">Kabupaten Lombok Barat</option>
<option value="239" data-kota="Kabupaten Lombok Tengah">Kabupaten Lombok Tengah</option>
<option value="240" data-kota="Kabupaten Lombok Timur">Kabupaten Lombok Timur</option>
<option value="241" data-kota="Kabupaten Lombok Utara">Kabupaten Lombok Utara</option>
<option value="276" data-kota="Kota Mataram">Kota Mataram</option>
<option value="438" data-kota="Kabupaten Sumbawa">Kabupaten Sumbawa</option>
<option value="439" data-kota="Kabupaten Sumbawa Barat">Kabupaten Sumbawa Barat</option>
        `)
    } else if (sProv == 23) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="13" data-kota="Kabupaten Alor">Kabupaten Alor</option>
<option value="58" data-kota="Kabupaten Belu">Kabupaten Belu</option>
<option value="122" data-kota="Kabupaten Ende">Kabupaten Ende</option>
<option value="125" data-kota="Kabupaten Flores Timur">Kabupaten Flores Timur</option>
<option value="212" data-kota="Kabupaten Kupang">Kabupaten Kupang</option>
<option value="213" data-kota="Kota Kupang">Kota Kupang</option>
<option value="234" data-kota="Kabupaten Lembata">Kabupaten Lembata</option>
<option value="269" data-kota="Kabupaten Manggarai">Kabupaten Manggarai</option>
<option value="270" data-kota="Kabupaten Manggarai Barat">Kabupaten Manggarai Barat</option>
<option value="271" data-kota="Kabupaten Manggarai Timur">Kabupaten Manggarai Timur</option>
<option value="301" data-kota="Kabupaten Nagekeo">Kabupaten Nagekeo</option>
<option value="304" data-kota="Kabupaten Ngada">Kabupaten Ngada</option>
<option value="383" data-kota="Kabupaten Rote Ndao">Kabupaten Rote Ndao</option>
<option value="385" data-kota="Kabupaten Sabu Raijua">Kabupaten Sabu Raijua</option>
<option value="412" data-kota="Kabupaten Sikka">Kabupaten Sikka</option>
<option value="434" data-kota="Kabupaten Sumba Barat">Kabupaten Sumba Barat</option>
<option value="435" data-kota="Kabupaten Sumba Barat Daya">Kabupaten Sumba Barat Daya</option>
<option value="436" data-kota="Kabupaten Sumba Tengah">Kabupaten Sumba Tengah</option>
<option value="437" data-kota="Kabupaten Sumba Timur">Kabupaten Sumba Timur</option>
<option value="479" data-kota="Kabupaten Timor Tengah Selatan">Kabupaten Timor Tengah Selatan</option>
<option value="480" data-kota="Kabupaten Timor Tengah Utara">Kabupaten Timor Tengah Utara</option>
        `)
    } else if (sProv == 24) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="16" data-kota="Kabupaten Asmat">Kabupaten Asmat</option>
<option value="67" data-kota="Kabupaten Biak Numfor">Kabupaten Biak Numfor</option>
<option value="90" data-kota="Kabupaten Boven Digoel">Kabupaten Boven Digoel</option>
<option value="111" data-kota="Kabupaten Deiyai (Deliyai)">Kabupaten Deiyai (Deliyai)</option>
<option value="117" data-kota="Kabupaten Dogiyai">Kabupaten Dogiyai</option>
<option value="150" data-kota="Kabupaten Intan Jaya">Kabupaten Intan Jaya</option>
<option value="157" data-kota="Kabupaten Jayapura">Kabupaten Jayapura</option>
<option value="158" data-kota="Kota Jayapura">Kota Jayapura</option>
<option value="159" data-kota="Kabupaten Jayawijaya">Kabupaten Jayawijaya</option>
<option value="180" data-kota="Kabupaten Keerom">Kabupaten Keerom</option>
<option value="193" data-kota="Kabupaten Kepulauan Yapen (Yapen Waropen)">Kabupaten Kepulauan Yapen (Yapen Waropen)</option>
<option value="231" data-kota="Kabupaten Lanny Jaya">Kabupaten Lanny Jaya</option>
<option value="263" data-kota="Kabupaten Mamberamo Raya">Kabupaten Mamberamo Raya</option>
<option value="264" data-kota="Kabupaten Mamberamo Tengah">Kabupaten Mamberamo Tengah</option>
<option value="274" data-kota="Kabupaten Mappi">Kabupaten Mappi</option>
<option value="281" data-kota="Kabupaten Merauke">Kabupaten Merauke</option>
<option value="284" data-kota="Kabupaten Mimika">Kabupaten Mimika</option>
<option value="299" data-kota="Kabupaten Nabire">Kabupaten Nabire</option>
<option value="303" data-kota="Kabupaten Nduga">Kabupaten Nduga</option>
<option value="335" data-kota="Kabupaten Paniai">Kabupaten Paniai</option>
<option value="347" data-kota="Kabupaten Pegunungan Bintang">Kabupaten Pegunungan Bintang</option>
<option value="373" data-kota="Kabupaten Puncak">Kabupaten Puncak</option>
<option value="374" data-kota="Kabupaten Puncak Jaya">Kabupaten Puncak Jaya</option>
<option value="392" data-kota="Kabupaten Sarmi">Kabupaten Sarmi</option>
<option value="443" data-kota="Kabupaten Supiori">Kabupaten Supiori</option>
<option value="484" data-kota="Kabupaten Tolikara">Kabupaten Tolikara</option>
<option value="495" data-kota="Kabupaten Waropen">Kabupaten Waropen</option>
<option value="499" data-kota="Kabupaten Yahukimo">Kabupaten Yahukimo</option>
<option value="500" data-kota="Kabupaten Yalimo">Kabupaten Yalimo</option>
        `)
    } else if (sProv == 25) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="124" data-kota="Kabupaten Fakfak">Kabupaten Fakfak</option>
<option value="165" data-kota="Kabupaten Kaimana">Kabupaten Kaimana</option>
<option value="272" data-kota="Kabupaten Manokwari">Kabupaten Manokwari</option>
<option value="273" data-kota="Kabupaten Manokwari Selatan">Kabupaten Manokwari Selatan</option>
<option value="277" data-kota="Kabupaten Maybrat">Kabupaten Maybrat</option>
<option value="346" data-kota="Kabupaten Pegunungan Arfak">Kabupaten Pegunungan Arfak</option>
<option value="378" data-kota="Kabupaten Raja Ampat">Kabupaten Raja Ampat</option>
<option value="424" data-kota="Kabupaten Sorong">Kabupaten Sorong</option>
<option value="425" data-kota="Kota Sorong">Kota Sorong</option>
<option value="426" data-kota="Kabupaten Sorong Selatan">Kabupaten Sorong Selatan</option>
<option value="449" data-kota="Kabupaten Tambrauw">Kabupaten Tambrauw</option>
<option value="474" data-kota="Kabupaten Teluk Bintuni">Kabupaten Teluk Bintuni</option>
<option value="475" data-kota="Kabupaten Teluk Wondama">Kabupaten Teluk Wondama</option>
        `)
    } else if (sProv == 26) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="60" data-kota="Kabupaten Bengkalis">Kabupaten Bengkalis</option>
<option value="120" data-kota="Kota Dumai">Kota Dumai</option>
<option value="147" data-kota="Kabupaten Indragiri Hilir">Kabupaten Indragiri Hilir</option>
<option value="148" data-kota="Kabupaten Indragiri Hulu">Kabupaten Indragiri Hulu</option>
<option value="166" data-kota="Kabupaten Kampar">Kabupaten Kampar</option>
<option value="187" data-kota="Kabupaten Kepulauan Meranti">Kabupaten Kepulauan Meranti</option>
<option value="207" data-kota="Kabupaten Kuantan Singingi">Kabupaten Kuantan Singingi</option>
<option value="350" data-kota="Kota Pekanbaru">Kota Pekanbaru</option>
<option value="351" data-kota="Kabupaten Pelalawan">Kabupaten Pelalawan</option>
<option value="381" data-kota="Kabupaten Rokan Hilir">Kabupaten Rokan Hilir</option>
<option value="382" data-kota="Kabupaten Rokan Hulu">Kabupaten Rokan Hulu</option>
<option value="406" data-kota="Kabupaten Siak">Kabupaten Siak</option>
        `)
    } else if (sProv == 27) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="253" data-kota="Kabupaten Majene">Kabupaten Majene</option>
<option value="262" data-kota="Kabupaten Mamasa">Kabupaten Mamasa</option>
<option value="265" data-kota="Kabupaten Mamuju">Kabupaten Mamuju</option>
<option value="266" data-kota="Kabupaten Mamuju Utara">Kabupaten Mamuju Utara</option>
<option value="362" data-kota="Kabupaten Polewali Mandar">Kabupaten Polewali Mandar</option>
        `)
    } else if (sProv == 28) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="38" data-kota="Kabupaten Bantaeng">Kabupaten Bantaeng</option>
<option value="47" data-kota="Kabupaten Barru">Kabupaten Barru</option>
<option value="87" data-kota="Kabupaten Bone">Kabupaten Bone</option>
<option value="95" data-kota="Kabupaten Bulukumba">Kabupaten Bulukumba</option>
<option value="123" data-kota="Kabupaten Enrekang">Kabupaten Enrekang</option>
<option value="132" data-kota="Kabupaten Gowa">Kabupaten Gowa</option>
<option value="162" data-kota="Kabupaten Jeneponto">Kabupaten Jeneponto</option>
<option value="244" data-kota="Kabupaten Luwu">Kabupaten Luwu</option>
<option value="245" data-kota="Kabupaten Luwu Timur">Kabupaten Luwu Timur</option>
<option value="246" data-kota="Kabupaten Luwu Utara">Kabupaten Luwu Utara</option>
<option value="254" data-kota="Kota Makassar">Kota Makassar</option>
<option value="275" data-kota="Kabupaten Maros">Kabupaten Maros</option>
<option value="328" data-kota="Kota Palopo">Kota Palopo</option>
<option value="333" data-kota="Kabupaten Pangkajene Kepulauan">Kabupaten Pangkajene Kepulauan</option>
<option value="336" data-kota="Kota Parepare">Kota Parepare</option>
<option value="360" data-kota="Kabupaten Pinrang">Kabupaten Pinrang</option>
<option value="396" data-kota="Kabupaten Selayar (Kepulauan Selayar)">Kabupaten Selayar (Kepulauan Selayar)</option>
<option value="408" data-kota="Kabupaten Sidenreng Rappang</Rapang">Kabupaten Sidenreng Rappang</Rapang</option>
<option value="416" data-kota="Kabupaten Sinjai">Kabupaten Sinjai</option>
<option value="423" data-kota="Kabupaten Soppeng">Kabupaten Soppeng</option>
<option value="448" data-kota="Kabupaten Takalar">Kabupaten Takalar</option>
<option value="451" data-kota="Kabupaten Tana Toraja">Kabupaten Tana Toraja</option>
<option value="486" data-kota="Kabupaten Toraja Utara">Kabupaten Toraja Utara</option>
<option value="493" data-kota="Kabupaten Wajo">Kabupaten Wajo</option>
        `)
    } else if (sProv == 29) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="25" data-kota="Kabupaten Banggai">Kabupaten Banggai</option>
<option value="26" data-kota="Kabupaten Banggai Kepulauan">Kabupaten Banggai Kepulauan</option>
<option value="98" data-kota="Kabupaten Buol">Kabupaten Buol</option>
<option value="119" data-kota="Kabupaten Donggala">Kabupaten Donggala</option>
<option value="291" data-kota="Kabupaten Morowali">Kabupaten Morowali</option>
<option value="329" data-kota="Kota Palu">Kota Palu</option>
<option value="338" data-kota="Kabupaten Parigi Moutong">Kabupaten Parigi Moutong</option>
<option value="366" data-kota="Kabupaten Poso">Kabupaten Poso</option>
<option value="410" data-kota="Kabupaten Sigi">Kabupaten Sigi</option>
<option value="482" data-kota="Kabupaten Tojo Una-Una">Kabupaten Tojo Una-Una</option>
<option value="483" data-kota="Kabupaten Toli-Toli">Kabupaten Toli-Toli</option>
        `)
    } else if (sProv == 30) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="53" data-kota="Kota Bau-Bau">Kota Bau-Bau</option>
<option value="85" data-kota="Kabupaten Bombana">Kabupaten Bombana</option>
<option value="101" data-kota="Kabupaten Buton">Kabupaten Buton</option>
<option value="102" data-kota="Kabupaten Buton Utara">Kabupaten Buton Utara</option>
<option value="182" data-kota="Kota Kendari">Kota Kendari</option>
<option value="198" data-kota="Kabupaten Kolaka">Kabupaten Kolaka</option>
<option value="199" data-kota="Kabupaten Kolaka Utara">Kabupaten Kolaka Utara</option>
<option value="200" data-kota="Kabupaten Konawe">Kabupaten Konawe</option>
<option value="201" data-kota="Kabupaten Konawe Selatan">Kabupaten Konawe Selatan</option>
<option value="202" data-kota="Kabupaten Konawe Utara">Kabupaten Konawe Utara</option>
<option value="295" data-kota="Kabupaten Muna">Kabupaten Muna</option>
<option value="494" data-kota="Kabupaten Wakatobi">Kabupaten Wakatobi</option>
        `)
    } else if (sProv == 31) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="73" data-kota="Kota Bitung">Kota Bitung/option>
<option value="81" data-kota="Kabupaten Bolaang Mongondow (Bolmong)">Kabupaten Bolaang Mongondow (Bolmong)</option>
<option value="82" data-kota="Kabupaten Bolaang Mongondow Selatan">Kabupaten Bolaang Mongondow Selatan</option>
<option value="83" data-kota="Kabupaten Bolaang Mongondow Timur">Kabupaten Bolaang Mongondow Timur</option>
<option value="84" data-kota="Kabupaten Bolaang Mongondow Utara">Kabupaten Bolaang Mongondow Utara</option>
<option value="188" data-kota="Kabupaten Kepulauan Sangihe">Kabupaten Kepulauan Sangihe</option>
<option value="190" data-kota="Kabupaten Kepulauan Siau Tagulandang Biaro (Sitaro)">Kabupaten Kepulauan Siau Tagulandang Biaro (Sitaro)</option>
<option value="192" data-kota="Kabupaten Kepulauan Talaud">Kabupaten Kepulauan Talaud</option>
<option value="204" data-kota="Kota Kotamobagu">Kota Kotamobagu</option>
<option value="267" data-kota="Kota Manado">Kota Manado</option>
<option value="285" data-kota="Kabupaten Minahasa">Kabupaten Minahasa</option>
<option value="286" data-kota="Kabupaten Minahasa Selatan">Kabupaten Minahasa Selatan</option>
<option value="287" data-kota="Kabupaten Minahasa Tenggara">Kabupaten Minahasa Tenggara</option>
<option value="288" data-kota="Kabupaten Minahasa Utara">Kabupaten Minahasa Utara</option>
<option value="485" data-kota="Kota Tomohon">Kota Tomohon</option>
        `)
    } else if (sProv == 32) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="12" data-kota="Kabupaten Agam">Kabupaten Agam</option>
<option value="93" data-kota="Kota Bukittinggi">Kota Bukittinggi</option>
<option value="116" data-kota="Kabupaten Dharmasraya">Kabupaten Dharmasraya</option>
<option value="186" data-kota="Kabupaten Kepulauan Mentawai">Kabupaten Kepulauan Mentawai</option>
<option value="236" data-kota="Kabupaten Lima Puluh Koto</Kota">Kabupaten Lima Puluh Koto</Kota</option>
<option value="318" data-kota="Kota Padang">Kota Padang</option>
<option value="321" data-kota="Kota Padang Panjang">Kota Padang Panjang</option>
<option value="322" data-kota="Kabupaten Padang Pariaman">Kabupaten Padang Pariaman</option>
<option value="337" data-kota="Kota Pariaman">Kota Pariaman</option>
<option value="339" data-kota="Kabupaten Pasaman">Kabupaten Pasaman</option>
<option value="340" data-kota="Kabupaten Pasaman Barat">Kabupaten Pasaman Barat</option>
<option value="345" data-kota="Kota Payakumbuh">Kota Payakumbuh</option>
<option value="357" data-kota="Kabupaten Pesisir Selatan">Kabupaten Pesisir Selatan</option>
<option value="394" data-kota="Kota Sawah Lunto">Kota Sawah Lunto</option>
<option value="411" data-kota="Kabupaten Sijunjung (Sawah Lunto Sijunjung)">Kabupaten Sijunjung (Sawah Lunto Sijunjung)</option>
<option value="420" data-kota="Kabupaten Solok">Kabupaten Solok</option>
<option value="421" data-kota="Kota Solok">Kota Solok</option>
<option value="422" data-kota="Kabupaten Solok Selatan">Kabupaten Solok Selatan</option>
<option value="453" data-kota="Kabupaten Tanah Datar">Kabupaten Tanah Datar</option>
        `)
    } else if (sProv == 33) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="40" data-kota="Kabupaten Banyuasin">Kabupaten Banyuasin</option>
<option value="121" data-kota="Kabupaten Empat Lawang">Kabupaten Empat Lawang</option>
<option value="220" data-kota="Kabupaten Lahat">Kabupaten Lahat</option>
<option value="242" data-kota="Kota Lubuk Linggau">Kota Lubuk Linggau</option>
<option value="292" data-kota="Kabupaten Muara Enim">Kabupaten Muara Enim</option>
<option value="297" data-kota="Kabupaten Musi Banyuasin">Kabupaten Musi Banyuasin</option>
<option value="298" data-kota="Kabupaten Musi Rawas">Kabupaten Musi Rawas</option>
<option value="312" data-kota="Kabupaten Ogan Ilir">Kabupaten Ogan Ilir</option>
<option value="313" data-kota="Kabupaten Ogan Komering Ilir">Kabupaten Ogan Komering Ilir</option>
<option value="314" data-kota="Kabupaten Ogan Komering Ulu">Kabupaten Ogan Komering Ulu</option>
<option value="315" data-kota="Kabupaten Ogan Komering Ulu Selatan">Kabupaten Ogan Komering Ulu Selatan</option>
<option value="316" data-kota="Kabupaten Ogan Komering Ulu Timur">Kabupaten Ogan Komering Ulu Timur</option>
<option value="324" data-kota="Kota Pagar Alam">Kota Pagar Alam</option>
<option value="327" data-kota="Kota Palembang">Kota Palembang</option>
<option value="367" data-kota="Kota Prabumulih">Kota Prabumulih</option>
        `)
    } else if (sProv == 34) {
        $('#skota').html('');
        $('#skota').append(`
        <option selected >Kota / Kabupaten :</option>
        <option value="15" data-kota="Kabupaten Asahan">Kabupaten Asahan</option>
<option value="52" data-kota="Kabupaten Batu Bara">Kabupaten Batu Bara</option>
<option value="70" data-kota="Kota Binjai">Kota Binjai</option>
<option value="110" data-kota="Kabupaten Dairi">Kabupaten Dairi</option>
<option value="112" data-kota="Kabupaten Deli Serdang">Kabupaten Deli Serdang</option>
<option value="137" data-kota="Kota Gunungsitoli">Kota Gunungsitoli</option>
<option value="146" data-kota="Kabupaten Humbang Hasundutan">Kabupaten Humbang Hasundutan</option>
<option value="173" data-kota="Kabupaten Karo">Kabupaten Karo</option>
<option value="217" data-kota="Kabupaten Labuhan Batu">Kabupaten Labuhan Batu</option>
<option value="218" data-kota="Kabupaten Labuhan Batu Selatan">Kabupaten Labuhan Batu Selatan</option>
<option value="219" data-kota="Kabupaten Labuhan Batu Utara">Kabupaten Labuhan Batu Utara</option>
<option value="229" data-kota="Kabupaten Langkat">Kabupaten Langkat</option>
<option value="268" data-kota="Kabupaten Mandailing Natal">Kabupaten Mandailing Natal</option>
<option value="278" data-kota="Kota Medan">Kota Medan</option>
<option value="307" data-kota="Kabupaten Nias">Kabupaten Nias</option>
<option value="308" data-kota="Kabupaten Nias Barat">Kabupaten Nias Barat</option>
<option value="309" data-kota="Kabupaten Nias Selatan">Kabupaten Nias Selatan</option>
<option value="310" data-kota="Kabupaten Nias Utara">Kabupaten Nias Utara</option>
<option value="319" data-kota="Kabupaten Padang Lawas">Kabupaten Padang Lawas</option>
<option value="320" data-kota="Kabupaten Padang Lawas Utara">Kabupaten Padang Lawas Utara</option>
<option value="323" data-kota="Kota Padang Sidempuan">Kota Padang Sidempuan</option>
<option value="325" data-kota="Kabupaten Pakpak Bharat">Kabupaten Pakpak Bharat</option>
<option value="353" data-kota="Kota Pematang Siantar">Kota Pematang Siantar</option>
<option value="389" data-kota="Kabupaten Samosir">Kabupaten Samosir</option>
<option value="404" data-kota="Kabupaten Serdang Bedagai">Kabupaten Serdang Bedagai</option>
<option value="407" data-kota="Kota Sibolga">Kota Sibolga</option>
<option value="413" data-kota="Kabupaten Simalungun">Kabupaten Simalungun</option>
<option value="459" data-kota="Kota Tanjung Balai">Kota Tanjung Balai</option>
<option value="463" data-kota="Kabupaten Tapanuli Selatan">Kabupaten Tapanuli Selatan</option>
<option value="464" data-kota="Kabupaten Tapanuli Tengah">Kabupaten Tapanuli Tengah</option>
<option value="465" data-kota="Kabupaten Tapanuli Utara">Kabupaten Tapanuli Utara</option>
<option value="470" data-kota="Kota Tebing Tinggi">Kota Tebing Tinggi</option>
<option value="481" data-kota="Kabupaten Toba Samosir">Kabupaten Toba Samosir</option>
        `)
    }
})