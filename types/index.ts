
export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone: string
  service: string
  message: string
}

export interface HardwareItem {
  name: string
  icon: React.ComponentType
  description: string
  startingPrice: string
  features: string[]
  models: HardwareModel[]
}

export interface HardwareModel {
  name: string
  specs: string
  price: string
}

export interface Testimonial {
  text: string
  author: string
  company: string
  role: string
  rating: number
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface CaseStudy {
  icon: React.ComponentType
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    devices: string
    timeline: string
    [key: string]: string
  }
  color: string
}
