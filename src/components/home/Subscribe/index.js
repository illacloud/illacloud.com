import { useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createPortal } from 'react-dom'
import { RemoveScroll } from 'react-remove-scroll'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { Input } from '@illa-design/input'
import { Button } from '@illa-design/button'
import { ReactComponent as SubscribeCover } from '@/img/home/subscribe-cover.svg'
import styles from './style.module.css'
import { Toast } from '@/components/home/Toast'
import { useRouter } from "next/router";

export const SubscribeModal = ({ visible, onClose }) => {
  const { t } = useTranslation('home')
  const router = useRouter()
  const formRef = useRef()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  })

  const [loading, setLoading] = useState()

  const subscribe = async (form) => {
    if (loading) return
    setLoading(true)
    await fetch('https://email.dev.illasoft.com/v1/subscribe', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Accept-Language': router.locale === 'zh' ? 'zh-CN' : 'en-US',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setLoading(false)
        if (res.ok) {
          if (res.status === 201) {
            Toast.info(`😊 ${t('subscribe.message.check-email')}`, 2)
          } else if (res.status === 200) {
            Toast.info(`😊 ${t('subscribe.message.repeat')}`, 2)
          }
          setTimeout(() => {
            onClose?.()
          }, 300)
        } else {
          Toast.info(`😣 ${t('subscribe.message.failed')}`, 2)
        }
      })
      .catch(() => {})
  }

  if (!visible) return null
  let container
  if (document) {
    container = document.getElementById('modal')
  }

  return createPortal(
    <RemoveScroll>
      <div className={clsx(styles.modalBg, visible ? 'visible' : 'hidden')} onCancel={onClose}>
        <div className={styles.container}>
          <img
            className={styles.closeIcon}
            src={require('@/img/home/close.png').default}
            alt="closeIcon"
            onClick={onClose}
          />
          <div>
            <SubscribeCover className={'hidden sm:block'} />
            <img
              className={'block sm:hidden'}
              src={require('@/img/home/m-subscribe-cover.png').default}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{t('subscribe.title')}</div>
            <div className={styles.description}>{t('subscribe.description')}</div>
            <form
              autoComplete="off"
              className="w-[100%]"
              ref={formRef}
              onSubmit={handleSubmit(subscribe, (errors) => {
                Toast.info(`😣 ${t('subscribe.form.email.required')}`, 1)
              })}
            >
              <div>
                <div className={styles.formLabel}>{t('subscribe.form.email.label')}</div>
                <Controller
                  render={({ field }) => (
                    <Input
                      {...field}
                      size="large"
                      type="email"
                      autoComplete="off"
                      placeholder={t('subscribe.form.email.placeholder')}
                      error={!!errors?.email}
                      maxLength={200}
                      borderColor="techPurple"
                      variant="fill"
                    />
                  )}
                  rules={{
                    required: t('subscribe.form.email.required'),
                  }}
                  control={control}
                  name="email"
                />
              </div>
              <Button className={styles.formSubmitButton} colorScheme="techPurple" size="large" loading={loading}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </RemoveScroll>,
    container
  )
}
