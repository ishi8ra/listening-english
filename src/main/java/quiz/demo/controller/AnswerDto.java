package quiz.demo.controller; // パッケージ名を修正

import quiz.demo.model.Question; // Question クラスをインポート
import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository をインポート

public class AnswerDto {

  private Long questionId;
  private Object userAnswer;

  public Long getQuestionId() {
    return questionId;
  }

  public void setQuestionId(Long questionId) {
    this.questionId = questionId;
  }

  public Object getUserAnswer() {
    return userAnswer;
  }

  public void setUserAnswer(Object userAnswer) {
    this.userAnswer = userAnswer;
  }
}