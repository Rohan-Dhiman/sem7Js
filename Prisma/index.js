
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      posts: {
        create: { title: 'Hello World' },
      },
    },
  });
  console.log('Created user:', user);

  // Fetch all users with their posts
  const users = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log('All users:', users);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
