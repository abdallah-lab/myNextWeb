<style>

	marquee{
		margin: 0px;
		position: fixed;
		background: rgba(251,251,216,0.98);
		color: rgba(101,103,138,1.00);
		bottom:20px;
		font-size: 28px;
		height: 40px;
		width: 100%;
		border:1px solid rgba(211,192,8,1.00);
		border-width: 1px 0px 1px 0px;
		}
	
	marquee::after {
    content: "";
    clear: both;
    display: table;
	
}
	
</style>
		


<?php	
class queueEntry{
	public $talk_about;

	}
	$query = $handler->query('SELECT * FROM queue ORDER BY id  DESC');
	$query->setFetchMode(PDO::FETCH_CLASS,'queueEntry');
	
	?>


<br>
<marquee scrollamount="10">
	<?php
	while($r=$query->fetch()){
	echo " Talk about: ";
	echo $r->talk_about;
	echo "&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;";
	echo "<img style='height: 24px;' src='_image/icon.png'/>";
	echo "&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;";
	}
	?>
	
</marquee>
	
	
	