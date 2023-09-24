var slideIndex = 1;
var pageIndex = 0;
showDivs(slideIndex);

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

function loadImages(n) {
  var img = document.createElement("img");
  img.style.width = "100%";
  img.src = n;
  img.classList.add("mySlides");
  var element = document.getElementById("quranDiv");
  element.appendChild(img);
}

function addParameterToURL(param) {
  url = location.href;

  var n = url.search("#");
  if (n > 0) {
    url = url.split("#")[0];
  }

  var n = url.search("\\?");
  if (n > 0) {
    url = url.split("?")[0];
  }

  url += "?" + param + "p";
  return url;
}

function showPage(n) {
  var p = 0;
  var iteration = slideIndex;
  if (n < iteration) {
    for (p = n; p < iteration; p++) {
      plusDivs(-1);
    }
  } else {
    showDivs((slideIndex = n));
  }
}

function plusDivs(n) {
  if (slideIndex == 1 && n < 0) {
    return;
  }
  if (slideIndex == 549 && n > 0) {
    return;
  }
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  var i;
  if (n > x.length) {
    for (i = x.length + 1; i <= n; i++) {
      if (i < 1) {
        loadImages("assets/pages/Page0001.gif");
      } else if (i < 10) {
        loadImages("assets/pages/Page000" + i + ".gif");
      } else if (i > 9 && i < 100) {
        loadImages("assets/pages/Page00" + i + ".gif");
      } else {
        loadImages("assets/pages/Page0" + i + ".gif");
      }
    }
  }
  document.getElementById("pages").value = n;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  if (n == x.length) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex - 1].style.display = "block";

  url = location.href;

  var q = url.search(n + "p");

  if (n != 1) {
    if (q < 0) {
      window.location.href = addParameterToURL("page=" + n);
    }
  }
}

function filter(element) {
  var value = $(element).val();
  value = value.toUpperCase();
  $("#myUL > li").each(function () {
    if ($(this).text().toUpperCase().search(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function valueSelected(n) {
  javascript: showPage(n);
}

window.onload = function () {
  var select = document.getElementById("pages");
  var j = 1;
  for (var i = 1; i <= 549; i++) {
    var option = document.createElement("option");
    option.text = option.value = i;
    select.add(option, j);
    j++;
  }
  document.getElementById("navi").style.display = "none";
  url = location.href;
  var n = url.search("\\?");
  if (n > 0) {
    url = url.split("=")[1];
    url = url.split("p")[0];
    selectDropdownValue(url);
  }
};

function selectDropdownValue(n) {
  document.getElementById("pages").value = n;
  valueSelected(n);
}
