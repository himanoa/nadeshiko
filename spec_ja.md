新規記事の数字を表示しないRSSリーダーが欲しい

# 仕様

## 機能郡

1. 複数のRSSフィードを登録できる
1. RSSフィードを購読できる
1. 未読 既読管理ができる(カウントはしない)
1. お気に入りの記事をブックマークできる
1. RSSフィードをタグ付けできる

### 複数のRSSフィードを登録できる

登録する事ができる項目は以下の通り。

- RSSフィードのURL
- ページの名前(なければフィードのchannel\>titleを参照)
- 更新間隔の時間
- タグの名前(複数可能)

また、登録されたRSSフィードを更新間隔の時間おきにクロールすること

### RSSフィードを購読できる

RSSフィードをパースして各記事の以下の要素を表示できること

- 記事のタイトル
- 記事の公開時間
- 記事の要約
- 執筆者の名前

また、記事をWebブラウザで表示できる機構を搭載すること

### 未読既読管理

RSSフィード毎に未読の記事があるかないかを表示すること
何件未読かなどは表示しないこと


また、RSSFeedの登録情報と各記事の取得情報は永続化すること

## 永続化方法

IndexedDBを使う

### データ構造

ActiveRecord風の言語でモデリングする

```ruby
class RSSFeed
  has_many :article
  # name: string
  # url: string
  # updateInterval(ms): int
end

class Article
  belongs_to :rss_feed
  # title: string
  # description: string
  # author: string
  # guid: string
  # pubdate: string
  # link_url: string
end

class Bookmark
  has_one :article
end

class Tag
  has_one :rss_feed
  # name: string
end
```
