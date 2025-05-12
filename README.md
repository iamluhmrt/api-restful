# RESTful API with Node.js and MongoDB

A simple RESTful API to manage people, using Express and Mongoose.

## Features

- Create, read, update, and delete people
- Data stored in MongoDB
- Environment variables support via `.env`

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/iamluhmrt/api-restful.git

# 2. Navigate to the project directory
cd api-restful

# 3. Install dependencies
npm install

# 4. Copy the environment variables file
cp .env.dist .env

# 5. Edit the .env file and set your MongoDB connection string
# Example:
# DATABASE_URL=mongodb://localhost:27017/mydatabase
# PORT=3001

# 6. Start the server
npm start

After starting, the API will be running at:
http://localhost:3001/person

Example Routes
POST /person – Create a person

GET /person – List all people

GET /person/:id – Get a person by ID

PATCH /person/:id – Update a person

DELETE /person/:id – Delete a person
