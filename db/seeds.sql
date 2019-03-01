create table posts (id serial primary key,
title varchar(45),
img text,
content text,
author_id int REFERENCES users (id)),


create table users1 (id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text),


insert into users1 (
 username,
 password,
 profile_pic)
VALUES
('dwigt', 'BeetsBears', 'https://tinyurl.com/yy6zjyf5'),

insert into posts (
title,
img,
content,
author_id)
VALUES
(
'Test',
'This is a tesat of your automated broadcast system',
'https://tinyurl.com/yychhfu5',
1
)