var api = 'http://127.0.0.1:11898';
var donationAddress = "";
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'trtl';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
  "trtl": [
    ["auspool.turtleco.in", "https://auspool.turtleco.in/api"],
    ["cryptoknight.cc/turtle", "https://blocks.turtle.link/pool/cryptoknight.cc/turtle"],
    ["etnchina.io/trtl", "https://blocks.turtle.link/pool/etnchina.io"],
    ["eu.turtlepool.space", "https://eu.turtlepool.space/api"],
    ["hk.turtlepool.space", "https://hk.turtlepool.space/api"],
    ["mine.tortugamor.cf", "https://tortugamor.cf:8117/"],
    ["ny.minetrtl.us", "https://blocks.turtle.link/pool/ny.minetrtl.us"],
    ["pool.turtleco.in", "https://us.turtlepool.space/api/"],
    ["slowandsteady.fun", "https://blocks.turtle.link/pool/slowandsteady.fun"],
    ["trtl.blockchainera.net", "https://blocks.turtle.link/pool/trtl.blockchainera.net"],
    ["trtl.cryptopool.space", "https://trtl.cryptopool.space/api/"],
    ["trtl.flashpool.club", "https://api.trtl.flashpool.club"],
    ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
    ["trtl.ninja", "https://trtl.ninja/api"],
    ["trtl.unipool.pro", "https://pool.turtlecoin.fr:8117"],
    ["turtle.atpool.party", "https://blocks.turtle.link/pool/turtle-eu.atpool.party"],
    ["turtle.coolmining.club", "https://turtle.coolmining.club"],
    ["turtle.mining.garden", "https://turtle.mining.garden:8117"],
    ["turtle.spacepools.org", "https://turtle.spacepools.org/api/"],
    ["turtlecoinpool.ml", "https://turtlecoinpool.ml:8443"],
    ["turtlepower.challengecoin.io", "https://blocks.turtle.link/pool/turtlepower.challengecoin.io"],
    ["us.turtlepool.space", "https://us.turtlepool.space/api"],
    ["z-pool.com", "https://z-pool.com/api"],
  ]
};

var networkStat2 = {
  "trtl": [
    ["trtl.semipool.com", "https://trtl-api.semipool.com"],
    ["turtle.bathmatminingpools.com", "https://api.turtle.bathmatminingpools.com/api"],
  ]
};
