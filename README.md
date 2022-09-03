# summary-of-connecting-wallet

There is an object in every browser called the window object. Metamask is called `window.ethereum` as a provider to connect blockchain. It is RPC URL from Alchemy,Infura, or Moralis Speedy Nodes in blockchain applications,which give an HTTP endpoint to send requests to a blockchain node. These are all "node-as-a-service" providers.The same happens with cryptocurrency wallets, metamasks have a connection to a blockchain node built-in.
Go through 6 different ways to connect Metamask, Phantom, or other blockchain wallet address in front end with Nextjs or React packages.

## 1. Connecting to a Cryptocurrency Wallet with HTML and JavaScript

### use to two way connecting metamask

#### - use text/javascript by Nodejs

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

When using the code below,`connect` can work ,but `freemint` show that _index.js:23 Uncaught (in promise) ReferenceError: Cannot access 'ethers' before initialization_
using yarn build=>bundle.js can in advance load the code of ethers

```
<body>
    <button id="connectButton" onClick="connect()">Connect</button>
    <button id="mintButton" onClick="mint()">freemint</button>
  </body>
  <script src="./index.js" type="text/javascript"></script>
```

### - use modele by ES6

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
