create table annual_leave  (
id bigserial primary key,
annual bigint not null,
leave bigint not null,
user_id bigint not null
);

insert into annual_leave (annual, leave, user_id) VALUES
(2017, 20, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2018, 21, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2019, 22, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2017, 15, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2018, 16, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2019, 17, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2017, 13, 3);

insert into annual_leave (annual, leave, user_id) VALUES
(2018, 12, 3);

insert into annual_leave (annual, leave, user_id) VALUES
(2019, 11, 3);
