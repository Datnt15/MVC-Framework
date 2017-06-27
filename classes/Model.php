<?php 

abstract class Model{
	protected $db;
	protected $stmt;

	public function __construct()
	{
		$this->db = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
	}
}

?>