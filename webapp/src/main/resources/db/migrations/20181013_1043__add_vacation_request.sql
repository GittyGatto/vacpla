create table vacation_request  (
  vacation_request_id bigserial primary key,
  vacation_request_uuid varchar(80) not null unique,
  user_id bigint not null,
  requested date not null,
  status varchar(80) not null,
  approved date,
  approved_by_id bigint,
  vac_From date not null,
  vac_To date not null,
  vacation_count bigint not null,
  category varchar(80) not null
);

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id, vac_From, vac_To, vacation_count, category) VALUES
('9e59d1dc-81bc-42f8-b1a3-1702bce3b824', 1, 'APPROVED','2021-06-02', '2021-06-03', 2, '2021-06-21', '2021-06-25', 5, 'PAID');

insert into vacation_request (vacation_request_uuid, user_id, status, requested, approved, approved_by_id, vac_From, vac_To, vacation_count, category) VALUES
('f1e89e8f-e65f-4fc5-9910-7e1b90b632ba', 1, 'REQUESTED','2021-06-23', null, null, '2021-06-28', '2021-06-29', 2, 'PAID');