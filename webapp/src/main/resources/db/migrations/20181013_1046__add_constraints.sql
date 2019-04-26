alter table vacation add constraint fk_vac_req_vacation foreign key (vacation_request_id) references vacation_request (vacation_request_id);
alter table vacation_request add constraint fk_user_vac_req_usr foreign key (user_id) references uzer (id);
alter table vacation_request add constraint fk_user_vac_req_apr foreign key (approved_by_id) references uzer (id);
alter table comment add constraint fk_vac_req_com foreign key (vacation_request_id) references vacation_request (vacation_request_id);
alter table comment add constraint fk_user_com foreign key (user_id) references uzer (id);
alter table annual_leave add constraint fk_user_annual_leave_usr foreign key (user_id) references uzer (id)
;
