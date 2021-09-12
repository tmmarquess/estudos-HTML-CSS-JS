package br.com.treinaweb.springbootteste.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import br.com.treinaweb.springbootteste.model.Cliente;
import br.com.treinaweb.springbootteste.repository.clienteRepository;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private clienteRepository repositorio;

    @GetMapping("/")
    public ModelAndView listar(){
        ModelAndView modelo = new ModelAndView("cliente/listar.html");
        List<Cliente> clientes = repositorio.findAll();
        modelo.addObject("clientes", clientes);
        return modelo;
    }
}
 