export default function options(): any {
  const startYear = 1920;
  const endYear = new Date().getFullYear() + 2; // 현재 년도 + 2년
  const step = 1; // 십년 단위

  const years = [];
  for (let year = startYear; year <= endYear; year += step) {
    years.push({ label: year, value: year });
  }
  years.reverse();

  return years;
}
