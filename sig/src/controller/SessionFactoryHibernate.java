package controller;

import java.io.File;
import java.sql.Date;

import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class SessionFactoryHibernate {
	
	StandardServiceRegistry registry;
	
	public SessionFactoryHibernate() {
		System.err.println("SessionFactoryHibernate");
	}
	
	@Bean
	public SessionFactory getSessionFactory() {
		registry = new StandardServiceRegistryBuilder()
				.configure(new File("hibernate.cfg.xml"))
				.build();
		
		SessionFactory sessionFactory = new MetadataSources(registry)
				.buildMetadata().buildSessionFactory();
		
		return sessionFactory;
	}
	
	public void destroy() {
		StandardServiceRegistryBuilder.destroy(registry);
	}
	
}
