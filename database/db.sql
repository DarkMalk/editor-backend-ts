-- Initialize database
create database `editor-ts`

-- Use created database
use `editor-ts`

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