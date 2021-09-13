package br.com.treinaweb.springbootteste.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Entity
@Table
public class Cliente{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false,name = "data_nascimento")
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate dataNasc;

    @Column(nullable = false)
    private String profissao;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDate dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public Cliente(long id, String nome, LocalDate dataNasc, String profissao) {
        this.id = id;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.profissao = profissao;
    }

    public Cliente() {
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((dataNasc == null) ? 0 : dataNasc.hashCode());
        result = prime * result + (int) (id ^ (id >>> 32));
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((profissao == null) ? 0 : profissao.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Cliente other = (Cliente) obj;
        if (dataNasc == null) {
            if (other.dataNasc != null)
                return false;
        } else if (!dataNasc.equals(other.dataNasc))
            return false;
        if (id != other.id)
            return false;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (profissao == null) {
            if (other.profissao != null)
                return false;
        } else if (!profissao.equals(other.profissao))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "cliente [dataNasc=" + dataNasc + ", id=" + id + ", nome=" + nome + ", profissao=" + profissao + "]";
    }

    
}
