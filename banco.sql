-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id_users integer NOT NULL DEFAULT nextval('users_id_users_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    senha character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    nascimento character varying COLLATE pg_catalog."default" NOT NULL,
    data_cad character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id_users)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;