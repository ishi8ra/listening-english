package quiz.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import quiz.demo.model.Question;
import quiz.demo.repository.QuestionRepository;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

  @Autowired
  private QuestionRepository questionRepository;

  @GetMapping("/{id}")
  public Question getQuestion(@PathVariable Long id) {
    return questionRepository.findById(id).orElse(null);
  }
}
