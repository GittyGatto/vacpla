create table vacation  (
  id bigserial primary key,
  user_id bigint not null,
  vacation_day date not null
);

insert into vacation (user_id, vacation_day) VALUES (1, '2018-10-25');
insert into vacation (user_id, vacation_day) VALUES (1, '2018-10-26');

alter table vacation add constraint fk_user_vacation foreign key (user_id) references uzer (id);
