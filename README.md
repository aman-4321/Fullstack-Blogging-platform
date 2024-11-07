# Blogging Platform

Welcome to the Fullstack Blogging Platform! This project provides a comprehensive blogging solution with a serverless backend and a responsive frontend. Users can sign in, sign up, publish, and view blogs. This README will guide you through setting up the project locally and deploying it to the cloud.

## Built With

- **Hono:** A lightweight web framework for building serverless applications on Cloudflare Workers.
- **React:** A JavaScript library for building user interfaces, providing a responsive and dynamic frontend.
- **Prisma Accelerate:** It is a managed connection pooler with global caching that helps speed up database queries. With Accelerate, you can easily configure connection pooling and choose the right cache strategy for your app.
- **Cloudflare Workers:** A serverless computing platform that allows you to deploy and run code at the edge.
- **PostgreSQL:** A robust, open-source relational database system used for storing and managing blog data.
- **Neon:** A cloud-native PostgreSQL provider offering a free-tier database solution.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com//Fullstack-Blogging-platform.git
   cd Fullstack-Blogging-platform
   ```

2. **Setup Backend:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Obtain your PostgreSQL connection string from from any cloud provider(like Neon):

     - Rename `.env.example` to `.env` and `wrangler.toml.example` to `wrangler.toml` in the `backend/` directory and add the following environment variables

     - Prisma accelerate db url and jwt secret in `wrangler.toml` and postgres url in `.env`

   - Start the server:

     ```bash
     npm run dev
     ```

   - Access the application at localhost:8787

3. **Setup Frontend:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the development server:

     ```bash
     npm run dev
     ```

- **Access the Application:**

  - Frontend is available at localhost:5173 and the endpoints are:

    - /signup
    - /signin
    - /publish
    - /blogs

## Deployment

- To deploy the backend on Cloudflare to Workers

  ```bash
  cd backend
  ```

- Login to cloudflare

  ```bash
  npx wrangler login
  ```

- Deployment

  ```bash
  npm run deploy
  ```
