import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeProgram, setActiveProgram] = useState('bachelor');
  const [darkMode, setDarkMode] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  // Animation when switching programs
  useEffect(() => {
    setExpandedCardIndex(null); // Reset cards when changing program
  }, [activeProgram]);

  // Theme switching
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Educational programs
  const programs = {
    bachelor: [
      {
        name: "Социология",
        code: "39.03.01",
        duration: "4 года",
        budgetSeats: 60,
        paidSeats: 25,
        description:
          "Программа подготовки бакалавров направления «Социология» ориентирована на изучение социальных явлений и процессов в современном обществе. Студенты осваивают методы сбора, обработки и анализа социологической информации, приобретают навыки проведения социологических исследований.",
        skills: [
          "Проводить социологические исследования и опросы общественного мнения",
          "Анализировать социальные процессы и прогнозировать развитие социальных ситуаций",
          "Консультировать по вопросам социальной политики",
          "Разрабатывать программы социального развития",
          "Проводить маркетинговые исследования"
        ],
        career: [
          "Социолог-исследователь",
          "Аналитик данных",
          "Специалист по работе с общественным мнением",
          "Сотрудник HR-отделов",
          "Маркетолог",
          "Политический консультант"
        ]
      },
      {
        name: "Социальная работа",
        code: "39.03.02",
        duration: "4 года",
        budgetSeats: 20,
        paidSeats: 25,
        description:
          "Программа подготовки бакалавров направления «Социальная работа» ориентирована на формирование профессиональных компетенций в области оказания социальной помощи и поддержки различным категориям населения. Студенты изучают методы социальной защиты и помощи, технологии работы с различными категориями граждан.",
        skills: [
          "Оказывать социально-психологическую поддержку",
          "Разрабатывать программы социальной поддержки",
          "Организовывать социальную работу с различными категорияями населения",
          "Проводить социальную экспертизу и диагностику",
          "Управлять социальными учреждениями"
        ],
        career: [
          "Специалист по социальной работе",
          "Специалист в государственных социальных службах",
          "Сотрудник благотворительных и некоммерческих организаций",
          "Специалист кадровых служб",
          "Менеджер социальных проектов"
        ]
      }
    ],
   master: [
  {
    name: "Социальная аналитика новых медиа",
    code: "39.04.01",
    duration: "2 года",
    form: "очная",
    budgetSeats: 15,
    paidSeats: 25,
    targetSeats: 2,
    cost: "167 700 руб./год",
    curator: "Малаканова Ольга Александровна",
    curatorPhone: "8 (903) 304-78-88",
    minScore: "50",
    description:
      "Программа сочетает специальную социологическую подготовку с обучением проектной деятельности в сфере новых медиа. Формирует компетенции по анализу цифровых коммуникаций, интернет-проектов и медиа-контента, исследованию цифрового общества и внедрению цифровых технологий в социальную практику.",
    skills: [
      "Типология и методология исследования новых медиа",
      "Критические теории в сфере новых медиа",
      "Социологические исследования в сфере новых медиа",
      "Цифровая антропология",
      "Цифровой маркетинг",
      "Управление интернет-проектами",
      "Политические коммуникации и новые медиа",
      "Интернет и социальные проблемы",
      "Литература в цифровую эпоху",
      "Психология киберзависимости",
      "Государственная политика в сфере новых медиа",
      "Правовые проблемы новых медиа",
      "Новые медиа-коммуникации в экономике",
      "Репутационный PR в Интернете"
    ],
    career: [
      "Специалист по работе в социальных медиа",
      "Интернет-аналитик",
      "Специалист по интернет-коммуникациям",
      "Маркетолог-аналитик",
      "Консультант по сетевым коммуникациям",
      "Специалист по работе в социальных сетях",
      "Контент-менеджер",
      "Бренд-менеджмент пространств"
    ],
    discounts: [
      "Льготы для победителей олимпиад",
      "Скидки для иногородних абитуриентов",
      "Социальные выплаты для многодетных"
    ]
  },
  {
    name: "Межэтнические отношения в современной России",
    code: "39.04.01",
    duration: "2 года",
    form: "очная",
    curator: "Пустарнакова Анна Александровна",
    curatorPhone: "8(927)001-88-16",
    description:
      "Образовательная программа «Межэтнические отношения в современной России» осуществляет социологическую подготовку специалистов, способных анализировать социальные и межкультурные коммуникации в эпоху глобальных изменений, применять методы социологических исследований для изучения межэтнических отношений в современной России. В процессе обучения магистранты осваивают целый спектр социологических и специальных дисциплин, что позволяет стать экспертами в национальных вопросах.",
    skills: [
      "Методология социального познания",
      "Современные методы социологических исследований",
      "Государственная национальная политика России",
      "Современное общество как новая социальная реальность",
      "Психология командообразования",
      "Этноконфликтология",
      "Инновационное предпринимательство",
      "Управление межэтническими отношениями",
      "Психология межкультурных коммуникаций",
      "Цифровые компетенции профессионального самообразования"
    ],
    career: [
      "Социолог",
      "Аналитик",
      "Специалист международных отделов",
      "Консультант по вопросам межэтнического взаимодействия",
      "Специалист муниципальных и региональных органов власти",
      "Специалист сферы образования",
      "Специалист миграционной службы",
      "Сотрудник бизнес-структур, работающих с иностранными партнерами",
      "Специалист туристических агентств, НКО"
    ]
  },
  {
    name: "Прикладная социология и социальная психология",
    code: "39.04.01",
    duration: "2 года",
    form: "очная",
    curator: "Митрофанова Светлана Юрьевна",
    curatorPhone: "8(927)266-84-24",
    description:
      "Образовательная программа «Прикладная социология и социальная психология» направлена на подготовку специалистов, владеющих не только теоретическими, но, прежде всего, практико-ориентированными знаниями в области социологии, а также социальной психологии, что позволяет выпускникам программы грамотно проводить анализ социальных и социально-психологических явлений и процессов. Обучающиеся по данной программе имеют уникальную возможность овладеть навыками проведения прикладных социологических исследований, пройдя все этапы исследования во время обучения.",
    skills: [
      "Психология стихийного массового поведения",
      "Социально-психологическое консультирование",
      "Синдром эмоционального выгорания личности",
      "Конфликтологическое консультирование",
      "Социология и социальная психология конфликта и сотрудничества",
      "Управление конфликтами. Переговоры в ситуации конфликта",
      "Теория и практика PR",
      "Меняющиеся дети в меняющемся мире",
      "Методологические проблемы прикладных исследований"
    ],
    career: [
      "Социолог",
      "Социальный аналитик",
      "Исследователь",
      "Эксперт",
      "Консультант",
      "Специалист по социальному консалтингу и аудиту",
      "Преподаватель социальных наук",
      "Государственный и муниципальный служащий",
      "Консультант профильных департаментов администрации"
    ]
  },
  {
    name: "Социология политики и государственного управления",
    code: "39.04.01",
    duration: "2 года",
    form: "очная",
    curator: "Толпыгина Ольга Анатольевна",
    curatorPhone: "8(903)309-55-11",
    description:
      "Магистерская программа направлена на сочетание базовых знаний в области социологии, социологического анализа, приемов и методов социологического исследования с фундаментальными знаниями в сфере социологии политики и государственного управления. Программа фокусируется на глубоком изучении структуры и моделей государственного управления, организации и целей деятельности государственных учреждений, на анализе коммуникации между властными органами и обществом, на повышении эффективности данной коммуникации.",
    skills: [
      "Региональные политические процессы",
      "Социальная урбанистика",
      "PR в системе политических коммуникаций",
      "Политико-административные отношения в системе государственного управления",
      "Современные концепции социологии политики",
      "Взаимодействие государства и институтов гражданского общества",
      "Визуальный язык современной политики",
      "Основы информационно-аналитической деятельности в сфере госуправления",
      "Политическая дискурсология",
      "Политические коммуникации в цифровых медиа",
      "Региональная этнополитология",
      "Электоральные процессы и технологии",
      "Политическая реклама",
      "Big Data в политических исследованиях"
    ],
    career: [
      "Сотрудник органов государственной власти",
      "Муниципальный служащий",
      "Специалист партийной системы",
      "Сотрудник общественных организаций",
      "Аналитик коммерческих структур",
      "Преподаватель, научный сотрудник",
      "Журналист, аналитик в СМИ"
      ]
      }
    ]
  };

  // Entrance exams
  const entranceExams = {
    bachelor: {
      sociology: ["Обществознание", "Русский язык", "История или Математика (по выбору)"],
      socialWork: ["Обществознание", "Русский язык", "История или Иностранный язык (по выбору)"]
    },
    master: {
      general: ["Русский язык", "Собеседование по профилю", "Индивидуальные достижения"]
    }
  };

  // Admission dates
  const admissionDates = {
    start: "20 июня 2025 г.",
    endEge: "конец июля 2025 г.",
    endExams: "начало августа 2025 г."
  };

  // Required documents
  const requiredDocuments = [
    "Документ, удостоверяющий личность (паспорт)",
    "Документ государственного образца об образовании (аттестат или диплом)",
    "Согласие на обработку персональных данных",
    "СНИЛС",
    "Фотографии 3х4 (6 шт.)",
    "Документы, подтверждающие индивидуальные достижения (при наличии)",
    "Медицинская справка (при необходимости)"
  ];

  // Contacts
  const contactInfo = {
    mainAdmissions: {
      hours: "Понедельник-пятница: 9:00 - 17:00 | Суббота: 9:00 - 13:00 | Воскресенье: выходной",
      address: "г. Самара, Московское шоссе, 34А (станция метро 'Гагаринская')",
      email: "priem@ssau.ru",
      phones: ["8 (800) 550-34-35", "8 (846) 267-48-67"]
    },
    faculty: {
      address: "г. Самара, ул. Академика Павлова, 1, корпус 22а, ауд. 510а",
      phone: "8 (846) 337-99-95",
      email: "egorova.sv@ssau.ru",
      dean: "Егорова Светлана Вячеславовна, доцент, кандидат социологических наук"
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 text-gray-800'}`}>
      {/* Custom Styles for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }
          @keyframes fadeInMap {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeInMap {
            animation: fadeInMap 0.6s ease-out forwards;
          }
          @keyframes slideDown {
            from {
              max-height: 0;
              opacity: 0;
            }
            to {
              max-height: 1000px; /* A large enough value */
              opacity: 1;
            }
          }
          .animate-slideDown {
            animation: slideDown 0.5s ease-in-out forwards;
            overflow: hidden;
          }
        `}
      </style>

      {/* Header */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-700' : 'bg-gradient-to-r from-blue-500/90 to-teal-400/90'} text-white shadow-lg sticky top-0 z-10 border-b`}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Социологический факультет</h1>
          <p className="mt-2 opacity-90">Самарский университет им. Королёва</p>
        </div>
      </header>

      {/* Theme Toggle Button */}
      <div className="absolute right-4 top-4 z-20">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          />
          {/* Track */}
          <div className={`relative w-16 h-9 rounded-full transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-700' : 'bg-blue-300'}`}>
            {/* Thumb */}
            <div className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}>
              {/* Sun Icon */}
              <div className={`transition-all duration-300 ease-in-out ${darkMode ? 'opacity-0 transform -rotate-90' : 'opacity-100 transform rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.223 4.223a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM15.777 4.223a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM19 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4.223 15.777a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM1 10a1 1 0 011-1h1a1 1 0 110 2H2a1 1 0 01-1-1zM15.777 15.777a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM10 6a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Moon Icon */}
              <div className={`absolute transition-all duration-300 ease-in-out ${darkMode ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-90'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </div>
          </div>
        </label>
      </div>


      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white shadow-sm border-gray-200'} border-b`}>
        <div className="container mx-auto px-2 sm:px-4">
          <ul className="flex flex-wrap justify-center space-x-0 sm:space-x-6 text-sm font-medium">
            <li>
              <button
                onClick={() => setActiveTab('home')}
                className={`py-4 px-3 sm:px-4 transition-all duration-300 hover:text-blue-400 ${
                  activeTab === 'home' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                } ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                aria-current={activeTab === 'home' ? 'page' : undefined}
              >
                Главная
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('programs')}
                className={`py-4 px-3 sm:px-4 transition-all duration-300 hover:text-blue-400 ${
                  activeTab === 'programs' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                } ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                aria-current={activeTab === 'programs' ? 'page' : undefined}
              >
                Направления
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('admission')}
                className={`py-4 px-3 sm:px-4 transition-all duration-300 hover:text-blue-400 ${
                  activeTab === 'admission' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                } ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                aria-current={activeTab === 'admission' ? 'page' : undefined}
              >
                Приём
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-4 px-3 sm:px-4 transition-all duration-300 hover:text-blue-400 ${
                  activeTab === 'contacts' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                } ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                aria-current={activeTab === 'contacts' ? 'page' : undefined}
              >
                Контакты
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <section className="animate-fadeIn">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Поступай на Социологический факультет
            </h2>
            <p className={darkMode ? 'mb-4 text-gray-300' : 'mb-4 text-gray-700'}>
              Качественное образование для будущих профессионалов в области социологии и социальной работы.
            </p>
            <img
              src="https://placehold.co/800x300/39A1B8/FFFFFF?text=Faculty+Banner"
              alt="Faculty Banner"
              className="w-full h-40 md:h-64 object-cover rounded-2xl shadow-xl my-6 transform transition-transform duration-300 hover:scale-105"
            />
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Наши выпускники становятся успешными социологами, аналитиками, экспертами в области управления персоналом и специалистами по социальной работе.
            </p>
          </section>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <section className="animate-fadeIn">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Направления подготовки
            </h2>

            {/* Toggle Buttons */}
            <div className={`relative flex w-fit items-center rounded-full p-1 mx-auto mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
              <button
                onClick={() => setActiveProgram('bachelor')}
                className={`z-10 px-4 py-2 transition-colors duration-300 ${
                  activeProgram === 'bachelor'
                    ? 'text-white'
                    : darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'
                }`}
                aria-pressed={activeProgram === 'bachelor'}
              >
                Бакалавриат
              </button>
              <button
                onClick={() => setActiveProgram('master')}
                className={`z-10 px-4 py-2 transition-colors duration-300 ${
                  activeProgram === 'master'
                    ? 'text-white'
                    : darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'
                }`}
                aria-pressed={activeProgram === 'master'}
              >
                Магистратура
              </button>
              <span
                className={`absolute left-0 top-0 h-full w-1/2 rounded-full transition-transform duration-300 ease-in-out ${
                  darkMode ? 'bg-blue-600' : 'bg-gradient-to-r from-blue-500 to-teal-400'
                } ${activeProgram === 'bachelor' ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden="true"
              ></span>
            </div>

            {/* Program Cards with Expand/Collapse */}
            <div className="grid grid-cols-1 gap-6 mt-8">
              {programs[activeProgram].map((program, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300'
                  } p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                      {program.name}
                    </h3>
                    <button
                      onClick={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
                      className={`p-2 rounded-full ${
                        darkMode ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      } transition-colors duration-200`}
                      aria-expanded={expandedCardIndex === index}
                    >
                      {expandedCardIndex === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className={darkMode ? 'text-gray-400 mb-4' : 'text-gray-500 mb-4'}>
                    Код: <strong>{program.code}</strong> | Форма обучения: <strong>{program.form || 'очная'},</strong> Срок: <strong>{program.duration}</strong>
                  </p>
                  <p className={darkMode ? 'text-gray-300 mb-4' : 'text-gray-700 mb-4'}>
                    {program.description}
                  </p>
                  {expandedCardIndex === index && (
                    <div id={`program-details-${index}`} className="mt-4 space-y-6 animate-slideDown">
                      {activeProgram === 'master' && program.name === 'Социальная аналитика новых медиа' && (
                        <>
                          <div>
                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Куратор:</h4>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              {program.curator} <br />
                              <a href={`tel:${program.curatorPhone.replace(/\D/g, '')}`} className={darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}>
                                {program.curatorPhone}
                              </a>
                            </p>
                          </div>
                          <div>
                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Стоимость:</h4>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              {program.cost} за год
                            </p>
                          </div>
                          <div>
                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Места:</h4>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Бюджет: <strong>{program.budgetSeats}</strong> <br />
                              Платные: <strong>{program.paidSeats}</strong> <br />
                              Целевые: <strong>{program.targetSeats}</strong>
                            </p>
                          </div>
                          <div>
                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Скидки:</h4>
                            <ul className={`list-disc list-inside ml-4 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {program.discounts.map((discount, i) => (
                                <li key={`discount-${i}`}>{discount}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Минимальные баллы:</h4>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              <strong>{program.minScore}</strong> по профилю
                            </p>
                          </div>
                        </>
                      )}
                      <div>
                        <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Чему вы научитесь:</h4>
                        <ul className={`list-disc list-inside ml-4 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {program.skills.map((skill, i) => (
                            <li key={`skill-${i}`}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Карьера:</h4>
                        <ul className={`list-disc list-inside ml-4 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {program.career.map((career, i) => (
                            <li key={`career-${i}`}>{career}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Admission Tab */}
        {activeTab === 'admission' && (
          <section className="animate-fadeIn">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Вступительные испытания
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} p-5 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
                <h3 className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl font-semibold mb-4`}>
                  Социология
                </h3>
                <ul className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {entranceExams.bachelor.sociology.map((exam, i) => (
                    <li key={`sociology-exam-${i}`} className="ml-4">{exam}</li>
                  ))}
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} p-5 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
                <h3 className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl font-semibold mb-4`}>
                  Социальная работа
                </h3>
                <ul className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {entranceExams.bachelor.socialWork.map((exam, i) => (
                    <li key={`social-work-exam-${i}`} className="ml-4">{exam}</li>
                  ))}
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} p-5 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
                <h3 className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl font-semibold mb-4`}>
                  Магистратура
                </h3>
                <ul className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {entranceExams.master.general.map((exam, i) => (
                    <li key={`master-exam-${i}`} className="ml-4">{exam}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Admission Dates */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} mt-12 p-6 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Сроки приёма документов
              </h3>
              <ul className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <li className="mb-2">Начало приёма: <span className="font-medium">{admissionDates.start}</span></li>
                <li className="mb-2">Завершение ЕГЭ: <span className="font-medium">{admissionDates.endEge}</span></li>
                <li>Завершение вступительных испытаний: <span className="font-medium">{admissionDates.endExams}</span></li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} mt-12 p-6 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Необходимые документы
              </h3>
              <ul className={`list-disc list-inside ml-4 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {requiredDocuments.map((doc, i) => (
                  <li key={`document-${i}`}>{doc}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <section className="animate-fadeIn">
            <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Контактная информация
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Admissions Office */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} p-5 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
                <h3 className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl font-semibold mb-4`}>
                  Приёмная комиссия
                </h3>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Режим работы:</strong> {contactInfo.mainAdmissions.hours}
                </p>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Адрес:</strong> {contactInfo.mainAdmissions.address}
                </p>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Email:</strong>{' '}
                  <a href={`mailto:${contactInfo.mainAdmissions.email}`} className={darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}>
                    {contactInfo.mainAdmissions.email}
                  </a>
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Телефоны:</strong>
                </p>
                <ul className="ml-4 mt-2">
                  {contactInfo.mainAdmissions.phones.map((phone, i) => (
                    <li key={`main-phone-${i}`} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      <a href={`tel:${phone.replace(/\D/g, '')}`} className={darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}>
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Faculty Info */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'} p-5 rounded-2xl shadow-md border transition-shadow duration-300 hover:shadow-xl`}>
                <h3 className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl font-semibold mb-4`}>
                  Социологический факультет
                </h3>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Адрес:</strong> {contactInfo.faculty.address}
                </p>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Телефон:</strong>{' '}
                  <a href={`tel:${contactInfo.faculty.phone.replace(/\D/g, '')}`} className={darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}>
                    {contactInfo.faculty.phone}
                  </a>
                </p>
                <p className={darkMode ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Email:</strong>{' '}
                  <a href={`mailto:${contactInfo.faculty.email}`} className={darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}>
                    {contactInfo.faculty.email}
                  </a>
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  <strong className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Декан:</strong> {contactInfo.faculty.dean}
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Map Section */}
      <section className="mt-12 animate-fadeInMap delay-300">
        <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Как нас найти
        </h2>
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            title="Google Maps — Самара, ул. Врубеля 29Г"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src=" https://www.google.com/maps?q=Самара, ул. Врубеля 29Г&output=embed"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
            aria-label="Карта с адресом ул. Врубеля 29Г, Самара"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 mt-12 shadow-inner border-t ${
        darkMode ? 'bg-gray-800 text-gray-400 border-gray-700' : 'bg-white text-gray-600 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Социологический факультет. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
