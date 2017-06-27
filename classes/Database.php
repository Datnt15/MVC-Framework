<?php

/**
 *
 */
class Database
{
  private $host   = "localhost";
  private $user   = "root";
  private $pass   = "";
  private $dbname = "blog_share";
  private $db;
  private $errors;
  private $stmt;

  public function __construct()
  {
    // Set DSN
    $dsn = 'mysql:host='.$this->host.';dbname='.$this->dbname;
    $options = array(
      PDO::ATTR_PERSISTENT  => true,
      PDO::ATTR_ERRMODE     => PDO::ERRMODE_EXCEPTION
    );
    try {
      $this->db = new PDO($dsn, $this->user, $this->pass, $options);
    }
    catch (PDOException $e) {
      $this->errors = $e->getMessage();
    }
    if($this->errors != null){
      die($this->errors);
    }
  }

  public function query($query){
    $this->stmt = $this->db->prepare($query);
  }

  public function bind($param, $value, $type = null){
    if (is_null($type)) {
      switch (true) {

        case is_int($value):
          $type = PDO::PARAM_INT;
          break;
        case is_bool($value):
          $type = PDO::PARAM_BOOL;
          break;
        case is_null($value):
          $type = PDO::PARAM_NULL;
          break;
        default:
          $type = PDO::PARAM_STR;
          break;
      }
    }

    $this->stmt->bindValue($param, $value, $type);
  }

  public function execute(){
    return $this->stmt->execute();
  }

  public function last_inserted_id(){
    return $this->db->lastInsertId();
  }

  public function result_set(){
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}

 ?>
