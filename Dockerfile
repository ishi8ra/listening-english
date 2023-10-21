# ビルドステージ
FROM maven:3.8.1-jdk-17 AS build
WORKDIR /workspace/app
COPY . .
RUN mvn clean package

# 実行ステージ
FROM openjdk:17-jdk-slim
COPY --from=build /workspace/app/target/demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]