package com.example.Login1.Reeepository;

import com.example.Login1.Model.Signupmodel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Signuprepository extends JpaRepository<Signupmodel,Long> {
    Signupmodel findByusername(String user);
}
