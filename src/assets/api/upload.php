<?php
	header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header('Access-Control-Allow-Origin: *');
	header('Cache-Control: max-age=900');
	header('Content-Type: application/json'); 
	print_r($_FILES);

	if(isset($_FILES['image'])){
	  $errors= array();
	  $dir = '../upload/';
	  $file_name = $_FILES['image']['name'];
	  $file_size =$_FILES['image']['size'];
	  $file_tmp = $_FILES['image']['tmp_name'];
	  $file_type = $_FILES['image']['type'];
	  $file_ext = strtolower(end(explode('.',$_FILES['image']['name'])));

	  $new_file_name = date('YmdHis').'.'.$file_ext;
	  
	  $expensions= array("jpeg","jpg","png");
	  
	  if(in_array($file_ext,$expensions)=== false){
	     $errors[]="Extension não permitida, please choose a JPEG or PNG file.";
	  }
	  
	  if($file_size > 2097152){
	     $errors[]='Arquivo maior que 2 MB';
	  }
	  
	  if(empty($errors)==true){
	  	// move o arquivo com outro nome para a base
	    move_uploaded_file($file_tmp,$dir.$new_file_name);
	    return true;
	    echo "//// ==================== ////";
	    // print_r($_FILES);
	  }else{ print_r($errors); }
	}
?>
