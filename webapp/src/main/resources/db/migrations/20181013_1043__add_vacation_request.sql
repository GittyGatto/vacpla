create table vacation_request  (
  vacation_request_id bigserial primary key,
  user_id bigint not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);
