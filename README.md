# 我的餐廳清單
運用node.js和express進行開發，並連接Mongodb進行CRUD功能。
並符合 RESTful 設計

## User story
1. 使用者可以瀏覽全部所有餐廳
2. 使用者可以點擊任一餐廳，查看詳細資訊
3. 使用者可以搜尋餐廳名字
4. 使用者可以新增一家餐廳
5. 使用者可以刪除一家餐廳
6. 使用者可以修改一家餐廳的資訊
7. 使用者可依評分、名字、類別、地區執行排序

## 安裝環境

+ Node.js v10.15.3
+ Express ^4.17.1
+ Express-handlebars ^3.1.0
+ mongoose ^5.6.11
+ method-override ^3.0.0

## 安裝步驟
1. 依照git clone下載資料夾
```
$ git clone https://github.com/KerwinJhong/S4_A10_Restaurant.git
```
2. 從終端機安裝npm套件，輸入以下指令
```
$ npm install
```
3. 開啟本地 MongoDB 資料庫
```
$ npm run dev
```
4. 建立預設餐廳資料
```
$ [~/S4_A10_Restaurant/models/seeds] node RestaurantSeeder.js
```
5. 執行專案
```
$ [~/S4_A10_Restaurant] npm run dev
```
6. 輸入網址並呈現我的餐廳清單介面
```
http://localhost:3000
```

## 專案內容
+ 餐廳所有清單
![image](https://github.com/KerwinJhong/S4_A10_Restaurant/blob/master/restaurant.png)


## 作者
[Kerwin Jhong](https://github.com/KerwinJhong)

