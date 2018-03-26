/* 格式化日期为本地格式 */
export function toLocalString(d: Date | number | string) {
  try {
    let v = d instanceof Date ? d : new Date(d + '');
    return v.toLocaleDateString();
  } catch (e) {
    return d;
  }
}

/* 初始化日期过滤 */
export function initDateFilter() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDay();
  let date = now.getDate();
  let filters = [0, 1, 7, 30];
  let names = ['TODAY', 'TOMORROW', 'THIS WEEK', 'THIS MONTH'];
  let values = ['today', 'tomrrow', 'week', 'month'];
  return filters.map((v, i) => {
    return {
      start: now.toISOString(),
      end: new Date(year, month, date + v, 23, 59, 59).toISOString(),
      value: values[i],
      name: names[i],
    };
  });
}
