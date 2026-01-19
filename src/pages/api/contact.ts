import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // input validation
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({
                    message: "Missing required fields",
                }),
                { status: 400 }
            );
        }

        const supabaseUrl = import.meta.env.SUPABASE_URL;
        const supabaseKey = import.meta.env.SUPABASE_KEY;

        if (!supabaseUrl || !supabaseKey) {
            return new Response(
                JSON.stringify({
                    message: "Server misconfiguration: Missing Supabase credentials in Vercel environment variables",
                }),
                { status: 500 }
            );
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error } = await supabase
            .from("contact_submissions")
            .insert([
                { name, email, subject, message },
            ]);

        if (error) {
            console.error("Supabase error:", error);
            return new Response(
                JSON.stringify({
                    message: "Failed to save submission",
                    error: error.message
                }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                message: "Success!",
            }),
            { status: 200 }
        );
    } catch (e: any) {
        console.error("API error:", e);
        return new Response(
            JSON.stringify({
                message: "Internal server error",
                error: e.message
            }),
            { status: 500 }
        );
    }
};
