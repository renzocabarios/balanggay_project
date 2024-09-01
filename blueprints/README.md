```
DB = {
  DECKS = 0,
  USER_DECKS = 0,
  USER_CARDS = 0,
  USERS = 0,
  CARDS = 0
}

Decks = {}
Cards = {}
Users = {}
UserDecks = {}
UserCards = {}

run to reload proccess `.load init.lua`


CreateDeck
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"name":"qwdqd","description":"test"}', Action = "CreateDeck"})


CreateUser
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{}', Action = "CreateUser"})

CreateCard
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{"question":"qwdqd","answer":"test","deck_id":1}', Action = "CreateCard"})


GetMyDecks
-- Send({ Target = "R9aWm3slNiWeH4ToQV8iCFteeuDx-IvKx2HWQLMOG0g", Data = '{}', Action = "GetMyDecks"})


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



```
