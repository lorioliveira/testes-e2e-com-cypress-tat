// Import's (ordem alfabética)
import 'cypress-iframe'
import 'cypress-mailosaur'

import './commands'


import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()




// Retirar infos lixos da execução dos passos a passos quando o teste roda
const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none };'
  style.setAttribute('data-hide-command-log-request', '')
  app.document.head.appendChild(style)
}