---
tutorialName: Asas HTML
title: img Tag?
url: asas-html/img-tag
chapter: HTML inline
---

Dalam zaman moden ni, kita gunakan *website* untuk hampir semua aktiviti harian kita. Dari menonton video di Youtube, *edit* gambar di Canva dan mesej kawan di Telegram, semua tu boleh dilakukan dengan menggunakan website melalui *Web Browser*.

Tapi persoalannya, adakah anda tahu bagaimana sebenarnya website berfungsi? Dalam artikel ini, anda akan berkenalan dengan konsep-konsep penting disebalik website.

## Apa itu Internet?

Sebelum anda boleh faham bagaimana website berfungsi, anda perlu tahu bagaimana internet berfungsi terlebih dahulu. Apa internet ni sebenarnya? Secara asasnya, internet merupakan rangkaian sambungan antara peranti.

<img class="img-content" src="/articles-assets/bagaimana-website-berfungsi/1.png" />

contoh di atas ni menunjukkan sambungan antara 2 komputer. Kedua-dua komputer ni boleh berkomunikasi antara satu sama lain sama ada dengan cara menerima atau menghantar maklumat. Cuba bayangkan ada berjuta-juta lagi peranti lain yang wujud di Bumi ni dan semuanya saling bersambung antara satu sama lain. Sambungan yang banyak ni dinamakan rangkaian Internet.

<img class="img-content" src="/articles-assets/bagaimana-website-berfungsi/2.png" />
<p class="img-alt">Rangkaian Internet</p>

## Bagaimana data dipindahkan melalui Internet?

Baik, anda dah tahu asas internet. Soalan seterusnya, bagaimana data dipindahkan melalui Internet? Data-data yang dipindahkan melalui internet dipecahkan kepada komponen-komponen kecil yang dikenali sebagai ***Packet***.

Untuk memastikan *Packet-Packet* ini dihantar dan diterima dengan betul, terdapat beberapa peraturan atau protokol yang perlu diikuti oleh sambungan internet  agar kandungan *Packet* dihantar dan diterima sama seperti yang dinginkan.

Antara protokol yang digunakan ialah *Internet Protocol **(IP)*** dan *Transmission Control Protocol **(TCP)***. Fungsi *IP* ialah mendapatkan alamat destinasi akhir untuk *Packet* dihantar. *TCP* pula memastikan penghantaran *Packet* yang tepat selepas alamat ditemui.

<blockquote>
<p>Sekejap! Alamat apa yang dimaksudkan ni?</p>
</blockquote>

Setiap peranti mempunyai alamat mereka tersendiri. Alamat ini dikenali sebagai alamat IP (*IP Address*). 

Saya bagi analogi mudah. Katakan anda ada kawan yang menetap di USA dan anda pula menetap di Malaysia. Satu hari anda nak hantar surat pada kawan anda tu. Apa yang perlu ada pada surat tersebut? Mestilah ada alamat pengirim dan penerima. Ini supaya surat anda di hantar ke alamat yang betul, dan penerima tahu dari mana surat itu dihantar.

Sama juga dengan Internet. Kalau nak hantar data dari satu komputer ke satu lagi komputer, mesti ada *IP address* komputer dari 2 pihak iaitu yang menghantar dan yang menerima data (atau *Packet*).

Setiap peranti mempunyai *IP address* yang unik. *IP address* diwakili oleh susunan 4 siri nombor yang dipisahkan dengan titik. **Contoh: 192.16.0.73** 

## Kepentingan protokol dalam Internet

Protokol memainkan peranan yang penting dalam rangkaian Internet. Protokol yang digunakan dalam rangkaian Internet adalah standard dan telah dipersetujui kaedah penggunaannya. Dengan adanya protokol ini, mana-mana pihak boleh membuat teknologi atau peranti baharu, dan peranti tersebut dapat berkomunikasi dengan peranti lain yang telah sedia ada tanpa berlaku sebarang konflik semasa pemindahan data.

Sebagai contoh, *Web Browser* yang dibangunkan oleh satu syarikat dapat berkomunikasi dengan *web server* syarikat lain selagi mana kedua-dua pihak menggunakan protokol yang sama.

## Memahami *IP Address* dan *Domain Name*

Sekarang anda dah faham berkaitan konsep *IP address*, seterusnya, anda akan berkenalan dengan konsep yang berkait rapat dengan *IP address* iaitu *Domain Name*.

Cuba bayangkan anda nak tengok video Youtube, anda hanya perlu buka *web browser* dan layari **youtube.com**. Senangkan? Apa yang terjadi apabila anda melayari youtube.com adalah *web browser* and membuat request kepada server yang menyimpan data untuk *youtube.com*. *Web browser* anda akan membuat sambungan ke *server* youtube sebelum data-data untuk website youtube.com boleh dihantar semula kepada *web browser* anda.

Bagaimana *web browser* anda membuat sambungan dengan server *youtube.com*? *Server* merupakan sejenis komputer dan ia juga mempunyai *IP address* tersendiri. Jadi *web browser* anda perlu mendapatkan *IP address* milik *server* youtube.com dan membuat sambungan.

<blockquote>
<p>
Tapi, macam mana web browser tahu IP address server youtube.com? Kita tak bagi IP address pun, macam mana web browser tahu?
</p>
</blockquote>

Sebenarnya, *web browser* kita dah tahu *IP address*  tersebut daripada URL **youtube.com** tu sendiri. URL seperti youtube.com, google.com, instagram.com dinamakan sebagai *Domain Name*. *Domain Name* merupakan versi *IP address* yang boleh dibaca manusia atau *human-readable*.

Sebelum web browser dapat membuat sambungan dengan *server*, *domain name* website yang anda nak layari perlu "diterjemahkan" kepada *IP address* dengan bantuan *DNS server* (Kita akan berkenalan dengan DNS Server dengan lebih lanjut pada bahagian seterusnya)

Satu *IP address* bukan sahaja boleh diwakili oleh satu *domain name*, banyak *domain name* pun boleh. Tapi, apa kelebihan fungsi ni?

Saya berikan contoh. Sebelum **Twitter** bertukar nama kepada **X**, platform tersebut menggunakan domain name twitter.com. Tapi, lepas nama Twitter ditukar kepada X, *domain name* platform tersebut bertukar kepada x.com.

Tapi cuba anda layari twitter.com sekarang, anda masih dibawa ke platform X kan? Hah, itulah kebaikan domain name. satu *IP address* boleh diwakili oleh seberapa banyak *domain name* yang dimahukan.

<img class="img-content" src="/articles-assets/bagaimana-website-berfungsi/3.png" />
<p class="img-alt">Domain Name</p>

## Pengenalan kepada HTTP dan HTTPS

Satu lagi contoh protokol yang digunakan dalam rangkaian internet ialah **HTTP** atau *Hypertext Transfer Protocol*. HTTP ialah protokol yang digunakan untuk memindahkan maklumat antara **client** (*web browser*) dan *server*. 

Peranan HTTP ni lebih kurang seperti TCP/IP tapi HTTP digunakan oleh *web browser* dan *server*, manakala TCP/IP digunakan antara *router* komputer dalam sambungan internet. Jangan risau kalau anda tak faham bahagian ni, untuk topik artikel ni anda cuma perlu tahu yang TCP, IP dan HTTP merupakan antara contoh protokol dalam sambungan internet.

Apabila anda melayari website, web browser anda akan membuat *HTTP request* kepada *server* untuk mendapatkan data berkaitan website tersebut. Selepas itu, *server* akan memproses *request* tersebut dan menghantar *http response* yang mengandungi data website kembali kepada *client* atau *web browser*.


