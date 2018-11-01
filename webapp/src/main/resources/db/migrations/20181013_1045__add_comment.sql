create table comment  (
  comment_id bigserial primary key,
  vacation_request_id bigint not null,
  user_id bigint not null,
  comment_text varchar(80) not null,
  comment_date timestamp not null
);

