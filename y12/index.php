<?php
    $myArr = ['1,2,3,4,5'];
    for ($i=0; $i < $myArr.count() ; $i++) { 
        // $myArr.count()       # code...
    }

    foreach ($myArr as $key => $value) {
        $str += "myArr[$key] => $value";
    }

?>