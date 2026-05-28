# WeChat Mini Program — Setup Guide

## What you need
- A WeChat account with a Chinese phone number
- [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) installed on your Mac

---

## Step 1 — Register a Mini Program

1. Go to https://mp.weixin.qq.com and click **立即注册**
2. Choose **小程序** as the account type
3. Register with your email. Use **个人** (individual) type — no business licence needed
4. After registration, log in and find your **AppID** on the dashboard  
   (it looks like `wx1234567890abcdef`)

---

## Step 2 — Open the project in WeChat DevTools

1. Open **WeChat DevTools**
2. Click **+** → **Import Project**
3. Set the directory to this `wechat-miniprogram/` folder
4. Enter your **AppID** from Step 1 (already filled in `project.config.json`)
5. Click **Import**

---

## Step 3 — Whitelist the data domain (request合法域名)

The mini program fetches `vocabulary-index.json` from GitHub Pages on startup.
You must whitelist the domain or it will be blocked in production.

In the Mini Program dashboard at https://mp.weixin.qq.com:

1. Go to **开发管理** → **开发设置** → **服务器域名**
2. Under **request合法域名**, click **修改**
3. Add: `https://tongchen779.github.io`
4. Save

> **During development in DevTools** you can also tick  
> **详情 → 本地设置 → 不校验合法域名** to skip this check locally.

---

## Step 4 — Preview on your phone

In WeChat DevTools, click **预览** (Preview) — it generates a QR code.  
Scan it with your phone's WeChat app. The mini program will open live on your device.

You'll see three cards on the home screen:
- **🃏 Flashkort** — native flash card with your word bank (saved in phone storage)
- **🔍 Søg Ord** — native search across all vocabulary types
- **📚 Ordliste** — opens the full site in WeChat browser

---

## Step 5 — Submit for release (to share with friends)

1. In DevTools, click **上传** (Upload) to push the code to WeChat's servers
2. In the dashboard at https://mp.weixin.qq.com, go to **版本管理**
3. Submit the uploaded version for review (**提交审核**)
4. Individual mini programs are reviewed within 1–7 days
5. Once approved, click **发布** (Publish)
6. Share your mini program name or QR code with friends — they can open  
   it directly in WeChat without installing anything

---

## Notes

- **Word bank** is stored in the phone's local storage (`wx.setStorageSync`),  
  separate from the browser version's localStorage.
- **Audio playback** uses WeChat's native `InnerAudioContext` — works offline  
  once the mp3 URL has been cached.
- Flash and Search are fully native — no web-view, no domain whitelist needed  
  for those two pages.
- The **Ordliste** card still uses web-view; it will only work once the site is  
  published (personal accounts cannot whitelist business domains, so this card  
  is for reference only during development).
