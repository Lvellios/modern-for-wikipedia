//console.log("Background script running...");

try {
    // importScripts("helpers/countHelper.js", "helpers/networkHelper.js", "background/main.js");
    importScripts("jquery-3.7.1.min.js");
} catch (e) {
    console.log(e);
}

// listen for messages
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse)
	{
        if (request.action == "")
		{

        }
    }
);

