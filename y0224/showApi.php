<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>

    <form action="./getApi.php" id="myForm">
    <!-- <form action="http://192.168.211.61/class_kai/y0224/getApi.php" id="myForm"> -->
    <!-- <form action="http://localhost/class_kai/y0224/getApi.php" id="myForm"> -->

    </form>


    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center">cors get data</h3>
            </div>
            <div class="col-12 mt-3">
                <button id="myBtn" type="button" class="btn btn-success btn-sm btn-block">Get Data</button>
            </div>
        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous">
    </script>

    <script>
    $(document).ready(function() {
        // alert('12345');
        $('#myBtn').click(function(e) {
            // alert('myBtn');
            // var form = $('#myForm');
            // var fomrAction = form.attr('action');
            // console.log('formAction',fomrAction);

            // console.log('myBtn');
            // var url = form.attr('action');
            // var url = 'https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json?page=0&size=100';
           
            // var url = 'http://192.168.211.61/class_kai/y0224/getApi.php';
            // var url = 'http://localhost/class_kai/y0224/getApi.php';
            var url = './getApi.php';

            $.ajax({
                type: "post",
                url: url,
                dataType  : 'json',
                success: function(data) {
                    console.log(typeof(data));
                    console.log(data);
                }

            });
        });


    });
    </script>
</body>

</html>