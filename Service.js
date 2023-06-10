window.onscroll = function () {
    Menu(),scrol();
  };
  var xstatus = false;
  var hehe = false;
  function view(){
    var daftar = document.getElementById('daftarCard');
    if(xstatus) {
      daftar.classList.add('hidden');
      daftar.classList.remove('flex');
      daftar.classList.remove("translate-y-[152px]");
      daftar.classList.remove("duration-500");
      daftar.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar.classList.remove("hidden");
      daftar.classList.add("flex");
      daftar.classList.add("translate-y-[152px]");
      daftar.classList.add("duration-500");
      daftar.classList.add("transtion-all");
      xstatus = true;
    }
  }
  function view2(){
    var daftar2 = document.getElementById('daftarCard2');
    if(xstatus) {
      daftar2.classList.add('hidden');
      daftar2.classList.remove('flex');
      daftar2.classList.remove("translate-y-[152px]");
      daftar2.classList.remove("delay-500");
      daftar2.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar2.classList.remove("hidden");
      daftar2.classList.add("flex");
      daftar2.classList.add("translate-y-[152px]");
      daftar2.classList.add("delay-500");
      daftar2.classList.add("transtion-all");
      xstatus = true;
    }
  }
  function view3(){
    var daftar3 = document.getElementById('daftarCard3');
    if(xstatus) {
      daftar3.classList.add('hidden');
      daftar3.classList.remove('flex');
      daftar3.classList.remove("translate-y-[152px]");
      daftar3.classList.remove("delay-500");
      daftar3.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar3.classList.remove("hidden");
      daftar3.classList.add("flex");
      daftar3.classList.add("translate-y-[152px]");
      daftar3.classList.add("delay-500");
      daftar3.classList.add("transtion-all");
      xstatus = true;
    }
  }
  function view4(){
    var daftar4 = document.getElementById('daftarCard4');
    if(xstatus) {
      daftar4.classList.add('hidden');
      daftar4.classList.remove('flex');
      daftar4.classList.remove("translate-y-[152px]");
      daftar4.classList.remove("delay-500");
      daftar4.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar4.classList.remove("hidden");
      daftar4.classList.add("flex");
      daftar4.classList.add("translate-y-[152px]");
      daftar4.classList.add("delay-500");
      daftar4.classList.add("transtion-all");
      xstatus = true;
    }
  }
  function view5(){
    var daftar5 = document.getElementById('daftarCard5');
    if(xstatus) {
      daftar5.classList.add('hidden');
      daftar5.classList.remove('flex');
      daftar5.classList.remove("translate-y-[152px]");
      daftar5.classList.remove("delay-500");
      daftar5.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar5.classList.remove("hidden");
      daftar5.classList.add("flex");
      daftar5.classList.add("translate-y-[152px]");
      daftar5.classList.add("delay-500");
      daftar5.classList.add("transtion-all");
      xstatus = true;
    }
  }
  function view6(){
    var daftar6 = document.getElementById('daftarCard6');
    if(xstatus) {
      daftar6.classList.add('hidden');
      daftar6.classList.remove('flex');
      daftar6.classList.remove("translate-y-[152px]");
      daftar6.classList.remove("delay-500");
      daftar6.classList.remove("transtion-all");
      xstatus = false;
    } else{
      daftar6.classList.remove("hidden");
      daftar6.classList.add("flex");
      daftar6.classList.add("translate-y-[152px]");
      daftar6.classList.add("delay-500");
      daftar6.classList.add("transtion-all");
      xstatus = true;
    }
  }
function showIsi() {
  var isi = document.getElementById('daftar');
  var wel = document.getElementById('wel')
  if (xstatus) {
    isi.classList.add("hidden");
    isi.classList.remove("flex");
    wel.classList.remove('flex-col')
    wel.classList.add('flex-row')
    xstatus = false;
  } else {
    isi.classList.remove("hidden");
    isi.classList.add("flex");
    wel.classList.add('flex-col')
    wel.classList.remove('flex-row')

    xstatus = true;
  }
  console.log(xstatus);
}
function showIsi1() {
  var isi1 = document.getElementById('daftar1');
  var wel1 = document.getElementById('wel1')

  if (xstatus) {
    isi1.classList.add("hidden");
    isi1.classList.remove("flex");
    wel1.classList.remove('flex-col')
    wel1.classList.add('flex-row')

    xstatus = false;
  } else {
    isi1.classList.remove("hidden");
    isi1.classList.add("flex");
    wel1.classList.add('flex-col')
    wel1.classList.remove('flex-row')

    xstatus = true;
  }
  console.log(xstatus);
}
function showIsi2() {
  var isi2 = document.getElementById('daftar2');
  var wel2 = document.getElementById('wel2')

  if (xstatus) {
    isi2.classList.add("hidden");
    isi2.classList.remove("flex");
    wel2.classList.remove('flex-col')
    wel2.classList.add('flex-row')

    xstatus = false;
  } else {
    isi2.classList.remove("hidden");
    isi2.classList.add("flex");
    wel2.classList.add('flex-col')
    wel2.classList.remove('flex-row')

    xstatus = true;
  }
  console.log(xstatus);
}
function showIsi3() {
  var isi3 = document.getElementById('daftar3');
  var wel3 = document.getElementById('wel3')

  if (xstatus) {
    isi3.classList.add("hidden");
    isi3.classList.remove("flex");
    wel3.classList.remove('flex-col')
    wel3.classList.add('flex-row')

    xstatus = false;
  } else {
    isi3.classList.remove("hidden");
    isi3.classList.add("flex");
    wel3.classList.add('flex-col')
    wel3.classList.remove('flex-row')
    
    xstatus = true;
  }
  console.log(xstatus);
}
  function scrol() {
    if(document.documentElement.scrollTop > 2630) {
      document.getElementById("scrol").classList.add("fixed")
      document.getElementById("scrol").classList.add("top-[100px]")
      document.getElementById("scrol").classList.add("lg:static")
      document.getElementById("scrol2").classList.add("w-2/4")
        if (document.documentElement.scrollTop > 2600) {
          document.getElementById("scrol").classList.add("top-[100px]")
          document.getElementById("scrol").classList.add("sticky")
          document.getElementById("scrol").classList.add("mb-12")
          document.getElementById("scrol").innerHTML = `            <div id="scrol" class="w-2/4 h-[200px] md:w-full flex flex-col lg:items-center md:items-start">
          <h1 class="text-xl my-4 md:text-left lg:text-center">How to Order</h1>
          <p class="text-4xl font-medium mb-4 w-[401px] md:text-left lg:text-center">Website Development Process at FanRay</p>
          <p class="text-base mb-4 text-opacity-70 w-[413px] md:text-left lg:text-center">4 easy steps you need to know when ordering a Website / Application with our services.
          </p>
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
  function showHideMenu() {
    var menu = document.getElementById("daftarMenu");
    if (xstatus) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      menu.classList.add("transition");
      menu.classList.add("duration-300");
      xstatus = false;
    } else {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
      menu.classList.remove("transition");
      menu.classList.remove("duration-300");
      xstatus = true;
    }
    console.log(xstatus);
  }
  function ShowDaftar() {
    var daftarDrop = document.getElementById("daftarDrop");
    if (xstatus) {
      daftarDrop.classList.add("hidden");
      daftarDrop.classList.remove("flex");
      xstatus = false;
    } else {
      daftarDrop.classList.remove("hidden");
      daftarDrop.classList.add("flex");
      xstatus = true;
    }
    console.log(xstatus);
  }
  
  function tombol1() {
    document.getElementById("item1").classList.remove("hidden");
    document.getElementById("item1").classList.add("flex");
    document.getElementById("item2").classList.remove("flex");
    document.getElementById("item2").classList.add("hidden");
    document.getElementById("item2").classList.add("md:hidden");
    document.getElementById("item3").classList.remove("flex");
    document.getElementById("item3").classList.add("hidden");
    document.getElementById("item4").classList.remove("flex");
    document.getElementById("item4").classList.add("hidden");
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
    //btn 4
    document.getElementById("btn4").classList.remove("bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("text-slate-50");
    document.getElementById("btn4").classList.add("bg-gray-50");
    document.getElementById("btn4").classList.add("text-slate-600");
    document.getElementById("btn4").classList.remove("dark:bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("dark:text-slate-800");
    document.getElementById("btn4").classList.add("dark:bg-gray-300");
    document.getElementById("btn4").classList.add("dark:text-slate-800");
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
    document.getElementById("item4").classList.remove("flex");
    document.getElementById("item4").classList.add("hidden");
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
    //btn 4
    document.getElementById("btn4").classList.remove("bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("text-slate-50");
    document.getElementById("btn4").classList.add("bg-gray-50");
    document.getElementById("btn4").classList.add("text-slate-600");
    document.getElementById("btn4").classList.remove("dark:bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("dark:text-slate-50");
    document.getElementById("btn4").classList.add("dark:bg-gray-300");
    document.getElementById("btn4").classList.add("dark:text-slate-800");
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
    document.getElementById("item4").classList.remove("flex");
    document.getElementById("item4").classList.add("hidden");

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
    //btn 4
    document.getElementById("btn4").classList.remove("bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("text-slate-50");
    document.getElementById("btn4").classList.add("bg-gray-50");
    document.getElementById("btn4").classList.add("text-slate-600");
    document.getElementById("btn4").classList.remove("dark:bg-[#0468D7]");
    document.getElementById("btn4").classList.remove("dark:text-slate-50");
    document.getElementById("btn4").classList.add("dark:bg-gray-300");
    document.getElementById("btn4").classList.add("dark:text-slate-800");
  }
  function tombol4() {
    document.getElementById("item1").classList.remove("flex");
    document.getElementById("item1").classList.add("hidden");
    document.getElementById("item2").classList.remove("flex");
    document.getElementById("item2").classList.add("hidden");
    document.getElementById("item3").classList.remove("flex");
    document.getElementById("item3").classList.add("hidden");
    document.getElementById("item4").classList.add("flex");
    document.getElementById("item4").classList.remove("hidden");
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
    document.getElementById("btn3").classList.remove("bg-[#0468D7]");
    document.getElementById("btn3").classList.remove("text-slate-50");
    document.getElementById("btn3").classList.add("bg-gray-50");
    document.getElementById("btn3").classList.add("text-slate-600");
    document.getElementById("btn3").classList.remove("dark:bg-[#0468D7]");
    document.getElementById("btn3").classList.remove("dark:text-slate-50");
    document.getElementById("btn3").classList.add("dark:bg-gray-300");
    document.getElementById("btn3").classList.add("dark:text-slate-800");
    //btn 4
    document.getElementById("btn4").classList.add("bg-[#0468D7]");
    document.getElementById("btn4").classList.add("text-slate-50");
    document.getElementById("btn4").classList.remove("bg-gray-50");
    document.getElementById("btn4").classList.remove("text-slate-600");
    document.getElementById("btn4").classList.add("dark:bg-[#0468D7]");
    document.getElementById("btn4").classList.add("dark:text-slate-800");
    document.getElementById("btn4").classList.remove("dark:bg-gray-300");
    document.getElementById("btn4").classList.remove("dark:text-slate-800");
  }
  

  
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

//   carddd

  // card 1
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
  function payment(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('active-payment');
    blur.classList.remove('close-payment');
  }
  function closepayment(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('close-payment');
    blur.classList.remove('active-payment');
  }
  
  // card 2
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
  function payment2(){
    const blur2 = document.getElementById('blur2');
    blur2.classList.toggle('active-payment2');
    blur2.classList.remove('close-payment2');
  }
  function closepayment2(){
    const blur2 = document.getElementById('blur2');
    blur2.classList.toggle('close-payment2');
    blur2.classList.remove('active-payment2');
  }
  // card 3
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
  function payment3(){
    const blur3 = document.getElementById('blur3');
    blur3.classList.toggle('active-payment3');
    blur3.classList.remove('close-payment3');
  }
  function closepayment3(){
    const blur3 = document.getElementById('blur3');
    blur3.classList.toggle('close-payment3');
    blur3.classList.remove('active-payment3');
  }
  // card 4
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
  function payment4(){
    const blur4 = document.getElementById('blur4');
    blur4.classList.toggle('active-payment4');
    blur4.classList.remove('close-payment4');
  }
  function closepayment4(){
    const blur4 = document.getElementById('blur4');
    blur4.classList.toggle('close-payment4');
    blur4.classList.remove('active-payment4');
  }
  // card 5
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
  function payment5(){
    const blur5 = document.getElementById('blur5');
    blur5.classList.toggle('active-payment5');
    blur5.classList.remove('close-payment5');
  }
  function closepayment5(){
    const blur5 = document.getElementById('blur5');
    blur5.classList.toggle('close-payment5');
    blur5.classList.remove('active-payment5');
  }
  // card 6
  function popGanti6(){
    const blurGanti6 = document.getElementById('blurGanti6');
    const header = document.getElementById("header");
    header.classList.add('hidden')
    header.classList.remove('flex')
    blurGanti6.classList.toggle('active-pop6');
    blurGanti6.classList.remove('close-pop6');
  }
  function closet6(){
    const blurGanti6 = document.getElementById('blurGanti6'); 
    blurGanti6.classList.toggle('close-pop6');
    blurGanti6.classList.remove('active-pop6');
    header.classList.remove('hidden')
    header.classList.add('flex')
  }
  function payment6(){
    const blur4 = document.getElementById('blur6');
    blur6.classList.toggle('active-payment6');
    blur6.classList.remove('close-payment6');
  }
  function closepayment6(){
    const blur6 = document.getElementById('blur6');
    blur6.classList.toggle('close-payment6');
    blur6.classList.remove('active-payment6');
  }