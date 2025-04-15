# 原作者テロップジェネレーター

https://origin-author-gen.site/

<img width="1548" alt="Screenshot 2025-04-16 at 2 54 47" src="https://github.com/user-attachments/assets/a3cfc1d9-eb9f-4731-82e0-b36120099c59" />


このアプリケーションは、アニメの映画化作品でよく見られる「原作：○○」というテロップ（キャプション）を簡単に生成するためのツールです。

## 機能

- 画像アップロード機能
- テロップのテキスト・フォントサイズ・色などのカスタマイズ
- 生成した画像のダウンロード

## 使い方

1. 画像をアップロードする
2. テキストの内容をカスタマイズする
   - 1行目：「原 作」などのテキスト
   - 2行目：作者名
   - 3行目：作品名や掲載情報
3. フォントサイズ、位置、色などを調整する
4. 完成した画像をダウンロードする

## 開発環境

このプロジェクトは[Next.js](https://nextjs.org)で構築されており、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)でブートストラップされています。

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

[http://localhost:3000](http://localhost:3000)にアクセスすると結果を確認できます。

## 技術スタック

- React 19
- Next.js 15.3.0
- TypeScript
- TailwindCSS 4

---

© 2025 原作者テロップジェネレーター
