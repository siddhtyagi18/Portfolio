import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    if (!name || !email) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    // Try Google Sheets first (optional)
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
        // Google Sheets failed, continue to fallback
        console.error('Google Sheets error:', googleError);
      }
    }

    // Always save to local CSV as fallback
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    const filePath = path.join(dataDir, 'contacts.csv')

    const exists = fs.existsSync(filePath)
    const header = 'timestamp,name,email,message\n'
    const line = `${new Date().toISOString()},"${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${(message||'').replace(/"/g, '""')}"\n`

    if (!exists) fs.writeFileSync(filePath, header + line)
    else fs.appendFileSync(filePath, line)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
