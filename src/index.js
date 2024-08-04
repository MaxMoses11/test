import "./styles/index.scss";

var GeminiScrollbar = require('gemini-scrollbar')

var myScrollbar = new GeminiScrollbar({
    element: document.querySelector('.main-blub-content')
}).create();