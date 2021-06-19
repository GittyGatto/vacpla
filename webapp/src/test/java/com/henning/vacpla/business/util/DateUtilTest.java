package com.henning.vacpla.business.util;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class DateUtilTest {

    private DateUtil dateUtil = new DateUtil();

    private static final String frontendDateString = "6/25/2021";
    private static final String dBDateString = "2021-06-25";

    @Test
    @DisplayName("omg 😱 parse string from frontend to date")
    public void parseFrontendDateTest() throws ParseException {
        Date result = dateUtil.parseDate(frontendDateString, DateUtil.frontendSdf);
        Date expected = new SimpleDateFormat("yyyy-MM-dd").parse("2021-06-25");
        assertEquals(expected, result, "failed to parse string date from frontend");
    }

    @Test
    @DisplayName("parse date string from database to date")
    public void parseDbDateTest() throws ParseException {
        Date result = dateUtil.parseDate(dBDateString, DateUtil.dbSdf);
        Date expected = new SimpleDateFormat("yyyy-MM-dd").parse("2021-06-25");
        assertEquals(expected, result, "failed to parse string date from DB");
    }

    @Test
    @DisplayName("what year is it bongo cat? ╯°□°）╯")
    public void getCurrentYearTest(){
        int currentYear = dateUtil.getCurrentYear();
        int expected  = Calendar.getInstance().get(Calendar.YEAR);
        assertEquals(expected, currentYear, "current year is not correct");
    }

}