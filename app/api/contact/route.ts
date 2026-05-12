import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    if (!name || !email) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })

    const formspreeUrl = 'https://formspree.io/f/mjglllpw'

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message || '')

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      return NextResponse.json({ ok: true })
    } else {
      const result = await response.json()
      console.error('Formspree error:', result)
      return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 })
    }
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
