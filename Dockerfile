# ベースとなるイメージを指定
FROM openjdk:11-jdk-slim

# アプリケーションが使用するポートを指定
EXPOSE 8080

# JARファイルをコピー
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# コマンドラインで実行するコマンドを指定
ENTRYPOINT ["java","-jar","/app.jar"]
