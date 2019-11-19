$(document).ready(function initSubmit() {
  var $submitBtn = $('#submit-btn');
  setTimeout(function() {
    $submitBtn.attr('href', $submitBtn.data('link'))
  }
              , 500);
  $submitBtn.click(function() {
    openInNewTab($('#second-offer').attr('href'));
  }
                   );
}
                  )();
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
