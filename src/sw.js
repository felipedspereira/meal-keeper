importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/estilos.css",
    "revision": "424fb16c09480a4ed1dbc7a91e70081c"
  },
  {
    "url": "css/simple-sidebar.css",
    "revision": "bf9ef6c09f60e9c52f02ca0bbfd62e92"
  },
  {
    "url": "images/almoco.jpg",
    "revision": "517785110443d55d8b558266dbe13d61"
  },
  {
    "url": "images/arroz.png",
    "revision": "1389960b5e85c49f11c22e889bc0f404"
  },
  {
    "url": "images/carne.png",
    "revision": "7a25e08eb4663fa8b54f1ce812f0b9cb"
  },
  {
    "url": "images/castanha.png",
    "revision": "b66cb935af38bdc9cf04058b621f8e66"
  },
  {
    "url": "images/colacao.jpg",
    "revision": "8e2fca95a7849fc7ca71fcf8dec350a6"
  },
  {
    "url": "images/desjejum.jpg",
    "revision": "4026d326c9ff69b0621083fa37205bee"
  },
  {
    "url": "images/emjejum.jpg",
    "revision": "425e4313090f70a11aebe77f91a87663"
  },
  {
    "url": "images/feijao.png",
    "revision": "accc71bee1309d7ead323e424ddde454"
  },
  {
    "url": "images/fruta.png",
    "revision": "5866b2ae77b336cf01ef143635036826"
  },
  {
    "url": "images/jantar.jpg",
    "revision": "7953265fdbb9cd4b4973ee33832f5add"
  },
  {
    "url": "images/lanche.jpg",
    "revision": "1f2e1441f528c0c62e8f5561f60550cd"
  },
  {
    "url": "images/leite.png",
    "revision": "b9c0201067504e3892470b199249d11b"
  },
  {
    "url": "images/pao.png",
    "revision": "4e9b4568cf1aaea76cb77defab9c95a4"
  },
  {
    "url": "images/vegetal.png",
    "revision": "1d5c56701c46dfa5ca6de4f95c96dfdb"
  },
  {
    "url": "index.html",
    "revision": "9b1035dc95708728a4e68130ede4e40e"
  },
  {
    "url": "js/controllers/produto-controller.js",
    "revision": "bf6d1505360d53abb8c96ce27e62f3e2"
  },
  {
    "url": "js/controllers/refeicao-controller.js",
    "revision": "ff1d7dcf5afc50f98e4e542de0ff07dc"
  },
  {
    "url": "js/libs/hammer.min.js",
    "revision": "15065981497259d972918a646ab771e0"
  },
  {
    "url": "js/services/message-service.js",
    "revision": "c5cd581c947501950264d927c026e006"
  },
  {
    "url": "js/services/produto-service.js",
    "revision": "8e661845282a4052e9d14c133e5f99fc"
  },
  {
    "url": "js/services/refeicao-service.js",
    "revision": "26bc3e82dd54338f0e36808161ab68b3"
  },
  {
    "url": "main.js",
    "revision": "165dc07d6a614ae9eeca0ebedbe17454"
  },
  {
    "url": "views/edit-produto.html",
    "revision": "1ca9de6e0696973179c1f032484eb997"
  },
  {
    "url": "views/footer.html",
    "revision": "0ea3721b73dbf7b5278c2f970b5a7e73"
  },
  {
    "url": "views/header.html",
    "revision": "bbdad22d063030404c923a03ff9091eb"
  },
  {
    "url": "views/teste.html",
    "revision": "307715282da86ab49cce2076701f5b0e"
  },
  {
    "url": "views/view-refeicao.html",
    "revision": "07bf8b9285d8711ba643c582e2c3f002"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
