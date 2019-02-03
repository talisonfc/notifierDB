package testapp;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.hibernate.SessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import controller.PessoaController;
import model.Endereco;
import model.Pessoa;
import repository.PessoaRepository;
import app.App;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class PessoaRepositoryTest {
	
	@Autowired
	SessionFactory sessionFactory;

	@Test
	public void startContextSpring() throws IOException, InterruptedException {
		PessoaRepository repository = new PessoaRepository(sessionFactory);
		
		Random random = new Random();
		
		Pessoa pessoa = new Pessoa();
		pessoa.setNome("Talison");
		pessoa.setCpf("23918273987");
		
		FileWriter file = new FileWriter("C:\\Users\\Wellyda\\Documents\\tempo-sender.txt");
		PrintWriter gravar = new PrintWriter(file);
		
		for(int i=0; i<1000; i++) {
			long now =  System.currentTimeMillis();
			System.out.println(now);
			gravar.printf(now+"%n");
			repository.add(pessoa);
			Thread.sleep(random.nextInt(5000));
		}
		
		file.close();
		
		assertEquals(true, true);
	}
	
}
