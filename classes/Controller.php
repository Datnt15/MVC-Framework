<?php 
abstract class Controller{
  	private $data;

  	public function __construct(){
  		
  	}

   	public function __get($varName){
      	if (!array_key_exists($varName,$this->data)){
          	//this attribute is not defined!
          	throw new Exception();
      	}
      	else return $this->data[$varName];
   	}

    /**
     * load model và tự tạo biến mới
     * @param  [string] $model [tên model]
     * @return [object]        [null hoặc model]
     */
   	public function load_model($model){
        // Kiểm tra file có tồn tại hay không
     		if (file_exists("models/" . $model . ".php")) {
            // include file 
       			require "models/" . $model . ".php";
            // Kiểm tra xem class model có tồn tại hay không
       			if(class_exists($model)){
                // Tạo biến mới
       				  $this->data[$model] = new $model();
       			}else{
                // Thông báo khi không tìm thấy class
     				    echo "Model class " . $model . " does not existed";
     				    return;
     			  }
   		  }else{
   			    echo "Model " . $model . " does not existed";
   			    return;
   		  }
   	}

    /**
     * Load view trên controller, biến sử dụng bên dạng $ + index của mảng
     * Ex: Controller: $data['title'] = "Page title";
     *     View: echo $title
     * @param  [string] $view  [tên view]
     * @param  array  $param [mảng chứa các biến truyền vào view]
     * @return [null]        [nếu không tìm thấy file sẽ trả về null]
     */
    public function load_view($view, $param = array()){
        if (file_exists("views/" . $view . ".php")) {
            if (!is_array($param)) {
                $param = is_object($param) ? get_object_vars($param) : array();
            }
            extract($param);
            // include file 
            include_once "views/" . $view . ".php";
        }else{
            echo "View " . $view . " does not existed";
            return;
        }
    }
}



?>