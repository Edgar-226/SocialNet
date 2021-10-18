CREATE DATABASE socialnet

USE socialnet

CREATE TABLE users
(
    id_user int NOT NULL IDENTITY (1,1),
    first_name VARCHAR (45),
    last_name VARCHAR(45),
    city VARCHAR(50),
    country VARCHAR(50),
    linkedln VARCHAR(50),
    age DATE,
    email VARCHAR(100) NOT NULL UNIQUE,
    [password] VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_user)
)
INSERT INTO users
VALUES
    ('Edgar', 'Bastida','CDMX','México', 'https://www.linkedin.com/in/edgar-bastida/', '1995-03-12', 'edgar@mail.com','edgarpass'),
    ('Anahi', 'Miranda','EDOMEX','México', 'https://www.linkedin.com/in/anahi-miranda/', '2000-08-17', 'anahi@mail.com','anahipass');

SELECT *
FROM users

CREATE TABLE perfilPicture (
    id_picture INT NOT NULL IDENTITY (1,1),
    id_user INT NOT NULL,
    img VARCHAR(MAX) NOT NULL,
    PRIMARY KEY(id_picture),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
SELECT *
FROM perfilPicture

CREATE TABLE cvUser (
    id_cv INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    cv VARBINARY(MAX) NOT NULL,
    PRIMARY KEY(id_cv),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

SELECT img,first_name,last_name,perfilPicture.id_user
FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user
WHERE users.id_user != 2


CREATE TABLE studies
(
    id_study INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    place VARCHAR(100),
    title VARCHAR(100),
    PRIMARY KEY (id_study),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO studies
VALUES
    (2, 'Tecla Coding Academy', 'BackEnd Jr Developer'),
    (1, 'Esime Culhuacan', 'Ing en Computacion'),
    (1, 'Tecla Coding Academy', 'BackEnd Jr Developer');


SELECT *
FROM studies

DELETE FROM studies WHERE id_study = 3 AND id_user = 1

SELECT first_name, place, title
FROM studies RIGHT JOIN users ON studies.id_user = users.id_user
WHERE users.id_user = 1


CREATE TABLE languages
(
    id_language INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    name_language VARCHAR(50),
    language_level VARCHAR(50),
    PRIMARY KEY (id_language),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO languages
VALUES
    (2, 'Inglés', 'Intermedio'),
    (1, 'Inglés', 'Intermedio');

SELECT first_name, name_language, language_level
FROM languages RIGHT JOIN users ON languages.id_user = users.id_user
WHERE users.id_user = 1




CREATE TABLE hobbies
(
    id_hobby INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    name_hobby VARCHAR (100)
        PRIMARY KEY (id_hobby),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO hobbies
VALUES
    (1, 'Peliculas');

SELECT * FROM hobbies

SELECT *
FROM hobbies RIGHT JOIN users ON hobbies.id_user = users.id_user
WHERE users.id_user = 1




CREATE TABLE friend_request
(
    id_request INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    id_friend INT NOT NULL,
    request_status INT NOT NULL,
    PRIMARY KEY (id_request),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_friend) REFERENCES users(id_user)
)


SELECT first_name, place, title FROM studies RIGHT JOIN users ON studies.id_user = users.id_user WHERE users.id_user = 1

DROP TABLE studies;
DROP TABLE friend_request;
DROP TABLE hobbies;
DROP TABLE languages;
DROP TABLE perfilPicture;
DROP TABLE users;

