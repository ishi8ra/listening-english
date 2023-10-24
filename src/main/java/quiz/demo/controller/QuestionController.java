package quiz.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import quiz.demo.model.Question;
import quiz.demo.repository.QuestionRepository;

@RestController
public class QuestionController {
  @Autowired
  private QuestionRepository questionRepository;

  @GetMapping("/api/questions/{id}")
  public Question getQuestion(@PathVariable Long id) {
    return questionRepository.findById(id).orElse(null);
  }

  @PostMapping("/api/answers/")
  public String submitAnswer(@RequestBody AnswerDto answerDto) {
    Question question = questionRepository.findById(answerDto.getQuestionId()).orElse(null);
    if (question != null && question.getCorrectAnswer().equals(answerDto.getUserAnswer())) {
      return "Correct";
    }
    return "Incorrect";
  }

}
