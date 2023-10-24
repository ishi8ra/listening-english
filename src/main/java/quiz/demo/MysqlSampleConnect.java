package quiz.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MysqlSampleConnect {
  public static void main(String[] args) throws SQLException {
    Connection con = DriverManager.getConnection(
        "jdbc:mysql://localhost/<データベース名>?useSSL=false",
        "root",
        "<パスワード>");
    PreparedStatement pstmt = con.prepareStatement("select * from users");
    ResultSet rs = pstmt.executeQuery();
    while (rs.next()) {
      System.out.println(rs.getString("name"));
      System.out.println(rs.getInt("address"));
    }
    rs.close();
    pstmt.close();
    con.close();
  }
}
