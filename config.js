var api = 'http://45.32.232.11:32348';
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'TRTL';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "trtl": [
        ["eu.turtlepool.space", "http://eu.turtlepool.space:8117"],
        ["us.turtlepool.space", "http://us.turtlepool.space:8117"],
        ["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
        ["turtlecoinpool.ddns.net", "https://api.turtleco.in/turtlecoinpool.ddns.net"],
        ["slowandsteady.fun", "http://slowandsteady.fun:8119"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        ["pool.turtleco.in", "https://pool.turtleco.in/api"],
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api/"],
        ["trtl.radicaldelta.org", "https://api.turtleco.in/trtl.radicaldelta.org"],
        ["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"],
        ["ny.minetrtl.us", "https://api.turtleco.in/ny.minetrtl.us"],
        ["z-pool.com", "http://z-pool.com:8117"],
        ["xk.is", "https://xk.is/api"]
    ]	
};

var networkStat2 = {
    "trtl": [
		[]
		]
};
