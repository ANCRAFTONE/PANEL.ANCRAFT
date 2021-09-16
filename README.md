# admin #

- 。ₒº◦°[`adoring-ptolemy-b3167e`](http://net.netlify.app)°◦ºₒ。 / [![Netlify Status](https://api.netlify.com/api/v1/badges/aed0736c-40f7-41bf-afe6-4a23a6788dd2/deploy-status)](https://app.netlify.com/sites/net/deploys) / [查看當前文件](http://net.netlify.app/readme.md)
 <!---。ₒº◦°--->
<img src="https://i.imgur.com/qwnfFoe.png" alt="drawing" width="131" style="float: right;" /><a>

可使用網路連接的管理面板、圖形操作介面。
透過web技術搭建，適合在不同平台上進行系統管理作業。採用前後端分離，擁有快速啟用，輕巧，跨平台支援，異步運行等特點。
集成數據可視化，內容管理平台，系統管理工具，在面板中即可輕鬆調整各項參數等眾多便利性功能

<br><br><br><br><br><br>
*https://hackmd.io/@ANCRAFT/admin*
:::    warning
🪁demo 。ₒº◦°[`adoring-ptolemy-b3167e`](http://net.netlify.app)°◦ºₒ。
:::

---

<br><br><br><br><br>


## ⚗示範 ##

![](https://i.imgur.com/qPMhcY3.png)
![](https://i.imgur.com/a3rJacy.jpeg)
            dashboard^

![](https://i.imgur.com/H7ZKf7V.png) 
            readme^

<br><br><br>

## 💡開始 ##

### setup ###
1. 下載[檔案](https://)
2. 安裝`node.js`,`python3.9`,`docker`
3. 添加IP

### 配置 ###
使用(vscode)開啟位於:
`./config/config.yml`
```

```
`./config/api.yml`
```

```
`./config/socket.yml`
```

```
### 啟動 ###
雙擊或執行`start.sh`

<br><br><br>

## 🧲結構 ##

```bash=
admin                              
├─ API                             
│  ├─ start.anc                    
│  └─ ViA.json                     
├─ APP                             
│  ├─ NET                          
│  │  └─ asset                     
│  │     └─ panel                  
│  │        ├─ ajax.js             
│  │        ├─ content.js          
│  │        ├─ index.html          
│  │        ├─ plot.js             
│  │        ├─ Reveal.js           
│  │        ├─ script.js           
│  │        └─ style.css           
│  └─ node                         
│     ├─ admin.ancraft.one         
│     │  ├─ public                 
│     │  │  ├─ favicon.ico         
│     │  │  ├─ index.html          
│     │  │  ├─ logo192.png         
│     │  │  ├─ logo512.png         
│     │  │  ├─ manifest.json       
│     │  │  └─ robots.txt          
│     │  ├─ src                    
│     │  │  ├─ App.css             
│     │  │  ├─ App.js              
│     │  │  ├─ App.test.js         
│     │  │  ├─ index.css           
│     │  │  ├─ index.js            
│     │  │  ├─ logo.svg            
│     │  │  ├─ reportWebVitals.js  
│     │  │  └─ setupTests.js       
│     │  ├─ package-lock.json      
│     │  ├─ package.json           
│     │  └─ README.md              
│     ├─ app.js                    
│     ├─ index.js                  
│     ├─ package-lock.json         
│     ├─ package.json              
│     └─ react                     
├─ index.html                      
├─ netlify.toml                    
├─ README.md                       
└─ SECURITY.md                     
               

```

<br><br><br>

## 🧭設計 ##

 * 數據統計
 * 調整參數
 * 內容管理
 
### 在設計方面引用了幾種想法 ###

#### 多功能 ####

接管伺服器設定與調整參數操作，集成數據可視化功能，為供應商更好的解決方案

#### 模塊化 ####

可加裝插件或頁面，調整分區策略，畫布排版，數據chart。訂製個性化面板

#### 跨平台 ####

在行動設備、桌面平台、嵌入式系統中都能啟用的功能

<br><br><br>

## 🗺翻譯 ##

翻譯[文件](https://)

<br><br><br>

## 🚩todo ##
