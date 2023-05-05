import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RemoveScroll } from 'react-remove-scroll'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import { Toast } from '@/components/home/Toast'
import { bookFormContent } from '@/constants/content'

export const BookDemo = ({ visible, onChangeShow }) => {
  const { t } = useTranslation('home')
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onSubmit',
  })

  const [disabled, setDisabled] = useState(true)

  const onSubmit = async (val) => {
    if (!disabled) return
    setDisabled(false)
    await fetch(
      'https://lark.illasoft.com/lark/bookForm',
      {
        method: 'POST',
        body: JSON.stringify(val),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(async (res) => {
        const resJSON = await res.json()
        if (resJSON.message) {
          onChangeShow()
          reset()
          Toast.info('😀 success', 2)
        } else throw new Error()
      })
      .catch(() => {
        Toast.info('😣 fail', 2)
      })
      .finally(() => {
        setDisabled(true)
      })
  }

  if (!visible) return null

  return (
    <div className={style.book}>
      <RemoveScroll className='w-full'>
        <div className={style.bookContainer}>
          <div className="hidden xl:block w-[280px]">
            <img
              src='https://cdn.illacloud.com/official-website/img/home/book_image.png'
              alt="book a demo"
            />
          </div>
          <div className='w-full xl:w-auto'>
            <div className="w-full">
              <img
                className="hidden xl:block absolute top-[24px] right-[24px] cursor-pointer"
                src='https://cdn.illacloud.com/official-website/img/home/close.png'
                alt="closeIcon"
                onClick={onChangeShow}
              />
              <p className={style.bookTitle}>
                <span>{t('bookFrom.title')}</span>
                <img
                  className="block xl:hidden cursor-pointer"
                  src={require('@/img/home/close_white.svg').default}
                  width="20"
                  alt="closeIcon"
                  onClick={onChangeShow}
                />
              </p>
            </div>
            <form
              className="font-[500] text-[17px] leading-[22px] xl:text-[14px]"
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={clsx('w-full', style.colInputItem)}>
                <span>{t('partnerFrom.form.name.label')}</span>
                <div className={clsx('flex flex-row justify-end gap-[8px]')}>
                  <input
                    className={clsx(style.input, 'w-[142px]')}
                    {...register('firstName')}
                    placeholder={t('partnerFrom.form.name.placeholder-1')}
                  />
                  <input
                    className={clsx(style.input, 'xl:w-[250px] w-[193px]')}
                    {...register('lastName')}
                    placeholder={t('partnerFrom.form.name.placeholder-2')}
                  />
                </div>
              </div>
              {bookFormContent.map(({ label, name, required, pattern, placeholder }) => (
                <div key={label} className={clsx('w-full', style.colInputItem)}>
                  <div className="flex flex-row items-center gap-[4px]">
                    {required && (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41817 1.09961C4.52862 1.09961 4.61812 1.18922 4.61812 1.29968L4.61726 3.3446L6.45369 2.74829C6.55874 2.71416 6.6715 2.77154 6.70564 2.87659L6.95296 3.63745C6.98709 3.7425 6.92959 3.8554 6.82454 3.88953L4.9742 4.48962L6.19942 6.17627C6.26434 6.26563 6.24459 6.39065 6.15523 6.45557L5.50801 6.92578C5.41865 6.9907 5.29351 6.97095 5.22859 6.88159L3.96223 5.13757L2.68904 6.89075C2.62412 6.98011 2.49898 6.99999 2.40962 6.93506L1.7624 6.46484C1.67304 6.39992 1.65329 6.27479 1.71821 6.18542L2.97322 4.45569L1.16853 3.86963C1.06348 3.8355 1.00598 3.72273 1.04011 3.61768L1.28731 2.85681C1.32144 2.75176 1.43421 2.69426 1.53926 2.72839L3.41719 3.33765L3.41817 1.29968C3.41817 1.18922 3.50766 1.09961 3.61812 1.09961H4.41817Z"
                          fill="#FF4747"
                        />
                      </svg>
                    )}
                    <span>{t(label)}</span>
                  </div>
                  <div className={clsx('flex flex-row justify-end gap-[8px]')}>
                    <input
                      className={clsx(style.input, 'xl:w-[400px] w-[343px]')}
                      {...register(`${name}`, {
                        required,
                        pattern,
                      })}
                      placeholder={placeholder ? placeholder : ''}
                    />
                  </div>
                </div>
              ))}
              <div className={clsx(style.mdSubmit, 'xl:h-[96px] h-[120px]')}>
                <button
                  type="submit"
                  disabled={!disabled || !isValid}
                  className={clsx(style.button, 'w-[343px] xl:w-[400px]')}
                >
                  {t('partnerFrom.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </RemoveScroll>
    </div>
  )
}
