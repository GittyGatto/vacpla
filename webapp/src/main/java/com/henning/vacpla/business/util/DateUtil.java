package com.henning.vacpla.business.util;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class DateUtil {

    public static final SimpleDateFormat sdf = new SimpleDateFormat("MM/d/yyyy");

    public Date parseDate(String date) {
        try {
            return sdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public int getCurrentYear() {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
        return Integer.parseInt(sdf.format(now));
    }
}
