create table annual_leave  (
id bigserial primary key,
annual bigint not null,
leave bigint not null,
user_id bigint not null
);

insert into annual_leave (annual, leave, user_id) VALUES
(2020, 20, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2021, 21, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2022, 22, 1);

insert into annual_leave (annual, leave, user_id) VALUES
(2020, 15, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2021, 16, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2022, 17, 2);

insert into annual_leave (annual, leave, user_id) VALUES
(2020, 13, 3);

insert into annual_leave (annual, leave, user_id) VALUES
(2021, 12, 3);

insert into annual_leave (annual, leave, user_id) VALUES
(2022, 11, 3);
