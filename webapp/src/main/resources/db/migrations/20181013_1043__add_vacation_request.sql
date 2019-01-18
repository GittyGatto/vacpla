create table vacation_request  (
  vacation_request_id bigserial primary key,
  vacation_request_uuid varchar(80) not null,
  user_id bigint not null,
  requested date not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint
);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('9e59d1dc-81bc-42f8-b1a3-1702bce3b824', 1, 'APPROVED','2017-11-27', '2017-12-01', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('f1e89e8f-e65f-4fc5-9910-7e1b90b632ba', 1, 'NOT_APPROVED','2018-10-26', '2018-11-01', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('d0a25006-78be-4f2d-987f-36697e7ea41a', 1, 'APPROVED','2018-10-27', '2018-11-01', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('fd97a653-3fbd-4e74-9fa8-68ba129390d2', 1, 'APPROVED', '2018-10-28', '2018-11-01', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('6f50b9be-ead8-421c-8b41-9805a619435f', 1, 'APPROVED','2018-11-01', '2018-11-03', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('bbbadb35-40b8-409e-9038-87e45f9d0f2b', 1, 'REQUESTED','2018-11-02',  null, null);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('f2aab656-5ec3-4e9e-b015-abb94bd55aa3', 2, 'REQUESTED','2018-12-13', null, null);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('082f6f70-1455-424a-a277-189d79947144', 3, 'REQUESTED','2018-12-14', null, null);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('1a0f80c7-3495-472c-8604-d6f233a7ef1f', 1, 'REQUESTED','2019-01-14', '2019-01-15', 2);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('a08eb363-fa18-48c6-b477-52b969048631', 2, 'REQUESTED','2019-01-14', null, null);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id) VALUES
('1c7541d3-bf64-433f-9d45-0cc272ebf7c2', 2, 'APPROVED','2018-12-01', '2018-12-15', 1);
