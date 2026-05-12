import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    if (!name || !email) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, timestamp: new Date().toISOString() })
        });
        
        if (response.ok) {
          return NextResponse.json({ ok: true });
        }
      } catch (googleError) {
        console.error('Google Sheets error:', googleError);
      }
    }

    // If Google Sheets isn't set up or fails, still return success to user
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
