-- CREATE DATABASE empresa;

-- CREATE TABLE usuarios (
--     user_id SERIAL PRIMARY KEY NOT NULL,
--     username VARCHAR(60) NOT NULL,
--     email VARCHAR(60) UNIQUE NOT NULL,
--     pass VARCHAR(60) NOT NULL,
--     usertype VARCHAR(30) NOT NULL CHECK (usertype IN ('seguridad', 'redes', 'administrador de cuentas', 'marketing'))
-- );

CREATE TABLE procesos (
    process_id SERIAL PRIMARY KEY NOT NULL,
    process_name VARCHAR(100) NOT NULL,
    process_class VARCHAR(30) NOT NULL CHECK (process_class IN ('seguridad', 'redes', 'administrador de cuentas', 'marketing'))
    process_state VARCHAR(30) NOT NULL CHECK (process_state IN ('Activo', 'Reiniciandose', 'Apagado'))
);

CREATE TABLE productos (
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    product_desc VARCHAR(255),
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    discount DECIMAL(10,2) CHECK (discount < price),
    img_url VARCHAR(255) NOT NULL
);

CREATE TABLE modificaciones (
    change_id SERIAL PRIMARY KEY NOT NULL,
    change_type VARCHAR(40) NOT NULL,
    change_desc VARCHAR(100) NOT NULL,
    change_value VARCHAR(255) NOT NULL,
    change_previous VARCHAR(255) NOT NULL
);