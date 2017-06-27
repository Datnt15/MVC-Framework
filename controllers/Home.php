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

	public function index(){
		$this->load_model("home_model");
		// $this->home_model->index();
		$title = "Home Page";
		$this->load_view('home', $title);

		// echo "index of home controller";
	}
}


 ?>