package quiz.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class User {
  @Id
  private Long id;

  @Column(name = "username")
  private String username;

  // getters and setters
}