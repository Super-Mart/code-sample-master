function active() {
  // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
  var url = window.location.pathname,
    urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
  // now grab every link from the navigation
  $(".nav-menu li a").each(function() {
    // and test its normalized href against the url pathname regexp
    if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
      $(this).addClass("active");
    }
  });
}
