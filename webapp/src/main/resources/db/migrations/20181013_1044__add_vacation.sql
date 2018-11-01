create table vacation (
  vacation_id bigserial primary key,
  vacation_request_id bigint not null,
  vacation_day date not null,
  holiday boolean
);

insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(1, '2018-11-12', false);
insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(1, '2018-11-13', false);
insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(1, '2018-11-14', false);


insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(2, '2018-11-15', false);
insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(2, '2018-11-16', false);


insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(3, '2018-11-19', false);
insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(3, '2018-11-20', false);
insert into vacation (vacation_request_id, vacation_day, holiday) VALUES
(3, '2018-11-21', false);