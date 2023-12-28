import Mailgen from 'mailgen'
import { env } from '../env'

export const mailGenerator = new Mailgen({
  theme: 'cerberus',

  product: {
    logo: `${env.BASE_URL}/ logo.webp`,
    name: 'Engercon Engenharia',
    link: env.BASE_URL,
  },
})
