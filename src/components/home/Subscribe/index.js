import { useTranslation } from 'next-i18next'
import { ReactComponent as SubscribeCover } from '@/img/home/subscribe-cover.svg'
import styles from './style.module.css'
import { Input } from '@illa-design/input'
import { Button } from '@illa-design/button'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import * as PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const subscribe = async (email) => {
  console.log(email, 'email')
  await fetch('https://email.dev.illasoft.com/v1/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res, 'res')
    })
    .catch(() => {})
}

function Controller(props) {
  return null
}

Controller.propTypes = {
  control: PropTypes.any,
  render: PropTypes.func,
  name: PropTypes.string,
  rules: PropTypes.shape({ required: PropTypes.any }),
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
    <div className="modal">
      <div className={clsx(styles.modalBg, visible ? 'visible' : 'hidden')} onCancel={onClose}>
        <SubscribeCover className={styles.cover} />
        <div className={styles.content}>
          <div className={styles.title}>{t('subscribe.title')}</div>
          <div className={styles.description}>{t('subscribe.description')}</div>
          <form ref={formRef} onSubmit={handleSubmit(subscribe)}>
            <div>
              <label>{t('subscribe.form.email.label')}</label>
              <Controller
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={t('subscribe.form.email.placeholder')}
                    error={!!errors?.resourceName}
                    maxLength={200}
                    borderColor="techPurple"
                  />
                )}
                rules={{
                  required: t('subscribe.form.email.required'),
                }}
                control={control}
                name="resourceName"
              />
              {errors?.resourceName && <div>{errors?.resourceName.message}</div>}
            </div>
            <Button
              w={'100%'}
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
    </div>,
    container
  )
}
