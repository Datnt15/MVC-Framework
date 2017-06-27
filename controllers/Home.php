<?php 
/**
* 		
*/
class Home extends Controller
{
	
	// function __construct()
	// {
	// 	parent::__construct();
	// }

	protected function index(){
		$this->load_model("home_model");
		$this->home_model->index();
		// echo "index of home controller";
	}
}


 ?>