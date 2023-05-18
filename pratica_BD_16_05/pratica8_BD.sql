create database pratica8_BD;
use pratica8_BD;

create table professor (
idProfessor int primary key auto_increment,
nome varchar (45),
disciplina varchar(45)
)auto_increment = 10000;

insert into professor values 
(null, 'Edu', 'Arquitetura Computacioinal'),
(null, 'Vivian', 'Banco de Dados'),
(null, 'Mônica', 'Tecnologia da Informação'),
(null, 'Caramico', 'Projeto Integrador');

create table grupo (
idGrupo int primary key auto_increment,
nome varchar(45),
descricao varchar(100)
);

insert into grupo values 
(null, 'LightTech', 'Controle de luminosidade em espaços empresariais'),
(null, 'SafeLaw', 'Controle de umidade de gramados'),
(null, 'ValleysTech', 'Controle de umidade e temperatura em vinhedos'),
(null, 'CarTech', 'Controle de vagas em estacionamentos');

create table aluno (
ra int,
nome varchar(45),
email varchar(45),
fkGrupo int, constraint foreign key (fkGrupo) references grupo (idGrupo),
constraint primary key (ra, fkGrupo)
);

insert into aluno values 
(01231208, 'João Vitor Alves Brandão', 'joao.brandao@sptech.school', 1),
(01231002, 'Jeremias Barcelos', 'jeremias.barcelos@sptech.school', 1),
(01231283, 'Diego Hessel', 'diego.hessel@sptech.school', 1),
(01231294, 'Luka Caetano', 'luka.caetano@sptech.school', 3),
(01231853, 'Lucas Arantes', 'lucas.arantes@sptech.school', 2);

create table avaliacao (
idAvaliacao int auto_increment,
dtAvaliacao datetime default current_timestamp,
nota decimal(10,2),
fkProfessor int, constraint foreign key (fkProfessor) references professor (idProfessor),
fkGrupo int, constraint foreign key (fkGrupo) references grupo (idGrupo),
constraint primary key (idAvaliacao, fkProfessor, fkGrupo)
);

insert into avaliacao values 
(null, default, 10, 10001, 1),
(null, default, 10, 10000, 1),
(null, default, 10, 10002, 1),
(null, default, 10, 10003, 1);

insert into avaliacao values 
(null, default, 5, 10001, 2),
(null, default, 8, 10000, 2),
(null, default, 2, 10002, 4),
(null, default, 9, 10003, 3);

select * from professor;
select * from grupo;
select * from aluno;
select * from avaliacao;

select * from grupo join
aluno on idGrupo = fkGrupo;

select * from grupo join
aluno on idGrupo = fkGrupo
where idGrupo = 1;

select AVG(avaliacao.nota) from avaliacao;

select min(avaliacao.nota) as 'Menor nota', max(avaliacao.nota) as 'Maior nota' from avaliacao;

select sum(avaliacao.nota) as 'Soma das notas' from avaliacao;

select p.nome, p.disciplina, g.nome, g.descricao, a.dtAvaliacao 
from professor as p
join avaliacao as a on idProfessor = fkProfessor
join grupo as g on fkGrupo = idGrupo; 

select p.nome, p.disciplina, g.nome, g.descricao, a.dtAvaliacao 
from professor as p
join avaliacao as a on idProfessor = fkProfessor
join grupo as g on fkGrupo = idGrupo
where idGrupo = 1; 

select grupo.nome from grupo
join avaliacao on idGrupo = fkGrupo
join professor on fkProfessor = idProfessor
where professor.nome = 'Vivian';

select * from grupo 
join aluno on idGrupo = fkGrupo
join avaliacao on grupo.idGrupo = avaliacao.fkGrupo
join professor on fkProfessor = idProfessor;

select count(nota) from avaliacao;

select p.nome,  avg(nota), sum(nota) from professor as p 
join avaliacao on idProfessor = fkProfessor
group by p.nome;

select g.nome, avg(nota), sum(nota) from grupo as g
join avaliacao on idGrupo = fkGrupo
group by g.nome;

select p.nome,  max(nota), min(nota) from professor as p 
join avaliacao on idProfessor = fkProfessor
group by p.nome;

select g.nome, max(nota), min(nota) from grupo as g
join avaliacao on idGrupo = fkGrupo
group by g.nome;