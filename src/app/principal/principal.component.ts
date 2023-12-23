import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variável para visibilidade dos botões
  btnCadastro:boolean = true;

  // JSON de Clientes
  clientes:Cliente[] = [];

  // Construtor para acessar os métodos do serviço
  constructor(private servico:ClienteService){}

  // Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // Método de cadastro de Cliente
  cadastrarCliente():void{
    this.servico.cadastrarCliente(this.cliente)
    .subscribe(retorno => {
            
      // Cadastrar o cliente no vetor
      this.clientes.push(retorno); });

      // Limpar o formulário
      this.cliente = new Cliente();

      // Mensagem de sucesso ao cadastrar
      alert('Cliente cadastrado com sucesso!!');
  }

  // Método de inicialização 
  ngOnInit(){
      this.selecionar();
    }
    
  }


