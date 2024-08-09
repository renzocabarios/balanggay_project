local json = require('json')


DB = DB or {
  Decks = 1,
  Users = 1,
}
Decks = Decks or {}
Users = Users or {}

Handlers.add(
  "create_deck",
  Handlers.utils.hasMatchingTag("Action", "CreateDeck"),
  function (msg)
    
    local data = json.decode(msg.Data)
    local newDeck = {
       id = DB["Decks"],
       description = data.description,
       name = data.name,
       author = msg.From
    }


    DB["Decks"] = DB["Decks"] + 1

    table.insert(Decks, newDeck)
    Handlers.utils.reply("incrementor")(msg)
  end
)

Handlers.add(
  "get_my_decks",
  Handlers.utils.hasMatchingTag("Action", "GetMyDecks"),
  function (msg)
    
    local data = {}

    for _, deck in ipairs(Decks) do
      -- if deck["author"] == msg.From then
          table.insert(data, deck)
      -- end
    end

    Handlers.utils.reply(json.encode(data))(msg)
  end
)




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