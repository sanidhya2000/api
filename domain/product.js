class players{
    constructor(name,goalsscored, goalattempted, passescompleted,
       passesattempted, tacklesattempted, tackeswon) {
      this.player_id=0;
      this.player_name= name;
      this.player_scored= goalsscored;
      this.player_attempted= goalattempted;
      this.player_passes= passescompleted;
      this.player_passes_attm= passesattempted;
      this.player_tacles_attm= tacklesattempted;
      this.player_wons= tackeswon;
}
getAddPlayerSQL() {
  let sql = `INSERT INTO PLAYERS(player_name,player_scored,player_attempted,
            player_passes,player_passes_attm,player_tacles_attm,player_won) \
             VALUES('${this.player_name}',${this.player_scored},${this.player_attempted},${this.player_passes}
             ,${this.player_passes_attm},${this.player_tacles_attm},${this.player_wons})`;
  return sql;
}
static getAllPlayerSQL() {
  let sql = `SELECT * FROM PLAYERS`;
  return sql;
 }

}

