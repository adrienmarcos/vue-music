import { Form as VeeForm, Field as VeeField } from 'vee-validate'

export default {
  install(app: any): void {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
}
