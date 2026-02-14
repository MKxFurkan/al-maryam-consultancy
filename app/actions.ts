"use server";

import { prisma } from "@/lib/db";
import { signIn, auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createJobAction(formData: FormData) {
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;
    const salary = formData.get("salary") as string;
    const description = formData.get("description") as string;

    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await prisma.job.create({
        data: {
            title,
            location,
            type,
            salary,
            description,
            // Default isActive is true
        }
    });

    revalidatePath("/admin/jobs");
    revalidatePath("/admin");
    revalidatePath("/jobs");
    redirect("/admin/jobs");
}

export async function deleteJobAction(id: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await prisma.job.delete({
        where: { id }
    });
    revalidatePath("/admin/jobs");
    revalidatePath("/admin");
    revalidatePath("/jobs");
}

export async function createBlogAction(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    // content might be long, ensure prisma model supports it (String is text in postgres)
    const author = formData.get("author") as string;

    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await prisma.blog.create({
        data: {
            title,
            content,
            author,
        }
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/admin");
    revalidatePath("/blog");
    redirect("/admin/blogs");
}

export async function deleteBlogAction(id: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await prisma.blog.delete({
        where: { id }
    });
    revalidatePath("/admin/blogs");
    revalidatePath("/admin");
    revalidatePath("/blog");
}
export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/admin",
        });
    } catch (error) {
        if ((error as Error).message.includes("CredentialsSignin")) {
            return "Invalid email or password";
        }
        throw error;
    }
}


export async function createApplicationAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobId = formData.get("jobId") as string;
    // Mock file upload - In production use Vercel Blob
    // const file = formData.get("resume") as File;
    // const resumeUrl = await put(file.name, file, { access: 'public' });

    const resumeUrl = "https://example.com/resume-mock.pdf";

    await prisma.application.create({
        data: {
            name,
            email,
            phone,
            resumeUrl,
            jobId
        }
    });

    redirect("/jobs/thank-you");
}
