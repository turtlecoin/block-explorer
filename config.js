var api = 'PUT_YOUR_DAEMON_IP_HERE';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'TRTL';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "trtl": [
        ["slowandsteady.fun", "http://slowandsteady.fun:8119"],
        ["eu.turtlepool.space", "http://eu.turtlepool.space:8117"],
        ["us.turtlepool.space", "http://us.turtlepool.space:8117"],
        ["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
        ["pool.turtleco.in", "https://pool.turtleco.in/api"],
        ["pool.cowabungadu.de", "http://pool.cowabungadu.de:8117"],
        ["turtle-eu.atpool.party", "http://turtle-eu.atpool.party:8117"],
        ["xk.is", "https://xk.is/api"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        ["turtlecoinpool.ddns.net", "http://turtlecoinpool.ddns.net:8127"]
    ]
};

var networkStat2 = {
    "trtl": [
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api/"]
    ]
};
