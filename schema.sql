DROP TABLE IF EXISTS  players;
CREATE TABLE players(
    player_id     INT(10) NOT NULL  IDENTITY(1, 1),
    player_name         VARCHAR(150),
    player_scored       VARCHAR(150),
    player_attempted    VARCHAR(150),
    player_passes        VARCHAR(150),
    player_passes_attm   VARCHAR(150),
    player_tacles_attm   VARCHAR(150),
    player_won           VARCHAR(150),
    PRIMARY KEY (player_id)
);


INSERT INTO players (player_name ,player_scored ,player_attempted,
                       player_passes ,player_passes_attm,player_tacles_attm  ,player_won)
                        VALUES ('player1', '2','5','10','2','6','1');
INSERT INTO players (player_name ,player_scored ,player_attempted,
                       player_passes ,player_passes_attm,player_tacles_attm  ,player_won)
                        VALUES ('player1', '2','5','10','2','6','1');
COMMIT;
