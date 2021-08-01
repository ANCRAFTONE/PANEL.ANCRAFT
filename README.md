# admin # <!---。ₒº◦°--->

- 。ₒº◦°[`adoring-ptolemy-b3167e`](http://net.netlify.app)°◦ºₒ。
- [![Netlify Status](https://api.netlify.com/api/v1/badges/aed0736c-40f7-41bf-afe6-4a23a6788dd2/deploy-status)](https://app.netlify.com/sites/net/deploys)
- [查看這份文件](http://net.netlify.app/readme.md)

<img src="https://i.imgur.com/qwnfFoe.png" alt="drawing" width="300" style="padding:1em;"/>
![](https://i.imgur.com/ELfgfUX.png)

利用HTML CSS JS與API運作，適合多種系統、平台的管理面板。
快速使用，輕巧，跨平台支援。
將數據可視化，內容管理，系統管理工具集成一體，在面板中輕鬆調整各項參數。
> https://hackmd.io/@ANCRAFT/admin 


---




# 示範 #
![](https://i.imgur.com/qPMhcY3.png) 
dashboard^
---
login page^
---
list page^
---
![](https://i.imgur.com/H7ZKf7V.png) 
readme^
---


# 開始 #

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


# 結構 #
```bash=
admin                       
├─ API                      
│  ├─ daemon                
│  ├─ main.py               
│  ├─ start.anc             
│  └─ ViA.json              
├─ APP                      
├─ NET                      
│  └─ asset                 
│     └─ panel              
│        ├─ page            
│        │  ├─ list.css     
│        │  ├─ list.html    
│        │  ├─ list.js      
│        │  └─ status.html  
│        ├─ content.js      
│        ├─ index.html      
│        ├─ Reveal.js       
│        ├─ script.js       
│        └─ style.css       
├─ test                     
│  ├─ script.js             
│  ├─ style.css             
│  └─ test.dash.html        
├─ index.html               
├─ netlify.toml             
└─ README.md                

```


# 設計 #

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


# 翻譯 #
翻譯[文件](https://)

# todo #
