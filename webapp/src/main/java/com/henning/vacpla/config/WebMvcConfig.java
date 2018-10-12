package com.henning.vacpla.config;

import com.henning.vacpla.controllers.auth.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.AbstractUrlBasedView;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import javax.servlet.DispatcherType;
import java.util.Arrays;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter
{
	@Autowired
	private MyUserDetailsService userDetailsService;

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry)
	{
		registry.viewResolver(getViewResolver());
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry)
	{
		ResourceHandlerRegistration staticResources = registry.addResourceHandler("/**");
		staticResources.addResourceLocations("classpath:/public/");
	}

	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder(11);
	}

	@Bean
	public FilterRegistrationBean corsFilter()
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new CORSFilter());
		filterRegistrationBean.setDispatcherTypes(DispatcherType.REQUEST);
		filterRegistrationBean.setUrlPatterns(Arrays.asList("/*"));
		filterRegistrationBean.setOrder(Integer.MIN_VALUE + 1000);
		return filterRegistrationBean;
	}

	@Bean
	public DaoAuthenticationProvider authProvider() {
		DaoAuthenticationProvider authProvider
				= new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(encoder());
		return authProvider;
	}

	private ViewResolver getViewResolver()
	{
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver()
		{
			@Override
			protected AbstractUrlBasedView buildView(String viewName) throws Exception
			{
				String suffix = getSuffix();
				if (suffix != null && suffix.length() > 0 && viewName.endsWith(suffix))
				{
					viewName = viewName.substring(0, viewName.length() - suffix.length());
				}

				return super.buildView(viewName);
			}
		};
		viewResolver.setPrefix("/");
		viewResolver.setSuffix("");
		return viewResolver;
	}
}