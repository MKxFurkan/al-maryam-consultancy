console.log("Checking DATABASE_URL...");
if (process.env.DATABASE_URL) {
    console.log("DATABASE_URL is defined. Length:", process.env.DATABASE_URL.length);
    // Do not log the full URL for security
    console.log("Starts with:", process.env.DATABASE_URL.substring(0, 15));
} else {
    console.log("DATABASE_URL is UNDEFINED");
}
