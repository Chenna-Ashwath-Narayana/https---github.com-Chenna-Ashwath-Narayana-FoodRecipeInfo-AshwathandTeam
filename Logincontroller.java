package com.example.Login1.Controller;

import com.example.Login1.Model.Signupmodel;
import com.example.Login1.Reeepository.Signuprepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class Logincontroller {
    @Autowired
    Signuprepository r;
    @PostMapping("/checkdata/{username}/{password}")
    public String checkdata(@PathVariable String username, @PathVariable String password){
        Signupmodel s=r.findByusername(username);
        if(s==null){
            return  "Username not found";
        }
        else{
            if(s.getPassword().equals(password)){
                return "Success";
            }
            else{
                return "Invalid passworrd";
            }
        }
    }

}
