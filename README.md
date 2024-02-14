# SknkerCrazy - Ecommerce Project

This is  appp is a fully funcitonal ecommerce app and user can view single product, increase/descrase the quantity of product and then move to checkout and pay using stripe. After placing the order the order can be view from the order history. User can also edit the user info from the profile section in the app.


# SknkerCrazy-App  

  # HOW to use 
  1. Clone this project by Running ` gh repo clone abishkar123/client-cms-user`
  2. Run `cd client-cms`
  3. Run ` npm i`
  4. Run  ` npm start`  you mush have `nodemon` install in your system, otherwise run ` npm i nodemon -g` to install globally 

  How to project will be server al `http://localhsot:3000`

## API 
this api server will be have 2 api endpoints 
1. user endpoint 
2. api endpoint

all the endpoint will follow th follwong path `{rooturl}/api.v1` . this will allow client to creat user , login and more.

### Order/Product API 
user api will use the following path `{rooturl}/api.v1/ order/product.` this api will allow client to do CRUD operation on transcation table

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION         |
| --- | ---- | ------ | ---------- | -----------------   |
| 1.  | `/`  | GET    | TRUE       |  allow user to fetch their own transcation                       |
| 2.  | `/`  | POST   | TRUE       |  allow user to post new transaction, data should be send as `{}` |
| 3.  | `/`  | PATCH  | No         |         |                                                         
| 4.  | `/`  | DELETE | No         | allow user to detete signle or mutiple of their own taransaction only. client should send the data as `[id1, id2]`          

## Tech Stack

**Client:** ReactJS, React-Redux, React-bootstrap

**Server:** Nodejs, ExpressJs, MongoDB
        |