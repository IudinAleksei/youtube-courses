import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1> Страница информации</h1>
      <p>
        Белая береза
        Под моим окном
        Принакрылась снегом,
        Точно серебром.

        На пушистых ветках
        Снежною каймой
        Распустились кисти
        Белой бахромой.

        И стоит береза
        В сонной тишине,
        И горят снежинки
        В золотом огне.

        А заря, лениво
        Обходя кругом,
        обсыпает ветки
        Новым серебром.
      </p>
      <button
        className="btn"
        onClick={() => history.push('/')}
      >
        Обратно к списку дел
      </button>
    </>
  )
}
