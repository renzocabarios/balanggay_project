local json = require('json')

Decks = Decks or {}

Handlers.add(
  "create_card",
  Handlers.utils.hasMatchingTag("Action", "Register"),
  function (msg)
    table.insert(Decks, msg.From)
    Handlers.utils.reply("registered")(msg)
  end
)


-- Instructions Needed
-- Create Deck
-- Add Cards to Deck
-- Fail a card
-- Pass a card

-- User {
--     username: string;     
--     Deck: {
--         authority: address;
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