package com.Jong.Pilot.Controller;

import com.Jong.Pilot.Entity.User;
import com.Jong.Pilot.UserService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public String userPage(Model model){
        List<User> ListEveryUser =  userService.findEveryUser();
        model.addAttribute("ListEveryUser",ListEveryUser);

        return "UserPage";
    }

    @GetMapping("/CreateForm")
    public String CreateUser(Model model){
        User user = new User();
        model.addAttribute("user",user);
        return "CreateUserPage";
    }

    @PostMapping("/users/save")
    public String SaveUser(User user){
        System.out.println(user);
        return "redirect:/users";

    }


}
