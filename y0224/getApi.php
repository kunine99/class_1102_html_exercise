<?php 
    include './common/commonFun.php';
?>

<?php

//init curl
$ch = curl_init();
//curl_setopt可以設定curl參數
//設定url
curl_setopt($ch , CURLOPT_URL , "https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json?page=0&size=5");
// CURLOPT_RETURNTRANSFER, curl_exe 才可以顯示
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//設定AGENT
// curl_setopt($ch, CURLOPT_USERAGENT, "Google Bot");
//執行，並將結果存回
$result = curl_exec($ch);
//關閉連線
curl_close($ch);

// echo $result;

// echo json_encode($result);
echo $result;

//json
// $result obj
// json
// echo $result
// ajax dataType json

//string
// echo json_decode($result);
// ajax dataType xxxx


// echo '123';

?>