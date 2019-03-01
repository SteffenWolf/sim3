select p.id, p.author_id, p.content, u.id
from posts p
join users1 u 
on p.author_id = u.id
order by p.id asc