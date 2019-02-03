package controller;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Pessoa;
import repository.PessoaRepository;

@RestController
@RequestMapping("/api")
public class PessoaController {
	
	@Autowired
	SessionFactory sessionFactory;
	
	public PessoaController() {
		System.err.println("PessoaController");
	}

	@GetMapping("/pessoa")
	public Pessoa add(
			String nome,
			String cpf) {
		Pessoa pessoa = new Pessoa();
		pessoa.setNome(nome);
		pessoa.setCpf(cpf);
		
		PessoaRepository pessoaRepository = new PessoaRepository(sessionFactory);
		pessoaRepository.add(pessoa);
		
		return pessoa;
	}
	
}
