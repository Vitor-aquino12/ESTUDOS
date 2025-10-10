const myButton = document.querySelector('button')

myButton.addEventListener('click', () => {
  const chars =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ'

  const passwordLength = 10
  let password = ''

  for (let i = 0; i < passwordLength; i++) {
    let aleatorio = Math.floor(Math.random() * chars.length)

    password += chars.substring(aleatorio, aleatorio + 1)
  }
  document.querySelector('p').innerHTML = password
})
