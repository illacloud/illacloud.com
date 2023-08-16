import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { Options } from './options'
import { Partner } from './partner'

export const BuildWith = ({ descList, options, partner }) => {
  const { t } = useTranslation('hacktober')

  return (
    <div className={style.buildWithContainer}>
      <div className={style.buildWithListContainer}>
        <div className='flex flex-col gap-[12px] xl:gap-[16px]'>
            {
              descList.map((desc) => (
                <div key={desc} className='flex gap-[12px] xl:gap-[16px] items-start'>
                  <img src="https://cdn.illacloud.com/official-website/img/hacktoberFest/descListIcon.svg" width="16" alt='' />
                  <span className={clsx(style.cardDesc, style.interFont)}>{t(desc)}</span>
                </div>
              ))
            }
        </div>
        <Options options={options} />
      </div>
      <Partner partner={partner} />
    </div>
  )
}
