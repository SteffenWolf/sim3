insert into users1 (username, password, profile_pic)
values (${username}, ${password}, 'https://tinyurl.com/y57z9jbs')
returning username, profile_pic, id 