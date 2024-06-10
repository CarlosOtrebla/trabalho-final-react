package br.com.serratec.dtos;

import br.com.serratec.entities.Categoria;
import br.com.serratec.entities.Produto;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public class ProdutoRequestDTO {
    @NotBlank
    private String nome;
    @NotBlank
    private String descricao;
    @DecimalMin(value = "0.10")//testar se iss funciona
    @NotNull
    private BigDecimal precoUnitario;
    @NotNull
    private Categoria categoria;
    private String urlFoto;
    
    public ProdutoRequestDTO() {
    }
    
    public ProdutoRequestDTO(Produto produto) {
        nome = produto.getNome();
        descricao = produto.getDescricao();
        precoUnitario = produto.getPrecoUnitario();
        categoria = produto.getCategoria();
        urlFoto = produto.getUrlFoto();
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String getDescricao() {
        return descricao;
    }
    
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    
    public BigDecimal getPrecoUnitario() {
        return precoUnitario;
    }
    
    public void setPrecoUnitario(BigDecimal precoUnitario) {
        this.precoUnitario = precoUnitario;
    }
    
    public Categoria getCategoria() {
        return categoria;
    }
    
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
    
    public String getUrlFoto() {
        return urlFoto;
    }
    
    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }
}
