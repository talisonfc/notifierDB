package repository;

import org.hibernate.SessionFactory;

import model.*;

public class PessoaRepository extends Repository<Pessoa>{

	public PessoaRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
}
