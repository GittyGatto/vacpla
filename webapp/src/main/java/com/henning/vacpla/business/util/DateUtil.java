package com.henning.vacpla.business.util;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class DateUtil {

    public static final SimpleDateFormat frontendSdf = new SimpleDateFormat("MM/d/yyyy");
    public static final SimpleDateFormat dbSdf = new SimpleDateFormat("yyyy-MM-dd");

    public Date parseFrontendDate(String date) {
        try {
            return frontendSdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Date parseDate(String date, SimpleDateFormat sdf) {
        try {
            return sdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Date parseDbDate(String date) {
        try {
            return dbSdf.parse(date);
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
