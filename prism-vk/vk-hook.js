(function() {
    "use strict";

    //Event listeners script
    var hook = document.createElement('script');
    hook.src = chrome.extension.getURL('vk-prism.js');

    //Prism.js is an awesome code highlighter
    var prism = document.createElement('script');
    prism.src = chrome.extension.getURL('prism-dev.js');

    //Insert this shit
    document.getElementsByTagName('body')[0].appendChild(prism);
    document.getElementsByTagName('body')[0].appendChild(hook);

    //Prism stylesheet
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('prism.css');
    
    //Yep
    (document.head||document.documentElement).appendChild(style);

})();