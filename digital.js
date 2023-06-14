window.onscroll = function () {
  Menu(),scrol();
};
var xstatus = false;
var hehe = false;
var loader = document.getElementById("loader");

window.addEventListener("load", function() {
loader.style.display = "none";
  });

const countryCodes = [
  { code: "93", country: "Afghanistan (+93)" },
  { code: "355", country: "Albania (+355)" },
  { code: "213", country: "Algeria (+213)" },
  { code: "376", country: "Andorra (+376)" },
  { code: "244", country: "Angola (+244)" },
  { code: "1264", country: "Anguilla (+1264)" },
  { code: "1268", country: "Antigua and Barbuda (+1268)" },
  { code: "54", country: "Argentina (+54)" },
  { code: "374", country: "Armenia (+374)" },
  { code: "297", country: "Aruba (+297)" },
  { code: "61", country: "Australia (+61)" },
  { code: "43", country: "Austria (+43)" },
  { code: "994", country: "Azerbaijan (+994)" },
  { code: "1242", country: "Bahamas (+1242)" },
  { code: "973", country: "Bahrain (+973)" },
  { code: "880", country: "Bangladesh (+880)" },
  { code: "1246", country: "Barbados (+1246)" },
  { code: "375", country: "Belarus (+375)" },
  { code: "32", country: "Belgium (+32)" },
  { code: "501", country: "Belize (+501)" },
  { code: "229", country: "Benin (+229)" },
  { code: "1441", country: "Bermuda (+1441)" },
  { code: "975", country: "Bhutan (+975)" },
  { code: "591", country: "Bolivia (+591)" },
  { code: "387", country: "Bosnia and Herzegovina (+387)" },
  { code: "267", country: "Botswana (+267)" },
  { code: "55", country: "Brazil (+55)" },
  { code: "246", country: "British Indian Ocean Territory (+246)" },
  { code: "1284", country: "British Virgin Islands (+1284)" },
  { code: "673", country: "Brunei (+673)" },
  { code: "359", country: "Bulgaria (+359)" },
  { code: "226", country: "Burkina Faso (+226)" },
  { code: "257", country: "Burundi (+257)" },
  { code: "855", country: "Cambodia (+855)" },
  { code: "237", country: "Cameroon (+237)" },
  { code: "1", country: "Canada (+1)" },
  { code: "238", country: "Cape Verde (+238)" },
  { code: "599", country: "Caribbean Netherlands (+599)" },
  { code: "1345", country: "Cayman Islands (+1345)" },
  { code: "236", country: "Central African Republic (+236)" },
  { code: "235", country: "Chad (+235)" },
  { code: "56", country: "Chile (+56)" },
  { code: "86", country: "China (+86)" },
  { code: "61", country: "Christmas Island (+61)" },
  { code: "61", country: "Cocos (Keeling) Islands (+61)" },
  { code: "57", country: "Colombia (+57)" },
  { code: "269", country: "Comoros (+269)" },
  { code: "243", country: "Congo (DRC) (+243)" },
  { code: "242", country: "Congo (Republic) (+242)" },
  { code: "682", country: "Cook Islands (+682)" },
  { code: "506", country: "Costa Rica (+506)" },
  { code: "225", country: "Côte d'Ivoire (+225)" },
  { code: "385", country: "Croatia (+385)" },
  { code: "53", country: "Cuba (+53)" },
  { code: "599", country: "Curaçao (+599)" },
  { code: "357", country: "Cyprus (+357)" },
  { code: "420", country: "Czech Republic (+420)" },
  { code: "45", country: "Denmark (+45)" },
  { code: "253", country: "Djibouti (+253)" },
  { code: "1767", country: "Dominica (+1767)" },
  { code: "1809", country: "Dominican Republic (+1809)" },
  { code: "1829", country: "Dominican Republic (+1829)" },
  { code: "1849", country: "Dominican Republic (+1849)" },
  { code: "593", country: "Ecuador (+593)" },
  { code: "20", country: "Egypt (+20)" },
  { code: "503", country: "El Salvador (+503)" },
  { code: "240", country: "Equatorial Guinea (+240)" },
  { code: "291", country: "Eritrea (+291)" },
  { code: "372", country: "Estonia (+372)" },
  { code: "251", country: "Ethiopia (+251)" },
  { code: "500", country: "Falkland Islands (+500)" },
  { code: "298", country: "Faroe Islands (+298)" },
  { code: "679", country: "Fiji (+679)" },
  { code: "358", country: "Finland (+358)" },
  { code: "33", country: "France (+33)" },
  { code: "594", country: "French Guiana (+594)" },
  { code: "689", country: "French Polynesia (+689)" },
  { code: "241", country: "Gabon (+241)" },
  { code: "220", country: "Gambia (+220)" },
  { code: "995", country: "Georgia (+995)" },
  { code: "49", country: "Germany (+49)" },
  { code: "233", country: "Ghana (+233)" },
  { code: "350", country: "Gibraltar (+350)" },
  { code: "30", country: "Greece (+30)" },
  { code: "299", country: "Greenland (+299)" },
  { code: "1473", country: "Grenada (+1473)" },
  { code: "590", country: "Guadeloupe (+590)" },
  { code: "1671", country: "Guam (+1671)" },
  { code: "502", country: "Guatemala (+502)" },
  { code: "44", country: "Guernsey (+44)" },
  { code: "224", country: "Guinea (+224)" },
  { code: "245", country: "Guinea-Bissau (+245)" },
  { code: "592", country: "Guyana (+592)" },
  { code: "509", country: "Haiti (+509)" },
  { code: "504", country: "Honduras (+504)" },
  { code: "852", country: "Hong Kong (+852)" },
  { code: "36", country: "Hungary (+36)" },
  { code: "354", country: "Iceland (+354)" },
  { code: "91", country: "India (+91)" },
  { code: "62", country: "Indonesia (+62)" },
  { code: "98", country: "Iran (+98)" },
  { code: "964", country: "Iraq (+964)" },
  { code: "353", country: "Ireland (+353)" },
  { code: "44", country: "Isle of Man (+44)" },
  { code: "972", country: "Israel (+972)" },
  { code: "39", country: "Italy (+39)" },
  { code: "1876", country: "Jamaica (+1876)" },
  { code: "81", country: "Japan (+81)" },
  { code: "44", country: "Jersey (+44)" },
  { code: "962", country: "Jordan (+962)" },
  { code: "7", country: "Kazakhstan (+7)" },
  { code: "254", country: "Kenya (+254)" },
  { code: "686", country: "Kiribati (+686)" },
  { code: "383", country: "Kosovo (+383)" },
  { code: "965", country: "Kuwait (+965)" },
  { code: "996", country: "Kyrgyzstan (+996)" },
  { code: "856", country: "Laos (+856)" },
  { code: "371", country: "Latvia (+371)" },
  { code: "961", country: "Lebanon (+961)" },
  { code: "266", country: "Lesotho (+266)" },
  { code: "231", country: "Liberia (+231)" },
  { code: "218", country: "Libya (+218)" },
  { code: "423", country: "Liechtenstein (+423)" },
  { code: "370", country: "Lithuania (+370)" },
  { code: "352", country: "Luxembourg (+352)" },
  { code: "853", country: "Macau (+853)" },
  { code: "389", country: "Macedonia (FYROM) (+389)" },
  { code: "261", country: "Madagascar (+261)" },
  { code: "265", country: "Malawi (+265)" },
  { code: "60", country: "Malaysia (+60)" },
  { code: "960", country: "Maldives (+960)" },
  { code: "223", country: "Mali (+223)" },
  { code: "356", country: "Malta (+356)" },
  { code: "692", country: "Marshall Islands (+692)" },
  { code: "596", country: "Martinique (+596)" },
  { code: "222", country: "Mauritania (+222)" },
  { code: "230", country: "Mauritius (+230)" },
  { code: "262", country: "Mayotte (+262)" },
  { code: "52", country: "Mexico (+52)" },
  { code: "691", country: "Micronesia (+691)" },
  { code: "373", country: "Moldova (+373)" },
  { code: "377", country: "Monaco (+377)" },
  { code: "976", country: "Mongolia (+976)" },
  { code: "382", country: "Montenegro (+382)" },
  { code: "1664", country: "Montserrat (+1664)" },
  { code: "212", country: "Morocco (+212)" },
  { code: "258", country: "Mozambique (+258)" },
  { code: "95", country: "Myanmar (Burma) (+95)" },
  { code: "264", country: "Namibia (+264)" },
  { code: "674", country: "Nauru (+674)" },
  { code: "977", country: "Nepal (+977)" },
  { code: "31", country: "Netherlands (+31)" },
  { code: "687", country: "New Caledonia (+687)" },
  { code: "64", country: "New Zealand (+64)" },
  { code: "505", country: "Nicaragua (+505)" },
  { code: "227", country: "Niger (+227)" },
  { code: "234", country: "Nigeria (+234)" },
  { code: "683", country: "Niue (+683)" },
  { code: "672", country: "Norfolk Island (+672)" },
  { code: "850", country: "North Korea (+850)" },
  { code: "1670", country: "Northern Mariana Islands (+1670)" },
  { code: "47", country: "Norway (+47)" },
  { code: "968", country: "Oman (+968)" },
  { code: "92", country: "Pakistan (+92)" },
  { code: "680", country: "Palau (+680)" },
  { code: "970", country: "Palestine (+970)" },
  { code: "507", country: "Panama (+507)" },
  { code: "675", country: "Papua New Guinea (+675)" },
  { code: "595", country: "Paraguay (+595)" },
  { code: "51", country: "Peru (+51)" },
  { code: "63", country: "Philippines (+63)" },
  { code: "48", country: "Poland (+48)" },
  { code: "351", country: "Portugal (+351)" },
  { code: "1", country: "Puerto Rico (+1)" },
  { code: "974", country: "Qatar (+974)" },
  { code: "262", country: "Réunion (+262)" },
  { code: "40", country: "Romania (+40)" },
  { code: "7", country: "Russia (+7)" },
  { code: "250", country: "Rwanda (+250)" },
  { code: "590", country: "Saint Barthélemy (+590)" },
  { code: "290", country: "Saint Helena (+290)" },
  { code: "1869", country: "Saint Kitts and Nevis (+1869)" },
  { code: "1758", country: "Saint Lucia (+1758)" },
  { code: "590", country: "Saint Martin (+590)" },
  { code: "508", country: "Saint Pierre and Miquelon (+508)" },
  { code: "1784", country: "Saint Vincent and the Grenadines (+1784)" },
  { code: "685", country: "Samoa (+685)" },
  { code: "378", country: "San Marino (+378)" },
  { code: "239", country: "São Tomé and Príncipe (+239)" },
  { code: "966", country: "Saudi Arabia (+966)" },
  { code: "221", country: "Senegal (+221)" },
  { code: "381", country: "Serbia (+381)" },
  { code: "248", country: "Seychelles (+248)" },
  { code: "232", country: "Sierra Leone (+232)" },
  { code: "65", country: "Singapore (+65)" },
  { code: "1721", country: "Sint Maarten (+1721)" },
  { code: "421", country: "Slovakia (+421)" },
  { code: "386", country: "Slovenia (+386)" },
  { code: "677", country: "Solomon Islands (+677)" },
  { code: "252", country: "Somalia (+252)" },
  { code: "27", country: "South Africa (+27)" },
  { code: "82", country: "South Korea (+82)" },
  { code: "211", country: "South Sudan (+211)" },
  { code: "34", country: "Spain (+34)" },
  { code: "94", country: "Sri Lanka (+94)" },
  { code: "249", country: "Sudan (+249)" },
  { code: "597", country: "Suriname (+597)" },
  { code: "47", country: "Svalbard and Jan Mayen (+47)" },
  { code: "268", country: "Swaziland (+268)" },
  { code: "46", country: "Sweden (+46)" },
  { code: "41", country: "Switzerland (+41)" },
  { code: "963", country: "Syria (+963)" },
  { code: "886", country: "Taiwan (+886)" },
  { code: "992", country: "Tajikistan (+992)" },
  { code: "255", country: "Tanzania (+255)" },
  { code: "66", country: "Thailand (+66)" },
  { code: "670", country: "Timor-Leste (+670)" },
  { code: "228", country: "Togo (+228)" },
  { code: "690", country: "Tokelau (+690)" },
  { code: "676", country: "Tonga (+676)" },
  { code: "1868", country: "Trinidad and Tobago (+1868)" },
  { code: "216", country: "Tunisia (+216)" },
  { code: "90", country: "Turkey (+90)" },
  { code: "993", country: "Turkmenistan (+993)" },
  { code: "1649", country: "Turks and Caicos Islands (+1649)" },
  { code: "688", country: "Tuvalu (+688)" },
  { code: "256", country: "Uganda (+256)" },
  { code: "380", country: "Ukraine (+380)" },
  { code: "971", country: "United Arab Emirates (+971)" },
  { code: "44", country: "United Kingdom (+44)" },
  { code: "1", country: "United States (+1)" },
  { code: "598", country: "Uruguay (+598)" },
  { code: "998", country: "Uzbekistan (+998)" },
  { code: "678", country: "Vanuatu (+678)" },
  { code: "39", country: "Vatican City (+39)" },
  { code: "58", country: "Venezuela (+58)" },
  { code: "84", country: "Vietnam (+84)" },
  { code: "1284", country: "Virgin Islands (British) (+1284)" },
  { code: "1340", country: "Virgin Islands (US) (+1340)" },
  { code: "681", country: "Wallis and Futuna (+681)" },
  { code: "212", country: "Western Sahara (+212)" },
  { code: "967", country: "Yemen (+967)" },
  { code: "260", country: "Zambia (+260)" },
  { code: "263", country: "Zimbabwe (+263)" },
  ];
const countryCodeSelect = document.getElementById("countryCode");

// Buat pilihan untuk setiap negara
countryCodes.forEach((country) => {
const option = document.createElement("option");
option.value = country.code;
option.textContent = "+" + country.code;
countryCodeSelect.appendChild(option);
});
// card 2

const countryCodeSelect2 = document.getElementById("countryCode2");

// Buat pilihan untuk setiap negara
countryCodes.forEach((country) => {
const option = document.createElement("option");
option.value = country.code;
option.textContent = "+" + country.code;
countryCodeSelect2.appendChild(option);
});

const countryCodeSelect3 = document.getElementById("countryCode3");

// Buat pilihan untuk setiap negara
countryCodes.forEach((country) => {
const option = document.createElement("option");
option.value = country.code;
option.textContent = "+" + country.code;
countryCodeSelect3.appendChild(option);
});

const countryCodeSelect4 = document.getElementById("countryCode4");

// Buat pilihan untuk setiap negara
countryCodes.forEach((country) => {
const option = document.createElement("option");
option.value = country.code;
option.textContent = "+" + country.code;
countryCodeSelect4.appendChild(option);
});

const countryCodeSelect5 = document.getElementById("countryCode5");

// Buat pilihan untuk setiap negara
countryCodes.forEach((country) => {
const option = document.createElement("option");
option.value = country.code;
option.textContent = "+" + country.code;
countryCodeSelect5.appendChild(option);
});

const password = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");
const number = document.getElementById("number");

const password2 = document.getElementById("password2");
const eyeicon2 = document.getElementById("eyeicon2");
const number2 = document.getElementById("number2");

const password3 = document.getElementById("password3");
const eyeicon3 = document.getElementById("eyeicon3");
const number3 = document.getElementById("number3");

const password4 = document.getElementById("password4");
const eyeicon4 = document.getElementById("eyeicon4");
const number4 = document.getElementById("number4");

const password5 = document.getElementById("password5");
const eyeicon5 = document.getElementById("eyeicon5");
const number5 = document.getElementById("number5");

eyeicon.onclick = function() {
  if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "eye.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-slash.png";
  }
}
eyeicon2.onclick = function() {
  if(password2.type == "password"){
    password2.type = "text";
    eyeicon2.src = "eye.png";
  } else {
    password2.type = "password";
    eyeicon2.src = "eye-slash.png";
  }
}
eyeicon3.onclick = function() {
  if(password3.type == "password"){
    password3.type = "text";
    eyeicon3.src = "eye.png";
  } else {
    password3.type = "password";
    eyeicon3.src = "eye-slash.png";
  }
}
eyeicon4.onclick = function() {
  if(password4.type == "password"){
    password4.type = "text";
    eyeicon4.src = "eye.png";
  } else {
    password4.type = "password";
    eyeicon4.src = "eye-slash.png";
  }
}
eyeicon5.onclick = function() {
  if(password5.type == "password"){
    password5.type = "text";
    eyeicon5.src = "eye.png";
  } else {
    password5.type = "password";
    eyeicon5.src = "eye-slash.png";
  }
}

number.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, ''); // Menghapus karakter non-digit
 });
number2.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, ''); // Menghapus karakter non-digit
 });
number3.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, ''); // Menghapus karakter non-digit
 });
number4.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, ''); // Menghapus karakter non-digit
 });
number5.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, ''); // Menghapus karakter non-digit
 });

function scrol() {
  if(document.documentElement.scrollTop > 700) {
    document.getElementById("scrol").classList.add("fixed")
    document.getElementById("scrol").classList.add("top-[100px]")
    document.getElementById("scrol").classList.add("lg:static")
    document.getElementById("scrol2").classList.add("w-2/4")
      if (document.documentElement.scrollTop > 700) {
        document.getElementById("scrol").classList.add("top-[100px]")
        document.getElementById("scrol").classList.add("sticky")
        document.getElementById("scrol").classList.add("mb-12")
        document.getElementById("scrol").innerHTML = ` <div id="scrol" class="w-2/4 h-[200px] md:w-full flex flex-col lg:items-center md:items-start">
        <p class="text-base mb-4 text-opacity-70 w-full md:text-left lg:text-center dark:text-slate-200">Benefits of Digital Marketing</p>
        <p class="text-4xl font-medium mb-4 w-[150%] md:text-left lg:text-center dark:text-slate-200">Benefits of Digital Marketing for Your Business</p>
      </div>`
        document.getElementById("scrol2").classList.add("w-2/4")
        document.getElementById("scrol2").classList.add("hidden")
      }
      
  } else {
    document.getElementById("scrol").classList.remove("fixed")
    document.getElementById("scrol").classList.remove("top-[80px]")
    document.getElementById("scrol2").classList.remove("w-2/4")
  }
}

function Menu() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("header").classList.add("bg-white");
    document.getElementById("header").classList.add("shadow-lg");
    document.getElementById("header").classList.add("bg-opacity-70");
    document.getElementById("header").classList.add("backdrop-blur-[7px]");
    document.getElementById("header").classList.add("dark:bg-opacity-70");
    document.getElementById("header").classList.add("dark:backdrop-blur-[7px]");
  } else if (document.documentElement.scrollTop > -5) {
    document.getElementById("header").classList.remove("bg-white");
    document.getElementById("header").classList.remove("shadow-lg");
  } else {
    document.getElementById("header").classList.remove("shadow-lg");
    document.getElementById("header").classList.remove("bg-white");
    document.getElementById("header").classList.remove("bg-opacity-70");
    document.getElementById("header").classList.remove("backdrop-blur-[7px]");
    document.getElementById("header").classList.remove("dark:bg-opacity-70");
    document.getElementById("header").classList.remove("dark:backdrop-blur-[7px]");
  }
}

var sttsMenu = false
function showHideMenu() {
  var menu = document.getElementById("daftarMenu");
  if (sttsMenu) {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    menu.classList.add("transition");
    menu.classList.add("duration-300");
    sttsMenu = false;
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    menu.classList.remove("transition");
    menu.classList.remove("duration-300");
    sttsMenu = true;
  }
  console.log(sttsMenu);
}
var sttsDaftar = false
function ShowDaftar() {
  var arrow = document.getElementById("drop");
  var daftarDrop = document.getElementById("daftarDrop");
  if (sttsDaftar) {
    daftarDrop.classList.add("hidden");
    daftarDrop.classList.remove("flex");
    arrow.classList.remove("drop-menu");
    sttsDaftar = false;
  } else {
    daftarDrop.classList.remove("hidden");
    daftarDrop.classList.add("flex");
    arrow.classList.add("drop-menu");
    sttsDaftar = true;
  }
  console.log(sttsDaftar);
}

var statusIsi = false
  function showIsi() {
    var isi = document.getElementById('daftar');
    var wel = document.getElementById('wel')
    if (statusIsi) {
      isi.classList.add("hidden");
      isi.classList.remove("flex");
      wel.classList.remove('flex-col')
      wel.classList.add('flex-row')
      statusIsi = false;
    } else {
      isi.classList.remove("hidden");
      isi.classList.add("flex");
      wel.classList.add('flex-col')
      wel.classList.remove('flex-row')

      statusIsi = true;
    }
    console.log(statusIsi);
  }

  var statusIsi1 = false

  function showIsi1() {
    var isi1 = document.getElementById('daftar1');
    var wel1 = document.getElementById('wel1')

    if (statusIsi1) {
      isi1.classList.add("hidden");
      isi1.classList.remove("flex");
      wel1.classList.remove('flex-col')
      wel1.classList.add('flex-row')

      statusIsi1 = false;
    } else {
      isi1.classList.remove("hidden");
      isi1.classList.add("flex");
      wel1.classList.add('flex-col')
      wel1.classList.remove('flex-row')

      statusIsi1 = true;
    }
    console.log(statusIsi1);
  }

var statusIsi2 = false

  function showIsi2() {
    var isi2 = document.getElementById('daftar2');
    var wel2 = document.getElementById('wel2')

    if (statusIsi2) {
      isi2.classList.add("hidden");
      isi2.classList.remove("flex");
      wel2.classList.remove('flex-col')
      wel2.classList.add('flex-row')

      statusIsi2 = false;
    } else {
      isi2.classList.remove("hidden");
      isi2.classList.add("flex");
      wel2.classList.add('flex-col')
      wel2.classList.remove('flex-row')

      statusIsi2 = true;
    }
    console.log(statusIsi2);
  }
var statusIsi3 = false

  function showIsi3() {
    var isi3 = document.getElementById('daftar3');
    var wel3 = document.getElementById('wel3')

    if (statusIsi3) {
      isi3.classList.add("hidden");
      isi3.classList.remove("flex");
      wel3.classList.remove('flex-col')
      wel3.classList.add('flex-row')

      statusIsi3 = false;
    } else {
      isi3.classList.remove("hidden");
      isi3.classList.add("flex");
      wel3.classList.add('flex-col')
      wel3.classList.remove('flex-row')
      
      statusIsi3 = true;
    }
    console.log(statusIsi3);
  }


function tombol1() {
  document.getElementById("item1").classList.remove("hidden");
  document.getElementById("item1").classList.add("flex");
  document.getElementById("item2").classList.remove("flex");
  document.getElementById("item2").classList.add("hidden");
  document.getElementById("item2").classList.add("md:hidden");
  document.getElementById("item3").classList.remove("flex");
  document.getElementById("item3").classList.add("hidden");
  // slider
  document.getElementById("item1Slider").classList.remove("md:hidden");
  document.getElementById("item1Slider").classList.add("flex");
  document.getElementById("item1Slider").classList.add("md:flex");

  document.getElementById("item2Slider").classList.add("hidden");
  document.getElementById("item2Slider").classList.remove("flex");
  document.getElementById("item2Slider").classList.remove("md:flex");

  //btn1
  document.getElementById("btn1").classList.add("bg-[#0468D7]");
  document.getElementById("btn1").classList.add("text-slate-50");
  document.getElementById("btn1").classList.remove("bg-gray-50");
  document.getElementById("btn1").classList.remove("text-slate-600");
  document.getElementById("btn1").classList.add("dark:bg-[#0468D7]");
  document.getElementById("btn1").classList.add("dark:text-slate-50");
  document.getElementById("btn1").classList.remove("dark:bg-gray-300");
  document.getElementById("btn1").classList.remove("dark:text-slate-800");
  // btn2
  document.getElementById("btn2").classList.remove("bg-[#0468D7]");
  document.getElementById("btn2").classList.remove("text-slate-200");
  document.getElementById("btn2").classList.add("bg-gray-50");
  document.getElementById("btn2").classList.add("text-slate-600");
  document.getElementById("btn2").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn2").classList.remove("dark:text-slate-800");
  document.getElementById("btn2").classList.add("dark:bg-gray-300");
  document.getElementById("btn2").classList.add("dark:text-slate-800");
  //btn 3
  document.getElementById("btn3").classList.remove("bg-[#0468D7]");
  document.getElementById("btn3").classList.remove("text-slate-50");
  document.getElementById("btn3").classList.add("bg-gray-50");
  document.getElementById("btn3").classList.add("text-slate-600");
  document.getElementById("btn3").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn3").classList.remove("dark:text-slate-800");
  document.getElementById("btn3").classList.add("dark:bg-gray-300");
  document.getElementById("btn3").classList.add("dark:text-slate-800");
}
function tombol2() {
  document.getElementById("item2").classList.add("flex");
  document.getElementById("item2").classList.add("md:flex");
  document.getElementById("item2").classList.remove("hidden");
  document.getElementById("item2").classList.add("md:hidden");
  document.getElementById("item1").classList.remove("flex");
  document.getElementById("item1").classList.add("hidden");
  document.getElementById("item3").classList.remove("flex");
  document.getElementById("item3").classList.add("hidden");
  // slider
  document.getElementById("item1Slider").classList.add("md:hidden");
  document.getElementById("item1Slider").classList.remove("flex");
  document.getElementById("item1Slider").classList.remove("md:flex");

  document.getElementById("item2Slider").classList.remove("flex");
  document.getElementById("item2Slider").classList.remove("md:hidden");
  document.getElementById("item2Slider").classList.add("md:flex");
  document.getElementById("item2Slider").classList.add("hidden");


  //btn2
  document.getElementById("btn2").classList.add("bg-[#0468D7]");
  document.getElementById("btn2").classList.add("text-slate-50");
  document.getElementById("btn2").classList.remove("bg-gray-50");
  document.getElementById("btn2").classList.remove("text-slate-600");
  document.getElementById("btn2").classList.add("dark:bg-[#0468D7]");
  document.getElementById("btn2").classList.add("dark:text-slate-800");
  document.getElementById("btn2").classList.remove("dark:bg-gray-300");
  document.getElementById("btn2").classList.remove("dark:text-slate-800");
  // btn1
  document.getElementById("btn1").classList.remove("bg-[#0468D7]");
  document.getElementById("btn1").classList.remove("text-slate-50");
  document.getElementById("btn1").classList.add("bg-gray-50");
  document.getElementById("btn1").classList.add("text-slate-600");
  document.getElementById("btn1").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn1").classList.remove("dark:text-slate-50");
  document.getElementById("btn1").classList.add("dark:bg-gray-300");
  document.getElementById("btn1").classList.add("dark:text-slate-800");
  
  //btn 3
  document.getElementById("btn3").classList.remove("bg-[#0468D7]");
  document.getElementById("btn3").classList.remove("text-slate-50");
  document.getElementById("btn3").classList.add("bg-gray-50");
  document.getElementById("btn3").classList.add("text-slate-600");
  document.getElementById("btn3").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn3").classList.remove("dark:text-slate-50");
  document.getElementById("btn3").classList.add("dark:bg-gray-300");
  document.getElementById("btn3").classList.add("dark:text-slate-800");
}
function tombol3() {
  document.getElementById("item2").classList.remove("flex");
  document.getElementById("item2").classList.remove("md:flex");
  document.getElementById("item2").classList.add("hidden");
  document.getElementById("item2").classList.add("md:hidden");

  document.getElementById("item1").classList.remove("flex");
  document.getElementById("item1").classList.add("hidden");
  document.getElementById("item3").classList.add("flex");
  document.getElementById("item3").classList.remove("hidden");

  // slider
  document.getElementById("item1Slider").classList.add("md:hidden");
  document.getElementById("item1Slider").classList.remove("flex");
  document.getElementById("item1Slider").classList.remove("md:flex");

  document.getElementById("item2Slider").classList.add("md:hidden");
  document.getElementById("item2Slider").classList.remove("md:flex");
  // btn 1
  document.getElementById("btn1").classList.remove("bg-[#0468D7]");
  document.getElementById("btn1").classList.remove("text-slate-50");
  document.getElementById("btn1").classList.add("bg-gray-50");
  document.getElementById("btn1").classList.add("text-slate-600");
  document.getElementById("btn1").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn1").classList.remove("dark:text-slate-50");
  document.getElementById("btn1").classList.add("dark:bg-gray-300");
  document.getElementById("btn1").classList.add("dark:text-slate-800");
  //btn 2
  document.getElementById("btn2").classList.remove("bg-[#0468D7]");
  document.getElementById("btn2").classList.remove("text-slate-50");
  document.getElementById("btn2").classList.add("bg-gray-50");
  document.getElementById("btn2").classList.add("text-slate-600");
  document.getElementById("btn2").classList.remove("dark:bg-[#0468D7]");
  document.getElementById("btn2").classList.remove("dark:text-slate-50");
  document.getElementById("btn2").classList.add("dark:bg-gray-300");
  document.getElementById("btn2").classList.add("dark:text-slate-800");
  //btn 3
  document.getElementById("btn3").classList.add("bg-[#0468D7]");
  document.getElementById("btn3").classList.add("text-slate-50");
  document.getElementById("btn3").classList.remove("bg-gray-50");
  document.getElementById("btn3").classList.remove("text-slate-600");
  document.getElementById("btn3").classList.add("dark:bg-[#0468D7]");
  document.getElementById("btn3").classList.add("dark:text-slate-800");
  document.getElementById("btn3").classList.remove("dark:bg-gray-300");
  document.getElementById("btn3").classList.remove("dark:text-slate-800");
}

var sttsView = false
function view(){
  var daftar = document.getElementById('daftarCard');
  if(sttsView) {
    daftar.classList.add('hidden');
    daftar.classList.remove('flex');
    daftar.classList.remove("translate-y-[152px]");
    daftar.classList.remove("duration-500");
    daftar.classList.remove("transtion-all");
    sttsView = false;
  } else{
    daftar.classList.remove("hidden");
    daftar.classList.add("flex");
    daftar.classList.add("translate-y-[152px]");
    daftar.classList.add("duration-500");
    daftar.classList.add("transtion-all");
    sttsView = true;
  }
}
var sttsView2 = false

function view2(){
  var daftar2 = document.getElementById('daftarCard2');
  if(sttsView2) {
    daftar2.classList.add('hidden');
    daftar2.classList.remove('flex');
    daftar2.classList.remove("translate-y-[152px]");
    daftar2.classList.remove("delay-500");
    daftar2.classList.remove("transtion-all");
    sttsView2 = false;
  } else{
    daftar2.classList.remove("hidden");
    daftar2.classList.add("flex");
    daftar2.classList.add("translate-y-[152px]");
    daftar2.classList.add("delay-500");
    daftar2.classList.add("transtion-all");
    sttsView2 = true;
  }
}
var sttsView3 = false

function view3(){
  var daftar3 = document.getElementById('daftarCard3');
  if(sttsView3) {
    daftar3.classList.add('hidden');
    daftar3.classList.remove('flex');
    daftar3.classList.remove("translate-y-[152px]");
    daftar3.classList.remove("delay-500");
    daftar3.classList.remove("transtion-all");
    sttsView3 = false;
  } else{
    daftar3.classList.remove("hidden");
    daftar3.classList.add("flex");
    daftar3.classList.add("translate-y-[152px]");
    daftar3.classList.add("delay-500");
    daftar3.classList.add("transtion-all");
    sttsView3 = true;
  }
}
var sttsView4 = false

function view4(){
  var daftar4 = document.getElementById('daftarCard4');
  if(sttsView4) {
    daftar4.classList.add('hidden');
    daftar4.classList.remove('flex');
    daftar4.classList.remove("translate-y-[152px]");
    daftar4.classList.remove("delay-500");
    daftar4.classList.remove("transtion-all");
    sttsView4 = false;
  } else{
    daftar4.classList.remove("hidden");
    daftar4.classList.add("flex");
    daftar4.classList.add("translate-y-[152px]");
    daftar4.classList.add("delay-500");
    daftar4.classList.add("transtion-all");
    sttsView4 = true;
  }
}
var sttsView5 = false

function view5(){
  var daftar5 = document.getElementById('daftarCard5');
  if(sttsView5) {
    daftar5.classList.add('hidden');
    daftar5.classList.remove('flex');
    daftar5.classList.remove("translate-y-[152px]");
    daftar5.classList.remove("delay-500");
    daftar5.classList.remove("transtion-all");
    sttsView5 = false;
  } else{
    daftar5.classList.remove("hidden");
    daftar5.classList.add("flex");
    daftar5.classList.add("translate-y-[152px]");
    daftar5.classList.add("delay-500");
    daftar5.classList.add("transtion-all");
    sttsView5 = true;
  }
}

const isiUp = document.getElementById("dropDown");
isiUp.addEventListener('click', function () {
  isiUp.classList.toggle("drop-isi");
});

const isiUp1 = document.getElementById("dropDown1");
isiUp1.addEventListener('click', function () {
  isiUp1.classList.toggle("drop-isi1");
});

const isiUp2 = document.getElementById("dropDown2");
isiUp2.addEventListener('click', function () {
  isiUp2.classList.toggle("drop-isi2");
});

const isiUp3 = document.getElementById("dropDown3");
isiUp3.addEventListener('click', function () {
  isiUp3.classList.toggle("drop-isi3");
});

const arrow = document.getElementById("drop");
arrow.addEventListener("click", function () {
  arrow.classList.toggle("drop-menu")
})

const hambuger = document.getElementById("hams");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("hamburger-active");
});


function gelap() {
  var html = document.querySelector("html");
  var gelapp = document.getElementById("gelapp");
  var terang = document.getElementById("terang");
  html.classList.add("dark");
  gelapp.classList.remove("flex");
  gelapp.classList.add("hidden");
  terang.classList.remove("hidden");
  terang.classList.add("flex");
}
function light() {
  var html = document.querySelector("html");
  var gelapp = document.getElementById("gelapp");
  var terang = document.getElementById("terang");
  html.classList.remove("dark");
  terang.classList.remove("flex");
  terang.classList.add("hidden");
  gelapp.classList.remove("hidden");
  gelapp.classList.add("flex");
}
function gelap2() {
  var html = document.querySelector("html");
  var gelapp2 = document.getElementById("gelapp2");
  var terang2 = document.getElementById("terang2");
  html.classList.add("dark");
  gelapp2.classList.remove("flex");
  gelapp2.classList.add("hidden");
  terang2.classList.remove("hidden");
  terang2.classList.add("flex");
}
function light2() {
  var html = document.querySelector("html");
  var gelapp2 = document.getElementById("gelapp2");
  var terang2 = document.getElementById("terang2");
  html.classList.remove("dark");
  terang2.classList.remove("flex");
  terang2.classList.add("hidden");
  gelapp2.classList.remove("hidden");
  gelapp2.classList.add("flex");
}

//   cardddad

// card 1
const paymentForm = document.getElementById('paymentForm');
const successModal = document.getElementById('successModal');
const closeModalButton = document.getElementById('closeModalButton');
// Menambahkan event listener pada submit form
paymentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form untuk melakukan submit

  // Menampilkan pop-up berhasil
  successModal.classList.toggle('active-payment');
  successModal.classList.remove('close-payment');
});

// Menambahkan event listener pada tombol tutup pop-up
closeModalButton.addEventListener('click', function() {
  successModal.classList.remove('active-payment');
  successModal.classList.toggle('close-payment');
});
function popGanti(){
  const blurGanti = document.getElementById('blurGanti');
  const header = document.getElementById("header");
  header.classList.add('hidden')
  header.classList.remove('flex')
  blurGanti.classList.toggle('active-pop');
  blurGanti.classList.remove('close-pop');
}
function closet(){
  const blurGanti = document.getElementById('blurGanti'); 
  blurGanti.classList.toggle('close-pop');
  blurGanti.classList.remove('active-pop');
  header.classList.remove('hidden')
  header.classList.add('flex')
}
// card 2
const paymentForm2 = document.getElementById('paymentForm2');
const successModal2 = document.getElementById('successModal2');
const closeModalButton2 = document.getElementById('closeModalButton2');
  // Menambahkan event listener pada submit form
  paymentForm2.addEventListener('submit', function(event) {
   event.preventDefault(); // Mencegah form untuk melakukan submit

  // Menampilkan pop-up berhasil
  successModal2.classList.toggle('active-payment2');
  successModal2.classList.remove('close-payment2');
});
// Menambahkan event listener pada tombol tutup pop-up
closeModalButton2.addEventListener('click', function() {
  successModal2.classList.remove('active-payment2');
  successModal2.classList.toggle('close-payment2');
});
function popGanti2(){
  const blurGanti2 = document.getElementById('blurGanti2');
  const header = document.getElementById("header");
  header.classList.add('hidden')
  header.classList.remove('flex')
  blurGanti2.classList.toggle('active-pop2');
  blurGanti2.classList.remove('close-pop2');
}
function closet2(){
  const blurGanti2 = document.getElementById('blurGanti2'); 
  blurGanti2.classList.toggle('close-pop2');
  blurGanti2.classList.remove('active-pop2');
  header.classList.remove('hidden')
  header.classList.add('flex')
}

// card 3
const paymentForm3 = document.getElementById('paymentForm3');
const successModal3 = document.getElementById('successModal3');
const closeModalButton3 = document.getElementById('closeModalButton3');
  // Menambahkan event listener pada submit form
  paymentForm3.addEventListener('submit', function(event) {
   event.preventDefault(); // Mencegah form untuk melakukan submit

  // Menampilkan pop-up berhasil
  successModal3.classList.toggle('active-payment3');
  successModal3.classList.remove('close-payment3');
});
// Menambahkan event listener pada tombol tutup pop-up
closeModalButton3.addEventListener('click', function() {
  successModal3.classList.remove('active-payment3');
  successModal3.classList.toggle('close-payment3');
});
function popGanti3(){
  const blurGanti3 = document.getElementById('blurGanti3');
  const header = document.getElementById("header");
  header.classList.add('hidden')
  header.classList.remove('flex')
  blurGanti3.classList.toggle('active-pop3');
  blurGanti3.classList.remove('close-pop3');
}
function closet3(){
  const blurGanti3 = document.getElementById('blurGanti3'); 
  blurGanti3.classList.toggle('close-pop3');
  blurGanti3.classList.remove('active-pop3');
  header.classList.remove('hidden')
  header.classList.add('flex')
}

// card 4
const paymentForm4 = document.getElementById('paymentForm4');
const successModal4 = document.getElementById('successModal4');
const closeModalButton4 = document.getElementById('closeModalButton4');
  // Menambahkan event listener pada submit form
  paymentForm4.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit

  // Menampilkan pop-up berhasil
  successModal4.classList.toggle('active-payment4');
  successModal4.classList.remove('close-payment4');
});
// Menambahkan event listener pada tombol tutup pop-up
closeModalButton4.addEventListener('click', function() {
  successModal4.classList.remove('active-payment4');
  successModal4.classList.toggle('close-payment4');
});
function popGanti4(){
  const blurGanti4 = document.getElementById('blurGanti4');
  const header = document.getElementById("header");
  header.classList.add('hidden')
  header.classList.remove('flex')
  blurGanti4.classList.toggle('active-pop4');
  blurGanti4.classList.remove('close-pop4');
}
function closet4(){
  const blurGanti4 = document.getElementById('blurGanti4'); 
  blurGanti4.classList.toggle('close-pop4');
  blurGanti4.classList.remove('active-pop4');
  header.classList.remove('hidden')
  header.classList.add('flex')
}
// card 5
const paymentForm5 = document.getElementById('paymentForm5');
const successModal5 = document.getElementById('successModal5');
const closeModalButton5 = document.getElementById('closeModalButton5');
// Menambahkan event listener pada submit form
paymentForm5.addEventListener('submit', function(event) {
event.preventDefault(); // Mencegah form untuk melakukan submit
  // Menampilkan pop-up berhasil
  successModal5.classList.toggle('active-payment5');
  successModal5.classList.remove('close-payment5');
});
// Menambahkan event listener pada tombol tutup pop-up
closeModalButton5.addEventListener('click', function() {
  successModal5.classList.remove('active-payment5');
  successModal5.classList.toggle('close-payment5');
});
function popGanti5(){
  const blurGanti5 = document.getElementById('blurGanti5');
  const header = document.getElementById("header");
  header.classList.add('hidden')
  header.classList.remove('flex')
  blurGanti5.classList.toggle('active-pop5');
  blurGanti5.classList.remove('close-pop5');
}
function closet5(){
  const blurGanti5 = document.getElementById('blurGanti5'); 
  blurGanti5.classList.toggle('close-pop5');
  blurGanti5.classList.remove('active-pop5');
  header.classList.remove('hidden')
  header.classList.add('flex')
}