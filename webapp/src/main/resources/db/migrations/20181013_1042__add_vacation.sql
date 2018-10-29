create table vacation (
  vacation_id bigserial primary key,
  vacation_request_id bigint not null,
  vacation_day date not null,
  holiday boolean
);
