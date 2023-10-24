package quiz.demo.repository; // パッケージ名を修正

import quiz.demo.model.Question; // Question クラスをインポート
import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository をインポート

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
