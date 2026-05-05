import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando el seeding de la base de datos...");

  // Encriptamos la clave por defecto (admin123)
  const hashedPassword = await bcrypt.hash('1234', 10);

  // Admin 1 (Master / Developer)
  const admin1 = await prisma.user.upsert({
    where: { username: 'juanadmin' },
    update: {},
    create: {
      name: 'Juan Álvarez',
      username: 'juanadmin',
      password: hashedPassword,
      phone: '04129164371', // Modifica con tu número real
      role: 'ADMIN',
      plan: 'PREMIUM',
      hasPaid: true,
    },
  });

  // Admin 2 (Cliente / Propietario)
  const admin2 = await prisma.user.upsert({
    where: { username: 'domenico' },
    update: {},
    create: {
      name: "Domenico D'Orazio",
      username: 'domenico',
      password: hashedPassword,
      phone: '04126900224', 
      role: 'ADMIN',
      plan: 'PREMIUM',
      hasPaid: true,
    },
  });

  console.log("✅ Base de datos inicializada correctamente con los siguientes ADMINS:");
  console.log(`1. @${admin1.username}`);
  console.log(`2. @${admin2.username}`);
}

main()
  .catch((e) => {
    console.error("❌ Error durante el seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });