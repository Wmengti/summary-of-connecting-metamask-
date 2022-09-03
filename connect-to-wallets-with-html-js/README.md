## use to two way connecting metamask

### 1. use text/javascript by Nodejs

/bulid-bundle-to-html

#### Dependencies

`browserify`,`ethers`

#### Run

```
yarn
yarn build
open index.html or
yarn add http-server
yarn http-server
open http://127.0.0.1:8080
```

#### code tips

```
 <body>
    <button id="connectButton" onClick="bundle.connect()">Connect</button>
    <button id="mintButton" onClick="bundle.mint()">freemint</button>
  </body>
  <script src="./dist/bundle.js" type="text/javascript"></script>
```

- When using the code below,`connect` can work ,but `freemint` show that _index.js:23 Uncaught (in promise) ReferenceError: Cannot access 'ethers' before initialization_
  using yarn build=>bundle.js can in advance load the code of ethers

```
<body>
    <button id="connectButton" onClick="connect()">Connect</button>
    <button id="mintButton" onClick="mint()">freemint</button>
  </body>
  <script src="./index.js" type="text/javascript"></script>
```

### 2. use modele by ES6

/use-index-with-web-ethers

```
 <body>
    <script src="./index.js" type="module"></script>
    <button id="connectButton" ">Connect</button>
    <button id="mintButton" ">freemint</button>
  </body>
```

there can't use `onclick="index.connect"`,it show `index is not defined`.

```
const connectButton = document.getElementById('connectButton');
const mintButton = document.getElementById('mintButton');
connectButton.onclick = connect;
mintButton.onclick = mint;
```

add this word in ./index.js can work
