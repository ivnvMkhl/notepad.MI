// fetch constructor
function fetchServer(
  method,
  action,
  data = '',
  headers = {
    'Content-Type': 'application/json',
  }
) {
  const SERVER_URL = 'http://localhost:5000/api'
  return fetch(`${SERVER_URL}/${action}`, {
    method: method,
    body: method === 'POST' ? JSON.stringify(data) : undefined,
    headers: headers,
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return res.json().then((err) => {
      throw Error(err.message)
    })
  })
}

// auth fetch

export function registrationRequest(email, password) {
  return fetchServer('POST', 'registration', { email, password })
}

export function loginRequest(email, password) {
  return fetchServer('POST', 'login', { email, password })
}

export function logoutRequest(email) {
  return fetchServer('POST', 'logout', { email })
}

export function forgotRequest(forgotEmail) {
  return fetchServer('POST', 'forgot', { forgotEmail })
}

export function refreshTokenRequest() {
  return fetchServer('GET', 'refresh')
}

// notes fetch

export function getAllNotesRequest(accessToken) {
  return fetchServer(
    'GET',
    'notes/getall',
    {},
    {
      Authorization: `Bearer ${accessToken}`,
    }
  )
}
export function saveNotesRequest(note, accessToken) {
  return fetchServer(
    'POST',
    'notes/save',
    { ...note },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  )
}
export function deleteNotesRequest(noteId, accessToken) {
  return fetchServer(
    'POST',
    'notes/delete',
    { noteId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  )
}
export function deleteAllNotesRequest(accessToken) {
  return fetchServer(
    'POST',
    'notes/deleteall',
    {},
    {
      Authorization: `Bearer ${accessToken}`,
    }
  )
}
