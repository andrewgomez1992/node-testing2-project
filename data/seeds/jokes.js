exports.seed = function (knex) {
    return knex('jokes').truncate()
        .then(function () {
            return knex('jokes').insert([
                { joke: "What did the Tin Man say when he got run over by a steamroller?", punchline: "Curses! Foil Again!" },
                { joke: "What did Ari do to the pizza?", punchline: "She dropped it" },
                { joke: "What does Ari do in her sleep?", punchline: "Fart and snore!" },
            ])
        })
}