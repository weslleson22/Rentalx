# Cadastro de carros

**RF**

[x] Deve ser possível cadastrar um carro.
[x] Deve ser poss[ivel listar todas as catedorias.

**RN**

[x] Não deve ser possível cadastrar um carro com uma placa já existente.
[x] O carro deve ser cadastrado, por padrão, como disponível para aluguel.
[x] Só deve ser possível cadastrar carros como um usuário administrador.

# Listagem de carros

**RF**

[x] Deve ser possível listar todos os carros disponíveis.
[x] O usuário não precisa estar logado no sistema.
[x] Deve ser possível listar todos os carros disponíveis pelo nome do carro.
[x] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[x] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.

**RN**

[x] O usuário não precisa estar logado no sistema.

# Cadastro de Especificações do carro

**RF**

[x] Deve ser possível cadastrar uma especificação para um carro.

**RN**

[x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[x] Só deve ser possível cadastrar carros como um usuário administrador.

# Cadastro de imagens do carro

**RF**

[x] Deve ser possível cadastrar a imagem do carro.

**RNF**

[ ] Utilizar o multer para upload dos arquivos

**RN**
[ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[x] Só deve ser possível cadastrar carros como um usuário administrador.

# Aluguel de carros

**RF**

[ ] Deve ser possível cadastrar um aluguel

**RN**

[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.