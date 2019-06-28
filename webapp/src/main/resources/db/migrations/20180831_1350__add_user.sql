create table uzer  (
  id bigserial primary key,
  user_name varchar(80) not null unique,
  password varchar(100) not null,
  role varchar(100) not null,
  entry date not null,
  exit date
);

insert into uzer (user_name, password, role, entry) VALUES ('admin1','$2a$11$VD0NIecfOkwABIIlBCsTNumRuPL.nfvGzR0C3PRnd0iaxQOr.OUgS', 'ADMIN', '2000-01-01');
insert into uzer (user_name, password, role, entry) VALUES ('admin2','$2a$11$MikB0IiNalbn6C8O3BnsUeAtWnU84023Uz1cYkGGMzD95M0pMAvUm', 'ADMIN', '1980-01-01');
insert into uzer (user_name, password, role, entry) VALUES ('user1','$2a$11$pT09zCDt4yH/9uqa6yiWReCtM8Sdp/mSHj/pZ32Y6o0IbmeeSGWX.', 'DEV', '1995-01-01');
