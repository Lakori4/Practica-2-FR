import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
   POST: async (req, _ctx) => {
    const form = await req.formData();
    const word = form.get("word")
    const headers = new Headers()
    headers.set("location", `/dictionary/${word}`);
    return new Response(null, {
      status: 303,
      headers,
    });
  } 
}


export default function Home() {
  return (
    <div>
      <form method="POST">
        <input type="text" name="word" value="" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
