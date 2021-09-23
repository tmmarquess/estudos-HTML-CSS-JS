package br.com.treinaweb.springbootteste.controller;

import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
//import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/texto")
    public String texto(ModelMap modelo){
        modelo.addAttribute("textoExemplo","Bem vindo ao Spring! :)");
        return "texto";
    }

    @GetMapping("/textoAlt") //textoAlternativo porém vai ser o padrão
    public ModelAndView textoAlt(){
        ModelAndView modelo = new ModelAndView();
        modelo.setViewName("textoAlt"); 
        modelo.addObject("textoExemplo","Bem vindo ao Spring! :) (texto feito de outra forma)");
        return modelo;
    }

    @GetMapping("/nome/{nome}") //o texto que tiver após o /nome/ vai ser uma variável
    public ModelAndView nome(@PathVariable String nome){
        ModelAndView modelo = new ModelAndView();

        modelo.setViewName("nome");
        modelo.addObject("nome",nome);

        return modelo;
    }

    @GetMapping("/nomeAlt") //o texto que tiver após o /nome?nome= vai ser uma variável
    public ModelAndView nomeAlt(@RequestParam(required=false, defaultValue = "Usuário") String nome){
        ModelAndView modelo = new ModelAndView();

        modelo.setViewName("nome");
        modelo.addObject("nome",nome);

        return modelo;
    }


}