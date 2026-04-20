// api/trigger.js — BeLang Daily Bot Trigger
// Creates a session and sends a message to the agent
// Called by cron-job.org every morning at 9:00 ET

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const AGENT_ID = "agent_011CaE5YckDfPLRj228anMZa";
const ENVIRONMENT_ID = "env_01W2SDkTmXteqQAmV715paYH";
const VAULT_ID = "vlt_011CaE5LBufA2pUfERxGiEDX";
const CRON_SECRET = process.env.CRON_SECRET;

const HEADERS = {
  "x-api-key": ANTHROPIC_API_KEY,
  "anthropic-version": "2023-06-01",
  "anthropic-beta": "managed-agents-2026-04-01",
  "content-type": "application/json",
};

export default async function handler(req, res) {
  // Security check
  const auth = req.headers["authorization"];
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Step 1: Create session
    const sessionRes = await fetch("https://api.anthropic.com/v1/sessions", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        agent: AGENT_ID,
        environment_id: ENVIRONMENT_ID,
        vault_ids: [VAULT_ID],
      }),
    });

    const session = await sessionRes.json();

    if (!sessionRes.ok) {
      throw new Error(`Failed to create session: ${JSON.stringify(session)}`);
    }

    const sessionId = session.id;
    console.log("Session created:", sessionId);

    // Step 2: Send message to start the agent
    const eventRes = await fetch(
      `https://api.anthropic.com/v1/sessions/${sessionId}/events`,
      {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          events: [
            {
              type: "user.message",
              content: [
                {
                  type: "text",
                  text: "Send the daily digest now",
                },
              ],
            },
          ],
        }),
      }
    );

    const event = await eventRes.json();

    if (!eventRes.ok) {
      throw new Error(`Failed to send event: ${JSON.stringify(event)}`);
    }

    console.log("Event sent successfully");

    return res.status(200).json({
      ok: true,
      session_id: sessionId,
      message: "Daily digest triggered successfully",
    });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
