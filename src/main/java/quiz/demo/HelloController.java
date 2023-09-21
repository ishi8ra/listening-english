package quiz.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

  private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

  @GetMapping("/quiz")
  public String quiz() {

    return "quiz";
  }
}