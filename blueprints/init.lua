local json = require('json')

-- Data
DB = DB or {
  DECKS = 0,
  CARDS = 0
}

Decks = Decks or {}
Cards = Cards or {}


-- Handlers
Handlers.add(
  "create_deck",
  Handlers.utils.hasMatchingTag("Action", "CreateDeck"),
  function (msg)
    print(msg.From)
    print("create deck")

    local data = json.decode(msg.Data)
    DB["DECKS"] = DB["DECKS"] + 1
    table.insert(Decks, {
        id = DB["DECKS"],
        author = msg.From,
        name = data.name,
        description = data.description,
    })
    Handlers.utils.reply("create deck success")(msg)
  end
)

Handlers.add(
  "create_card",
  Handlers.utils.hasMatchingTag("Action", "CreateCard"),
  function (msg)
    print(msg.From)
    print("create card")

    local data = json.decode(msg.Data)
    DB["CARDS"] = DB["CARDS"] + 1
    table.insert(Cards, {
        id = DB["CARDS"],
        deck_id = data.deck_id,
        question = data.question,
        answer = data.answer,
    })
    Handlers.utils.reply("create card success")(msg)
  end
)

Handlers.add(
  "get_my_decks",
  Handlers.utils.hasMatchingTag("Action", "GetMyDecks"),
  function (msg)
    print(msg.From)
    print("get my decks")
    local temp = {}
    for _, value in ipairs(Decks) do
        if(value.author == msg.From) then
            table.insert(temp, value)
        end
    end
    Handlers.utils.reply(json.encode(temp))(msg)
  end
)


Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"name":"qwdqd","description":"test"}', Action = "CreateDeck"})
Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"deck_id": 15,"question":"qwdqd","answer":"test"}', Action = "CreateCard"})
Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Action = "GetMyDecks"})

-- Users = Users or {}
-- Cards = Cards or {}
-- User {
--     username: string;     
--     totalDecks: number;     
--     Deck: {
--         authority: address;
--         totalCards: number;     
--         Card: {
--             question: string;
--             answer: string;
--             dueAt: timestamp;
--             startedAt: timestamp;
--             pass: number;
--             fail: number;
--         }
--     }
-- }
-- Send({Target = Morpheus, Data = "Morpheus?"}).receive().Data
-- Send({Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = "Morpheus?"}).receive().Data
-- Send({ Target = "s4WFjIc4ihTWN0zec7sRqDjV_ibKNsMftl-OLxDJUOI", Data = '{"name":"qwdqd","description":"test"}', Action = "CreateDeck"}).receive().Data
-- Send({ Target = "s4WFjIc4ihTWN0zec7sRqDjV_ibKNsMftl-OLxDJUOI", Action = "GetMyDecks"}).receive().Data
-- Send({ Target = Morpheus, Data = "Code: rabbithole", Action = "Unlock" }).receive().Data


-- Instructions Needed
-- Create Deck
-- Add Cards to Deck
-- Fail a card
-- Pass a card



-- Instruction Patterns
-- -- Define pattern and handle functions
-- local function myPattern(msg)
--     -- Determine if the handler should be executed
-- end

-- local function myHandle(msg, env, response)
--     -- Handler logic
-- end

-- -- Add a new handler
-- Handlers.add("myHandler", myPattern, myHandle)

-- -- Evaluate a message
-- local response = handlers.evaluate({ key = "value" }, { envKey = "envValue" })