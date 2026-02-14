import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // 1. Create Admin
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.admin.upsert({
        where: { email: 'admin@almaryam.com' },
        update: {},
        create: {
            email: 'admin@almaryam.com',
            name: 'Admin',
            password: hashedPassword,
        },
    });
    console.log({ admin });

    // 2. Seed Jobs
    const jobs = [
        {
            title: "Civil Engineer",
            location: "Riyadh, Saudi Arabia",
            type: "Full-time",
            description: "Looking for experienced Civil Engineers for a major infrastructure project.",
            salary: "SAR 8000 - 12000",
            isActive: true
        },
        {
            title: "Electrician",
            location: "Dubai, UAE",
            type: "Contract",
            description: "Skilled electricians required for residential building maintenance.",
            salary: "AED 3000 - 5000",
            isActive: true
        }
    ];

    for (const job of jobs) {
        await prisma.job.create({
            data: job
        });
    }

    // 3. Seed Blogs
    const blogs = [
        {
            title: "Recruitment Trends in Gulf 2024",
            content: "The demand for skilled manpower in the construction and energy sectors is rising...",
        }
    ];

    for (const blog of blogs) {
        await prisma.blog.create({
            data: blog
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
