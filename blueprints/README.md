```
DB = {
  DECKS = 0,
  USER_DECKS = 0,
  USER_CARDS = 0,
  USERS = 0,
  PROPOSALS = 0,
  CARDS = 0
}

Decks = {}
Cards = {}
Users = {}
UserDecks = {}
UserCards = {}
Proposals = {}

run to reload proccess `.load init.lua`


CreateDeck
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"name":"qwdqd","description":"test"}', Action = "CreateDeck"})


CreateUser
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{}', Action = "CreateUser"})

CreateCard
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"question":"qwdqd","answer":"test","deck_id":1}', Action = "CreateCard"})


GetMyDecks
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{}', Action = "GetMyDecks"})


CreateProposal
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"question":"qwdqd","answer":"test","deck_id":1}', Action = "CreateProposal"})

GetProposals
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{}', Action = "GetProposals"})


CreateProposalVote
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"proposal_id":1,"vote":1}', Action = "CreateProposalVote"})


```

### Schema

```
-- Card {
--   id: number,
--   deck_id: string,
--   question: string,
--   answer: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }

-- Deck {
--   id: number,
--   name: string,
--   description: string,
--   author: string,
--   listed: boolean,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   cards: Card[]
-- }

-- UserDeck {
--   id: number,
--   deck_id: number,
--   name: string,
--   description: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   cards: UserCards[]
-- }

-- UserCard {
--   id: number,
--   user_deck_id: string,
--   question: string,
--   answer: string,
--   pass: number,
--   failed: number,
--   dueAt: Date | number,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }

-- Proposal {
--   id: number,
--   deck_id: number,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   yes: number,
--   no: number,
-- }

-- ProposalVote {
--   id: number,
--   proposal_id: number,
--   user: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   vote: number
-- }

```

```

ARCHIVED

-- Send({
--   Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g",
--   Data = '{"name":"qwdqd","description":"test"}',
--   Action =
--   "CreateDeck"
-- })
-- Send({
--   Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g",
--   Data =
--   '{"deck_id": 15,"question":"qwdqd","answer":"test"}',
--   Action = "CreateCard"
-- })
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Action = "GetMyDecks" })

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



-- User Decks
-- Decks
-- Decks Listed on the marketplace (They need to pass as proposals to be listed)
-- Proposals

-- User {
--   id: number,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   cards: Deck[]
-- }

-- UserDeck {
--   id: number,
--   deck_id: number,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   cards: Deck[]
-- }

-- UserDeckCard {
--   id: number,
--   deck_id: number,
--   question: string,
--   answer: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   fails: number,
--   passes: number,
-- }


-- Deck {
--   id: number,
--   name: string,
--   description: string,
--   author: string,
--   listed: boolean,
--   createdAt: Date | number,
--   updatedAt: Date | number,
--   cards: Card[]
-- }

-- Card {
--   id: number,
--   deck_id: number,
--   question: string,
--   answer: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }


-- Proposal of a deck can only be created by the author
-- If proposal reached endTime, and passed, author can now enlist deck to marketplace
-- Proposal {
--   id: number,
--   deck_id: number,
--   title: string,
--   description: string,
--   author: string,
--   finished: boolean,
--   createdAt: Date | number,
--   endTime: Date | number,
--   yes: number,
--   no: number,
-- }

-- ProposalParticipant {
--   id: number,
--   proposal_id: number,
--   participant: string,
--   description: string,
--   createdAt: Date | number,
--   vote: "YES" | "NO"
-- }





-- Card {
--   id: number,
--   deck_id: string,
--   question: string,
--   answer: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }


-- Proposal {
--   id: number,
--   deck_id: string,
--   author: string,
--   listed: boolean,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }

-- User {
--   id: number,
--   address: string,
--   createdAt: Date | number,
--   updatedAt: Date | number,
-- }

```
