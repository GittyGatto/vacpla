create table vacation_request  (
  vacation_request_id bigserial primary key,
  user_id bigint not null,
  requested date not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1, 'REQUESTED','2018-10-30',  null, null);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1, 'APPROVED', '2018-10-29', '2018-11-01', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1,  'NOT_APPROVED','2018-10-28', null, null);