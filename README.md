# akrgt.github.io

後藤 晶（明治大学 情報コミュニケーション学部）の個人ホームページ．

- 日本語: https://akrgt.github.io/
- English: https://akrgt.github.io/en/

## 更新のしかた

このリポジトリは生成物．手で編集しない．

1. Claude Design でページを編集し，「standalone HTML」として書き出す
2. 書き出したファイルを `~/Dropbox/Brain/HP/` の同名ファイルに上書きする
   - `後藤晶 - Homepage (standalone).html`
   - `Akira Goto - Homepage EN (standalone).html`
3. `python3 ~/Dropbox/Brain/HP/build_site.py` を実行（出力先はこのリポジトリ）
4. `git add -A && git commit -m "update" && git push`

ビルドでやっていること: 埋め込み資産の展開と JA/EN 共有化，JSX の事前コンパイル（React 本番ビルド使用），
Tweaks パネル除去，canonical / hreflang / OGP の公開 URL 化，OGP 画像生成，sitemap 生成．
