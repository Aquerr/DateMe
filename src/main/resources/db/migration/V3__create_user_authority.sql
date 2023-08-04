CREATE TABLE user_authority (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    credentials_id BIGINT NOT NULL,
    authority VARCHAR(255),
    FOREIGN KEY (credentials_id) REFERENCES user_credentials (id)
);