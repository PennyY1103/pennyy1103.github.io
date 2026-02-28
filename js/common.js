$(document).ready(function() {

    initGTM();

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

function initGTM() {
  const GTM_ID = "GTM-NMDC5OHX";

  if (window.dataLayer) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}