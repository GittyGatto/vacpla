create table uzer  (
  id bigserial primary key,
  user_name varchar(80) not null unique,
  password varchar(100) not null,
  role varchar(100) not null
);

insert into uzer (user_name, password, role) VALUES ('fu','$2a$11$VD0NIecfOkwABIIlBCsTNumRuPL.nfvGzR0C3PRnd0iaxQOr.OUgS', 'ADMIN');
insert into uzer (user_name, password, role) VALUES ('dau','$2a$11$MikB0IiNalbn6C8O3BnsUeAtWnU84023Uz1cYkGGMzD95M0pMAvUm', 'DATA_MANAGEMENT');
insert into uzer (user_name, password, role) VALUES ('ass','$2a$11$pT09zCDt4yH/9uqa6yiWReCtM8Sdp/mSHj/pZ32Y6o0IbmeeSGWX.', 'SALES')