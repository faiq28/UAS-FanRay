window.onscroll = function () {
    Menu(), well1();
  };

  var xstatus = false;
  var hehe = false;

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

  function well1() {
    if (document.documentElement.scrollTop > 5000) {
      let count = 0;
      const countElement = document.getElementById("count1");

      const interval = setInterval(() => {
        countElement.textContent = count;
        count++;

        if (count > 100) {
          clearInterval(interval);
        }
      }, 0.1);
    } else {
      clearInterval;
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
  const isiUp = document.getElementById("dropDown");
  isiUp.addEventListener("click", function () {
    isiUp.classList.toggle("drop-isi");
  });

  const isiUp1 = document.getElementById("dropDown1");
  isiUp1.addEventListener("click", function () {
    isiUp1.classList.toggle("drop-isi1");
  });

  const isiUp2 = document.getElementById("dropDown2");
  isiUp2.addEventListener("click", function () {
    isiUp2.classList.toggle("drop-isi2");
  });

  const isiUp3 = document.getElementById("dropDown3");
  isiUp3.addEventListener("click", function () {
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