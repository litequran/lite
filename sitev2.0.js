$(document).ready(function(){$("#search").autocomplete({source:[{label:"Al Fatihah",value:"/al-fatihah"},{label:"Al Baqarah",value:"/al-baqarah"},{label:"Ali Imran",value:"/ali-imran"},{label:"An Nisa",value:"/an-nisa"},{label:"Al Maidah",value:"/al-maidah"},{label:"Al Anam",value:"/al-anam"},{label:"Al Araf",value:"/al-araf"},{label:"Al Anfal",value:"/al-anfal"},{label:"At Taubah",value:"/at-taubah"},{label:"Yunus",value:"/yunus"},{label:"Hud",value:"/hud"},{label:"Yusuf",value:"/yusuf"},{label:"Ar Rad",value:"/ar-rad"},{label:"Ibrahim",value:"/ibrahim"},{label:"Al Hijr",value:"/al-hijr"},{label:"An Nahl",value:"/an-nahl"},{label:"Al Isra",value:"/al-isra"},{label:"Al Kahfi",value:"/al-kahfi"},{label:"Maryam",value:"/maryam"},{label:"Taha",value:"/taha"},{label:"Al Anbiya",value:"/al-anbiya"},{label:"Al Hajj",value:"/al-hajj"},{label:"Al Muminun",value:"/al-muminun"},{label:"An Nur",value:"/an-nur"},{label:"Al Furqan",value:"/al-furqan"},{label:"Asy Syuara",value:"/asy-syuara"},{label:"An Naml",value:"/an-naml"},{label:"Al Qasas",value:"/al-qasas"},{label:"Al Ankabut",value:"/al-ankabut"},{label:"Ar Rum",value:"/ar-rum"},{label:"Luqman",value:"/luqman"},{label:"As Sajdah",value:"/as-sajdah"},{label:"Al Ahzab",value:"/al-ahzab"},{label:"Saba",value:"/saba"},{label:"Fatir",value:"/fatir"},{label:"Yasin",value:"/yasin"},{label:"As Saffat",value:"/as-saffat"},{label:"Sad",value:"/sad"},{label:"Az Zumar",value:"/az-zumar"},{label:"Gafir",value:"/gafir"},{label:"Fussilat",value:"/fussilat"},{label:"Asy Syura",value:"/asy-syura"},{label:"Az Zukhruf",value:"/az-zukhruf"},{label:"Ad Dukhan",value:"/ad-dukhan"},{label:"Al Jasiyah",value:"/al-jasiyah"},{label:"Al Ahqaf",value:"/al-ahqaf"},{label:"Muhammad",value:"/muhammad"},{label:"Al Fath",value:"/al-fath"},{label:"Al Hujurat",value:"/al-hujurat"},{label:"Qaf",value:"/qaf"},{label:"Az Zariyat",value:"/az-zariyat"},{label:"At Tur",value:"/at-tur"},{label:"An Najm",value:"/an-najm"},{label:"Al Qamar",value:"/al-qamar"},{label:"Ar Rahman",value:"/ar-rahman"},{label:"Al Waqiah",value:"/al-waqiah"},{label:"Al Hadid",value:"/al-hadid"},{label:"Al Mujadilah",value:"/al-mujadilah"},{label:"Al Hasyr",value:"/al-hasyr"},{label:"Al Mumtahanah",value:"/al-mumtahanah"},{label:"As Saff",value:"/as-saff"},{label:"Al Jumuah",value:"/al-jumuah"},{label:"Al Munafiqun",value:"/al-munafiqun"},{label:"At Tagabun",value:"/at-tagabun"},{label:"At Talaq",value:"/at-talaq"},{label:"At Tahrim",value:"/at-tahrim"},{label:"Al Mulk",value:"/al-mulk"},{label:"Al Qalam",value:"/al-qalam"},{label:"Al Haqqah",value:"/al-haqqah"},{label:"Al Maarij",value:"/al-maarij"},{label:"Nuh",value:"/nuh"},{label:"Al Jin",value:"/al-jin"},{label:"Al Muzzammil",value:"/al-muzzammil"},{label:"Al Muddassir",value:"/al-muddassir"},{label:"Al Qiyamah",value:"/al-qiyamah"},{label:"Al Insan",value:"/al-insan"},{label:"Al Mursalat",value:"/al-mursalat"},{label:"An Naba",value:"/an-naba"},{label:"An Naziat",value:"/an-naziat"},{label:"Abasa",value:"/abasa"},{label:"At Takwir",value:"/at-takwir"},{label:"Al Infitar",value:"/al-infitar"},{label:"Al Mutaffifin",value:"/al-mutaffifin"},{label:"Al Insyiqaq",value:"/al-insyiqaq"},{label:"Al Buruj",value:"/al-buruj"},{label:"At Tariq",value:"/at-tariq"},{label:"Al Ala",value:"/al-ala"},{label:"Al Gasyiyah",value:"/al-gasyiyah"},{label:"Al Fajr",value:"/al-fajr"},{label:"Al Balad",value:"/al-balad"},{label:"Asy Syams",value:"/asy-syams"},{label:"Al Lail",value:"/al-lail"},{label:"Ad Duha",value:"/ad-duha"},{label:"Asy Syarh",value:"/asy-syarh"},{label:"At Tin",value:"/at-tin"},{label:"Al Alaq",value:"/al-alaq"},{label:"Al Qadr",value:"/al-qadr"},{label:"Al Bayyinah",value:"/al-bayyinah"},{label:"Al Zalzalah",value:"/al-zalzalah"},{label:"Al Adiyat",value:"/al-adiyat"},{label:"Al Qariah",value:"/al-qariah"},{label:"At Takasur",value:"/at-takasur"},{label:"Al Asr",value:"/al-asr"},{label:"Al Humazah",value:"/al-humazah"},{label:"Al Fil",value:"/al-fil"},{label:"Quraisy",value:"/quraisy"},{label:"Al Maun",value:"/al-maun"},{label:"Al Kausar",value:"/al-kausar"},{label:"Al Kafirun",value:"/al-kafirun"},{label:"An Nasr",value:"/an-nasr"},{label:"Al Lahab",value:"/al-lahab"},{label:"Al Ikhlas",value:"/al-ikhlas"},{label:"Al Falaq",value:"/al-falaq"},{label:"An Nas",value:"/an-nas"}],open:function(a,l){var t=$(this).data("autocomplete");t.menu.element.find("a").each(function(){var a=$(this),l=t.term.split(" ").join("|");a.html(a.text().replace(new RegExp("("+l+")","gi"),'<span class="ui-autocomplete-term">$1</span>'))})},focus:function(a,l){return $(a.target).val(l.item.label),!1},select:function(a,l){return $(a.target).val(l.item.label),window.location=l.item.value,!1}})});

