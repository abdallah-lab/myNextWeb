<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<link rel="icon" href="_image/icon.png" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="_css/main.css">
<link rel="stylesheet" type="text/css" href="_css/navbar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<title>Home</title>


</head>

<body>

<?php include('_asset/header.php') ?>

<?php $page = 'Home'; include('_asset/navbar.php') ?>

<!--Home content-->
<div style="height:50px"></div>
<div id="top_w"><img style="max-width:100%;" src="_image/buttom.png" ></div>
<div style="height:110px"></div>
<div id="down" style="width:35px;margin:auto; color:rgba(231,224,16,1.00)"><i class="fa fa-3x fa-angle-down"></i></div>
<div style="height:250px"></div>
<div id="top_w"><img style="max-width:100%;" src="_image/top.png" ></div>
<div id="b_title"><span>Strategic HIS Manager</span></div>
<div id="top_wl"><img style="max-width:100%;" src="_image/linee.png"  ></div>
<div id="describe"><span>if you need to promote your business you must Contact Me, your job will advance in a great strides</span></div>
<div id="bottom_w"><img style="max-width:100%;"  src="_image/buttom.png" ></div>
<div style="height:350px"></div>


<?php include('_DataBaseConnection/Connect.php'); ?>	

<?php include('_asset/marquee.php') ?>

<?php include('_asset/footer.php') ?>

<script>
$(document).ready(function(){
  $(window).scroll(function() {
	   if ($(document).scrollTop() > 300) {
		 $("#down").hide();  }
	else{
		$("#down").show();
	}
  });
});


</script>

</body>
</html>