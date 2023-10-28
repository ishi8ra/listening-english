package quiz.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.ui.Model;
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

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @GetMapping("/index")
  public String index(Model model) {
    String sql = "SELECT * FROM test_table";
    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    model.addAttribute("testList", list);
    return "index";
  }
}