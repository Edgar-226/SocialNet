CREATE DATABASE socialnet

USE socialnet

CREATE TABLE users
(
    id_user int NOT NULL IDENTITY (1,1),
    first_name VARCHAR (45),
    last_name VARCHAR(45),
    city VARCHAR(50),
    linkedln VARCHAR(50),
    age DATE,
    email VARCHAR(100) NOT NULL UNIQUE,
    [password] VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_user)
)
INSERT INTO users
VALUES
    ('Edgar', 'Bastida','México', 'https://www.linkedin.com/in/edgar-bastida/', '1995-03-12', 'edgar@mail.com','edgarpass'),
    ('Anahi', 'Miranda','México', 'https://www.linkedin.com/in/anahi-miranda/', '2000-08-17', 'anahi@mail.com','anahipass');

SELECT *
FROM users

CREATE TABLE pefilPicture (
    id_picture INT NOT NULL IDENTITY (1,1),
    id_user INT NOT NULL,
    img_url VARCHAR(100),
    img VARBINARY(MAX) NOT NULL,
    PRIMARY KEY(id_picture),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)



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

SELECT first_name, place, title
FROM studies RIGHT JOIN users ON studies.id_user = users.id_user
WHERE users.id_user = 1


CREATE TABLE languages
(
    id_language INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    name_language VARCHAR(50),
    speech_level INT,
    writing_level INT,
    PRIMARY KEY (id_language),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO languages
VALUES
    (2, 'Inglés', 50, 60),
    (1, 'Inglés', 60, 50);

SELECT first_name, name_language, speech_level
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
    (1, 'Reposteria');

SELECT *
FROM hobbies


CREATE TABLE friends 
(
    id_friendship INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    id_friend INT NOT NULL,
    PRIMARY KEY (id_friendship),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_friend) REFERENCES users(id_user)
)


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




DROP TABLE studies;
DROP TABLE friend_request;
DROP TABLE friends;
DROP TABLE hobbies;
DROP TABLE languages;
DROP TABLE users;

SELECT first_name, place, title FROM studies RIGHT JOIN users ON studies.id_user = users.id_user WHERE users.id_user = 1