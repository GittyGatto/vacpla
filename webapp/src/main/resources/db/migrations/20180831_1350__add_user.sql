create table uzer  (
  id bigserial primary key,
  user_name varchar(80) not null unique,
  password varchar(100) not null,
  role varchar(100) not null,
  total_vacation bigint not null,
  entry date not null,
  exit date
);

insert into uzer (user_name, password, role, total_vacation, entry) VALUES ('fu','$2a$11$VD0NIecfOkwABIIlBCsTNumRuPL.nfvGzR0C3PRnd0iaxQOr.OUgS', 'ADMIN', 20, '2000-01-01');
insert into uzer (user_name, password, role, total_vacation, entry) VALUES ('dau','$2a$11$MikB0IiNalbn6C8O3BnsUeAtWnU84023Uz1cYkGGMzD95M0pMAvUm', 'ADMIN', 15, '1980-01-01');
insert into uzer (user_name, password, role, total_vacation, entry) VALUES ('ass','$2a$11$pT09zCDt4yH/9uqa6yiWReCtM8Sdp/mSHj/pZ32Y6o0IbmeeSGWX.', 'SALES', 13, '1995-01-01');
