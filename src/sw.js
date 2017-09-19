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
    "revision": "d4c0f55d6580df1eed3803b3ade164f6"
  },
  {
    "url": "css/simple-sidebar.css",
    "revision": "0d79864bb4ee92f367216c0a878ae8a1"
  },
  {
    "url": "images/almoco.png",
    "revision": "a1d49377eb14882d90a002418f66fdc0"
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
    "url": "images/colacao.png",
    "revision": "dcfb009dcd8572b21a0ea20bb2c707b5"
  },
  {
    "url": "images/desjejum.png",
    "revision": "a653ddf30f2f5b2947da1234cf25c2c9"
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
    "url": "images/jantar.png",
    "revision": "aaf40a3364554965612a62b105158f2c"
  },
  {
    "url": "images/lanche.png",
    "revision": "15ff92e0d7b472272a3fac1d9fa20b77"
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
    "revision": "79e657e8b8a304333e0fe4d8deddbaed"
  },
  {
    "url": "js/controllers/produto-controller.js",
    "revision": "304c9d9bf7c48ed2f2c342a52ed9a5ba"
  },
  {
    "url": "js/controllers/refeicao-controller.js",
    "revision": "b129201473fd9f8a4bc3bb2a68b73acd"
  },
  {
    "url": "js/libs/hammer.min.js",
    "revision": "15065981497259d972918a646ab771e0"
  },
  {
    "url": "js/services/message-service.js",
    "revision": "07ab064effb14d5a0f4cd2151ba55fb7"
  },
  {
    "url": "js/services/persistence-service.js",
    "revision": "ad7a81d49d2db231fc75c2f848b7e031"
  },
  {
    "url": "js/services/produto-service.js",
    "revision": "421604d946843785b05ddc1430475e45"
  },
  {
    "url": "js/services/refeicao-service.js",
    "revision": "18e07812c67f2a50b39fe96119da6346"
  },
  {
    "url": "main.js",
    "revision": "9afea9ea134fb57b2e663813a3b5b4ec"
  },
  {
    "url": "views/edit-produto.html",
    "revision": "1157d16868dfb9634edc84be1644e71a"
  },
  {
    "url": "views/footer.html",
    "revision": "78c1d34494f3c44aeff046d2cbaca903"
  },
  {
    "url": "views/header.html",
    "revision": "a28b2f38a2f3da41ea37edd71a80da4b"
  },
  {
    "url": "views/refeicoes.html",
    "revision": "f12c11b6298c21779c30465f22f923a0"
  },
  {
    "url": "views/teste.html",
    "revision": "307715282da86ab49cce2076701f5b0e"
  },
  {
    "url": "views/view-refeicao.html",
    "revision": "6e830978c3216787d3aae219a50926d1"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
