create table comment  (
  comment_id bigserial primary key,
  vacation_request_id bigint not null,
  user_id bigint not null,
  comment_text varchar(80) not null,
  comment_date timestamp not null
);


insert into comment (vacation_request_id, user_id, comment_text, comment_date) VALUES
(1, 1, 'brauch urlaub, schnell', '2018-10-31 15:36:38');
insert into comment (vacation_request_id, user_id, comment_text, comment_date) VALUES
(1, 2, 'sehr wohl der herr', '2018-11-01 10:12:10');

