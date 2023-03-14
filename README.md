# **_Backend editor TS_**

## **_Requirements:_**

1. Node.JS
2. MySQL

## **_How to start?_**

Install dependencies with `npm` or `pnpm`

```
npm install
```

```
pnpm install
```

Config environment variables with file example `.env_sample`

Example:

```
# Config PORT
SERVER_PORT=3000

# Config Database
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="example"
DB_DATABASE="example-database"

# Config JsonWebToken
JWT="example-password-JWT"
```

Configure your database of MySQL with file example in folder `database/db.sql`

```
-- Initialize database
create database `editor-ts`;

-- Use created database
use `editor-ts`;

-- Create table users
create table users (
  id int not null auto_increment,
  username varchar(255) not null unique,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_At timestamp default current_timestamp,
  primary key(id)
);

-- Create table notes
create table notes (
  id int not null auto_increment,
  title varchar(255) not null,
  content varchar(255) not null,
  created_at timestamp default current_timestamp,
  created_by int not null,
  primary key (id),
  foreign key (created_by) references users(id)
);
```

Compile project with `npm` or `pnpm`

```
npm run build
```

```
pnpm run build
```

Start project with `npm` or `pnpm`

```
npm start
```

```
pnpm start
```
