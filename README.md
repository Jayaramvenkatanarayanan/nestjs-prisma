<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

![Prisma](https://i.imgur.com/h6UIYTu.png)

# REST API Example

This example shows how to implement a **REST API** using [NestJS](https://docs.nestjs.com/) and [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client). It uses a SQLite database file with some initial dummy data which you can find at [`./prisma/dev.db`](./prisma/dev.db). The example was bootstrapped using the NestJS CLI command `nest new rest-nestjs`.

## Getting started

### 1. Download example and install dependencies

Download this example:

```
curl https://github.com/Jayaramvenkatanarayanan/nestjs-prisma.git
```

Install npm dependencies:

```
cd rest-nestjs
npm install
```

<details><summary><strong>Alternative:</strong> Clone the entire repo</summary>

Clone this repository:

```
git clone git@github.com:prisma/prisma-examples.git --depth=1
```

Install npm dependencies:

```
cd prisma-examples/typescript/rest-nestjs
npm install
```

</details>

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed --preview-feature
```

### 3. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3000`. You can now the API requests, e.g. [`http://localhost:3000/feed`](http://localhost:3000/feed).

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `GET`

- `userController/users`: Fetch all users.
- `userController/user/:id`: Fetch user by ID.

### `POST`

- `/signup`: Create a new user with post
  - Body:
    - `email: String` (required): The email address of the user
    - `name: String` (optional): The name of the user
    - `postData: PostCreateInput[]` (optional): The posts of the user
- `Example JSON` : {
  "name": "user1",
  "email": "22das@user1.in",
  "posts": [
  {
  "title": "Prisma on YouTube",
  "content": "https://pris.ly/youtube"
  }
  ]
  }

### `PATCH`

- `userController/userPublish/:id`: Toggle the publish value of a post by its `id`

### `DELETE`

- `userController/deletePost/:id`: Delete a post by its `id`

## DB Model

```diff
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String
  content   String?
  published Boolean  @default(false)
  viewCount Int      @default(0)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}
```
