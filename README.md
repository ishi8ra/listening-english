# どんなサービスか
ディクテーションをやりやすくするアプリ。

ディクテーションとは、聞き取った英文を文字に書き起こす、というリスニング勉強方法の一つ。

# 既に実装した機能
1. 回答履歴を表示して、回答ごとの差分を強調する機能

# サービスの使い方
1. `git clone https://github.com/ishihara-plasticity/listening-english.git`
2. `cd listening-english`
3. `docker build -t listening-english:latest .`
4. docker-compose up
5. ブラウザでhttp://localhost:8080/quiz にアクセス
6. 英語を再生
7. 聞き取った英文を回答記入欄にタイプ
8. 回答送信ボタンをクリック

# 今後実装する機能
1. 正誤判定の機能
2. 細かいスペルが合ってなくても、聞き取れてたら正解として認識する機能
3. ユーザーのCRUD機能
4. データベースの導入
5. 発音記号でディクテーションをする機能s

# 開発環境など
- MacOS Monterey
- Java (SpringBoot)
- JavaScript
- Docker

# 似たサービス例
[Speechiling](https://speechling.com/jp/dictation/english)が、イメージに近い

##### 似てるポイント
- 部分的に正解してる場合、それを示してくれる。
- また、不正解の部分は、ヒントとして、単語数だけを示してくれる。

#### 異なるポイント
- 回答履歴の表示機能の有無
