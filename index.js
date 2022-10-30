const mypass = prompt('Введите пароль')
const errMsg =
  'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
let num = false
let ltr = false
let bla = ''

if (mypass === null || mypass.length < 3 || mypass.length > 30) {
  alert(errMsg)
} else {
  for (let pass of mypass) {
    while (ltr === false) {
      if (pass.codePointAt(0) >= 65 && pass.codePointAt(0) <= 90) {
        ltr = true
      } else {
        break
      }
    }

    while (num === false) {
      if (pass.codePointAt(0) >= 48 && pass.codePointAt(0) <= 58) {
        num = true
      } else {
        break
      }
    }

    if (num && ltr) {
      alert('Пароль валидный. Добро пожаловать в аккаунт!')
      break
    }
  }

  if (!num || !ltr) {
    alert(errMsg)
  }
}
