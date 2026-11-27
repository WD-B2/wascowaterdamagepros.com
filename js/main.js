(function () {
  var BP = 900;
  var drawer = document.getElementById("mob-drawer");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  function setDrawer(open) {
    if (!drawer) { return; }
    drawer.classList.toggle("open", open);
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (openBtn) { openBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  }
  if (openBtn) { openBtn.addEventListener("click", function () { setDrawer(true); }); }
  if (closeBtn) { closeBtn.addEventListener("click", function () { setDrawer(false); }); }
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { setDrawer(false); }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setDrawer(false);
      var o = document.querySelectorAll(".nav-links > li.open");
      for (var i = 0; i < o.length; i++) { o[i].classList.remove("open"); }
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP) { setDrawer(false); }
  });
  var tg = document.querySelectorAll(".nav-links > li > button");
  for (var t = 0; t < tg.length; t++) {
    tg[t].addEventListener("click", function (e) {
      var li = e.currentTarget.parentNode;
      var was = li.classList.contains("open");
      var all = document.querySelectorAll(".nav-links > li.open");
      for (var k = 0; k < all.length; k++) { all[k].classList.remove("open"); }
      if (!was) { li.classList.add("open"); }
      e.currentTarget.setAttribute("aria-expanded", was ? "false" : "true");
    });
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-links")) {
      var o = document.querySelectorAll(".nav-links > li.open");
      for (var i = 0; i < o.length; i++) { o[i].classList.remove("open"); }
    }
  });
  var qs = document.querySelectorAll(".faq-q");
  for (var q = 0; q < qs.length; q++) {
    qs[q].addEventListener("click", function (e) {
      var item = e.currentTarget.parentNode;
      var ans = item.querySelector(".faq-a");
      var open = item.classList.contains("open");
      item.classList.toggle("open", !open);
      e.currentTarget.setAttribute("aria-expanded", open ? "false" : "true");
      ans.style.maxHeight = open ? "0px" : ans.scrollHeight + "px";
    });
  }
  window.addEventListener("resize", function () {
    var op = document.querySelectorAll(".faq-item.open .faq-a");
    for (var i = 0; i < op.length; i++) { op[i].style.maxHeight = op[i].scrollHeight + "px"; }
  });
})();
