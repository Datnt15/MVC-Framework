<?php
// Include Config
require('config.php');

require('classes/Bootstrap.php');
require('classes/Controller.php');
// require('controllers/Home.php');

$bootstrap = new Bootstrap($_GET);
$bootstrap->createController();
