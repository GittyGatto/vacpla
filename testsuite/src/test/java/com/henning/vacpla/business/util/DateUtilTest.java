package com.henning.vacpla.business.util;

import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class DateUtilTest {

    private DateUtil dateUtil = new DateUtil();

    private static final String dateString = "6/17/2019";

    @Test
    public void parseDateTest() throws ParseException {
        Date result = dateUtil.parseDate(dateString);
        Date expected = new SimpleDateFormat("yyyy-MM-dd").parse("2019-06-17");
        assertEquals(expected, result);
    }

    @Test
    public void getCurrentYearTest(){
        int currentYear = dateUtil.getCurrentYear();
        int expected  = Calendar.getInstance().get(Calendar.YEAR);
        assertEquals(expected, currentYear);
    }

}