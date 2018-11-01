create table vacation_request  (
  vacation_request_id bigserial primary key,
  user_id bigint not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);

insert into vacation_request (user_id, status, approved, approved_by_id) VALUES
(1, 'REQUESTED', null, null);

insert into vacation_request (user_id, status, approved, approved_by_id) VALUES
(1, 'APPROVED', '2018-11-01', 2);

insert into vacation_request (user_id, status, approved, approved_by_id) VALUES
(1, 'NOT_APPROVED', null, null);