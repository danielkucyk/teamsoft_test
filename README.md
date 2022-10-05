<h1> TeamSoft Test </h1>
<h3>Teste realizado para a TeamSoft</h3>

<p> API construído com o intuito de realizar o cadastro e manutenção de Clientes e seus respectivos endereços.</p>

<h2> Inicial </h2>
<p> O projeto utiliza como base "http://localhost:3000". Esse pode ser alterado para a porta de preferência no arquivo "index". </p>
<p> Os blocos esperados são:
<h3> Clientes </h3>
```json
{
    CNPJ": 123456789,
    "Razao_Social": "Solteiro",
    "Nome_do_Contato": "Fulano da Silva",
    "Telefone": 998765432
}
```
<h3> Endereços </h3>
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

<h2> URLs </h2>
<p> As urls esperadas para execução das chamadas são: </p>
<h3> Clientes </h3>
<ul>
  <li><strong>GET: http://localhost:xxxx/client</strong> </li>
  <p><strong>Parâmetros:</strong> "/all", "/:CNPJ" </p>
  <li><strong>POST: http://localhost:xxxx/client</strong> </li>
  <li><strong>PATCH: http://localhost:xxxx/client</strong> </li>
  <li><strong>DELETE: http://localhost:xxxx/client</strong> </li>
</ul>

