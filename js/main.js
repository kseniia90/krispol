function openTabItem(evt, tabItem) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabItem).style.display = "block";
  evt.currentTarget.className += " active";
}

$(function () {
  // accordion
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideDown(100);
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
  }); 
});

$(function () {
  // accordion-small-1
  $(".accordion-small-1__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion-small-1__content").slideDown(400);
      $(".accordion-small-1__title").removeClass("accordion-active");
      $(".accordion-small-1__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion-small-1__arrow", this).toggleClass("accordion__rotate");
  }); 
});

$(function () {
  // accordion-small-2
  $(".accordion-small-2__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion-small-2__content").slideDown(400);
      $(".accordion-small-2__title").removeClass("accordion-active");
      $(".accordion-small-2__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion-small-2__arrow", this).toggleClass("accordion__rotate");
  }); 
});

$(function () {
  // accordion-small-3
  $(".accordion-small-3__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion-small-3__content").slideDown(400);
      $(".accordion-small-3__title").removeClass("accordion-active");
      $(".accordion-small-3__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion-small-3__arrow", this).toggleClass("accordion__rotate");
  }); 
});

$(".gallery-show-more").on("click", function() {
  $(".gallery-content").toggleClass("showContent");
});