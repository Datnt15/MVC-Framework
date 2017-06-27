<?php 
abstract class Controller
{
	protected $request;
	protected $action;
	private $data;

	public function __construct($action, $request)
	{
		$this->action = $action;
		$this->request = $request;
		
	}

	public function executeAction(){
		return $this->{$this->action}();
	}

	protected function returnView($view_model, $full_view){
		$view = 'views/' . get_class($this) . '/' . $this->action . '.php';
		if ($full_view) {
			require('views/main.php');
		}else{
			require($view);
		}
	}

   	public function __get($varName){

      	if (!array_key_exists($varName,$this->data)){
          	//this attribute is not defined!
          	throw new Exception();
      	}
      	else return $this->data[$varName];

   	}

   	// public function __set($varName,$value){
    //   	$this->data[$varName] = $value;
   	// }

   	public function load_model($model){
   		if (file_exists("models/" . $model . ".php")) {
   			require "models/" . $model . ".php";
   			if(class_exists($model)){
   				$this->data[$model] = new $model();
   			}else{
   				echo "Model class " . $model . " does not existed";
   				return;
   			}
   		}else{
   			echo "Model " . $model . " does not existed";
   			return;
   		}
   	}

}



 ?>