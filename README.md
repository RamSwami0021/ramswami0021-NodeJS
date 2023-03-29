# Ram Swami Portfolio 🔥
### www.ramswami0021.netlify.app 

### Personal website

Check out this [live demo](www.ramswami0021.netlify.app) to see website in action.

#### Home Page
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/ramswami0021.png">


#### About Page
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/2nd.png">


#### Skills & certificates
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/3td.png">


#### Experience & Education
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/4th.png">

#### Recent works
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/5th.png">

#### Get In Touch
<img src="https://github.com/RamSwami0021/ramswami0021/blob/main/demo/6th.png">



:star: Star me on GitHub — it helps!

## Features 📋
⚡️ Fully Responsive\
⚡️ Valid HTML & CSS\
⚡️ Easy to modify

## Sections 📚
✔️ Home\
✔️ About\
✔️ Skills & Certificates\
✔️ Education & Experience\
✔️ Recently Work\
✔️ Contact Info


## Tools Used 🛠️
* <b>GitHub Pages</b> - To host my static website (HTML, CSS, JS).
* <b>Netlify</b> - To Live my static website (HTML, CSS, JS).

## How to Set Up Your Copy of RamSwami Portfolio 📦

### OPTION 1 - Run Ramswami Portfolio on your machine

1) Install [Node.js](http://nodejs.org/) - NodeGoat requires Node v8 or above

2) Clone the github repository:
   ```
   git clone https://github.com/RamSwami0021/ramswami0021-web.git
   ```

3) Go to the directory:
   ```
   cd ramswami0021-web
   ```

4) Install node packages:
   ```
   npm install
   ```
5) Set up MongoDB. You can either install MongoDB locally or create a remote instance:

   * Using local MongoDB:
     1) Install [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/)
     2) Start [mongod](http://docs.mongodb.org/manual/reference/program/mongod/#bin.mongod)

   * Using remote MongoDB instance:
     1) [Deploy a MongoDB Atlas free tier cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/) (M0 Sandbox)
     2) [Enable network access](https://docs.atlas.mongodb.com/security/add-ip-address-to-list/) to the cluster from your current IP address
     3) [Add a database user](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/) to the cluster
     4) Set the `MONGODB_URI` environment variable to the connection string of your cluster, which can be viewed in the cluster's
        [connect dialog](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/#connect-to-your-atlas-cluster). Select "Connect your application",
        set the driver to "Node.js" and the version to "2.2.12 or later". This will give a connection string in the form:
        ```
        mongodb://<username>:<password>@<cluster>/<dbname>?ssl=true&replicaSet=<rsname>&authSource=admin&retryWrites=true&w=majority
        ```
        The `<username>` and `<password>` fields need filling in with the details of the database user added earlier. The `<dbname>` field sets the name of the
        database nodegoat will use in the cluster (eg "nodegoat"). The other fields will already be filled in with the correct details for your cluster.

6) Populate MongoDB with the seed data required for the app:
   ```
   npm run db:seed
   ```
   By default this will use the "development" configuration, but the desired config can be passed as an argument if required.
7) Start the server. You can run the server using node or nodemon:
   * Start the server with node. This starts the NodeGoat application at [http://localhost:8080](http://localhost:8080/)
     ```
     npm start
     ```

#### Customizing the Default Application Configuration

By default the application will be hosted on port 8080 and will connect to a MongoDB instance at localhost:27017. To change this set the environment variables `PORT` and `MONGODB_URI`.
Other settings can be changed by updating the [config file](https://github.com/RamSwami0021/ramswami0021-web/blob/main/index.js).

### OPTION 2 - Run NodeGoat on Docker

The repo includes the Dockerfile and docker-compose.yml necessary to set up the app and db instance, then connect them together.

1) Install [docker](https://docs.docker.com/installation/) and [docker compose](https://docs.docker.com/compose/install/) 

2) Clone the github repository:
   ```
   git clone https://github.com/RamSwami0021/ramswami0021-web
   ```

3) Go to the directory:
   ```
   cd ramswami0021-web
   ```

4) Build the images:
   ```
   docker-compose build
   ```

5) Run the app, this starts the NodeGoat application at http://localhost:8080
   ```
   docker-compose up
 

## License

Code licensed under the [General Public License v3.0](https://github.com/RamSwami0021/ramswami0021-web/blob/main/LICENSE)


### Follow me on LinkdIn for more updates [@RamSwami](https://www.linkedin.com/in/ramswami0021/)
