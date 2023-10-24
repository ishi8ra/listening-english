package quiz.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import quiz.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
  // カスタムクエリメソッドもここに追加できます
}
