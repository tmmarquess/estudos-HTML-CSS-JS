package br.com.treinaweb.springbootteste.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.treinaweb.springbootteste.model.Cliente;

public interface clienteRepository extends JpaRepository<Cliente,Long>{
    
}
