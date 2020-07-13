package it.univaq.game.security;

import it.univaq.game.business.repository.UtenteRepository;
import it.univaq.game.domain.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


@Component
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UtenteRepository service;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		          Utente user;
		user = service.findUtenteRuoliByUsername(username);

		if (user == null) {
                    throw new UsernameNotFoundException("utente non trovato");
		}
		return new UserDetailsImpl(user);
                

	}

}
