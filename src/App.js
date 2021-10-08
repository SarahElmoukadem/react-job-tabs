import './App.css';
import React, { useState, useEffect } from 'react'
const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(1)


  const fetchData = async () => {
    setLoading(true)
    const data = await fetch(url)
    const response = await data.json()
    // console.log(response);
    setJobs(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <p>
        Loading...
      </p>
    )
  }

  const { title, dates, duties, company } = jobs[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          job Expierence
        </h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>

        <div className="btn-container">
          {
            jobs.map((item, index) => <button
              key={item.id}
              className={`job-btn ${index === value && 'active-btn'}`}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>)
          }
        </div>
        <article className='job-info'>
          <h3>
            {title}
          </h3>

          <h4>
            {company}
          </h4>

          <p className='job-date'>
            {dates}
          </p>

          <div>
            {duties.map((duty, index) => {
              return (
                <div key={index}>
                  {duty}
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;
