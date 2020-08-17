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

###Local server
Use visual studio code extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/576748/012fb604-d69f-c048-44e7-aea616e4c387.png)

Install `Live Server` extension then you can run local web server by one click.

###Userscript for Development
```javascript
// ==UserScript==
// @name         HSLO Endymion (Debug)
// @description  HSLO Endymion The Ultimate Multiboxing Experience
// @version      1.0
// @author       test114514
// @match        *://agar.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

if (location.host === 'agar.io' && location.href !== 'https://agar.io/hslodev') {
  location.href = 'https://agar.io/hslodev';
  return;
}

const HSLO = new class {
  constructor() {
    this.method = 'GET';
    this.URL = "http://localhost:5500/dist/";
    this.HTML = ``;
    this.date = Date.now();
  }

  load() {
    this.setMessage();
    this.fetch();
  }

  setMessage() {
    document.body.innerHTML = "LOADING...";
  }

  fetch() {
    const request = new XMLHttpRequest();
    request.open(this.method, this.URL + "?date=" + this.date, true);
    request.onload = () => {
      this.HTML = request.responseText;
      this.write();
    };
    request.onerror = () => {
      document.body.innerHTML = "<div style='width: 100%; text-align: center; font-size: 24px; font-family: sans-serif;'>Failed to fetch HSLO files.</div>";
    }
    request.send();
  }
    replace(hello) {
        return hello;
    }

  write() {
    document.open();
    document.write(this.replace(this.HTML));
    document.close();
  }
}
HSLO.load();
```

## Build [PROD]
```
yarn build
```
Userscript: https://hslo.sigr.io/userscript.js  
Replace URL in userscript to yours if you host HSLO yourself.
