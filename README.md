# サービス名
パーフェクトディクテーション

# どんなサービスか
ディクテーションをやりやすくするアプリ。

ディクテーションとは、聞き取った英文を文字に書き起こす、というリスニング勉強方法の一つ。

# 主な機能
1. 回答履歴を表示する機能
2. 細かいスペルが合ってなくても、聞き取れてたら正解として認識する機能

# サービスの使い方
1. `git clone https://github.com/ishihara-plasticity/listening-english.git`
2. `cd listening-english`
3. `docker build -t listening-english:latest .`
4. docker-compose up
5. ブラウザでhttp://localhost:8080/quiz にアクセスしたら、使えるます。

### 上記の確認環境(つまり、私の開発環境)
MacOS Monterey
Intel coreI7
Chrome

# 似たサービス例
[Speechiling](https://speechling.com/jp/dictation/english)が、イメージに近い

##### 似てるポイント
- 部分的に正解してる場合、それを示してくれる。
- また、不正解の部分は、ヒントとして、単語数だけを示してくれる。

#### 異なるポイント
