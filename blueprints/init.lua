local json = require('json')



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

local SECOND = 1000
local MINUTE = SECOND * 60
local HOUR = MINUTE * 60
local DAY = HOUR * 24


-- Data
DB = DB or {
  DECKS = 0,
  USER_DECKS = 0,
  USER_CARDS = 0,
  USERS = 0,
  PROPOSALS = 0,
  PROPOSAL_VOTES = 0,
  CARDS = 0
}

Decks = Decks or {}
Cards = Cards or {}
Users = Users or {}
UserDecks = UserDecks or {}
UserCards = UserCards or {}
Proposals = Proposals or {}
ProposalVotes = ProposalVotes or {}

-- Helpers
-- local function isExist(author, deck_id, name, description, createdAt, updatedAt)
--   local deckExists = false

--   DB["USER_DECKS"] = DB["USER_DECKS"] + 1
--   table.insert(UserDecks, {
--     id = DB["USER_DECKS"],
--     deck_id = deck_id,
--     author = author,
--     name = name,
--     description = description,
--     listed = false,
--     createdAt = createdAt,
--     updatedAt = updatedAt,
--   })
-- end


-- Services

local function createUserCard(user_deck_id, question, answer, createdAt, updatedAt)
  DB["USER_CARDS"] = DB["USER_CARDS"] + 1
  table.insert(UserCards, {
    id = DB["USER_CARDS"],
    user_deck_id = user_deck_id,
    question = question,
    answer = answer,
    pass = 0,
    failed = 0,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createUserDeck(author, deck_id, name, description, createdAt, updatedAt)
  DB["USER_DECKS"] = DB["USER_DECKS"] + 1
  table.insert(UserDecks, {
    id = DB["USER_DECKS"],
    deck_id = deck_id,
    author = author,
    name = name,
    description = description,
    listed = false,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createDeck(author, name, description, createdAt, updatedAt)
  DB["DECKS"] = DB["DECKS"] + 1
  table.insert(Decks, {
    id = DB["DECKS"],
    author = author,
    name = name,
    description = description,
    listed = false,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createCard(deck_id, question, answer, createdAt, updatedAt)
  DB["CARDS"] = DB["CARDS"] + 1
  table.insert(Cards, {
    id = DB["CARDS"],
    deck_id = deck_id,
    question = question,
    answer = answer,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createUser(address, createdAt, updatedAt)
  DB["USERS"] = DB["USERS"] + 1
  table.insert(Users, {
    id = DB["USERS"],
    address = address,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createProposal(deck_id, createdAt, updatedAt)
  DB["PROPOSALS"] = DB["PROPOSALS"] + 1
  table.insert(Proposals, {
    id = DB["PROPOSALS"],
    deck_id = deck_id,
    yes = 0,
    no = 0,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

local function createProposalVote(proposal_id, user, vote, createdAt, updatedAt)
  DB["PROPOSAL_VOTES"] = DB["PROPOSAL_VOTES"] + 1
  table.insert(ProposalVotes, {
    id = DB["PROPOSAL_VOTES"],
    proposal_id = proposal_id,
    user = user,
    vote = vote,
    createdAt = createdAt,
    updatedAt = updatedAt,
  })
end

-- Handlers
Handlers.add(
  "create_proposal_vote",
  Handlers.utils.hasMatchingTag("Action", "CreateProposalVote"),
  function(msg)
    local data = json.decode(msg.Data)
    local proposal_id = data.proposal_id
    local vote = data.vote

    for _, proposalVote in ipairs(ProposalVotes) do
      if (proposalVote.user == msg.From) and (proposalVote.proposal_id == proposal_id) then
        Handlers.utils.reply("create proposal vote failed, user already voted")(msg)
        return
      end
    end

    local isVoteValid = false


    if (vote == 1) then
      isVoteValid = true
    end

    if (vote == 0) then
      isVoteValid = true
    end

    createProposalVote(
      proposal_id,
      msg.From,
      vote,
      msg.Timestamp,
      msg.Timestamp
    )

    Handlers.utils.reply("create proposal vote success")(msg)
  end
)

Handlers.add(
  "get_proposals",
  Handlers.utils.hasMatchingTag("Action", "GetProposals"),
  function(msg)
    local proposals = {}

    for _, proposal in ipairs(Proposals) do
      if (proposal.createdAt + DAY > msg.Timestamp) then
        table.insert(proposals, proposal)
      end
    end

    Handlers.utils.reply(json.encode(proposals))(msg)
  end
)

Handlers.add(
  "create_proposal",
  Handlers.utils.hasMatchingTag("Action", "CreateProposal"),
  function(msg)
    local data = json.decode(msg.Data)

    local deck_id = data.deck_id

    local deckExists = false
    local isAuthor = false

    for _, deck in ipairs(Decks) do
      if deck.id == deck_id then
        deckExists = true
        break
      end
    end

    if deckExists == false then
      Handlers.utils.reply("create card failed, deck does not exist")(msg)
      return
    end

    for _, deck in ipairs(Decks) do
      if (deck.id == deck_id) and (deck.author == msg.From) then
        isAuthor = true
        break
      end
    end

    if isAuthor == false then
      Handlers.utils.reply("create card failed, not the author")(msg)
      return
    end

    createProposal(
      deck_id,
      msg.Timestamp,
      msg.Timestamp
    )

    Handlers.utils.reply("create proposal success")(msg)
  end
)

Handlers.add(
  "create_card",
  Handlers.utils.hasMatchingTag("Action", "CreateCard"),
  function(msg)
    local data = json.decode(msg.Data)

    local deck_id = data.deck_id

    local deckExists = false
    for _, deck in ipairs(Decks) do
      if deck.id == deck_id then
        deckExists = true
        break
      end
    end

    if deckExists == false then
      Handlers.utils.reply("create card failed, deck does not exist")(msg)
      return
    end


    local isAuthor = false
    for _, deck in ipairs(Decks) do
      if (deck.id == deck_id) and (deck.author == msg.From) then
        isAuthor = true
        break
      end
    end

    if isAuthor == false then
      Handlers.utils.reply("create card failed, not the author")(msg)
      return
    end

    createCard(
      deck_id,
      data.question,
      data.answer,
      msg.Timestamp,
      msg.Timestamp
    )

    for _, userDeck in ipairs(UserDecks) do
      if (userDeck.deck_id == deck_id) then
        createUserCard(
          userDeck.id,
          data.question,
          data.answer,
          msg.Timestamp,
          msg.Timestamp
        )
        break
      end
    end

    Handlers.utils.reply("create card success")(msg)
  end
)

Handlers.add(
  "create_deck",
  Handlers.utils.hasMatchingTag("Action", "CreateDeck"),
  function(msg)
    local data = json.decode(msg.Data)

    local userExists = false
    for _, account in ipairs(Users) do
      if account.address == msg.From then
        userExists = true
        break
      end
    end

    if userExists == false then
      createUser(
        msg.From,
        msg.Timestamp,
        msg.Timestamp
      )
    end

    createDeck(
      msg.From,
      data.name,
      data.description,
      msg.Timestamp,
      msg.Timestamp
    )

    createUserDeck(
      msg.From,
      DB["DECKS"],
      data.name,
      data.description,
      msg.Timestamp,
      msg.Timestamp
    )

    Handlers.utils.reply("create deck success")(msg)
  end
)

Handlers.add(
  "create_user",
  Handlers.utils.hasMatchingTag("Action", "CreateUser"),
  function(msg)
    local userExists = false
    for _, account in ipairs(Users) do
      if account.address == msg.From then
        userExists = true
        break
      end
    end

    if userExists == false then
      createUser(
        msg.From,
        msg.Timestamp,
        msg.Timestamp
      )
    else
      Handlers.utils.reply("create user failed")(msg)
      return
    end

    Handlers.utils.reply("create user success")(msg)
  end
)

Handlers.add(
  "get_my_decks",
  Handlers.utils.hasMatchingTag("Action", "GetMyDecks"),
  function(msg)
    local decks = {}

    for _, deck in ipairs(Decks) do
      if (deck.author == msg.From) then
        table.insert(decks, deck)
      end
    end

    Handlers.utils.reply(json.encode(decks))(msg)
  end
)

Handlers.add(
  "get_proposals",
  Handlers.utils.hasMatchingTag("Action", "GetProposals"),
  function(msg)
    local proposals = {}

    for _, proposal in ipairs(Proposals) do
      if (proposal.createdAt + DAY > msg.Timestamp) then
        table.insert(proposals, proposal)
      end
    end

    Handlers.utils.reply(json.encode(proposals))(msg)
  end
)




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
