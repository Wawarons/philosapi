---

# Philosapi API

Philosapi is a powerful API that provides access to a repository of philosophical knowledge. Explore the rich world of philosophy through our API, offering a comprehensive set of endpoints to retrieve information about philosophers, philosophical works, periods, streams of thought, and more.

**API Base URL:** [https://philosapi.vercel.app/api](https://philosapi.vercel.app/api)

## Table of Contents

1. [Philosophers](#philosophers)
   - [Get Philosophers](#get-philosophers)
   - [Get Philosopher by ID](#get-philosopher-by-id)
   - [Search Philosophers by Stream of Thought](#search-philosophers-by-stream-of-thought)
   - [Get Philosophers by Stream of Thought ID](#get-philosophers-by-stream-of-thought-id)
   - [Search Philosophers by Period](#search-philosophers-by-period)
   - [Get Philosophers by Period ID](#get-philosophers-by-period-id)

2. [Works](#works)
   - [Get Philosophers' Works](#get-philosophers-works)
   - [Get Work by ID](#get-work-by-id)
   - [Search Works by Philosopher's Name](#search-works-by-philosophers-name)
   - [Get Works by Philosopher ID](#get-works-by-philosopher-id)

3. [Citations](#citations)
   - [Get Philosophers' Citations](#get-philosophers-citations)
   - [Get Citation by ID](#get-citation-by-id)
   - [Search Citations by Philosopher's Name](#search-citations-by-philosophers-name)
   - [Get Citations by Philosopher ID](#get-citations-by-philosopher-id)
   - [Get Random Citation](#get-random-citation)

4. [Stream of Thought](#stream-of-thought)
   - [Get Stream of Thought](#get-stream-of-thought)
   - [Get Stream of Thought by ID](#get-stream-of-thought-by-id)

5. [Periods](#periods)
   - [Get Periods](#get-periods)
   - [Get Period by ID](#get-period-by-id)

6. [Contributing](#contributing)

---

### Philosophers

#### Get Philosophers

**Endpoint:** `GET /philosophers`

**Description:** Get a list of all the greatest philosophers.

**Parameters:**
- `limit` (optional): Limit of elements to return.
- `offset` (optional): Number of elements to skip.
- `name` (optional): Name of the philosopher.

**Response:**
- `200 OK`: Successful response with an array of philosophers.
- `400 Bad Request`: Bad input parameter.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Socrates",
    "birth_place": "Athens, Greece",
    "stream_of_thought_id": 1,
    "period_id": 1,
    "resume": "One of the founders of Western philosophy, Socrates laid the groundwork for ethics and the Socratic method.",
    "birth_year": -469,
    "dead_year": -399,
    "wiki": "https://en.wikipedia.org/wiki/Socrates",
    "img_url": "https://philosapi.vercel.app/api/images/socrates.jpg",
    "stream_of_thought_name": "Classical Philosophy",
    "period_name": "Ancient Greece"
  },
  // ... additional philosophers
]
```

#### Get Philosopher by ID

**Endpoint:** `GET /philosophers/:id`

**Description:** Get detailed information about a philosopher by their ID.

**Parameters:**
- `id` (required): The ID of the philosopher.

**Response:**
- `200 OK`: Successful response with details of the philosopher.
- `404 Not Found`: Philosopher not found.

**Response Example:**
```json
{
  "id": 1,
  "name": "Socrates",
  "birth_place": "Athens, Greece",
  "stream_of_thought_id": 1,
  "period_id": 1,
  "resume": "One of the founders of Western philosophy, Socrates laid the groundwork for ethics and the Socratic method.",
  "birth_year": -469,
  "dead_year": -399,
  "wiki": "https://en.wikipedia.org/wiki/Socrates",
  "img_url": "https://philosapi.vercel.app/api/images/socrates.jpg",
  "stream_of_thought_name": "Classical Philosophy",
  "period_name": "Ancient Greece"
}
```

#### Search Philosophers by Stream of Thought

**Endpoint:** `GET /philosophers/stream-of-thought`

**Description:** Get a list of philosophers based on a specific stream of thought.

**Parameters:**
- `stream_of_thought_id` (required): The ID of the stream of thought.

**Response:**
- `200 OK`: Successful response with an array of philosophers.
- `404 Not Found`: Stream of thought not found.

**Response Example :**
```json
[
  {
    "id": 2,
    "name": "Plato",
    "birth_place": "Athens, Greece",
    "stream_of_thought_id": 1,
    "period_id": 1,
    "resume": "A student of Socrates and a teacher of Aristotle, Plato founded the Academy in Athens.",
    "birth_year": -428,
    "dead_year": -348,
    "wiki": "https://en.wikipedia.org/wiki/Plato",
    "img_url": "https://philosapi.vercel.app/api/images/plato.jpg",
    "stream_of_thought_name": "Classical Philosophy",
    "period_name": "Ancient Greece"
  },
  // ... additional philosophers
]
```

#### Get Philosophers by Stream of Thought ID

**Endpoint:** `GET /philosophers/stream-of-thought/:id`

**Description:** Get a list of philosophers by a stream of thought's ID.

**Parameters:**
- `id` (required): The ID of the stream of thought.

**Response:**
- `200 OK`: Successful response with an array of philosophers.
- `404 Not Found`: Stream of thought not found.

**Response Example :**
```json
[
  {
    "id": 2,
    "name": "Plato",
    "birth_place": "Athens, Greece",
    "stream_of_thought_id": 1,
    "period_id": 1,
    "resume": "A student of Socrates and a teacher of Aristotle, Plato founded the Academy in Athens.",
    "birth_year": -428,
    "dead_year": -348,
    "wiki": "https://en.wikipedia.org/wiki/Plato",
    "img_url": "https://philosapi.vercel.app/api/images/plato.jpg",
    "stream_of_thought_name": "Classical Philosophy",
    "period_name": "Ancient Greece"
  },
  // ... additional philosophers
]
```

#### Search Philosophers by Period

**Endpoint:** `GET /philosophers

/period`

**Description:** Get a list of philosophers based on a specific period.

**Parameters:**
- `period_id` (required): The ID of the period.

**Response:**
- `200 OK`: Successful response with an array of philosophers.
- `404 Not Found`: Period not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Socrates",
    "birth_place": "Athens, Greece",
    "stream_of_thought_id": 1,
    "period_id": 1,
    "resume": "One of the founders of Western philosophy, Socrates laid the groundwork for ethics and the Socratic method.",
    "birth_year": -469,
    "dead_year": -399,
    "wiki": "https://en.wikipedia.org/wiki/Socrates",
    "img_url": "https://philosapi.vercel.app/api/images/socrates.jpg",
    "stream_of_thought_name": "Classical Philosophy",
    "period_name": "Ancient Greece"
  },
  // ... additional philosophers
]
```

#### Get Philosophers by Period ID

**Endpoint:** `GET /philosophers/period/:id`

**Description:** Get a list of philosophers by a period's ID.

**Parameters:**
- `id` (required): The ID of the period.

**Response:**
- `200 OK`: Successful response with an array of philosophers.
- `404 Not Found`: Period not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Socrates",
    "birth_place": "Athens, Greece",
    "stream_of_thought_id": 1,
    "period_id": 1,
    "resume": "One of the founders of Western philosophy, Socrates laid the groundwork for ethics and the Socratic method.",
    "birth_year": -469,
    "dead_year": -399,
    "wiki": "https://en.wikipedia.org/wiki/Socrates",
    "img_url": "https://philosapi.vercel.app/api/images/socrates.jpg",
    "stream_of_thought_name": "Classical Philosophy",
    "period_name": "Ancient Greece"
  },
  // ... additional philosophers
]
```

### Works

#### Get Philosophers' Works

**Endpoint:** `GET /works`

**Description:** Get a list of philosophical works.

**Parameters:**
- `limit` (optional): Limit of elements to return.
- `offset` (optional): Number of elements to skip.
- `title` (optional): Title of the work.

**Response:**
- `200 OK`: Successful response with an array of works.
- `400 Bad Request`: Bad input parameter.

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "The Republic",
    "philosopher_id": 2,
    "wiki": "https://en.wikipedia.org/wiki/The_Republic",
    "philosopher": "Plato"
  },
  // ... additional works
]
```

#### Get Work by ID

**Endpoint:** `GET /works/:id`

**Description:** Get detailed information about a philosophical work by its ID.

**Parameters:**
- `id` (required): The ID of the work.

**Response:**
- `200 OK`: Successful response with details of the work.
- `404 Not Found`: Work not found.

**Response Example:**
```json
{
  "id": 1,
  "title": "The Republic",
  "philosopher_id": 2,
  "wiki": "https://en.wikipedia.org/wiki/The_Republic",
  "philosopher": "Plato"
}
```

#### Search Works by Philosopher's Name

**Endpoint:** `GET /works/philosopher`

**Description:** Get a list of works by a specific philosopher.

**Parameters:**
- `philosopher_name` (required): The name of the philosopher.

**Response:**
- `200 OK`: Successful response with an array of works.
- `404 Not Found`: Philosopher not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "The Republic",
    "philosopher_id": 2,
    "wiki": "https://en.wikipedia.org/wiki/The_Republic",
    "philosopher": "Plato"
  },
  // ... additional works
]
```

#### Get Works by Philosopher ID

**Endpoint:** `GET /works/philosopher/:id`

**Description:** Get a list of works by a philosopher's ID.

**Parameters:**
- `id` (required): The ID of the philosopher.

**Response:**
- `200 OK`: Successful response with an array of works.
- `404 Not Found`: Philosopher not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "The Republic",
    "philosopher_id": 2,
    "wiki": "https://en.wikipedia.org/wiki/The_Republic",
    "philosopher": "Plato"
  },
  // ... additional works
]
```

### Citations

#### Get Philosophers' Citations

**Endpoint:** `GET /citations`

**Description:** Get a list of citations from philosophers.

**Parameters:**
- `limit` (optional): Limit of elements to return.
- `offset` (optional): Number of elements to skip.
- `text` (optional): Text content of the citation.

**Response:**
- `200 OK`: Successful response with an array of citations.
- `400 Bad Request`: Bad input parameter.

**Response Example:**
```json
[
  {
    "id": 1,
    "text": "The only thing I know is that I know nothing.",
    "philosopher_id": 1,
    "source": "Socratic paradox",
    "work_id": 2,
    "philosopher": "Socrates"
  },
  // ... additional citations
]
```

#### Get Citation by ID

**Endpoint:** `GET /citations/:id`

**Description:** Get detailed information about a citation by its ID.

**Parameters:**
- `id` (required): The ID of the citation.

**Response:**
- `200 OK`: Successful response with details of the citation.
- `404 Not Found`: Citation not found.

**Response Example:**
```json
{
  "id": 1,
  "text": "The only thing I know is that I know nothing.",
  "philosopher_id": 1,
  "source": "Socratic paradox",
  "work_id": 2,
  "philosopher": "Socrates"
}
```

#### Search Citations by Philosopher's Name

**Endpoint:** `GET /citations/philosopher`

**Description:** Get a list of citations by a specific philosopher's name.

**Parameters:**
- `philosopher_name` (required): The name of the philosopher.

**Response:**
- `200 OK`: Successful response with an array of citations.
- `404 Not Found`: Philosopher not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "text": "The only thing I know is that I know nothing.",
    "philosopher_id": 1,
    "source": "Socratic paradox```
  "work_id": 2,
  "philosopher": "Socrates"
},
// ... additional citations
]
```

#### Get Citations by Philosopher ID

**Endpoint:** `GET /citations/philosopher/:id`

**Description:** Get a list of citations by a philosopher's ID.

**Parameters:**
- `id` (required): The ID of the philosopher.

**Response:**
- `200 OK`: Successful response with an array of citations.
- `404 Not Found`: Philosopher not found.

**Response Example:**
```json
[
  {
    "id": 1,
    "text": "The only thing I know is that I know nothing.",
    "philosopher_id": 1,
    "source": "Socratic paradox",
    "work_id": 2,
    "philosopher": "Socrates"
  },
  // ... additional citations
]
```

#### Get Random Citation

**Endpoint:** `GET /citations/random`

**Description:** Get a random citation.

**Response:**
- `200 OK`: Successful response with details of a random citation.

**Response Example:**
```json
{
  "id": 1,
  "text": "The only thing I know is that I know nothing.",
  "philosopher_id": 1,
  "source": "Socratic paradox",
  "work_id": 2,
  "philosopher": "Socrates"
}
```

### Stream of Thought

#### Get Stream of Thought

**Endpoint:** `GET /stream-of-thought`

**Description:** Get a list of streams of thought.

**Parameters:**
- `limit` (optional): Limit of elements to return.
- `offset` (optional): Number of elements to skip.

**Response:**
- `200 OK`: Successful response with an array of streams of thought.
- `400 Bad Request`: Bad input parameter.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Classical Philosophy"
  },
  // ... additional streams of thought
]
```

#### Get Stream of Thought by ID

**Endpoint:** `GET /stream-of-thought/:id`

**Description:** Get detailed information about a stream of thought by its ID.

**Parameters:**
- `id` (required): The ID of the stream of thought.

**Response:**
- `200 OK`: Successful response with details of the stream of thought.
- `404 Not Found`: Stream of thought not found.

**Response Example:**
```json
{
  "id": 1,
  "name": "Classical Philosophy"
}
```

### Periods

#### Get Periods

**Endpoint:** `GET /periods`

**Description:** Get a list of periods in philosophy.

**Parameters:**
- `limit` (optional): Limit of elements to return.
- `offset` (optional): Number of elements to skip.

**Response:**
- `200 OK`: Successful response with an array of periods.
- `400 Bad Request`: Bad input parameter.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Ancient Greece"
  },
  // ... additional periods
]
```

#### Get Period by ID

**Endpoint:** `GET /periods/:id`

**Description:** Get detailed information about a period by its ID.

**Parameters:**
- `id` (required): The ID of the period.

**Response:**
- `200 OK`: Successful response with details of the period.
- `404 Not Found`: Period not found.

**Response Example:**
```json
{
  "id": 1,
  "name": "Ancient Greece"
}
```
