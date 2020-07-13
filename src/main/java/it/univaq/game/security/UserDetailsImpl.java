package it.univaq.game.security;


import it.univaq.game.domain.Utente;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class UserDetailsImpl implements UserDetails {

    /**
     *
     */
    private static final long serialVersionUID = 7937091659968735176L;
    private static final String ROLE_PREFIX = "ROLE_";

    private Utente utente;

    public UserDetailsImpl(Utente utente) {
        super();
        this.utente = utente;
    }

    @Override
    public Collection<GrantedAuthority> getAuthorities() {

        List<GrantedAuthority> result = new ArrayList<GrantedAuthority>();
        utente.getRuoli().forEach((ruolo) -> {
            result.add(new SimpleGrantedAuthority(ROLE_PREFIX + ruolo.getNome()));
        });

        return result;
    }

    @Override
    public String getPassword() {
        return utente.getPassword();
    }

    @Override
    public String getUsername() {
        return utente.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
//        return utente.getDataModificaPassword()
//                    .plusMonths(mesiScadenzaPassword)
//                    //.plusMonths(3L)
//                    .isAfter(LocalDateTime.now());
            return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "UserDetailsImpl [username=" + utente.getUsername() + "]";
    }

    public Utente getUtente() {
        return utente;
    }


}
