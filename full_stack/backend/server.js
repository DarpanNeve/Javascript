import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus!",
    },
    {
      id: 2,
      question:
        "Did you hear about the mathematician who's afraid of negative numbers?",
      answer: "He'll stop at nothing to avoid them!",
    },
    {
      id: 3,
      question: "Hear about the new restaurant called Karma?",
      answer: "There’s no menu: You get what you deserve.",
    },
    {
      id: 4,
      question:
        "Did you hear about the actor who fell through the floorboards?",
      answer: "He was just going through a stage.",
    },
    {
      id: 5,
      question: "Did you hear about the claustrophobic astronaut?",
      answer: "He just needed a little space.",
    },
    {
      id: 6,
      question: "Why don't scientists trust atoms?",
      answer: "Because they make up everything.",
    },
    {
      id: 7,
      question: "What do you call someone with no body and no nose?",
      answer: "Nobody knows.",
    },
    {
      id: 8,
      question: "Where are average things manufactured?",
      answer: "The satisfactory.",
    },
    {
      id: 9,
      question: "Why can't you trust atoms?",
      answer: "They make up everything.",
    },
    {
      id: 10,
      question: "What did the left eye say to the right eye?",
      answer: "Between us, something smells!",
    },
    {
      id: 11,
      question: "Why didn't the skeleton cross the road?",
      answer: "Because he had no guts.",
    },
    {
      id: 12,
      question: "What do you call a fake noodle?",
      answer: "An Impasta.",
    },
    {
      id: 13,
      question: "What do you call a belt made out of watches?",
      answer: "A waist of time.",
    },
    {
      id: 14,
      question: "Why can't bicycles stand on their own?",
      answer: "They are two tired.",
    },
    {
      id: 15,
      question: "How does a train eat?",
      answer: "hello   It goes chew, chew",
    },
  ];
  res.send(jokes);
});
