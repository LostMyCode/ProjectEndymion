# Project-Endymion
**HSLO Endymion Development**  
This is an unofficial HSLO project after 2CL (HSLO Creator) leave.

## Preview
![HSLO Endymion Showcase](https://i.imgur.com/yFSFw8u.jpg)

**Key features:**
- Fullmap (viewport assist)
- Rainbow border
- Eat effect
- Maou circle
- Agar.io bots (4 labels)
- and more...

## Install
```
yarn install
```
or you can run `npm install`

## Development
```
yarn watch
```
or you can run `npm run watch`  
You need to open HSLO in Agar.io even in debug mode.

### Local server
Use visual studio code extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/576748/012fb604-d69f-c048-44e7-aea616e4c387.png)

Install `Live Server` extension then you can run local web server by one click.

### Userscript for Development
```javascript
// ==UserScript==
// @name         HSLO Endymion (Debug)
// @description  HSLO Endymion The Ultimate Multiboxing Experience
// @match        *://agar.io/*
// @author       test114514
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @version      1.0.2
// @connect      localhost
// ==/UserScript==

if (location.host === "agar.io" && location.pathname === "/") {
    window.stop();
    location.href = "https://agar.io/hslodev" + location.hash;
    return;
}

GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://localhost:5500/dist/index.html?v=' + Math.random(),
    onload: function(data) {
        document.open();
        document.write(data.responseText);
        document.close();
    }
});
```

## Build [PROD]
```
yarn build
```
Userscript: https://hslo.sigr.io/userscript.js  
Replace URL in userscript to yours if you host HSLO yourself.
