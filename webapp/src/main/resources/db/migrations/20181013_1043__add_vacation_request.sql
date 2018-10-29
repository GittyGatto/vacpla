create table vacation_request  (
  id bigserial primary key,
  user_id bigint not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);

alter table vacation_request add constraint fk_user_vac_req_usr foreign key (user_id) references uzer (id);
alter table vacation_request add constraint fk_user_vac_req_apr foreign key (approved_by_id) references uzer (id);
