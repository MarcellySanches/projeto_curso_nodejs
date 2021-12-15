-- CREATE TABLE noticias(id_noticia SERIAL PRIMARY KEY, titulo VARCHAR(100) NOT NULL, conteudo TEXT NOT NULL, data_criacao TIMESTAMP WITHOUT TIME ZONE DEFAULT(NOW()AT TIME ZONE'utc+3' ))

-- INSERT INTO noticias(
--      titulo,
--      conteudo
--  )VALUES(
--      'Notícia teste4',
--      'quarta notícia com postgress'
--  )

-- SELECT * FROM noticias

-- selecionar as colunas da tabela
-- SELECT titulo, data_criacao FROM noticias

--selecionar uma linha da tabela
--select * FROM noticias WHERE id_noticia= 2

--ordenar os registros
--ordena os registros de forma ascendente
--SELECT * FROM noticias ORDER BY id_noticia ASC

--ordena os registros de forma descendente
--SELECT * FROM noticias ORDER BY id_noticia DESC

-- UPDATE noticias SET titulo='Novo título' WHERE id_noticia=1