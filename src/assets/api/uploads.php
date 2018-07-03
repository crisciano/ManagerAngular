<?php
	header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header('Access-Control-Allow-Origin: *');
	header('Cache-Control: max-age=900');
	header('Content-Type: application/json'); 
	// print_r($_FILES);

	function reorganizarArray(&$file_post) {

	    $file_ary = array();
	    $file_count = count($file_post['name']);
	    $file_keys = array_keys($file_post);

	    for ($i=0; $i<$file_count; $i++) {
	        foreach ($file_keys as $key) {
	            $file_ary[$i][$key] = $file_post[$key][$i];
	        }
	    }

	    return $file_ary;
	}
	function thumbnail(&$file){

		// O arquivo. Dependendo da configuração do PHP pode ser uma URL.
		$file_name = $file['name'];
		$file_size =$file['size'];
		$file_tmp = $file['tmp_name'];
		$file_type = $file['type'];
		$file_ext = strtolower(end(explode('.',$file['name'])));

		$newname = $file_name.'-thumbnail.'.$file_ext;

	   $filename = $newname;
	   //$filename = 'http://exemplo.com/original.jpg';

	   // Largura e altura máximos (máximo, pois como é proporcional, o resultado varia)
	   // No caso da pergunta, basta usar $_GET['width'] e $_GET['height'], ou só
	   // $_GET['width'] e adaptar a fórmula de proporção abaixo.
	   $width = 300;
	   $height = 300;

	   // Obtendo o tamanho original
	   list($width_orig, $height_orig) = getimagesize($filename);

	   // Calculando a proporção
	   $ratio_orig = $width_orig/$height_orig;

	   if ($width/$height > $ratio_orig) {
	      $width = $height*$ratio_orig;
	   } else {
	      $height = $width/$ratio_orig;
	   }

	   // O resize propriamente dito. Na verdade, estamos gerando uma nova imagem.
	   $image_p = imagecreatetruecolor($width, $height);
	   $image = imagecreatefromjpeg($filename);
	   imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

	   // Gerando a imagem de saída para ver no browser, qualidade 75%:
	   header('Content-Type: image/jpeg');
	   imagejpeg($image_p, null, 75);

	   // Ou, se preferir, Salvando a imagem em arquivo:
	   imagejpeg($image_p, $filename, 75);

	}

	function upload(&$file){
		$dir 		= '../upload/';
		$file_name 	= $file['name'];
		$file_tmp 	= $file['tmp_name'];

		if ( move_uploaded_file($file_tmp,$dir.$file_name) ) {
			print_r($file_count.' Arquivos enviados com sucesso...');
		}else{
			print_r('Erro ao enviar o arquivo');
		}
	}

	if(isset($_FILES['image'])){
		
		$file_ary = reorganizarArray($_FILES['image']);

	    foreach ($file_ary as $file) {
	        // print_r('File Name: ' . $file['name']);
	        // print_r('File Type: ' . $file['type']);
	        // print_r('File Size: ' . $file['size']);
	        $upload = upload($file);
	        // $th = thumbnail($file);
			// $file_name 	= $file['name'];
			// $file_tmp 	= $file['tmp_name'];

			// if ( move_uploaded_file($file_tmp,$dir.$file_name) ) {
			// 	print_r('Arquivo enviado com sucesso...');
			// }else{
			// 	print_r('Erro ao enviar o arquivo');
			// }

	    }
	}
?>
