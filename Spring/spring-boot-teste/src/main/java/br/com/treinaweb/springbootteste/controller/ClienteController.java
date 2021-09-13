package br.com.treinaweb.springbootteste.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

import br.com.treinaweb.springbootteste.model.Cliente;
import br.com.treinaweb.springbootteste.repository.clienteRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


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

    @GetMapping("/{id}")
    public ModelAndView detalhar(@PathVariable long id){
        ModelAndView modelo = new ModelAndView("cliente/detalhecliente.html");

        modelo.addObject("cliente", repositorio.getById(id));

        return modelo;
    }

    @GetMapping("/{id}/excluir")
    public ModelAndView excluir(@PathVariable long id) {
        ModelAndView modelo = new ModelAndView("redirect:/cliente/");
        repositorio.deleteById(id);
        return modelo;
    }

    @GetMapping("/cadastrar")
    public ModelAndView cadastrar() {
        ModelAndView modelo = new ModelAndView("cliente/cadastro.html");
        modelo.addObject("cliente",new Cliente());
        return modelo;
    }

    @PostMapping("/cadastrar")
    public ModelAndView cadastrar(Cliente cli){
        ModelAndView modelo = new ModelAndView("redirect:/cliente/");
        repositorio.save(cli);
        return modelo;
    }

    @GetMapping("/{id}/editar")
    public ModelAndView editar(@PathVariable long id) {
        ModelAndView modelo = new ModelAndView("cliente/editar.html");

        modelo.addObject("cliente",repositorio.getById(id));

        return modelo;
    }

    @PostMapping("/{id}/editar")
    public ModelAndView editar(Cliente cli) {
        ModelAndView modelo = new ModelAndView("redirect:/cliente/");

        repositorio.save(cli);

        return modelo;
    }
}
 