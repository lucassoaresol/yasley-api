import { schoolReturn } from './schoolReturn'

const schoolServerReturn = async (
  schoolServer: {
    school: {
      id: string
    }
  },
  year_id?: string,
  date?: string,
) => {
  const { school } = schoolServer

  const schoolClass = await schoolReturn(
    school.id,
    year_id,
    undefined,
    undefined,
    date,
  )

  return { school: schoolClass }
}

export const schoolServerArrayReturn = async (
  schools: {
    school: {
      id: string
    }
  }[],
  year_id?: string,
  date?: string,
) => {
  const verify = schools.map((el) => {
    return schoolServerReturn(el, year_id, date)
  })

  return Promise.all(verify).then((school) => {
    return school
  })
}
