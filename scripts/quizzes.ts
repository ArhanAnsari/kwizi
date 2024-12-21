const { PrismaClient } = require("@prisma/client");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "676482a0a9fd4923c30ff2d7", // Replace with the actual category ID
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "6764829fa9fd4923c30ff2d6",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryId: "676482a0a9fd4923c30ff2d7",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "6764829fa9fd4923c30ff2d4",
  },
  {
    title: "Biology",
    description: "Test your knowledge of physics",
    categoryId: "6764829fa9fd4923c30ff2d4",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of physics",
    categoryId: "6764829fa9fd4923c30ff2d4",
  },
];

async function seedQuizzes() {
  quizzesPrisma = new PrismaClient();

  console.log("Seeding quizzes...");

  for (const quiz of quizzes) {
    const craetedQuiz = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Created quiz: ", `${craetedQuiz.title}`);
  }

  console.log("Seeding quizzes completed.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Error seeding quizzes: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });
