# CA4_Assignment_18371
This is a full stack application using React, Node.js, Express, MongoDB and Webpack. 
 
#####  To use this template follow these commands (execute them one at a time)
## 1. Set up project CA4
```linux
# clone this repository
# if there is no file in the gitpod.io please install CA4 like below the link
# if the file is already exist the please skip to the next part "go to inside the folder (cd CA4)". 
git clone https://github.com/SharonNeo/CA4_Assignment_18371.git

# go inside the root folder
cd CA4
```
## 2. set up axios and bulma
```
# go inside the CA4/src/client Terminal.
npm install axios

# go inside the CA4/src/client Terminal.
npm install bulma
```

## 3. set up the web serverd
```
# go inside the CA4 Terminal.
# install dependencies if they aren't there
npm install

# install port
yarn add kill-port

yarn global add kill-port

kill-port --port 8080

kill-port --port 3000

# run your development server
npm run dev
