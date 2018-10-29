create table uzer  (
  id bigserial primary key,
  user_name varchar(80) not null unique,
  password varchar(100) not null,
  role varchar(100) not null,
  total_vacation bigint not null,
  entry date not null,
  exit date
);