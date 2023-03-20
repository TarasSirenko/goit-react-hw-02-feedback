import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.Section}>
      <h1 className={s.SectionTitle}>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
