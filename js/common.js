$(document).ready(function() {

    initGA4();

    $.get("common", function(data) {
        console.log("Content loaded successfully:", data);
        $(".Nav").replaceWith($(data).filter(".fixed-navbar"));
        $(".Footer").replaceWith($(data).filter(".contact"));
    }).fail(function(xhr, status, error) {
        console.log("Error loading common.html:", error);
    });

});

function arrayContainsArray(superset, subset) {
    return subset.every(function(value) {
        return (superset.indexOf(value) >= 0);
    });
}

function initGA4() {
  const GA_ID = "G-EHSZYMDK3M";

  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID, { send_page_view: true });
}
