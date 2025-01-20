'use client'

import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Container className='py-44'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='display-medium md:display-large text-accent mb-8'>
          Contact Us
        </h1>
        <p className='text-muted-foreground mb-12'>
          Get in touch with our team of cybersecurity experts. We&apos;re here
          to help protect your digital assets and answer any questions you may
          have about our services.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <Input {...register('name')} placeholder='Your Name' />
          </div>
          <div>
            <Input {...register('email')} type='email' placeholder='Email' />
          </div>
          <div>
            <Input {...register('subject')} placeholder='Subject' />
          </div>
          <div>
            <Textarea
              {...register('message')}
              placeholder='Your Message'
              className='min-h-[150px]'
            />
          </div>
          <Button type='submit' size='lg'>
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  )
}
