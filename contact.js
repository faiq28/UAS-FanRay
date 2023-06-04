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
  function showDrop() {
    var daftarDrop = document.getElementById("daftarDrop");
    if (xstatus) {
      daftarDrop.classList.add("hidden");
      daftarDrop.classList.remove("flex");
      daftarDrop.classList.add("transition");
      daftarDrop.classList.add("duration-300");
      xstatus = false;
    } else {
      daftarDrop.classList.remove("hidden");
      daftarDrop.classList.add("flex");
      daftarDrop.classList.remove("transition");
      daftarDrop.classList.remove("duration-300");
      xstatus = true;
    }
    console.log(xstatus);
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
  function showIsi() {
    var isi = document.getElementById("daftar");
    if (xstatus) {
      isi.classList.add("hidden");
      isi.classList.remove("flex");

      xstatus = false;
    } else {
      isi.classList.remove("hidden");
      isi.classList.add("flex");
      isi.classList.add("transition-all");
      isi.classList.add("delay-300");
      isi.classList.add("ease-in-out");
      xstatus = true;
    }
    console.log(xstatus);
  }
  function showIsi1() {
    var isi1 = document.getElementById("daftar1");

    if (xstatus) {
      isi1.classList.add("hidden");
      isi1.classList.remove("flex");

      xstatus = false;
    } else {
      isi1.classList.remove("hidden");
      isi1.classList.add("flex");

      xstatus = true;
    }
    console.log(xstatus);
  }
  function showIsi2() {
    var isi2 = document.getElementById("daftar2");

    if (xstatus) {
      isi2.classList.add("hidden");
      isi2.classList.remove("flex");

      xstatus = false;
    } else {
      isi2.classList.remove("hidden");
      isi2.classList.add("flex");

      xstatus = true;
    }
    console.log(xstatus);
  }
  function showIsi3() {
    var isi3 = document.getElementById("daftar3");

    if (xstatus) {
      isi3.classList.add("hidden");
      isi3.classList.remove("flex");

      xstatus = false;
    } else {
      isi3.classList.remove("hidden");
      isi3.classList.add("flex");

      xstatus = true;
    }
    console.log(xstatus);
  }
  const arrow = document.getElementById("drop");
  arrow.addEventListener("click", function () {
    arrow.classList.toggle("drop-menu")
  })

  const hambuger = document.getElementById("hams");

  hambuger.addEventListener("click", function () {
    hambuger.classList.toggle("hamburger-active");
  });