<?php
// header("Access-Control-Allow-Origin");
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Origin: http://localhost");
// include "./common/commonFun.php";
?>


<?php
$input = $_POST;
// $input = $_GET;
//dd($input);
echo json_encode($input); 


?>