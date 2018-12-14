create table vacation_request  (
  vacation_request_id bigserial primary key,
  user_id bigint not null,
  requested date not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1,  'APPROVED','2017-11-27', '2017-12-01', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1,  'NOT_APPROVED','2018-10-26', '2018-11-01', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1,  'APPROVED','2018-10-27', '2018-11-01', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1, 'APPROVED', '2018-10-28', '2018-11-01', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1, 'APPROVED','2018-11-01', '2018-11-03', 2);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(1, 'REQUESTED','2018-11-02',  null, null);

insert into vacation_request (user_id, status, requested, approved, approved_by_id) VALUES
(2,  'REQUESTED','2018-12-13', null, null);