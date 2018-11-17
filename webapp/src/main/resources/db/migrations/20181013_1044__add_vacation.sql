create table vacation (
  vacation_id bigserial primary key,
  vacation_request_id bigint not null,
  vac_From date not null,
  vac_To date not null,
  vacation_count bigint not null
);


insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(1, '2018-12-27', '2018-12-30', 4);

insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(2, '2018-11-12', '2018-11-14', 3);

insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(3, '2018-11-15', '2018-11-16', 2);

insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(4, '2018-11-19', '2018-11-21', 3);

insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(5, '2017-12-12', '2017-12-14', 3);

insert into vacation (vacation_request_id, vac_From, vac_To, vacation_count) VALUES
(6, '2017-12-17', '2017-12-21', 5);

