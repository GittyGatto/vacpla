package com.henning.vacpla.business.request.dtos;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class CommentDto {
    public String userName;
    public Timestamp timestamp;
    public String commentText;
}
