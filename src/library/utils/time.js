import * as moment from 'moment'

export const timeFormat = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSSS+-HH:mm'

export const formatTime = (time, format = timeFormat) => {
  return moment(time).format(format)
}

export const parseTime = (time, format = timeFormat, newFormat = timeFormat) => {
  return moment(time, format).format(newFormat)
}
