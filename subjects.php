<?php
	
	$conn = new mysqli('localhost', 'root', '', 'mintatanterv');
	
	$result = $conn->query('SELECT * FROM subjects ORDER BY name');
	$arr =[];
	while($row = $result->fetch_assoc())
	{
		$arr[$row['code']] = $row;
	}
		
	if($json = json_encode($arr, JSON_UNESCAPED_UNICODE)) echo $json;
	else echo '{"success" : false}';
	
?>
