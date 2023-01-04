### Controller
Recebimento da Request e Response para tratativo dos dados, controle da regra de negócio e retorno para a rota 
- Sempre receber _res_ ou _req_

### Services
Recebimento dos dados para conexão com o banco (model)
- Sempre receber _data_ e nunca _res_ ou _req_

### Models
Controle do banco de dados

### Routes
Rotas de uso da API para envio de Request e Response para o Controller

### Caminho
Usuário > Route > Controller > Services|Models > Controller > Usuário