create table comment  (
  id bigserial primary key,
  vacation_request_id bigint not null,
  user_id bigint not null,
  comment_text varchar(80) not null,
  comment_date timestamp not null
);

alter table comment add constraint fk_vac_req_com foreign key (vacation_request_id) references vacation_request (id);
alter table comment add constraint fk_user_com foreign key (user_id) references uzer (id);