Array.prototype.toUppercaseGames = function(){
    return this.map(function(game){
        return game.toUpperCase();
    })
}

const game = ["chess", "football", "cricket", "basketball"];

const upperGames = game.toUppercaseGames();

console.log(upperGames);