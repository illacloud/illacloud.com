import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Toast } from '@/components/home/Toast'
import { useRouter } from 'next/router'
import { LoadingIcon } from '@illa-design/icon'

export function NewsletterForm({ action }) {
  const router = useRouter()
  const formRef = useRef()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  })
  const [loading, setLoading] = useState()
  const [sent, setSent] = useState()

  const subscribe = async (form) => {
    if (loading || sent) return
    setLoading(true)
    await fetch('http://email.illasoft.com/v1/subscribe', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Accept-Language': router.locale,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setLoading(false)
        if (res.ok) {
          setSent(true)
          if (res.status === 201) {
            Toast.info(`😊 You are all set. Please check your inbox.`, 3)
          } else if (res.status === 200) {
            Toast.info(`😊 You have subscribed. Do not re-subscribe.`, 3)
          }
          setTimeout(() => {
            setSent(false)
          }, 3000)
        } else {
          Toast.info(`😣 Failed to subscribe. Please try again later.`, 2)
        }
      })
      .catch((e) => {
        console.error(e)
        setLoading(false)
        Toast.info(`😣 Failed to subscribe. Please try again later.`, 2)
      })
  }

  return (
    <form
      ref={formRef}
      className="flex flex-wrap -mx-2"
      onSubmit={handleSubmit(subscribe, (errors) => {
        Toast.info(`😣 ${errors.email.message}`, 1)
      })}
    >
      <div className="px-2 grow-[9999] basis-64 mt-3">
        <div className="group relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
          >
            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
            <path d="m6 7 6 5 6-5" />
          </svg>
          <input
            id="email"
            type="email"
            required
            aria-label="Email address"
            className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
            placeholder="Subscribe via email"
            {...register('email', {
              required: 'Enter your email.',
              pattern: {
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                message: 'Please enter the correct email.',
              },
            })}
          />
        </div>
      </div>
      <div className="px-2 grow flex mt-3">
        <button
          disabled={loading}
          className="min-w-[95px] flex items-center justify-center bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
        >
          {loading ? <LoadingIcon spin={true} /> : 'Subscribe'}
        </button>
      </div>
    </form>
  )
}
