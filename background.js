/*var previous = document.getElementsByClassName("control-button spoticon-skip-back-16");
var pause = document.getElementsByClassName("control-button spoticon-pause-16 control-button--circled");
var skip = document.getElementsByClassName("control-button spoticon-skip-forward-16");
*/


// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({url: "https://open.spotify.com/*"}, function(results) {
        if (results.length == 0) {
            chrome.tabs.create({url: 'https://open.spotify.com/'})
        } else{
            chrome.tabs.move(0, -1);
        }
    });
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({url: "https://open.spotify.com/*"}, function(returned_tab) {
        //alert(String(returned_tab[0].pinned))
        if(command === "skip_song") {
            chrome.tabs.executeScript(returned_tab[0].id, {code:"document.getElementsByClassName('control-button spoticon-skip-forward-16')[0].click()"})
        } else if (command == "prev_song"){
            chrome.tabs.executeScript(returned_tab[0].id, {code:"document.getElementsByClassName('control-button spoticon-skip-back-16')[0].click()"})
        } else if (command == "pause/play") {
            if(returned_tab[0].audible) {
                chrome.tabs.executeScript(returned_tab[0].id, {code: "document.getElementsByClassName('control-button spoticon-pause-16')[0].click()"});
            } else {
                chrome.tabs.executeScript(returned_tab[0].id, {code: "document.getElementsByClassName('control-button spoticon-play-16')[0].click()"});
            }
        } else if (command == "add_song"){
            chrome.tabs.executeScript(returned_tab[0].id, {code:"document.getElementsByClassName('control-button spoticon-add-16')[0].click()"});
        }

});

  });
