# 部署指南：让别人能访问你的简历站

部署后，任何人打开你的 **公开链接** 都能看到页面（无需安装任何东西）。

## 第一步：推送到 GitHub

### 1. 在 GitHub 新建仓库

1. 打开 https://github.com/new  
2. 仓库名建议：`resume` 或 `yifan-resume`  
3. 选 **Public**（Cloudflare 免费版连接公开仓库更方便）  
4. **不要**勾选 “Add a README”（本地已有代码）  
5. 创建仓库  

### 2. 在本地推送（在项目目录打开终端）

```bash
cd D:\my-resume

git add .
git commit -m "Add personal resume site"

git branch -M main
git remote add origin https://github.com/leiyifan324-cyber/你的仓库名.git
git push -u origin main
```

> 若提示需要登录，用 GitHub 账号密码或 [Personal Access Token](https://github.com/settings/tokens) 作为密码。

---

## 第二步：Cloudflare Pages 部署

1. 注册/登录 https://dash.cloudflare.com/  
2. 左侧 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**  
3. 授权 GitHub，选择刚推送的仓库  
4. 构建设置：

   | 项 | 值 |
   |----|-----|
   | Framework preset | None 或 Vite |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` |

5. 点击 **Save and Deploy**，等待 1～3 分钟  

6. 完成后会得到地址，例如：  
   `https://yifan-resume.pages.dev`  
   或 `https://leiyifan324-cyber.pages.dev`

---

## 第三步：分享链接

把上面的 `https://....pages.dev` 发给 HR、同学或写在简历/GitHub 简介里即可。

之后每次修改 `resume.json` 并 `git push`，网站会自动更新。

---

## 可选：自定义域名

在 Cloudflare Pages 项目 → **Custom domains** 可绑定自己的域名（需已购买域名）。

---

## 隐私提醒

当前页面包含 **电话、邮箱**。若只想对部分人公开电话，可在 `src/data/resume.json` 的 `contact.items` 里删除 Phone 一项后再 push。
