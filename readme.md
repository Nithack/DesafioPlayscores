# Desafio Playscores
Desenvolva um microserviço (RESTful), em NodeJS, que é capaz de sugerir
tracks baseadas no clima/localização de uma cidade (nome ou
latitude/longitude) recebidos como parâmetro.


### Docker Flag

````
docker run -d -p 8080:3000 -v "$(pwd):/var/www" -w "/var/www"  node npm start
````

### Instalação

````
npm install
````

### Inicialização

````
npm start
````



## Parâmetros de envio

Deve ser enviado pelo menos um conjunto de valores entre eles Cidade ou Longitude e Latitude

````json
{
	"cidade":"campinas",
	"longitude":-23.2299812,
	"latitude":-47.0939563
}

````


### Resposta

A resposta vira em formato JSON:

````json
{
  "mussica": "Sweet Emotion"
}
````


## Bibliotecas Utilizadas

Escolha quaisquer ferramenta ou framework que esteja confortável, mas não
esqueça de nos explicar o motivo da escolha e sobre como arquitetou a sua
solução.

### [axios](https://github.com/axios/)

Utilize o axios para fazer as chamadas HTTP, já tinha utlizado ele antes com REACT e me senti a vontade para utiliza-lo neste projeto, alem de ser uma das ferramentas mais famosas no momento apos o REQUEST ser descontinuado

### [consign](https://www.npmjs.com/package/consign) 

Tive o primeiro contato com esta Biblioteca a pouco tempo nas aulas da Alura, gostei muito da simplicidade que ela traz na hora de configurar as rotas

### [dotenv](http://www.npmjs.com/package/dotenv) 

Primeira vez utilizando esta Biblioteca, gostei muito da ideia de organizar um arquivo de configuração globa, já tinha visto seu uso em outros projetos, fiquei muito otimista com as vantagens em Produção e Execução

### [express](http://www.npmjs.com/package/express) 
Como o próprio repositório dele diz "Fast, unopinionated, minimalist web framework for node.", este foi o framework mais minimalista que já útilizei, já vi a utilização dele em dezenas de projetos, porem se fosse em um projeto que precisasse de uma escalabílidade maior, utilizaria o Adonis por ser mais completo.
 

### [nodemon](https://www.npmjs.com/package/nodemon)

Quem quer recarregar o projeto manualmente toda vez que fizer alguma alteração ?