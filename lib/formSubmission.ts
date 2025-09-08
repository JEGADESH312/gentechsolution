
import { ContactFormData } from '@/types'

export const submitContactForm = async (data: ContactFormData) => {
  // This would typically send to your backend API
  // For now, we'll simulate the submission
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email && data.name && data.phone) {
        resolve({ success: true, message: 'Form submitted successfully' })
      } else {
        reject({ success: false, message: 'Missing required fields' })
      }
    }, 2000)
  })
}
