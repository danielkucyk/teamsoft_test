# TeamSoft Test 
### Teste realizado para a TeamSoft

API construído com o intuito de realizar o cadastro e manutenção de Clientes e seus respectivos endereços.

## Dependencias

## Inicial
O projeto utiliza como base "http://localhost:3000". Esse pode ser alterado para a porta de preferência no arquivo "index".
Os blocos esperados são:
### Clientes
```
{
    "CNPJ": 123456789,
    "Razao_Social": "Solteiro",
    "Nome_do_Contato": "Fulano da Silva",
    "Telefone": 998765432
}
```
### Endereços
```
{
   "id": 1,
   "Logradouro": "Minha Rua",
   "Numero": 1000,
   "Complemento": "Apartamento",
   "Bairro": "Meu Bairro",
   "Cidade": "Minha Cidade",
   "Estado": "Meu Estado",
   "CEP": 98765432
}
```
## URLs

As urls esperadas para execução das chamadas são:

### Clientes

<ul>
  <li><strong>GET: http://localhost:xxxx/client</strong> </li>
  <p><strong>Parâmetros:</strong> "/all", "/:CNPJ" </p>
  <li><strong>POST: http://localhost:xxxx/client</strong> </li>
  <li><strong>PATCH: http://localhost:xxxx/client</strong> </li>
  <li><strong>DELETE: http://localhost:xxxx/client</strong> </li>
</ul>
