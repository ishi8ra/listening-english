package quiz.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
  @GetMapping("/quiz")
  public String quiz() {
    return "quiz";
  }
}