// api/trigger.js — BeLang Daily Bot Trigger

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const AGENT_ID = "agent_011CaE5YckDfPLRj228anMZa";
const ENVIRONMENT_ID = "env_01W2SDkTmXteqQAmV715paYH";
const VAULT_ID = "vlt_011CaE5LBufA2pUfERxGiEDX";

const HEADERS = {
  "x-api-key": ANTHROPIC_API_KEY,
  "anthropic-version": "2023-06-01",
  "anthropic-beta": "managed-agents-2026-04-01",
  "content-type": "application/json",
};

module.exports = async function handler(req, res) {
  try {
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
      return res.status(500).json({ error: "Session failed", detail: session });
    }

    const sessionId = session.id;

    const eventRes = await fetch(
      `https://api.anthropic.com/v1/sessions/${sessionId}/events`,
      {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          events: [
            {
              type: "user.message",
              content: [{ type: "text", text: "Send the daily digest now" }],
            },
          ],
        }),
      }
    );

    const event = await eventRes.json();

    if (!eventRes.ok) {
      return res.status(500).json({ error: "Event failed", detail: event });
    }

    return res.status(200).json({ ok: true, session_id: sessionId });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
