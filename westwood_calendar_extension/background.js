chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.extension.window.create('popup.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});
