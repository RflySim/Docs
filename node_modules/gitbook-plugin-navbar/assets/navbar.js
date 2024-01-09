require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("page.change", function() {

      // Retreieve configuration
      var navbar = gitbook.state.config.pluginsConfig.navbar || {};

      var logo = navbar.logo;
      var menu = navbar.menu;
      var style = navbar.style;

      // Adjust existing book elements
      $(".book-body").css("top", "50px")
                     .css("border-top", "1px solid rgba(0, 0, 0, 0.1)");
      $(".book-summary").css("top", "50px")
                        .css("border-top", "1px solid rgba(0, 0, 0, 0.1)");

      var $header = $("<header class=\"header-navbar\">" +
                        "<div class=\"container\">" +
                          "<div class=\"logo-container\">" +
                            "<a href=\"" + logo.link + "\">" +
                              "<img src=\"" + logo.image + "\" alt=\"" + logo.alt + "\"/>" +
                            "</a>" +
                          "</div>" +
                          "<div class=\"menu-container\">" +
                            "<a href=\"javascript:void(0);\" class=\"compact-menu\">" +
                              "&#9776;" +
                            "</a>" +
                            "<ul></ul>" +
                          "</div>" +
                        "</div>" +
                      "</header>");

      $(".book-summary").before($header);

      for (var m = 0; m < menu.items.length; m++) {
        $(".menu-container>ul").append("<li>" +
                                         "<a href=\"" + menu.items[m].link + "\">" +
                                           menu.items[m].text +
                                         "</a>" +
                                       "</li>");
      }

      $(".compact-menu").click(function() {
        $(".menu-container").toggleClass("responsive");
      });

      $(".header-navbar").css("background", formatColor(style.backgroundColor));
      $(".menu-container ul>li").css("background", formatColor(style.backgroundColor));

      $(".menu-container ul>li>a, .menu-container ul>li>a:active, .menu-container ul>li>a:visited")
        .css("color", formatColor(style.linkColor));

      $(".menu-container ul>li>a, .menu-container>a").hover(function() {
        $(this).css("color", formatColor(style.linkHoverColor));
      }, function() {
        $(this).css("color", formatColor(style.linkColor));
      });

  });
});

function formatColor(colorString) {
  return colorString.charAt(0) != "#" ? colorString : "" + colorString + "";
}
