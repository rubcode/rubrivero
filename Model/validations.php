<?php 
    class validations{
        
        public function validEmail($email){
            $flag = FALSE;
            if($this->validSQLInjection($email)){
                if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $flag = TRUE;
                }
            }
            return $flag;

        }

        public function validPhoneNumber($phone){
            $flag = FALSE;
            if($this->validSQLInjection($phone)){
                if(is_numeric($phone)){
                    if(strlen($phone) == 10){
                        $flag = TRUE;
                    }
                }
            }
            return $flag;
        }

        public function validSQLInjection($field){
            $characters = array(";","&","#","'");
            $flag = TRUE;
            for ($i=0; $i < count($characters) ; $i++) { 
                if(strpos($field,$characters[$i]) !== FALSE){
                    $flag = FALSE;
                    break;
                }
            }
            return $flag;
        }
    }
    


?>