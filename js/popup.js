var j = jQuery.noConflict();
j(window).load(function(){

  j("#overlay").hide();

  chrome.tabs.getSelected(null, function(tab) {
    tabUrl = tab.url;
    j("#Qrl").qrcode({
      width: 300,
      height: 300,
      color: '#000',
      text: tabUrl
    });
    j("#Qrl").animate( { "opacity": "hide",height: 'toggle'} , 200 );
  });

});