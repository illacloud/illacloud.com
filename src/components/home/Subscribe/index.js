import { useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createPortal } from 'react-dom'
import { RemoveScroll } from 'react-remove-scroll'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { Input } from '@illa-design/input'
import { Button } from '@illa-design/button'
import { ReactComponent as SubscribeCover } from '@/img/home/subscribe-cover.svg'
import styles from './style.module.css'

const subscribe = async (form) => {
  await fetch('https://email.dev.illasoft.com/v1/subscribe', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res, 'res')
    })
    .catch(() => {})
}

export const SubscribeModal = ({ visible, onClose }) => {
  const { t } = useTranslation('home')
  const formRef = useRef()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  })

  if (!visible) return null
  let container
  if (document) {
    container = document.getElementById('modal')
  }

  return createPortal(
    <RemoveScroll>
      <div className={clsx(styles.modalBg, visible ? 'visible' : 'hidden')} onCancel={onClose}>
        <div className={styles.container}>
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
            <form ref={formRef} onSubmit={handleSubmit(subscribe)}>
              <div>
                <div className={styles.formLabel}>{t('subscribe.form.email.label')}</div>
                <Controller
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder={t('subscribe.form.email.placeholder')}
                      error={!!errors?.email}
                      maxLength={200}
                      borderColor="techPurple"
                    />
                  )}
                  rules={{
                    required: t('subscribe.form.email.required'),
                  }}
                  control={control}
                  name="email"
                />
                {errors?.email && <div>{errors?.email.message}</div>}
              </div>
              <Button
                colorScheme="techPurple"
                onClick={() => {
                  formRef?.current?.requestSubmit()
                }}
              >
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
