package com.example.Login1.Controller;


import com.example.Login1.Model.Signupmodel;
import com.example.Login1.Reeepository.Signuprepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class Signupcontroller {
    @Autowired
    Signuprepository repo;
    @PostMapping("/postdata")
    public String savelog(@RequestBody Signupmodel s){
        String user=s.getUsername();
        Signupmodel s1=repo.findByusername(user);
        if (s1==null){
            repo.save(s);
            return "added";
        }
        else{
            return "Exist user";
        }
    }
}
