<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'http://35.225.19.119:11898/getinfo');
$result = curl_exec($ch);
$obj = json_decode($result, TRUE);
curl_close($ch);
$difficulty = $obj['difficulty'];
$hashrate = round($difficulty / 240);
print_r($hashrate);
?>
